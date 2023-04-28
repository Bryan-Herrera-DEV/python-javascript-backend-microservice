import { baseApi } from './config';

export const getDayEurDollar = async () => {
    const response = await baseApi.get('/scraper/conversions/euro-to-dollar');
    return response.data;
}