import { cache } from 'react';
import { fetchWithFallback } from './api-client';
import { hotelData } from '@/lib/data';

export const getFacilities = cache(async () => {
  return fetchWithFallback('facilities', hotelData.facilities);
});
