import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetEuroToDollarCommand } from '../getEuroToDollar.command';
import { ScraperAppService } from '../../service/scraper-app.service';

@CommandHandler(GetEuroToDollarCommand)
export class GetEuroToDollarHandler {
  constructor(private readonly scraperAppService: ScraperAppService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(_command: GetEuroToDollarCommand) {
    return await this.scraperAppService.getEuroToDollar();
  }
}
