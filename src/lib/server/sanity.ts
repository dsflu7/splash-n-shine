import { SANITY_API_READ_TOKEN } from '$env/static/private';
import { client } from '$lib/sanity';

export const serverClient = client.withConfig({
  token: SANITY_API_READ_TOKEN,
  useCdn: false, // Don't use CDN for server-side with auth
  perspective: 'published',
  stega: false,
});
