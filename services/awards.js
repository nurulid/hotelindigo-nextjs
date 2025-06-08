import { cache } from 'react';
import { fetchWithFallback } from './api-client';
import { hotelData } from '@/lib/data';

export const getAwards = cache(async () => {
  return fetchWithFallback('awards', hotelData.awards);
});
