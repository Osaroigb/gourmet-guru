import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'restaurants' })
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'text', nullable: false })
  address: string;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: false })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: false })
  longitude: number;

  @Column({ type: 'text', nullable: true })
  cuisine: string;

  @Column({ type: 'float', nullable: true })
  rating: number;
}
