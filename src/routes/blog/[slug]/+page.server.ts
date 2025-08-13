import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { serverClient } from '$lib/server/sanity';
import { postQuery } from '$lib/queries';
import type { BlogPost } from '$lib/types/blog';

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;

  // Fetch blog post from Sanity
  const blog: BlogPost | null = await serverClient.fetch(postQuery, { slug });

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
