import { getDistance } from 'geolib';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Like, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

interface FindAllQuery {
  city?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  cuisine?: string;
  rating?: number;
}

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantsRepository: Repository<Restaurant>
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto) : Promise<Restaurant> {
    const newRestaurant = this.restaurantsRepository.create(createRestaurantDto);

    return await this.restaurantsRepository.save(newRestaurant);
  }

  async findAll(query: FindAllQuery) : Promise<Restaurant[]> {
    const { city, latitude, longitude, distance, cuisine, rating } = query;

    // Validate query parameters
    if (city && !this.isValidCity(city)) {
      throw new NotFoundException(`City '${city}' not found`);
    }

    if (latitude === undefined || longitude === undefined) {
      throw new BadRequestException('Invalid or missing latitude/longitude');
    }

    if (distance === undefined || distance < 0) {
      throw new BadRequestException('Invalid or missing distance');
    }

    // Build the query
    const filters: any = {};
    if (city) filters.address = Like(`%${city}%`);
    if (cuisine) filters.cuisine = cuisine;
    if (rating !== undefined) filters.rating = MoreThanOrEqual(rating);

    const restaurants = await this.restaurantsRepository.find({ 
      where: filters,
      select: ['name', 'address', 'latitude', 'longitude', 'cuisine', 'rating']
    });

    // Filter restaurants based on distance from the user's location
    const filteredRestaurants = this.filterByDistance(restaurants, { latitude, longitude, distance });
    return filteredRestaurants;
  }

  async findOne(id: number) : Promise<Restaurant> {
    const restaurant = await this.restaurantsRepository.findOne({
      where: { id },
      select: ['name', 'address', 'latitude', 'longitude', 'cuisine', 'rating']
    });

    if (!restaurant) throw new NotFoundException(`Restaurant with ID ${id} not found`);
    return restaurant;
  }

  async update(id: number, updateRestaurantDto: UpdateRestaurantDto) : Promise<Restaurant> {
    const restaurant = await this.findOne(id);
    if (!restaurant) throw new NotFoundException(`Restaurant with ID ${id} not found`);
    
    await this.restaurantsRepository.update(id, updateRestaurantDto);
    
    // Fetch the updated restaurant after the update operation
    const updatedRestaurant = await this.findOne(id);
    return updatedRestaurant;
  }

  async remove(id: number) : Promise<Restaurant | null> {
    const restaurant = await this.findOne(id);
    if (!restaurant) return null;

    await this.restaurantsRepository.remove(restaurant);
    return restaurant;
  }

  private isValidCity(city: string): boolean {
    const validCities = ['New York', 'Houston'];

    return validCities.includes(city);
  }

  private filterByDistance(restaurants: Restaurant[], userLocation: { latitude: number; longitude: number; distance: number }): Restaurant[] {

    // Filter restaurants based on distance
    const filteredRestaurants = restaurants.filter(restaurant => {

      const restaurantDistance = getDistance(
        { 
          latitude: restaurant.latitude, 
          longitude: restaurant.longitude 
        },
        { 
          latitude: userLocation.latitude, 
          longitude: userLocation.longitude 
        }
      );

      return restaurantDistance <= userLocation.distance;
    });

    return filteredRestaurants;
  }

}
