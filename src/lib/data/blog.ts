import type { BlogPost, BlogListItem, BlogSuggestion } from '$lib/types/blog';

// Test data for blog posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Deep Cleaning Your Home',
    slug: 'ultimate-guide-deep-cleaning-home',
    previewDescription: 'Discover professional cleaning techniques that will transform your living space. From kitchen to bathroom, learn the secrets of thorough deep cleaning.',
    content: `
      <h2>Why Deep Cleaning Matters</h2>
      <p>Regular cleaning is essential, but deep cleaning takes your home to the next level. It involves cleaning areas that are often overlooked in daily routines and helps maintain a healthy, fresh environment.</p>
      
      <h2>Getting Started with Deep Cleaning</h2>
      <p>Before you begin, gather all necessary supplies. You'll need microfiber cloths, all-purpose cleaners, disinfectants, and specialized cleaning tools for different surfaces.</p>
      
      <h3>Room-by-Room Approach</h3>
      <p>Start with one room at a time to avoid feeling overwhelmed. Begin with decluttering, then dust from top to bottom, and finish with floors.</p>
      
      <h2>Kitchen Deep Cleaning</h2>
      <p>The kitchen requires special attention due to grease, food particles, and high usage. Clean inside appliances, sanitize countertops, and don't forget about hidden areas like behind the refrigerator.</p>
      
      <h2>Bathroom Essentials</h2>
      <p>Bathrooms harbor bacteria and moisture, making thorough cleaning crucial. Focus on grout, fixtures, and ventilation areas to prevent mold and maintain hygiene.</p>
      
      <h2>Professional Tips</h2>
      <ul>
        <li>Always clean from top to bottom</li>
        <li>Use the right tools for each surface</li>
        <li>Don't mix cleaning chemicals</li>
        <li>Allow proper ventilation</li>
        <li>Take breaks to avoid fatigue</li>
      </ul>
      
      <p>Remember, deep cleaning doesn't have to be done all at once. Schedule different areas throughout the month to maintain a consistently clean home.</p>
    `,
    mainImage: {
      url: '/assets/cleaning-example/deep-clean-living-room.jpg',
      alt: 'Professional deep cleaning of a modern living room'
    },
    categories: ['Deep Cleaning', 'Home Maintenance', 'Professional Tips'],
    publishedAt: '2024-01-15T10:00:00Z',
    createdAt: '2024-01-14T15:30:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    author: {
      name: 'Sarah Johnson',
      image: '/assets/team/sarah-johnson.jpg'
    },
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    title: 'Eco-Friendly Cleaning Solutions for a Greener Home',
    slug: 'eco-friendly-cleaning-solutions-greener-home',
    previewDescription: 'Learn how to clean your home effectively while protecting the environment. Discover natural alternatives to harsh chemicals.',
    content: `
      <h2>The Benefits of Green Cleaning</h2>
      <p>Eco-friendly cleaning products are better for your health, your family, and the environment. They reduce indoor air pollution and minimize exposure to harmful chemicals.</p>
      
      <h2>Natural Cleaning Ingredients</h2>
      <p>Common household items like vinegar, baking soda, and lemon can be powerful cleaning agents when used correctly.</p>
      
      <h3>DIY Cleaning Recipes</h3>
      <p>Create effective cleaners at home using simple ingredients. These solutions are cost-effective and just as powerful as commercial products.</p>
      
      <h2>Making the Switch</h2>
      <p>Transitioning to eco-friendly cleaning doesn't have to be overwhelming. Start by replacing one product at a time and gradually build your green cleaning arsenal.</p>
    `,
    mainImage: {
      url: '/assets/cleaning-example/eco-friendly-supplies.jpg',
      alt: 'Natural eco-friendly cleaning supplies and ingredients'
    },
    categories: ['Eco-Friendly', 'Natural Cleaning', 'Sustainability'],
    publishedAt: '2024-01-10T14:30:00Z',
    createdAt: '2024-01-09T09:15:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    author: {
      name: 'Mike Chen',
      image: '/assets/team/mike-chen.jpg'
    },
    readTime: 6,
    featured: false
  },
  {
    id: '3',
    title: 'Seasonal Cleaning: Spring Cleaning Checklist',
    slug: 'seasonal-cleaning-spring-checklist',
    previewDescription: 'Get ready for spring with our comprehensive cleaning checklist. Refresh your home after winter with these essential tasks.',
    content: `
      <h2>Why Spring Cleaning?</h2>
      <p>Spring cleaning is a tradition that helps refresh your home after the long winter months. It's an opportunity to deep clean, declutter, and prepare for warmer weather.</p>
      
      <h2>Essential Spring Cleaning Tasks</h2>
      <p>Focus on areas that may have been neglected during winter. This includes windows, outdoor spaces, and storage areas.</p>
      
      <h3>Room-by-Room Spring Checklist</h3>
      <ul>
        <li>Clean windows inside and out</li>
        <li>Wash curtains and blinds</li>
        <li>Deep clean carpets and rugs</li>
        <li>Organize closets and storage</li>
        <li>Service HVAC systems</li>
      </ul>
      
      <h2>Decluttering Tips</h2>
      <p>Spring is the perfect time to declutter. Donate items you no longer need and organize what remains for easier maintenance throughout the year.</p>
    `,
    mainImage: {
      url: '/assets/cleaning-example/spring-cleaning.jpg',
      alt: 'Bright, clean home interior ready for spring'
    },
    categories: ['Seasonal Cleaning', 'Spring Cleaning', 'Organization'],
    publishedAt: '2024-01-05T11:00:00Z',
    createdAt: '2024-01-04T16:45:00Z',
    updatedAt: '2024-01-05T11:00:00Z',
    author: {
      name: 'Emily Rodriguez',
      image: '/assets/team/emily-rodriguez.jpg'
    },
    readTime: 5,
    featured: false
  },
  {
    id: '4',
    title: 'Professional Cleaning vs DIY: What You Need to Know',
    slug: 'professional-cleaning-vs-diy-guide',
    previewDescription: 'Understand when to hire professionals and when to tackle cleaning tasks yourself. Make informed decisions for your home cleaning needs.',
    content: `
      <h2>The Value of Professional Cleaning</h2>
      <p>Professional cleaners bring expertise, specialized equipment, and time-saving efficiency to your home cleaning routine.</p>
      
      <h2>When to Choose DIY</h2>
      <p>Daily maintenance and simple cleaning tasks are perfect for DIY. Learn which tasks you can handle yourself and which require professional attention.</p>
      
      <h2>Cost Considerations</h2>
      <p>Compare the costs of professional services versus DIY supplies and your time investment to make the best choice for your situation.</p>
      
      <h2>Finding the Right Balance</h2>
      <p>Many homeowners find success in combining both approaches - handling daily maintenance while scheduling professional deep cleans periodically.</p>
    `,
    mainImage: {
      url: '/assets/cleaning-example/professional-vs-diy.jpg',
      alt: 'Comparison of professional cleaning tools and DIY supplies'
    },
    categories: ['Professional Services', 'DIY Tips', 'Home Maintenance'],
    publishedAt: '2023-12-28T09:15:00Z',
    createdAt: '2023-12-27T13:20:00Z',
    updatedAt: '2023-12-28T09:15:00Z',
    author: {
      name: 'David Wilson',
      image: '/assets/team/david-wilson.jpg'
    },
    readTime: 7,
    featured: false
  }
];

// Convert blog posts to list items for the main page
export const blogListItems: BlogListItem[] = blogPosts.map(post => ({
  id: post.id,
  title: post.title,
  slug: post.slug,
  previewDescription: post.previewDescription,
  mainImage: post.mainImage,
  categories: post.categories,
  publishedAt: post.publishedAt,
  author: post.author,
  readTime: post.readTime,
  featured: post.featured
}));

// Function to get blog suggestions (excluding current post)
export function getBlogSuggestions(currentSlug: string, limit: number = 3): BlogSuggestion[] {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit)
    .map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      previewDescription: post.previewDescription,
      mainImage: post.mainImage,
      categories: post.categories,
      publishedAt: post.publishedAt,
      readTime: post.readTime
    }));
}

// Function to get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
