import { client } from '$lib/sanity';
import { 
  featuredProjectsQuery, 
  whyPointsQuery, 
  homepageServicesQuery,
  type Project,
  type WhyPoint,
  type Service
} from '$lib/queries';

// Enable prerendering and caching
export const prerender = true;

export const load = async () => {
  try {
    // For prerendered pages, we want to return static data
    // or fetch from Sanity if it's configured and fast
    
    // TODO: Enable when Sanity is properly configured and optimized
    // const [featuredProjects, whyPoints, services] = await Promise.all([
    //   client.fetch<Project[]>(featuredProjectsQuery),
    //   client.fetch<WhyPoint[]>(whyPointsQuery),
    //   client.fetch<Service[]>(homepageServicesQuery)
    // ]);
    
    // Return empty data for optimal prerendering performance
    // Homepage content comes from local data files for best performance
    return {
      featuredProjects: [],
      whyPoints: [],
      services: []
    };
  } catch (error) {
    console.error('Failed to fetch homepage data:', error);
    return {
      featuredProjects: [],
      whyPoints: [],
      services: []
    };
  }
};
