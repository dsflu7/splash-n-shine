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
				manualChunks: {
					// Separate vendor chunks for better caching
					vendor: ['svelte', '@sveltejs/kit'],
					ui: ['bits-ui', 'lucide-svelte']
				}
			}
		}
	},
	
	// Development optimizations
	optimizeDeps: {
		include: ['bits-ui', 'lucide-svelte', 'embla-carousel-svelte']
	},
	
	// CSS optimizations
	css: {
		devSourcemap: false
	}
});
