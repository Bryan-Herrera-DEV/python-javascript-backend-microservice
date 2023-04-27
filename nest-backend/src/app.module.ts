import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperController } from './scraper/scraper.controller';

@Module({
  imports: [],
  controllers: [AppController, ScraperController],
  providers: [AppService],
})
export class AppModule {}
