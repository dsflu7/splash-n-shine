export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  previewDescription: string;
  content: string;
  mainImage: {
    url: string;
    alt: string;
  };
  categories: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    image?: string;
  };
  readTime?: number; // estimated reading time in minutes
  featured?: boolean;
}

export interface BlogListItem {
  id: string;
  title: string;
  slug: string;
  previewDescription: string;
  mainImage: {
    url: string;
    alt: string;
  };
  categories: string[];
  publishedAt: string;
  author: {
    name: string;
    image?: string;
  };
  readTime?: number;
  featured?: boolean;
}

export interface BlogSuggestion {
  id: string;
  title: string;
  slug: string;
  previewDescription: string;
  mainImage: {
    url: string;
    alt: string;
  };
  categories: string[];
  publishedAt: string;
  readTime?: number;
}
