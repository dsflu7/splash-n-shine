// Structured data for homepage - loaded asynchronously
export const homePageStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Splash n' Shine",
  "url": "https://www.splashnshine.ca",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.splashnshine.ca/assets/logo.png"
  },
  "description": "Vancouver's premier exterior cleaning service. We specialize in power washing, soft washing, and roof cleaning throughout the Lower Mainland.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(604) 780-8887",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 49.2827,
      "longitude": -123.1207
    },
    "geoRadius": "50000"
  },
  "services": [
    "Power Washing",
    "House Washing",
    "Roof Cleaning", 
    "Gutter Cleaning",
    "Window Washing",
    "Driveway Cleaning",
    "Deck Cleaning"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  },
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/splashnshine",
    "https://www.instagram.com/splashnshine"
  ]
};

// Function to inject structured data after page load
export function injectStructuredData() {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(homePageStructuredData);
    document.head.appendChild(script);
  }
}
