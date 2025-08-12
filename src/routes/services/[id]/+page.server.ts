import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { 
  getService, 
  getLocationsList,
  generateServiceMetaTitle,
  generateServiceMetaDescription,
  generateServiceStructuredData,
  generateFAQStructuredData,
  type Service,
  type Location
} from '$lib/server/data.js';

export const load: PageServerLoad = async ({ params, url }) => {
  const service = getService(params.id);
  
  if (!service) {
    throw error(404, `Service "${params.id}" not found`);
  }
  
  const locations = getLocationsList();
  const metaTitle = generateServiceMetaTitle(service);
  const metaDescription = generateServiceMetaDescription(service);
  const serviceStructuredData = generateServiceStructuredData(service, undefined, url.href);
  const faqStructuredData = generateFAQStructuredData(service.faqs);
  
  return {
    service,
    locations,
    metaTitle,
    metaDescription,
    serviceStructuredData,
    faqStructuredData
  };
};
