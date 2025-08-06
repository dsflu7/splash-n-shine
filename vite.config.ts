import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	
	// Performance optimizations
	build: {
		target: 'es2020',
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				manualChunks: {
					// Simple static chunking to avoid circular dependencies
					'vendor-ui': ['bits-ui'],
					'vendor-icons': ['lucide-svelte'], 
					'vendor-cms': ['@portabletext/svelte'],
					'vendor-analytics': ['@vercel/analytics', '@vercel/speed-insights']
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
