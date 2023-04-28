import { Injectable } from '@nestjs/common';
import { DataDayRepository } from 'src/scraper/domain/data-day/data-day.repository';
import ScraperClient from '../../infraestructure/gRPC/scraper.client';
@Injectable()
export class ScraperAppService {
  constructor(private dataDayRepository: DataDayRepository) {}

  async getEuroToDollar() {
    return new Promise((resolve, reject) => {
      ScraperClient.Scrape({ url: "a" }, (error, response) => {
        if (error) reject(error);
        console.log(response)
        resolve(response);
      });
    });
  }
}
