import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperController } from './scraper/scraper.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataDay } from './scraper/domain/data-day/data-day.entity';
import { ScraperService } from './scraper/scraper.service';
import { ScraperAppService } from './scraper/application/service/scraper-app.service';
import { GetEuroToDollarCommand } from './scraper/application/commands/getEuroToDollar.command';
import { GetEuroToDollarHandler } from './scraper/application/commands/handlers/getEuroToDollar.handler';
import { CqrsModule } from "@nestjs/cqrs";
import { DataDayRepository } from './scraper/domain/data-day/data-day.repository';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'proxima_test.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([DataDay]),
    CqrsModule,
  ],
  controllers: [AppController, ScraperController],
  providers: [
    AppService,
    ScraperService,
    ScraperAppService,
    GetEuroToDollarCommand,
    GetEuroToDollarHandler,
    DataDayRepository
  ],
})
export class AppModule {}
