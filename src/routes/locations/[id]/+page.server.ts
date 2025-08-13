import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { 
  getLocation, 
  getServicesList,
  generateLocationMetaTitle,
  generateLocationMetaDescription,
  type Service,
  type Location
} from '$lib/server/data.js';

// Disable prerendering to ensure fresh data on navigation
export const prerender = false;

export const load: PageServerLoad = async ({ params, url, depends }) => {
  // Add dependency to ensure data reloads when navigating between locations
  depends('data:location');
  depends(`data:location:${params.id}`);
  
  const location = getLocation(params.id);
  
  if (!location) {
    throw error(404, `Location "${params.id}" not found`);
  }
  
  const services = getServicesList();
  const metaTitle = generateLocationMetaTitle(location);
  const metaDescription = generateLocationMetaDescription(location);
  
  const locationStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Splash & Shine Cleaning Services - ${location.name}`,
    "description": location.description,
    "url": url.href,
    "telephone": "+1-778-804-5911",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": location.province,
      "addressCountry": "CA"
    },
    "areaServed": {
      "@type": "City",
      "name": location.fullName
    },
    "serviceType": services.map(service => service.name)
  };
  
  return {
    location,
    services,
    metaTitle,
    metaDescription,
    locationStructuredData
  };
};
