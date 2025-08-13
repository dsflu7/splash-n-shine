// Blog-related TypeScript interfaces
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  previewDescription: string;
  categories: string[];
  readTime?: number;
  seoKeywords?: string[];
  articleType?: string;
  image?: {
    asset?: {
      _id: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
        };
        lqip?: string;
      };
    };
    alt?: string;
  };
  body?: any[]; // Portable Text content
}

export interface BlogListItem {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  previewDescription: string;
  categories: string[];
  readTime?: number;
  image?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
}

export interface BlogSuggestion {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  previewDescription: string;
  categories: string[];
  readTime?: number;
}