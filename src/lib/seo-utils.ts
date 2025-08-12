// Utility function to generate structured data for gallery projects
export function generateGalleryStructuredData(projects: any[], domain: string = 'https://www.splashnshine.ca') {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Splash & Shine Project Gallery",
    "description": "Professional cleaning service projects and before/after transformations in Vancouver, BC",
    "url": `${domain}/gallery`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Splash & Shine Cleaning Services",
      "url": domain,
      "@id": `${domain}/#organization`
    },
    "image": projects.slice(0, 10).map(project => ({
      "@type": "ImageObject",
      "url": project.featuredImageUrl,
      "name": project.title,
      "description": project.description,
      "contentUrl": project.featuredImageUrl
    })).filter(img => img.url),
    "mainEntity": projects.map(project => ({
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "url": `${domain}/projects/${project.slug.current}`,
      "image": project.featuredImageUrl,
      "creator": {
        "@type": "Organization",
        "name": "Splash & Shine",
        "@id": `${domain}/#organization`
      },
      "datePublished": project.publishedAt,
      "about": project.services?.map((service: any) => ({
        "@type": "Service",
        "name": service.title
      })) || []
    }))
  };
}
