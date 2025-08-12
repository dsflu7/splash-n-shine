import type { GalleryProject, GalleryFilters } from '$lib/server/sanity';

export const mockGalleryProjects: GalleryProject[] = [
  {
    _id: "project-1",
    title: "Luxury Vancouver Home - Complete Exterior Cleaning",
    slug: { current: "luxury-vancouver-home-complete-exterior" },
    description: "Complete exterior transformation of a 4,000 sq ft luxury home in Shaughnessy including pressure washing, window cleaning, and gutter maintenance.",
    featuredImageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    featuredImageAlt: "Before and after of luxury home exterior cleaning",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
        alt: "House exterior after cleaning",
        caption: "Complete transformation"
      },
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        alt: "Driveway pressure washing",
        caption: "Driveway restoration"
      },
      {
        url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
        alt: "Window cleaning detail",
        caption: "Crystal clear windows"
      }
    ],
    beforeAfterImages: {
      before: [
        {
          url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&brightness=-20&contrast=80",
          alt: "House before cleaning - dirty siding and windows"
        }
      ],
      after: [
        {
          url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
          alt: "House after cleaning - pristine exterior"
        }
      ]
    },
    services: [
      {
        title: "House Washing",
        slug: { current: "house-washing" },
        category: "pressure-washing"
      },
      {
        title: "Window Cleaning",
        slug: { current: "window-cleaning" },
        category: "window-cleaning"
      },
      {
        title: "Gutter Cleaning",
        slug: { current: "gutter-cleaning" },
        category: "gutter-cleaning"
      }
    ],
    location: {
      name: "Vancouver",
      slug: { current: "vancouver" }
    },
    client: {
      name: "Private Residence",
      type: "residential",
      showName: false
    },
    status: "completed",
    publishedAt: "2024-03-15T10:00:00.000Z",
    featured: true,
    serviceNames: ["House Washing", "Window Cleaning", "Gutter Cleaning"]
  },
  {
    _id: "project-2",
    title: "Commercial Office Building - Quarterly Maintenance",
    slug: { current: "commercial-office-building-quarterly" },
    description: "Quarterly exterior maintenance for a 15-story office building in downtown Vancouver including all windows, concrete surfaces, and entrance areas.",
    featuredImageUrl: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop",
    featuredImageAlt: "Commercial building exterior cleaning",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop",
        alt: "Office building after cleaning",
        caption: "Professional commercial cleaning"
      },
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        alt: "High-rise window cleaning",
        caption: "Professional window cleaning"
      }
    ],
    beforeAfterImages: {
      before: [
        {
          url: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400&h=300&fit=crop&brightness=-25&contrast=75",
          alt: "Building before cleaning - dirty windows and concrete"
        }
      ],
      after: [
        {
          url: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400&h=300&fit=crop",
          alt: "Building after cleaning - crystal clear windows"
        }
      ]
    },
    services: [
      {
        title: "Commercial Cleaning",
        slug: { current: "commercial-cleaning" },
        category: "commercial"
      },
      {
        title: "Window Cleaning",
        slug: { current: "window-cleaning" },
        category: "window-cleaning"
      },
      {
        title: "Concrete Cleaning",
        slug: { current: "concrete-cleaning" },
        category: "pressure-washing"
      }
    ],
    location: {
      name: "Vancouver",
      slug: { current: "vancouver" }
    },
    client: {
      name: "Pacific Centre Management",
      type: "commercial",
      showName: true
    },
    status: "completed",
    publishedAt: "2024-03-10T14:30:00.000Z",
    featured: true,
    serviceNames: ["Commercial Cleaning", "Window Cleaning", "Concrete Cleaning"]
  },
  {
    _id: "project-3",
    title: "Surrey Townhouse Complex - Full Exterior Renewal",
    slug: { current: "surrey-townhouse-complex-exterior" },
    description: "Complete exterior renewal of a 24-unit townhouse complex including siding, decks, walkways, and all common areas.",
    featuredImageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    featuredImageAlt: "Townhouse complex exterior cleaning",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        alt: "Townhouse complex after cleaning",
        caption: "Complete complex transformation"
      },
      {
        url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
        alt: "Deck cleaning and restoration",
        caption: "Deck restoration"
      }
    ],
    beforeAfterImages: {
      before: [
        {
          url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&brightness=-30&contrast=70",
          alt: "Townhouse complex before - weathered siding and dirty walkways"
        }
      ],
      after: [
        {
          url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
          alt: "Townhouse complex after - fresh and clean appearance"
        }
      ]
    },
    services: [
      {
        title: "House Washing",
        slug: { current: "house-washing" },
        category: "pressure-washing"
      },
      {
        title: "Deck & Fence Cleaning",
        slug: { current: "deck-fence-cleaning" },
        category: "deck-cleaning"
      },
      {
        title: "Concrete Cleaning",
        slug: { current: "concrete-cleaning" },
        category: "pressure-washing"
      }
    ],
    location: {
      name: "Surrey",
      slug: { current: "surrey" }
    },
    client: {
      name: "Residential Complex",
      type: "residential",
      showName: false
    },
    status: "completed",
    publishedAt: "2024-03-05T09:15:00.000Z",
    featured: false,
    serviceNames: ["House Washing", "Deck & Fence Cleaning", "Concrete Cleaning"]
  },
  {
    _id: "project-4",
    title: "Richmond Restaurant - Monthly Deep Clean",
    slug: { current: "richmond-restaurant-monthly-clean" },
    description: "Monthly comprehensive exterior cleaning for a busy restaurant including grease removal, window cleaning, and sidewalk maintenance.",
    featuredImageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    featuredImageAlt: "Restaurant exterior cleaning",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        alt: "Restaurant storefront after cleaning",
        caption: "Clean and inviting storefront"
      }
    ],
    beforeAfterImages: {
      before: [
        {
          url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&brightness=-25&contrast=75",
          alt: "Restaurant before cleaning - grease buildup and dirty windows"
        }
      ],
      after: [
        {
          url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
          alt: "Restaurant after cleaning - spotless and professional"
        }
      ]
    },
    services: [
      {
        title: "Commercial Cleaning",
        slug: { current: "commercial-cleaning" },
        category: "commercial"
      },
      {
        title: "Concrete Cleaning",
        slug: { current: "concrete-cleaning" },
        category: "pressure-washing"
      }
    ],
    location: {
      name: "Richmond",
      slug: { current: "richmond" }
    },
    client: {
      name: "Golden Dragon Restaurant",
      type: "commercial",
      showName: true
    },
    status: "in-progress",
    publishedAt: "2024-03-01T16:45:00.000Z",
    featured: false,
    serviceNames: ["Commercial Cleaning", "Concrete Cleaning"]
  },
  {
    _id: "project-5",
    title: "Burnaby Solar Panel Cleaning - Residential",
    slug: { current: "burnaby-solar-panel-cleaning" },
    description: "Professional solar panel cleaning service for a residential installation, improving efficiency by 15% with our specialized cleaning process.",
    featuredImageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    featuredImageAlt: "Solar panel cleaning service",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
        alt: "Clean solar panels on residential roof",
        caption: "Optimized solar efficiency"
      }
    ],
    beforeAfterImages: {
      before: [
        {
          url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&brightness=-30&contrast=70",
          alt: "Dirty solar panels reducing efficiency"
        }
      ],
      after: [
        {
          url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
          alt: "Clean solar panels maximizing energy production"
        }
      ]
    },
    services: [
      {
        title: "Solar Panel Cleaning",
        slug: { current: "solar-panel-cleaning" },
        category: "specialty"
      }
    ],
    location: {
      name: "Burnaby",
      slug: { current: "burnaby" }
    },
    client: {
      name: "Private Residence",
      type: "residential",
      showName: false
    },
    status: "completed",
    publishedAt: "2024-02-28T11:20:00.000Z",
    featured: true,
    serviceNames: ["Solar Panel Cleaning"]
  },
  {
    _id: "project-6",
    title: "North Vancouver Deck Restoration",
    slug: { current: "north-vancouver-deck-restoration" },
    description: "Complete deck restoration including pressure washing, stain removal, and protective treatment for a beautiful mountain view deck.",
    featuredImageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
    featuredImageAlt: "Deck restoration and cleaning",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
        alt: "Restored deck with mountain view",
        caption: "Beautiful deck restoration"
      }
    ],
    beforeAfterImages: {
      before: [
        {
          url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop&brightness=-35&contrast=65&saturate=70",
          alt: "Weathered deck before restoration"
        }
      ],
      after: [
        {
          url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop",
          alt: "Beautiful restored deck ready for entertaining"
        }
      ]
    },
    services: [
      {
        title: "Deck & Fence Cleaning",
        slug: { current: "deck-fence-cleaning" },
        category: "deck-cleaning"
      }
    ],
    location: {
      name: "North Vancouver",
      slug: { current: "north-vancouver" }
    },
    client: {
      name: "Private Residence",
      type: "residential",
      showName: false
    },
    status: "completed",
    publishedAt: "2024-02-25T13:10:00.000Z",
    featured: false,
    serviceNames: ["Deck & Fence Cleaning"]
  }
];

export const mockGalleryFilters: GalleryFilters = {
  services: [
    {
      title: "House Washing",
      slug: { current: "house-washing" }
    },
    {
      title: "Window Cleaning",
      slug: { current: "window-cleaning" }
    },
    {
      title: "Pressure Washing",
      slug: { current: "pressure-washing" }
    },
    {
      title: "Gutter Cleaning",
      slug: { current: "gutter-cleaning" }
    },
    {
      title: "Roof Cleaning",
      slug: { current: "roof-cleaning" }
    },
    {
      title: "Concrete Cleaning",
      slug: { current: "concrete-cleaning" }
    },
    {
      title: "Deck & Fence Cleaning",
      slug: { current: "deck-fence-cleaning" }
    },
    {
      title: "Solar Panel Cleaning",
      slug: { current: "solar-panel-cleaning" }
    },
    {
      title: "Commercial Cleaning",
      slug: { current: "commercial-cleaning" }
    }
  ],
  locations: [
    {
      name: "Vancouver",
      slug: { current: "vancouver" }
    },
    {
      name: "Surrey",
      slug: { current: "surrey" }
    },
    {
      name: "Burnaby",
      slug: { current: "burnaby" }
    },
    {
      name: "Richmond",
      slug: { current: "richmond" }
    },
    {
      name: "North Vancouver",
      slug: { current: "north-vancouver" }
    },
    {
      name: "Langley",
      slug: { current: "langley" }
    },
    {
      name: "Coquitlam",
      slug: { current: "coquitlam" }
    }
  ],
  statuses: ["completed", "in-progress"]
};
