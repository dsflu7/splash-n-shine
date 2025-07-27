import { client } from '$lib/sanity';

export const serverClient = client.withConfig({
  useCdn: false, // Don't use CDN for server-side for fresh data
  perspective: 'published',
  stega: false,
});
