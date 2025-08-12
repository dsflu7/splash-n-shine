// Optimized query for gallery projects with all media
export const galleryProjectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  "featuredImageUrl": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  "galleryImages": gallery[]{
    "url": asset->url,
    "alt": alt,
    "caption": caption,
    "isVideo": isVideo,
    "videoUrl": videoUrl
  },
  "beforeAfterImages": {
    "before": beforeAfter.before[]{
      "url": asset->url,
      "alt": alt
    },
    "after": beforeAfter.after[]{
      "url": asset->url,
      "alt": alt
    }
  },
  services[]-> {
    title,
    slug,
    category
  },
  location-> {
    name,
    slug
  },
  client,
  status,
  publishedAt,
  featured,
  "serviceNames": services[]->title
}`;

// Query for featured gallery projects (homepage)
export const featuredGalleryProjectsQuery = `*[_type == "project" && featured == true] | order(publishedAt desc) [0...8] {
  _id,
  title,
  slug,
  description,
  "featuredImageUrl": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  client,
  status
}`;

// Query for gallery projects with filters
export const filteredGalleryProjectsQuery = `*[_type == "project" && 
  ($service == null || $service in services[]->slug.current) && 
  ($status == null || status == $status) &&
  ($featured == null || featured == $featured)
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  "featuredImageUrl": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  "galleryImages": gallery[]{
    "url": asset->url,
    "alt": alt,
    "caption": caption,
    "isVideo": isVideo,
    "videoUrl": videoUrl
  },
  "beforeAfterImages": {
    "before": beforeAfter.before[]{
      "url": asset->url,
      "alt": alt
    },
    "after": beforeAfter.after[]{
      "url": asset->url,
      "alt": alt
    }
  },
  services[]-> {
    title,
    slug,
    category
  },
  location-> {
    name,
    slug
  },
  client,
  status,
  publishedAt,
  featured,
  "serviceNames": services[]->title
}`;

// Query for gallery filters (services and locations)
export const galleryFiltersQuery = `{
  "services": *[_type == "service"] | order(title asc) {
    title,
    slug
  },
  "locations": *[_type == "location"] | order(name asc) {
    name,
    slug
  },
  "statuses": ["completed", "in-progress"]
}`;
