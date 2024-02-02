import { IsString, IsNotEmpty, IsNumber, IsOptional, IsLatitude, IsLongitude, Min, Max } from 'class-validator';

export class CreateRestaurantDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @IsLatitude()
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  @IsLongitude()
  longitude: number;

  @IsOptional()
  @IsString()
  cuisine?: string;

  @IsOptional()
  @IsNumber()
  @Min(0.0)
  @Max(5.0)
  rating?: number;
}
