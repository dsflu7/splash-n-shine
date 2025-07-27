import type { BlogPost, BlogListItem, BlogSuggestion } from '$lib/types/blog';

// Test data for blog posts
export const blogPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'The Ultimate Guide to Deep Cleaning Your Home',
    slug: { current: 'ultimate-guide-deep-cleaning-home' },
    previewDescription: 'Discover professional cleaning techniques that will transform your living space. From kitchen to bathroom, learn the secrets of thorough deep cleaning.',
    categories: ['Deep Cleaning', 'Home Maintenance', 'Professional Tips'],
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: 8,
    seoKeywords: ['deep cleaning', 'home cleaning', 'professional cleaning tips', 'house cleaning guide'],
    articleType: 'Guide'
  },
  {
    _id: '2',
    title: 'Eco-Friendly Cleaning Solutions for a Greener Home',
    slug: { current: 'eco-friendly-cleaning-solutions-greener-home' },
    previewDescription: 'Learn how to clean your home effectively while protecting the environment. Discover natural alternatives to harsh chemicals.',
    categories: ['Eco-Friendly', 'Natural Cleaning', 'Sustainability'],
    publishedAt: '2024-01-10T14:30:00Z',
    readTime: 6,
    seoKeywords: ['eco-friendly cleaning', 'natural cleaning', 'green cleaning', 'sustainable cleaning'],
    articleType: 'Article'
  },
  {
    _id: '3',
    title: 'Seasonal Cleaning: Spring Cleaning Checklist',
    slug: { current: 'seasonal-cleaning-spring-checklist' },
    previewDescription: 'Get ready for spring with our comprehensive cleaning checklist. Refresh your home after winter with these essential tasks.',
    categories: ['Seasonal Cleaning', 'Spring Cleaning', 'Organization'],
    publishedAt: '2024-01-05T11:00:00Z',
    readTime: 5,
    seoKeywords: ['spring cleaning', 'seasonal cleaning', 'home organization', 'decluttering'],
    articleType: 'Guide'
  },
  {
    _id: '4',
    title: 'Professional Cleaning vs DIY: What You Need to Know',
    slug: { current: 'professional-cleaning-vs-diy-guide' },
    previewDescription: 'Understand when to hire professionals and when to tackle cleaning tasks yourself. Make informed decisions for your home cleaning needs.',
    categories: ['Professional Services', 'DIY Tips', 'Home Maintenance'],
    publishedAt: '2023-12-28T09:15:00Z',
    readTime: 7,
    seoKeywords: ['professional cleaning', 'DIY cleaning', 'cleaning services', 'home maintenance'],
    articleType: 'Article'
  }
];

// Convert blog posts to list items for the main page
export const blogListItems: BlogListItem[] = blogPosts.map(post => ({
  _id: post._id,
  title: post.title,
  slug: post.slug,
  previewDescription: post.previewDescription,
  categories: post.categories,
  publishedAt: post.publishedAt,
  readTime: post.readTime
}));

// Function to get blog suggestions (excluding current post)
export function getBlogSuggestions(currentSlug: string, limit: number = 3): BlogSuggestion[] {
  return blogPosts
    .filter(post => post.slug.current !== currentSlug)
    .slice(0, limit)
    .map(post => ({
      _id: post._id,
      title: post.title,
      slug: post.slug,
      previewDescription: post.previewDescription,
      categories: post.categories,
      publishedAt: post.publishedAt,
      readTime: post.readTime
    }));
}

// Function to get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug.current === slug);
}
