import { Injectable } from '@nestjs/common';
import { DataDayRepository } from 'src/scraper/domain/data-day/data-day.repository';
import ScraperClient from '../../infraestructure/gRPC/scraper.client';
import { IDataDay } from 'src/scraper/domain/data-day/data-dat.interface';
import { DataDay } from 'src/scraper/domain/data-day/data-day.entity';
import { makeResponse } from 'src/common/responses/makeResponses';
@Injectable()
export class ScraperAppService {
  constructor(private dataDayRepository: DataDayRepository) {}

  async getEuroToDollar() {
    const executionLogic = new Promise((resolve, reject) => {
      ScraperClient.Scrape({ url: '#' }, async (error, response) => {
        if (error) reject(error);

        const data: IDataDay[] = JSON.parse(response.data);

        const firstSaved = await this.dataDayRepository.findFirstElement();
        if(firstSaved && firstSaved.date === data[0].Date) {
          resolve(data);
          return;
        }

        const dataDayToSave = data.map((dataDay) => {
          const newDataDay = new DataDay();
          newDataDay.date = dataDay.Date;
          newDataDay.high = dataDay.High;
          newDataDay.low = dataDay.Low;
          newDataDay.open = dataDay.Open;
          newDataDay.close = dataDay['Close*'];
          Object.assign(newDataDay, dataDay);
          return newDataDay;
        });

        await this.dataDayRepository.save(dataDayToSave);
        resolve(data);
      });
    });
    return executionLogic
      .then(async () => {
        return makeResponse(await this.dataDayRepository.findAll(), 200, 'OK');
      })
      .catch((error) => {
        return makeResponse(error, 500, 'Internal Server Error');
      });
  }
}
