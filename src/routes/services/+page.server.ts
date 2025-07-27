import { client } from '$lib/sanity';
import { servicesQuery, type Service } from '$lib/queries';

export const load = async () => {
  try {
    const services = await client.fetch<Service[]>(servicesQuery);
    return { services };
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return { services: [] };
  }
};
