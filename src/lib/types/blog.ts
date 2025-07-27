// Unified BlogPost interface - used throughout the entire project
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  previewDescription: string;
  categories: string[];
  readTime?: number;
  seoKeywords?: string[];
  articleType?: 'Article' | 'BlogPosting' | 'NewsArticle' | 'Guide';
  image?: any;
  body?: any[];
}

// Simplified interface for blog listing pages (subset of BlogPost)
export interface BlogListItem {
  _id: string;
  title: string;
  slug: { current: string };
  previewDescription: string;
  categories: string[];
  publishedAt: string;
  readTime?: number;
}

// Interface for related/suggested blog posts
export interface BlogSuggestion {
  _id: string;
  title: string;
  slug: { current: string };
  previewDescription: string;
  categories: string[];
  publishedAt: string;
  readTime?: number;
}
