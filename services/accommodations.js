import { cache } from 'react';
import { fetchWithFallback } from './api-client';
import { hotelData } from '@/lib/data';

export const getAccommodations = cache(async () => {
  return fetchWithFallback('accommodations', hotelData.accommodations);
});
