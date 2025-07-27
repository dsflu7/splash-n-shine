<script lang="ts">
  import type { PageData } from './$types';
  import { Badge } from '$lib/components/ui/badge';
  import * as Breadcrumb from '$lib/components/ui/breadcrumb';
  import { fadeIn } from '$lib/utils/anims';

  let { data }: { data: PageData } = $props();
  
  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>{data.blog.title} - Splash N Shine</title>
  <meta name="description" content={data.blog.previewDescription} />
  <meta property="og:title" content={data.blog.title} />
  <meta property="og:description" content={data.blog.previewDescription} />
  <meta property="og:image" content={data.blog.mainImage.url} />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content={data.blog.publishedAt} />
  <meta property="article:author" content={data.blog.author.name} />
  {#each data.blog.categories as category}
    <meta property="article:tag" content={category} />
  {/each}
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
  <!-- Hero Image Section -->
  <section class="relative h-[60vh] w-full overflow-hidden">
    <img
      src={data.blog.mainImage.url}
      alt={data.blog.mainImage.alt}
      class="h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-black/30"></div>
  </section>

  <!-- Article Content -->
  <article class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
            <span class="font-medium text-foreground">{data.blog.author.name}</span>
            
            <span>•</span>
            <time datetime={data.blog.publishedAt} class="text-sm">
              {formatDate(data.blog.publishedAt)}
            </time>
            
            {#if data.blog.readTime}
              <span>•</span>
              <span class="text-sm">{data.blog.readTime} min read</span>
            {/if}
          </div>
          
          {#if data.blog.featured}
            <Badge variant="default" class="text-sm">
              Featured Article
            </Badge>
          {/if}
        </div>
      </header>
      
      <!-- Article Body -->
      <div class="prose prose-lg prose-neutral dark:prose-invert max-w-none">
        <div class="text-lg leading-8 text-justify">
          {@html data.blog.content}
        </div>
      </div>
      
      <!-- Article Footer -->
      <footer class="mt-12 pt-8 border-t border-border">
        <div class="text-center text-muted-foreground text-sm">
          <p>Published on {formatDate(data.blog.publishedAt)} by {data.blog.author.name}</p>
          {#if data.blog.updatedAt && data.blog.updatedAt !== data.blog.publishedAt}
            <p class="mt-1">Last updated: {formatDate(data.blog.updatedAt)}</p>
          {/if}
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
