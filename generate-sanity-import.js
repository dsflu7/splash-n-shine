// Script to generate Sanity import data from local data files

const fs = require('fs');
const path = require('path');

// Service data from the local file
const services = [
  'full-house-cleaning',
  'roof-cleaning',
  'roof-painting',
  'commercial-cleaning',
  'window-washing',
  'post-construction-cleanup',
  'gutter-cleaning',
  'pressure-washing',
  'house-washing',
  'driveway-pressure-wash',
  'driveway-sealing',
  'concrete-sealing'
];

const serviceData = {
  'full-house-cleaning': {
    title: 'Complete Residential Exterior Cleaning Services for $999 | Vancouver Package',
    shortDescription: 'Professional residential cleaning services in Vancouver & Surrey – Full house exterior cleaning package!',
    description: "Transform your home's exterior with our comprehensive residential cleaning services package for just $999. Our professional cleaning services include house washing to remove dirt and grime, thorough roof cleaning to prevent damage from moss and algae, crystal-clear window washing, complete gutter cleaning to prevent water damage, and powerful pressure washing for driveways and walkways. This residential exterior cleaning package offers exceptional value for homes up to 2500 sqft, combining our most popular cleaning services at a significant discount. As Vancouver's trusted cleaning professionals, we provide eco-friendly exterior cleaning services that restore your home's curb appeal while protecting your investment.",
    images: [
      '/assets/services/full-house-cleaning/1.webp',
      '/assets/services/full-house-cleaning/2.webp',
      '/assets/services/full-house-cleaning/3.webp',
      '/assets/services/full-house-cleaning/4.webp',
    ],
    benefits: [
      'Complete exterior cleaning in one package',
      'Affordable pricing',
      'Expert, eco-friendly service',
      '5-star reviews and trusted quality',
      'Comprehensive property protection',
      'Enhances curb appeal'
    ],
    keyFeatures: [
      'House Soft Wash',
      'Roof Cleaning',
      'Window Washing',
      'Pressure Washing for Driveways & Walkways',
      'Gutter Cleaning'
    ],
    cities: [
      'Surrey',
      'Richmond',
      'Vancouver',
      'Burnaby',
      'Coquitlam',
      'Langley'
    ],
    faqItems: [
      {
        question: 'Who qualifies for the $999 Full House Cleaning Deal?',
        answer: 'This package is available for standard residential homes up to 2500 Sqft. Custom pricing is available for larger properties.'
      },
      {
        question: 'Is your cleaning method safe for all surfaces?',
        answer: 'Yes! We use a combination of soft washing for delicate surfaces (siding, roofs, gutters) and pressure washing for durable surfaces (driveways, patios, sidewalks) to ensure safe and effective cleaning.'
      },
      {
        question: 'How long does the service take?',
        answer: 'Most homes are completed within 3-6 hours, depending on size and surface condition.'
      },
      {
        question: 'Do you service my area?',
        answer: 'We provide exterior cleaning services in Surrey, Richmond, Vancouver, Burnaby, Coquitlam, Langley, and surrounding regions.'
      },
      {
        question: 'Are your cleaning products eco-friendly?',
        answer: 'Yes, we use biodegradable, non-toxic cleaning solutions that are safe for your family, pets, and the environment.'
      }
    ]
  },
  // Add all other services here - truncated for brevity
};

// Generate services NDJSON
function generateServicesNDJSON() {
  const servicesData = [];
  
  services.forEach(serviceId => {
    const service = serviceData[serviceId];
    if (service) {
      const sanityService = {
        _id: `service_${serviceId}`,
        _type: 'service',
        title: service.title,
        slug: {
          _type: 'slug',
          current: serviceId
        },
        shortDescription: service.shortDescription,
        description: service.description,
        images: service.images || [],
        benefits: service.benefits || [],
        keyFeatures: service.keyFeatures || [],
        cities: service.cities || [],
        faqItems: service.faqItems || []
      };
      
      servicesData.push(JSON.stringify(sanityService));
    }
  });
  
  return servicesData.join('\n');
}

// Location data
const locationIds = [
  'north-vancouver',
  'vancouver',
  'coquitlam',
  'burnaby',
  'richmond',
  'delta',
  'new-westminster',
  'surrey',
  'white-rock',
  'langley',
  'abbotsford',
  'port-coquitlam',
  'port-moody',
  'maple-ridge',
  'west-vancouver'
];

const locationsData = {
  'north-vancouver': {
    name: 'North Vancouver',
    faqItems: [
      {
        question: 'How long does a concrete coating installation take?',
        answer: 'Most installations can be completed within 2-3 days, depending on the size and complexity of the project.'
      },
      {
        question: 'Are your coatings suitable for the wet North Vancouver climate?',
        answer: 'Yes, our premium coatings are specially formulated to withstand the rainy conditions of the North Shore, providing excellent moisture resistance.'
      },
      {
        question: 'Do you offer free estimates?',
        answer: 'Absolutely! We provide free on-site consultations and estimates for all our services in North Vancouver and surrounding areas.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.81388963776!2d-123.1351363486536!3d49.32345351472004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866fd300d26b6b%3A0x8e0f4afee044c407!2sNorth%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1686753526543!5m2!1sen!2sca'
  },
  // Add more locations...
};

// Generate locations NDJSON
function generateLocationsNDJSON() {
  const locationsNDJSON = [];
  
  locationIds.forEach(locationId => {
    const location = locationsData[locationId];
    if (location) {
      const sanityLocation = {
        _id: `location_${locationId}`,
        _type: 'location',
        name: location.name,
        slug: {
          _type: 'slug',
          current: locationId
        },
        faqItems: location.faqItems || [],
        mapEmbedUrl: location.mapEmbedUrl || ''
      };
      
      locationsNDJSON.push(JSON.stringify(sanityLocation));
    }
  });
  
  return locationsNDJSON.join('\n');
}

// Landing page data - testimonials and why points
const testimonials = [
  {
    author: 'Sarah L.',
    testimonial: "I couldn't be happier with my new metallic epoxy floor! Luxury Floors transformed my basement into a stunning space that looks like a high-end showroom. The team was professional, detail-oriented, and delivered exactly what they promised. Highly recommend them for anyone looking for premium flooring solutions."
  },
  {
    author: 'David R.',
    testimonial: 'We hired Luxury Floors to upgrade our retail store, and the results were beyond our expectations. The flake epoxy floor not only looks fantastic but is also incredibly durable and easy to clean. Our customers export constantly compliment the sleek and modern design.'
  },
  {
    author: 'Jessica R.',
    testimonial: "Luxury Floors lives up to its name! Their custom metallic floor has completely transformed the look of our home's entryway. The installation process was smooth, and the team was very knowledgeable, answering all our questions. A five-star experience."
  },
  {
    author: 'James P.',
    testimonial: "Our garage floor was in bad shape, and we needed something durable yet attractive. Luxury Floors installed a flake epoxy floor that's both tough and beautiful. It's perfect for heavy use and adds so much value to our property. Thank you for the amazing work."
  },
  {
    author: 'Andrew S.',
    testimonial: 'Top-notch service and quality. My floors look amazing!'
  },
  {
    author: 'Amrit B.',
    testimonial: "Luxury Floors exceeded our expectations with their exceptional craftsmanship and attention to detail. The custom metallic epoxy floor they installed in our living room is a true work of art. It's durable, easy to maintain, and adds a unique touch of elegance to our home. We've already recommended them to friends and family."
  }
];

const whyPoints = [
  {
    title: 'Certified Expertise by Industry Leaders',
    desc: 'Our team is certified and trained by two renowned companies, Leggari (U.S.) and Chromology (Toronto), ensuring the highest standards of epoxy craftsmanship.'
  },
  {
    title: 'Unmatched Quality & Craftsmanship',
    desc: 'We use top-grade materials and meticulous techniques to ensure your floors are as durable as they are beautiful.'
  },
  {
    title: 'Custom Design And Color',
    desc: 'Every project is unique, tailored to meet your vision. From metallic epoxy finishes to textured coatings, our range of premium options brings style and character to your space.'
  },
  {
    title: '25-Year Warranty',
    desc: 'We stand by the longevity and durability of our floors, offering a 25-year warranty for complete peace of mind. With Luxury Floors, you're investing in quality that lasts.'
  },
  {
    title: 'Portfolio of Proven Results',
    desc: 'With an impressive portfolio that showcases our best work, you can see firsthand how Luxury Floors transforms spaces throughout Vancouver. Browse our gallery to discover the possibilities for your next project.'
  }
];

// Generate testimonials NDJSON
function generateTestimonialsNDJSON() {
  const testimonialsNDJSON = [];
  
  testimonials.forEach((testimonial, index) => {
    const sanityTestimonial = {
      _id: `testimonial_${index + 1}`,
      _type: 'testimonial',
      author: testimonial.author,
      testimonial: testimonial.testimonial
    };
    
    testimonialsNDJSON.push(JSON.stringify(sanityTestimonial));
  });
  
  return testimonialsNDJSON.join('\n');
}

// Generate why points NDJSON
function generateWhyPointsNDJSON() {
  const whyPointsNDJSON = [];
  
  whyPoints.forEach((point, index) => {
    const sanityWhyPoint = {
      _id: `whyPoint_${index + 1}`,
      _type: 'whyPoint',
      title: point.title,
      desc: point.desc
    };
    
    whyPointsNDJSON.push(JSON.stringify(sanityWhyPoint));
  });
  
  return whyPointsNDJSON.join('\n');
}

// Create the import directory if it doesn't exist
const importDir = path.join(__dirname, 'sanity-import');
if (!fs.existsSync(importDir)) {
  fs.mkdirSync(importDir);
}

// Write all NDJSON files
fs.writeFileSync(path.join(importDir, 'services.ndjson'), generateServicesNDJSON());
fs.writeFileSync(path.join(importDir, 'locations.ndjson'), generateLocationsNDJSON());
fs.writeFileSync(path.join(importDir, 'testimonials.ndjson'), generateTestimonialsNDJSON());
fs.writeFileSync(path.join(importDir, 'whyPoints.ndjson'), generateWhyPointsNDJSON());

console.log('NDJSON files generated successfully!');
console.log('Files created:');
console.log('- sanity-import/services.ndjson');
console.log('- sanity-import/locations.ndjson');
console.log('- sanity-import/testimonials.ndjson');
console.log('- sanity-import/whyPoints.ndjson');
