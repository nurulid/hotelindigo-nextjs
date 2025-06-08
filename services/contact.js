import { cache } from 'react';
import { fetchWithFallback } from './api-client';
import { hotelData } from '@/lib/data';

export const getContact = cache(async () => {
  return fetchWithFallback('contact', hotelData.contact);
});
