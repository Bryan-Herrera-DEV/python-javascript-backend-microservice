import { Injectable } from '@nestjs/common';
import { DataDayRepository } from 'src/scraper/domain/data-day/data-day.repository';
import ScraperClient from '../../infraestructure/gRPC/scraper.client';
import { IDataDay } from 'src/scraper/domain/data-day/data-dat.interface';
@Injectable()
export class ScraperAppService {
  constructor(private dataDayRepository: DataDayRepository) {}

  async getEuroToDollar() {
    const data = new Promise((resolve, reject) => {
      ScraperClient.Scrape({ url: "a" }, (error, response) => {
        if (error) reject(error);
        // respinse.data to json

        const data: IDataDay[] = JSON.parse(response.data);
        console.log(data);

        resolve(data);
      });
    });

    console.log(data)

    return data;
  }
}
