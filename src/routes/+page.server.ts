import { client } from '$lib/sanity';
import { 
  featuredProjectsQuery, 
  whyPointsQuery, 
  homepageServicesQuery,
  type Project,
  type WhyPoint,
  type Service
} from '$lib/queries';

export const load = async () => {
  try {
    // SSR: Fetch all content that renders on page load
    const [featuredProjects, whyPoints, services] = await Promise.all([
      client.fetch<Project[]>(featuredProjectsQuery),
      client.fetch<WhyPoint[]>(whyPointsQuery),
      client.fetch<Service[]>(homepageServicesQuery)
    ]);
    
    return {
      featuredProjects,
      whyPoints,
      services
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
