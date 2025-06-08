export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const isServerSideRendering = () => {
  return typeof window === 'undefined' && process.env.NODE_ENV === 'production';
};

export async function fetchWithFallback(endpoint, staticData) {
  if (isServerSideRendering()) {
    return staticData;
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return staticData;
  }
}
