import { cache } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

async function fetchData(endpoint) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    next: { revalidate: 3600 }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
  }
  
  return response.json();
}

export const getAccommodations = cache(async () => {
  return fetchData('accommodations');
});

export const getDining = cache(async () => {
  return fetchData('dining');
});

export const getFacilities = cache(async () => {
  return fetchData('facilities');
});

export const getEvents = cache(async () => {
  return fetchData('events');
});

export const getExclusiveOffers = cache(async () => {
  return fetchData('exclusive-offers');
});

export const getContact = cache(async () => {
  return fetchData('contact');
});

export const getAwards = cache(async () => {
  return fetchData('awards');
});
