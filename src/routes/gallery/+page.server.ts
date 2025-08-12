import type { PageServerLoad } from './$types';
import { client, type GalleryProject, type GalleryFilters } from '$lib/server/sanity';
import { galleryProjectsQuery, galleryFiltersQuery, filteredGalleryProjectsQuery } from '$lib/server/sanity-queries';
import { mockGalleryProjects, mockGalleryFilters } from '$lib/server/mock-data';
import { error } from '@sveltejs/kit';

// Flag to use mock data when Sanity is not configured
const USE_MOCK_DATA = !process.env.PUBLIC_SANITY_PROJECT_ID || process.env.NODE_ENV === 'development';

export const load: PageServerLoad = async ({ url, setHeaders }) => {
  try {
    // Set cache headers for better performance
    setHeaders({
      'cache-control': 'public, max-age=300, s-maxage=600' // Cache for 5 min (client) / 10 min (CDN)
    });

    // Get filter parameters from URL
    const serviceFilter = url.searchParams.get('service');
    const statusFilter = url.searchParams.get('status');
    const featuredOnly = url.searchParams.get('featured') === 'true';

    let projects: GalleryProject[] = [];
    let filters: GalleryFilters = { services: [], locations: [], statuses: ['completed', 'in-progress'] };

    if (USE_MOCK_DATA) {
      // Use mock data for development/testing
      console.log('Using mock data for gallery');
      
      projects = mockGalleryProjects.filter(project => {
        if (serviceFilter && !project.services?.some(service => service.slug.current === serviceFilter)) {
          return false;
        }
        if (statusFilter && project.status !== statusFilter) {
          return false;
        }
        if (featuredOnly && !project.featured) {
          return false;
        }
        return true;
      });
      
      filters = mockGalleryFilters;
    } else {
      // Fetch from Sanity when configured
      const [projectsResult, filtersResult] = await Promise.all([
        // Get projects with optional filtering
        serviceFilter || statusFilter ? 
          client.fetch(filteredGalleryProjectsQuery, { 
            service: serviceFilter, 
            status: statusFilter, 
            featured: featuredOnly || null 
          }) :
          client.fetch(galleryProjectsQuery),
        
        // Get filter options
        client.fetch(galleryFiltersQuery)
      ]);

      projects = projectsResult || [];
      filters = filtersResult || { services: [], locations: [], statuses: ['completed', 'in-progress'] };
    }

    // Calculate some stats for the page
    const totalProjects = projects.length;
    const featuredProjects = projects.filter(p => p.featured).length;
    const completedProjects = projects.filter(p => p.status === 'completed').length;

    // Group projects by service for better organization
    const projectsByService = projects.reduce((acc, project) => {
      if (project.services) {
        project.services.forEach(service => {
          if (!acc[service.title]) {
            acc[service.title] = [];
          }
          acc[service.title].push(project);
        });
      }
      return acc;
    }, {} as Record<string, GalleryProject[]>);

    return {
      projects,
      filters,
      stats: {
        total: totalProjects,
        featured: featuredProjects,
        completed: completedProjects
      },
      projectsByService,
      currentFilters: {
        service: serviceFilter,
        status: statusFilter,
        featured: featuredOnly
      },
      seo: {
        title: `Project Gallery ${serviceFilter ? `- ${filters.services.find(s => s.slug.current === serviceFilter)?.title || serviceFilter}` : ''} | Splash & Shine`,
        description: `Browse our professional cleaning service projects${serviceFilter ? ` for ${serviceFilter} services` : ''} in Vancouver, BC. See before & after transformations and client results.`,
        keywords: [
          'cleaning projects Vancouver',
          'before after cleaning',
          'pressure washing gallery',
          'window cleaning results',
          'professional cleaning portfolio',
          ...(serviceFilter ? [`${serviceFilter} projects Vancouver`] : [])
        ]
      }
    };

  } catch (err) {
    console.error('Error loading gallery data:', err);
    throw error(500, 'Failed to load gallery data');
  }
};
