<script lang="ts">
  import { getBlogSuggestions } from '$lib/data/blog';
  import { Badge } from '$lib/components/ui/badge';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import Link from '$lib/components/Link.svelte';
  import { fadeIn } from '$lib/utils/anims';
  import { page } from '$app/state';
  
  let { children } = $props();
  
  // Get current blog post slug from the page params
  let currentSlug = $derived(page.params.slug);
  
  // Get suggested articles (excluding current one)
  let suggestions = $derived(getBlogSuggestions(currentSlug, 3));
  
  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<!-- Render the main page content -->
{@render children()}

<!-- Related Articles Section -->
{#if suggestions.length > 0}
  <section class="bg-muted/20 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div use:fadeIn>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            More Cleaning
            <span class="text-primary">Insights</span>
          </h2>
          <p class="mt-4 text-lg text-muted-foreground">
            Continue exploring our expert cleaning tips and guides
          </p>
        </div>
        
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {#each suggestions as suggestion (suggestion._id)}
            <div use:fadeIn>
              <Card class="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Link href="/blog/{suggestion.slug.current}" class="block h-full">
                  <CardHeader class="pb-3">
                    <div class="flex flex-wrap gap-1 mb-2">
                      {#each suggestion.categories.slice(0, 2) as category}
                        <Badge variant="outline" class="text-xs">
                          {category}
                        </Badge>
                      {/each}
                    </div>
                    
                    <CardTitle class="text-lg leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {suggestion.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent class="pt-0">
                    <p class="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">
                      {suggestion.previewDescription}
                    </p>
                    
                    <div class="flex items-center justify-between text-xs text-muted-foreground">
                      <time datetime={suggestion.publishedAt}>
                        {formatDate(suggestion.publishedAt)}
                      </time>
                      
                      {#if suggestion.readTime}
                        <span>{suggestion.readTime} min read</span>
                      {/if}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          {/each}
        </div>
        
        <!-- View All Articles Link -->
        <div class="text-center mt-12">
          <Link
            href="/blog"
            class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  </section>
{/if}

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
