import * as grpc from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { join } from 'path';

const packageDefinition = loadSync(join(__dirname, '../../../../proto/scraper.proto'), {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  
  const scraperProto: any = grpc.loadPackageDefinition(packageDefinition).scraper;
  const ScraperClient = new scraperProto.Scraper(
    'scraper:50051',
    grpc.credentials.createInsecure()
  );
  
  export default ScraperClient;