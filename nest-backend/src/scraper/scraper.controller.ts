import { Controller, Get } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Controller('scraper')
export class ScraperController {
  constructor(private scraperService: ScraperService) {}

  @Get('conversions/euro-to-dollar')
  async getEuroToDollar() {
    return await this.scraperService.getEuroToDollar();
  }
}
