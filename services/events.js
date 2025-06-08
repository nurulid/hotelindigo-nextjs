import { cache } from 'react';
import { fetchWithFallback } from './api-client';
import { hotelData } from '@/lib/data';

export const getEvents = cache(async () => {
  return fetchWithFallback('events', hotelData.events);
});
