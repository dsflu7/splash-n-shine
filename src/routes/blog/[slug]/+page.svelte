<script lang="ts">
  import type { PageData } from './$types';
  import { Badge } from '$lib/components/ui/badge';
  import * as Breadcrumb from '$lib/components/ui/breadcrumb';
  import { fadeIn } from '$lib/utils/anims';
  import { PortableText } from '@portabletext/svelte';
  import { page } from '$app/state';

  let { data }: { data: PageData } = $props();
  
  const domain = $derived(`${page.url.protocol}//${page.url.host}`);
  
  // Truncate title and description for SEO requirements
  const seoTitle = $derived(data.blog.title.length > 50 ? data.blog.title.substring(0, 47) + '...' : data.blog.title);
  const seoDescription = $derived(data.blog.previewDescription.length > 160 ? data.blog.previewDescription.substring(0, 157) + '...' : data.blog.previewDescription);
  
  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>{seoTitle} | Splash n' Shine</title>
  <meta name="description" content={seoDescription} />
  {#if data.blog.seoKeywords}
    <meta name="keywords" content={data.blog.seoKeywords.join(', ')} />
  {/if}
  
  <!-- Open Graph meta tags -->
  <meta property="og:title" content={seoTitle} />
  <meta property="og:description" content={seoDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={`${domain}/blog/${data.blog.slug.current}`} />
  <meta property="og:image" content={data.blog.image?.asset?.url || `${domain}/assets/logo.png`} />
  <meta property="article:published_time" content={data.blog.publishedAt} />
  <meta property="article:author" content="Splash n' Shine" />
  {#if data.blog.categories}
    {#each data.blog.categories as category}
      <meta property="article:tag" content={category} />
    {/each}
  {/if}
  
  <!-- Twitter Card meta tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seoTitle} />
  <meta name="twitter:description" content={seoDescription} />
  <meta name="twitter:image" content={data.blog.image?.asset?.url || `${domain}/assets/logo.png`} />
  
  <link rel="canonical" href={`${domain}/blog/${data.blog.slug.current}`} />
  
  <!-- Structured Data for SEO -->
  {@html `<script type="application/ld+json">${JSON.stringify(data.structuredData)}</script>`}
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
  <!-- Hero Image -->
  {#if data.blog.image?.asset?.url}
    <div class="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] overflow-hidden">
      <img 
        src={data.blog.image.asset.url}
        alt={data.blog.image.alt || data.blog.title}
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  {/if}

  <!-- Article Content -->
  <article class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 {data.blog.image?.asset?.url ? '' : 'mt-24'}">
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
          
          <!-- Render body content from Sanity -->
          {#if data.blog.body && data.blog.body.length > 0}
            <div class="sanity-content prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4 prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3 prose-h3:text-xl prose-h3:mt-5 prose-h3:mb-2 prose-p:mb-4 prose-p:leading-relaxed prose-a:text-primary prose-a:hover:underline prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-6 prose-ul:list-disc prose-ul:list-inside prose-ul:space-y-2 prose-ul:mb-4 prose-ol:list-decimal prose-ol:list-inside prose-ol:space-y-2 prose-ol:mb-4 prose-li:mb-1 prose-strong:font-semibold prose-em:italic">
              <PortableText value={data.blog.body} />
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

<style type="postcss">
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
