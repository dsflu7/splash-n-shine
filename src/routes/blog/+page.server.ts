import type { PageServerLoad } from './$types';
import { blogListItems } from '$lib/data/blog';

export const load: PageServerLoad = async () => {
  // Generate structured data for the blog listing page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Splash N Shine Blog",
    "description": "Professional cleaning tips, tricks, and insights from our cleaning experts. Learn how to keep your home spotless with our comprehensive guides.",
    "url": "https://www.splashnshine.ca/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Splash n' Shine",
      "url": "https://www.splashnshine.ca",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.splashnshine.ca/assets/logo.png"
      }
    },
    "blogPost": blogListItems.map(blog => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.previewDescription,
      "url": `https://www.splashnshine.ca/blog/${blog.slug.current}`,
      "datePublished": blog.publishedAt,
      "author": {
        "@type": "Person",
        "name": "Splash n' Shine"
      },
      "keywords": blog.categories.join(', '),
      ...(blog.readTime && { "timeRequired": `PT${blog.readTime}M` })
    })),
    "inLanguage": "en-US",
    "about": {
      "@type": "Thing",
      "name": "Professional Cleaning Services",
      "description": "Exterior cleaning, pressure washing, and property maintenance services in Vancouver"
    }
  };

  return {
    blogs: blogListItems,
    structuredData
  };
};