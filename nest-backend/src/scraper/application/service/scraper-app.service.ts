import { Injectable } from "@nestjs/common";
import { DataDay } from "src/scraper/domain/data-day/data-day.entity";
import { DataDayRepository } from "src/scraper/domain/data-day/data-day.repository";

@Injectable()
export class ScraperAppService {
    constructor(private dataDayRepository: DataDayRepository) {}

    async getEuroToDollar() {
        return "a"
    }
}