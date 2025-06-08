import { cache } from 'react';
import { fetchWithFallback } from './api-client';
import { hotelData } from '@/lib/data';

export const getDining = cache(async () => {
  return fetchWithFallback('dining', hotelData.dining);
});
