import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('data_days')
export class DataDay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: string;

  @Column()
  month: string;

  @Column()
  euroToDollar: number;
}
