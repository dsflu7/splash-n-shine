// Service-related interfaces
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  popular: boolean;
  icon: string;
}

export interface ServiceHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface ServicesData {
  services: Service[];
  whyChooseUs: ServiceHighlight[];
  serviceHighlights: ServiceHighlight[];
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
  };
}

// Location-related interfaces
export interface PrimaryServiceArea {
  id: string;
  name: string;
  population: string;
  description: string;
  services: string[];
  image: string;
  href: string;
}

export interface Location {
  name: string;
  href: string;
  population: string;
}

export interface ServiceArea {
  title: string;
  description: string;
  icon: string;
}

export interface WhyLocalItem {
  title: string;
  description: string;
  icon: string;
}

export interface LocationStat {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface LocationsData {
  primaryServiceAreas: PrimaryServiceArea[];
  allLocations: Location[];
  serviceAreas: ServiceArea[];
  whyLocal: WhyLocalItem[];
  locationStats: LocationStat[];
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
  };
}

// Service preview interface for homepage
export interface ServicePreview {
  title: string;
  desc: string;
  icon: string;
  image: string;
  href: string;
  popular?: boolean;
}
