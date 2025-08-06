import { dev } from '$app/environment';

// Lazy load analytics to reduce initial bundle size
async function loadAnalytics() {
	if (!dev) {
		// Only load analytics in production
		const [analyticsModule, speedInsightsModule] = await Promise.all([
			import('@vercel/analytics/sveltekit'),
			import('@vercel/speed-insights/sveltekit')
		]);
		
		analyticsModule.injectAnalytics({ mode: 'production' });
		speedInsightsModule.injectSpeedInsights();
	}
}

// Load analytics after a short delay to prioritize initial page load
if (typeof window !== 'undefined') {
	setTimeout(loadAnalytics, 1000);
}
