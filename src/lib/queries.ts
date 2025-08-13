// Export blog-related queries from ee/queries.ts
export { 
  postsQuery, 
  postQuery, 
  generateBlogStructuredData 
} from '../../ee/queries';

// Re-export other queries that might be needed
export {
  homepageServicesQuery,
  servicesQuery,
  projectsQuery,
  featuredProjectsQuery,
  locationsQuery,
  whyPointsQuery,
  faqsQuery,
  serviceQuery
} from '../../ee/queries';

// Export types
export type { 
  Service, 
  Project, 
  Location, 
  WhyPoint, 
  FAQ 
} from '../../ee/queries';