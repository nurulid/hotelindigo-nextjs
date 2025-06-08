import { cache } from 'react';
import { fetchWithFallback } from './api-client';
import { hotelData } from '@/lib/data';

export const getExclusiveOffers = cache(async () => {
  return fetchWithFallback('exclusive-offers', hotelData.exclusiveOffers);
});
