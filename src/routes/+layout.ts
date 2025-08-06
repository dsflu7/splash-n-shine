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

// Load analytics after a longer delay to prioritize initial page load and Core Web Vitals
if (typeof window !== 'undefined') {
	// Use idle callback to load analytics when browser is idle
	if ('requestIdleCallback' in window) {
		requestIdleCallback(() => {
			setTimeout(loadAnalytics, 2000);
		});
	} else {
		// Fallback for browsers without requestIdleCallback
		setTimeout(loadAnalytics, 3000);
	}
}
