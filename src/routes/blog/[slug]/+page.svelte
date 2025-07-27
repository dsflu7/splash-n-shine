<script lang="ts">
  import type { PageData } from './$types';
  import type { BlogPost } from '$lib/types/blog';
  import { Badge } from '$lib/components/ui/badge';
  import * as Breadcrumb from '$lib/components/ui/breadcrumb';
  import { fadeIn } from '$lib/utils/anims';
  import { page } from '$app/state';

  let { data }: { data: PageData } = $props();
  
  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Generate structured data for SEO
  function generateStructuredData(blog: BlogPost) {
    const domain = `${page.url.protocol}//${page.url.host}`;
    const articleUrl = `${domain}/blog/${blog.slug.current}`;
    
    // Calculate word count from body content if available
    const calculateWordCount = (body: any[]): number => {
      if (!body || !Array.isArray(body)) return 0;
      
      return body.reduce((count, block) => {
        if (block._type === 'block' && block.children) {
          const blockText = block.children
            .filter((child: any) => child._type === 'span' && child.text)
            .map((child: any) => child.text)
            .join(' ');
          return count + blockText.split(/\s+/).filter((word: string) => word.length > 0).length;
        }
        return count;
      }, 0);
    };

    const wordCount = calculateWordCount(blog.body || []);
    
    return {
      "@context": "https://schema.org",
      "@type": blog.articleType || "BlogPosting",
      "headline": blog.title,
      "description": blog.previewDescription,
      "datePublished": blog.publishedAt,
      "dateModified": blog.publishedAt,
      "author": {
        "@type": "Person",
        "name": "Splash n' Shine"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Splash n' Shine",
        "logo": {
          "@type": "ImageObject",
          "url": `${domain}/assets/logo.png`
        }
      },
      "url": articleUrl,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": articleUrl
      },
      "articleSection": blog.categories.join(', '),
      "keywords": blog.seoKeywords?.join(', ') || blog.categories.join(', '),
      ...(blog.readTime && { "timeRequired": `PT${blog.readTime}M` }),
      ...(wordCount > 0 && { "wordCount": wordCount }),
      "abstract": blog.previewDescription,
      "inLanguage": "en-US",
      "copyrightYear": new Date(blog.publishedAt).getFullYear(),
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Splash n' Shine"
      },
      "mentions": blog.categories.map((category: string) => ({
        "@type": "Thing",
        "name": category
      }))
    };
  }

  let structuredData = $derived(generateStructuredData(data.blog));
</script>

<svelte:head>
  <title>{data.blog.title} - Splash N Shine</title>
  <meta name="description" content={data.blog.previewDescription} />
  <meta property="og:title" content={data.blog.title} />
  <meta property="og:description" content={data.blog.previewDescription} />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content={data.blog.publishedAt} />
  <meta property="article:author" content="Splash n' Shine" />
  {#if data.blog.seoKeywords}
    <meta name="keywords" content={data.blog.seoKeywords.join(', ')} />
  {/if}
  {#each data.blog.categories as category}
    <meta property="article:tag" content={category} />
  {/each}
  
  <!-- Structured Data for SEO -->
  {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
  <!-- Article Content -->
  <article class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-24">
    <div use:fadeIn>
      <!-- Breadcrumbs -->
      <div class="mb-8">
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/blog">Blog</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>{data.blog.title}</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>

      <!-- Article Header -->
      <header class="mb-12">
        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mb-6">
          {#each data.blog.categories as category}
            <Badge variant="secondary" class="text-sm">
              {category}
            </Badge>
          {/each}
        </div>
        
        <!-- Title -->
        <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
          {data.blog.title}
        </h1>
        
        <!-- Article Meta -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-muted-foreground text-sm space-y-4 sm:space-y-0">
          <div class="flex items-center space-x-4">
            <span class="font-medium text-foreground">Splash n' Shine</span>
            
            <span>•</span>
            <time datetime={data.blog.publishedAt} class="text-sm">
              {formatDate(data.blog.publishedAt)}
            </time>
            
            {#if data.blog.readTime}
              <span>•</span>
              <span class="text-sm">{data.blog.readTime} min read</span>
            {/if}
          </div>
          
          {#if data.blog.articleType}
            <Badge variant="default" class="text-sm">
              {data.blog.articleType}
            </Badge>
          {/if}
        </div>
      </header>
      
      <!-- Article Body -->
      <div class="prose prose-lg prose-neutral dark:prose-invert max-w-none">
        <div class="text-lg leading-8 text-justify">
          <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
            {data.blog.previewDescription}
          </p>
          
          <!-- If we have body content from Sanity, render it -->
          {#if data.blog.body && data.blog.body.length > 0}
            <div class="sanity-content">
              <!-- This would need a Sanity portable text renderer -->
              <p class="text-muted-foreground italic">Full content from Sanity CMS would be rendered here...</p>
            </div>
          {:else}
            <!-- Fallback content for demo -->
            <div class="space-y-6">
              <p>
                This article provides comprehensive insights into the topic of {data.blog.title.toLowerCase()}. 
                Our expert team has compiled valuable information to help you understand and implement effective strategies.
              </p>
              
              <h2>Key Points</h2>
              <ul class="list-disc list-inside space-y-2">
                {#each data.blog.categories as category}
                  <li>Understanding {category.toLowerCase()} best practices</li>
                {/each}
                <li>Professional tips and techniques</li>
                <li>Step-by-step implementation guide</li>
              </ul>
              
              <h2>Professional Insights</h2>
              <p>
                At Splash n' Shine, we believe in sharing our expertise to help you achieve the best results. 
                This guide covers everything you need to know about {data.blog.title.toLowerCase()}.
              </p>
              
              <h2>Conclusion</h2>
              <p>
                {data.blog.previewDescription} For more detailed information and professional services, 
                don't hesitate to contact our expert team.
              </p>
            </div>
          {/if}
        </div>
      </div>
      
      <!-- Article Footer -->
      <footer class="mt-12 pt-8 border-t border-border">
        <div class="text-center text-muted-foreground text-sm">
          <p>Published on {formatDate(data.blog.publishedAt)} by Splash n' Shine</p>
        </div>
      </footer>
    </div>
  </article>
</div>

<style>
  /* Enhanced prose styling for better readability */
  :global(.prose h2) {
    @apply text-2xl font-bold mt-8 mb-4 text-foreground;
  }
  
  :global(.prose h3) {
    @apply text-xl font-semibold mt-6 mb-3 text-foreground;
  }
  
  :global(.prose p) {
    @apply mb-4 leading-relaxed text-justify;
  }
  
  :global(.prose ul) {
    @apply mb-4 pl-6;
  }
  
  :global(.prose li) {
    @apply mb-2;
  }
  
  :global(.prose strong) {
    @apply font-semibold text-foreground;
  }
  
  :global(.prose em) {
    @apply italic;
  }
  
  :global(.prose a) {
    @apply text-primary hover:text-primary/80 underline;
  }
  
  :global(.prose blockquote) {
    @apply border-l-4 border-primary pl-4 italic text-muted-foreground;
  }
  
  :global(.prose code) {
    @apply bg-muted px-1 py-0.5 rounded text-sm font-mono;
  }
  
  :global(.prose pre) {
    @apply bg-muted p-4 rounded-lg overflow-x-auto;
  }
  
  :global(.prose img) {
    @apply rounded-lg shadow-md;
  }
</style>
