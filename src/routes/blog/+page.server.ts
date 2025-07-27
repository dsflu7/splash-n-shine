import type { PageServerLoad } from './$types';
import { blogListItems } from '$lib/data/blog';

export const load: PageServerLoad = async () => {
  return {
    blogs: blogListItems
  };
};