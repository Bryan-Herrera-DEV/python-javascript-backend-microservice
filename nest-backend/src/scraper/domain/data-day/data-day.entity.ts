import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('data_days')
export class DataDay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  high: string;

  @Column()
  low: string;

  @Column()
  open: string;

  @Column()
  close: string;
}
