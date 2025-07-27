<script lang="ts">
  import type { PageData } from './$types';
  import { Badge } from '$lib/components/ui/badge';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import Link from '$lib/components/Link.svelte';
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
  <title>Blog - Splash N Shine</title>
  <meta name="description" content="Discover cleaning tips, tricks, and insights from our professional cleaning experts. Learn how to keep your home spotless with our comprehensive guides." />
  
  <!-- Open Graph meta tags -->
  <meta property="og:title" content="Blog - Splash N Shine" />
  <meta property="og:description" content="Professional cleaning tips, tricks, and insights from our cleaning experts. Learn how to keep your home spotless with our comprehensive guides." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.splashnshine.ca/blog" />
  
  <!-- Structured Data for SEO -->
  {@html `<script type="application/ld+json">${JSON.stringify(data.structuredData)}</script>`}
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20 mt-24">
  <!-- Hero Section -->
  <section class="py-12 sm:py-16 lg:py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Cleaning
          <span class="text-primary">Insights</span>
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Professional tips, seasonal guides, and expert advice to keep your home spotless. 
          Learn from our cleaning professionals and transform your cleaning routine.
        </p>
      </div>
    </div>
  </section>

  <!-- Blog Posts Grid -->
  <section class="pb-16 sm:pb-20 lg:pb-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="space-y-8">
        {#each data.blogs as blog (blog._id)}
          <div use:fadeIn>
            <Card class="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <Link href="/blog/{blog.slug.current}" class="flex flex-col md:flex-row">
                <div class="flex-1">
                  <CardHeader class="pb-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                      {#each blog.categories as category}
                        <Badge variant="secondary" class="text-xs">
                          {category}
                        </Badge>
                      {/each}
                    </div>
                    
                    <CardTitle class="text-xl sm:text-2xl lg:text-3xl leading-tight group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent class="pt-0">
                    <p class="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {blog.previewDescription}
                    </p>
                    
                    <div class="flex items-center justify-between text-sm text-muted-foreground">
                      <div class="flex items-center space-x-4">
                        <span class="font-medium">Splash n' Shine</span>
                        
                        <span>•</span>
                        <time datetime={blog.publishedAt}>
                          {formatDate(blog.publishedAt)}
                        </time>
                        
                        {#if blog.readTime}
                          <span>•</span>
                          <span>{blog.readTime} min read</span>
                        {/if}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Link>
            </Card>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>