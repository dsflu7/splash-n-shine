// Lazy-loaded Sanity client
let sanityClient: any = null;

export async function getSanityClient() {
	if (!sanityClient) {
		const { createClient } = await import('@sanity/client');
		const { 
			PUBLIC_SANITY_PROJECT_ID, 
			PUBLIC_SANITY_DATASET, 
			PUBLIC_SANITY_API_VERSION 
		} = await import('$env/static/public');

		sanityClient = createClient({
			projectId: PUBLIC_SANITY_PROJECT_ID,
			dataset: PUBLIC_SANITY_DATASET,
			apiVersion: PUBLIC_SANITY_API_VERSION,
			useCdn: true,
			perspective: 'published',
			stega: false,
		});
	}
	return sanityClient;
}

// Convenience function for queries
export async function sanityFetch(query: string, params?: any) {
	const client = await getSanityClient();
	return client.fetch(query, params);
}
