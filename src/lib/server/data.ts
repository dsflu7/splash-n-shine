import servicesData from './data/services.json';
import locationsData from './data/locations.json';

export interface Service {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  process: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  primaryKeywords: string[];
  secondaryKeywords: string[];
  localKeywords: string[];
}

export interface Location {
  id: string;
  name: string;
  province: string;
  fullName: string;
  isPriority: boolean;
  searchVolume: number;
  description: string;
  serviceAreas: string[];
  localKeywords: string[];
  demographics: {
    population: string;
    medianIncome: string;
    homeOwnership: string;
  };
  localFeatures: string[];
  testimonials: {
    name: string;
    location: string;
    service: string;
    text: string;
  }[];
}

export function getServices(): Record<string, Service> {
  return servicesData;
}

export function getService(id: string): Service | null {
  const services = getServices();
  return services[id] || null;
}

export function getServicesList(): Service[] {
  const services = getServices();
  return Object.values(services);
}

export function getServicesByCategory(): Record<string, Service[]> {
  const services = getServicesList();
  const categories: Record<string, Service[]> = {};
  
  services.forEach(service => {
    if (!categories[service.category]) {
      categories[service.category] = [];
    }
    categories[service.category].push(service);
  });
  
  return categories;
}

export function getLocations(): Record<string, Location> {
  return locationsData;
}

export function getLocation(id: string): Location | null {
  const locations = getLocations();
  return locations[id] || null;
}

export function getLocationsList(): Location[] {
  const locations = getLocations();
  return Object.values(locations);
}

export function getPriorityLocations(): Location[] {
  return getLocationsList().filter(location => location.isPriority);
}

export function getLocationsBySearchVolume(): Location[] {
  return getLocationsList().sort((a, b) => b.searchVolume - a.searchVolume);
}

// Generate SEO-optimized content for service+location combinations
export function getServiceLocationKeywords(serviceId: string, locationId: string): {
  primaryKeyword: string;
  secondaryKeywords: string[];
  localKeywords: string[];
} {
  const service = getService(serviceId);
  const location = getLocation(locationId);
  
  if (!service || !location) {
    return {
      primaryKeyword: '',
      secondaryKeywords: [],
      localKeywords: []
    };
  }
  
  const primaryKeyword = `${service.name.toLowerCase()} ${location.name.toLowerCase()}`;
  
  const secondaryKeywords = [
    `${service.name.toLowerCase()} ${location.fullName.toLowerCase()}`,
    `${service.name.toLowerCase()} near me`,
    `${service.name.toLowerCase()} services ${location.name.toLowerCase()}`,
    `professional ${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `best ${service.name.toLowerCase()} ${location.name.toLowerCase()}`
  ];
  
  const localKeywords = [
    ...service.localKeywords.filter(kw => kw.includes(location.name.toLowerCase())),
    ...location.localKeywords.filter(kw => kw.includes(service.name.toLowerCase().replace('-', ' ')))
  ];
  
  return {
    primaryKeyword,
    secondaryKeywords,
    localKeywords
  };
}

// Generate meta title for service pages
export function generateServiceMetaTitle(service: Service, location?: Location): string {
  const baseTitle = service.name;
  const locationPart = location ? ` in ${location.name}` : '';
  const brandPart = ' | Splash & Shine';
  
  return `${baseTitle}${locationPart} Services${brandPart}`;
}

// Generate meta description for service pages
export function generateServiceMetaDescription(service: Service, location?: Location): string {
  const locationPart = location ? ` in ${location.name}, BC` : ' in Metro Vancouver';
  const keywordPart = location 
    ? service.localKeywords.find(kw => kw.includes(location.name.toLowerCase())) || service.primaryKeywords[0]
    : service.primaryKeywords[0];
  
  return `Professional ${service.name.toLowerCase()} services${locationPart}. ${service.shortDescription}. Contact us for ${keywordPart} - fully insured, satisfaction guaranteed.`;
}

// Generate meta title for location pages  
export function generateLocationMetaTitle(location: Location): string {
  return `Cleaning Services in ${location.name}, BC | Splash & Shine`;
}

// Generate meta description for location pages
export function generateLocationMetaDescription(location: Location): string {
  return `Professional cleaning services in ${location.name}, British Columbia. ${location.description} Call today for a free quote on all our cleaning services.`;
}

// Generate structured data for service pages
export function generateServiceStructuredData(service: Service, location?: Location, url?: string) {
  const locationPart = location ? ` in ${location.name}, BC` : ' in Metro Vancouver';
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name}${locationPart}`,
    "description": service.longDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Splash & Shine Cleaning Services",
      "url": "https://splashandshine.ca",
      "telephone": "+1-604-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location?.name || "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA"
      }
    },
    "areaServed": location ? {
      "@type": "City",
      "name": location.fullName
    } : {
      "@type": "State", 
      "name": "British Columbia"
    },
    "url": url,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    }
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: { question: string; answer: string; }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": faq.answer
      }
    }))
  };
}
