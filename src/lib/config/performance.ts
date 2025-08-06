// Performance configuration for optimal Lighthouse scores
export const performance = {
  // Critical Resource Priorities
  criticalResources: [
    '/assets/logo.png',
    '/assets/landing/1.webp', // Hero image
  ],
  
  // Font optimization
  fonts: {
    // Use font-display: swap for all fonts
    display: 'swap',
    // Preload critical fonts
    preload: [
      'Cantarell-Regular',
      'Alatsi-Regular'
    ]
  },
  
  // Image optimization settings
  images: {
    // Lazy load all images except above-the-fold
    lazyLoad: true,
    // Use modern formats (WebP, AVIF)
    formats: ['avif', 'webp', 'jpg'],
    // Responsive image sizes
    sizes: [480, 640, 828, 1200, 1920, 3840],
    // Quality settings
    quality: {
      hero: 85,      // Higher quality for hero images
      content: 75,   // Standard quality for content images
      thumbnail: 65  // Lower quality for thumbnails
    }
  },
  
  // JavaScript optimization
  javascript: {
    // Defer non-critical scripts
    deferNonCritical: true,
    // Use dynamic imports for code splitting
    dynamicImports: true,
    // Remove unused code
    treeShaking: true
  },
  
  // CSS optimization
  css: {
    // Inline critical CSS
    inlineCritical: true,
    // Purge unused styles
    purgeUnused: true,
    // Minify CSS
    minify: true
  },
  
  // Third-party script optimization
  thirdParty: {
    // Load analytics after page load
    deferAnalytics: true,
    // Use resource hints
    useResourceHints: true
  },
  
  // Core Web Vitals targets
  metrics: {
    LCP: 2.5,    // Largest Contentful Paint (seconds)
    FID: 100,    // First Input Delay (milliseconds)  
    CLS: 0.1,    // Cumulative Layout Shift
    FCP: 1.8,    // First Contentful Paint (seconds)
    TTI: 3.8     // Time to Interactive (seconds)
  }
};

export default performance;
