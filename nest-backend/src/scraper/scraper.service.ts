import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { GetEuroToDollarCommand } from "./application/commands/getEuroToDollar.command";
@Injectable()
export class ScraperService {
    constructor(
        private readonly commandBus: CommandBus,
      ) {}
    async getEuroToDollar() {
        return this.commandBus.execute(new GetEuroToDollarCommand);
    }
}
