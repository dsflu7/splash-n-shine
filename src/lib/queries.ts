// Optimized query for homepage services (limited fields and count)
export const homepageServicesQuery = `*[_type == "service"] | order(_createdAt desc) [0...6] {
  _id,
  title,
  slug,
  shortDescription,
  keyFeatures[0...3]
}`;

// Query for all services (full data for services page)
export const servicesQuery = `*[_type == "service"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  shortDescription,
  description,
  images,
  benefits,
  keyFeatures,
  cities[]-> {
    name,
    slug
  },
  faqItems
}`;

// Query for all projects
export const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  longDescription,
  featuredImage,
  gallery,
  services[]-> {
    title,
    slug
  },
  location-> {
    name,
    slug
  },
  client,
  projectDetails,
  beforeAfter,
  challenges,
  solutions,
  featured,
  status,
  publishedAt
}`;

// Optimized query for featured projects (limited for homepage)
export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(publishedAt desc) [0...4] {
  _id,
  title,
  slug,
  description,
  "imageUrl": featuredImage.asset->url,
  client,
  status
}`;

// Query for all locations
export const locationsQuery = `*[_type == "location"] | order(name asc) {
  _id,
  name,
  slug,
  faqItems,
  mapEmbedUrl
}`;

// Query for why choose us points
export const whyPointsQuery = `*[_type == "whyPoint"] | order(_createdAt asc) {
  _id,
  title,
  desc
}`;

// Query for blog posts
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  image,
  body,
  categories
}`;

// Query for FAQs by category
export const faqsQuery = `*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  category,
  relatedServices[]-> {
    title,
    slug
  },
  relatedLocations[]-> {
    name,
    slug
  },
  featured,
  order
}`;

// Single service query
export const serviceQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  shortDescription,
  description,
  images,
  benefits,
  keyFeatures,
  cities[]-> {
    name,
    slug
  },
  faqItems
}`;

// TypeScript interfaces based on your schema
export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  description: string;
  images?: any[];
  benefits?: string[];
  keyFeatures?: string[];
  cities?: Location[];
  faqItems?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  longDescription?: any[];
  featuredImage?: any;
  imageUrl?: string; // For optimized homepage queries
  gallery?: any[];
  services?: Service[];
  location?: Location;
  client?: {
    name: string;
    type: 'residential' | 'commercial' | 'industrial';
    showName: boolean;
  };
  projectDetails?: {
    startDate?: string;
    completionDate?: string;
    duration?: string;
    squareFootage?: number;
  };
  beforeAfter?: {
    before?: any[];
    after?: any[];
  };
  challenges?: string[];
  solutions?: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  publishedAt: string;
}

export interface Location {
  _id: string;
  name: string;
  slug: { current: string };
  faqItems?: Array<{
    question: string;
    answer: string;
  }>;
  mapEmbedUrl?: string;
}

export interface WhyPoint {
  _id: string;
  title: string;
  desc: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: any;
  body?: any[];
  categories?: string[];
}

export interface FAQ {
  _id: string;
  question: string;
  answer: any[];
  category: 'general' | 'services' | 'pricing' | 'booking' | 'location';
  relatedServices?: Service[];
  relatedLocations?: Location[];
  featured: boolean;
  order: number;
}
