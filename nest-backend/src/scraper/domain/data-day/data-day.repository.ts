import { EntityRepository, Repository } from 'typeorm';
import { DataDay } from './data-day.entity';

@EntityRepository(DataDay)
export class DataDayRepository extends Repository<DataDay> {}