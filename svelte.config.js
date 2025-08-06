import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		paths: {
			base: '',
			assets: ''
		},
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			concurrency: 10,
			entries: [
				'/',
				'/services',
				'/locations',
				'/gallery',
				'/our-story',
				'/contact',
				'/blog',
				'/privacy-policy',
				'/terms-and-conditions'
			]
		},
		adapter: adapter({
			images: {
				sizes: [480, 640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
				domains: ['splashnshine.ca', 'www.splashnshine.ca', 'comission-splash-n-shine.vercel.app'],
			},
			// Enable ISR for dynamic content
			isr: {
				expiration: 3600, // 1 hour
			}
		})
	}
};

export default config;
