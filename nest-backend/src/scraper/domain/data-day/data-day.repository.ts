import { Repository } from 'typeorm';
import { DataDay } from './data-day.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class DataDayRepository {
  constructor(
    @InjectRepository(DataDay)
    private dataDayRepository: Repository<DataDay>,
  ) {}

  async save(data: DataDay[]) {
    await this.dataDayRepository.save(data);
  }

  async findAll(): Promise<DataDay[]> {
    return await this.dataDayRepository.find(
        { order: { date: 'DESC' } },
    );
  }
}
