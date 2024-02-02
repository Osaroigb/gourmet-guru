import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException, NotFoundException } from '@nestjs/common';

@Controller('v1/restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  async findAll(
    @Query('city') city: string,
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
    @Query('distance') distance: number,
    @Query('cuisine') cuisine: string,
    @Query('rating') rating: number,
  ) {
    try {
      const restaurants = await this.restaurantsService.findAll({ city, latitude, longitude, distance, cuisine, rating });
      
      return { restaurants };
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }

      throw new BadRequestException('Invalid query parameters');
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantsService.update(+id, updateRestaurantDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedRestaurant = await this.restaurantsService.remove(+id);

    if (deletedRestaurant) {
      return { response: 'Restaurant deleted', restaurant: deletedRestaurant };
    } else {
      return { response: 'Restaurant not found' };
    }
  }
}
