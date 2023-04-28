import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperController } from './scraper/scraper.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataDay } from './scraper/domain/data-day/data-day.entity';
import { ScraperService } from './scraper/scraper.service';
import { ScraperAppService } from './scraper/application/service/scraper-app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'proxima_test.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([DataDay]),
  ],
  controllers: [AppController, ScraperController],
  providers: [AppService, ScraperService, ScraperAppService],
})
export class AppModule {}
