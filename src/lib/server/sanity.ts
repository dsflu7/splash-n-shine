import { createClient } from '@sanity/client';
import { 
  PUBLIC_SANITY_PROJECT_ID, 
  PUBLIC_SANITY_DATASET, 
  PUBLIC_SANITY_API_VERSION 
} from '$env/static/public';

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: PUBLIC_SANITY_API_VERSION,
  useCdn: true, // Enable CDN for better performance
  perspective: 'published', // Only fetch published content
  stega: false, // Disable preview mode for production
});

// TypeScript interfaces for gallery
export interface GalleryProject {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  featuredImageUrl?: string;
  featuredImageAlt?: string;
  galleryImages?: Array<{
    url: string;
    alt?: string;
    caption?: string;
    isVideo?: boolean;
    videoUrl?: string;
  }>;
  beforeAfterImages?: {
    before?: Array<{
      url: string;
      alt?: string;
    }>;
    after?: Array<{
      url: string;
      alt?: string;
    }>;
  };
  services?: Array<{
    title: string;
    slug: { current: string };
    category?: string;
  }>;
  location?: {
    name: string;
    slug: { current: string };
  };
  client?: {
    name: string;
    type: 'residential' | 'commercial' | 'industrial';
    showName: boolean;
  };
  status: 'completed' | 'in-progress' | 'planned';
  publishedAt: string;
  featured: boolean;
  serviceNames?: string[];
}

export interface GalleryFilters {
  services: Array<{
    title: string;
    slug: { current: string };
  }>;
  locations: Array<{
    name: string;
    slug: { current: string };
  }>;
  statuses: string[];
}
