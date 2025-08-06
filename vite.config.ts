import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	
	base: '/',
	
	// Performance optimizations
	build: {
		target: 'es2020',
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Conservative chunking to avoid circular dependencies
					
					// Large UI library that's used across the app
					if (id.includes('bits-ui')) {
						return 'vendor-ui';
					}
					
					// Analytics - can be lazy loaded
					if (id.includes('@vercel/analytics') || id.includes('@vercel/speed-insights')) {
						return 'vendor-analytics';
					}
					
					// CMS components - only used in blog
					if (id.includes('@portabletext') || id.includes('@sanity/client')) {
						return 'vendor-cms';
					}
					
					// Icons are large and cacheable
					if (id.includes('lucide-svelte') || id.includes('@lucide') || id.includes('svelte-radix')) {
						return 'vendor-icons';
					}
				}
			}
		}
	},
	
	// Development optimizations
	optimizeDeps: {
		include: ['bits-ui', 'lucide-svelte', 'embla-carousel-svelte', 'runed', '@internationalized/date']
	},
	
	// CSS optimizations
	css: {
		devSourcemap: false
	}
});
