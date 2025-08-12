import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { 
  getService, 
  getLocation,
  getServiceLocationKeywords,
  generateServiceMetaTitle,
  generateServiceMetaDescription,
  generateServiceStructuredData,
  generateFAQStructuredData,
  type Service,
  type Location
} from '$lib/server/data.js';

export const load: PageServerLoad = async ({ params, url }) => {
  // Parse the combined service-location slug
  const slug = params.slug;
  const parts = slug.split('-');
  
  // Find the split point - service IDs have hyphens, so we need to be smart about parsing
  let serviceId = '';
  let locationId = '';
  
  // Try different combinations to find valid service and location
  for (let i = 1; i < parts.length; i++) {
    const potentialServiceId = parts.slice(0, i).join('-');
    const potentialLocationId = parts.slice(i).join('-');
    
    const service = getService(potentialServiceId);
    const location = getLocation(potentialLocationId);
    
    if (service && location) {
      serviceId = potentialServiceId;
      locationId = potentialLocationId;
      break;
    }
  }
  
  const service = getService(serviceId);
  const location = getLocation(locationId);
  
  if (!service || !location) {
    throw error(404, `Service-location combination "${slug}" not found`);
  }
  
  const keywords = getServiceLocationKeywords(serviceId, locationId);
  const metaTitle = generateServiceMetaTitle(service, location);
  const metaDescription = generateServiceMetaDescription(service, location);
  const serviceStructuredData = generateServiceStructuredData(service, location, url.href);
  const faqStructuredData = generateFAQStructuredData(service.faqs);
  
  return {
    service,
    location,
    keywords,
    metaTitle,
    metaDescription,
    serviceStructuredData,
    faqStructuredData
  };
};
