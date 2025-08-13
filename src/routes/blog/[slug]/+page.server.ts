import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { serverClient } from '$lib/server/sanity';
import { postQuery } from '$lib/queries';
import type { BlogPost } from '$lib/types/blog';

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  let blog: BlogPost | null = null;

  try {
    // Fetch blog post from Sanity
    blog = await serverClient.fetch(postQuery, { slug });
  } catch (error) {
    console.log('Using mock blog data since Sanity is not configured');
    // Fallback to mock data for development
    const mockBlogs: Record<string, BlogPost> = {
      'ultimate-guide-pressure-washing': {
        _id: 'mock-1',
        title: 'Ultimate Guide to Pressure Washing Your Home',
        slug: { current: 'ultimate-guide-pressure-washing' },
        publishedAt: '2024-01-15T10:00:00Z',
        previewDescription: 'Learn the professional techniques for safely pressure washing your home exterior. Our expert tips will help you achieve spotless results while protecting your property.',
        categories: ['Pressure Washing', 'Home Maintenance', 'DIY Tips'],
        readTime: 8,
        seoKeywords: ['pressure washing', 'home cleaning', 'exterior maintenance'],
        articleType: 'Guide',
        image: {
          asset: {
            _id: 'mock-image-1',
            url: '/assets/blog/pressure-washing-guide.jpg',
            metadata: {
              dimensions: { width: 800, height: 400 },
              lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
            }
          },
          alt: 'Professional pressure washing a home exterior'
        },
        body: []
      },
      'seasonal-gutter-cleaning-guide': {
        _id: 'mock-2', 
        title: 'Seasonal Gutter Cleaning: When and How to Clean Your Gutters',
        slug: { current: 'seasonal-gutter-cleaning-guide' },
        publishedAt: '2024-01-10T09:00:00Z',
        previewDescription: 'Discover the best times to clean your gutters and learn professional techniques to maintain proper drainage and protect your home from water damage.',
        categories: ['Gutter Cleaning', 'Seasonal Maintenance', 'Home Care'],
        readTime: 6,
        seoKeywords: ['gutter cleaning', 'seasonal maintenance', 'home protection'],
        articleType: 'Guide',
        body: []
      },
      'professional-window-washing-techniques': {
        _id: 'mock-3',
        title: 'Window Washing Like a Pro: Tools and Techniques',
        slug: { current: 'professional-window-washing-techniques' },
        publishedAt: '2024-01-05T14:30:00Z',
        previewDescription: 'Master the art of streak-free window cleaning with professional tools and techniques. Transform your view with crystal clear windows.',
        categories: ['Window Cleaning', 'Professional Tips', 'Tools'],
        readTime: 5,
        seoKeywords: ['window cleaning', 'streak-free windows', 'cleaning tools'],
        articleType: 'Tutorial',
        body: []
      }
    };
    
    blog = mockBlogs[slug] || null;
  }

  if (!blog) {
    throw error(404, 'Blog post not found');
  }

  // Generate structured data for the individual blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.previewDescription,
    "url": `https://www.splashnshine.ca/blog/${blog.slug.current}`,
    "datePublished": blog.publishedAt,
    "author": {
      "@type": "Person",
      "name": "Splash n' Shine"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Splash n' Shine",
      "url": "https://www.splashnshine.ca",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.splashnshine.ca/assets/logo.png"
      }
    },
    "keywords": blog.categories?.join(', ') || '',
    ...(blog.readTime && { "timeRequired": `PT${blog.readTime}M` }),
    "inLanguage": "en-US",
    "about": {
      "@type": "Thing",
      "name": "Professional Cleaning Services",
      "description": "Exterior cleaning, pressure washing, and property maintenance services in Vancouver"
    }
  };

  return {
    blog,
    structuredData
  };
};
