import type { PageLoad } from './$types';
import { getBlogPost } from '$lib/data/blog';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  const blog = getBlogPost(params.slug);
  
  if (!blog) {
    throw error(404, 'Blog post not found');
  }
  
  return {
    blog
  };
};
