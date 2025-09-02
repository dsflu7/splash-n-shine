<script lang="ts">
  import type { PageData } from "./$types";
  import { Button } from "$lib/components/ui/button";
  import { cn } from "$lib/utils";
  import { generateGalleryStructuredData } from "$lib/seo-utils";
  import BeforeAfterComparison from "$lib/components/BeforeAfterComparison.svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  // Load more functionality
  let itemsToShow = $state(6); // Start with 6 projects
  const itemsPerLoad = 3; // Load 3 more at a time

  // Filter state
  let selectedService = $state("");
  let showCompleted = $state(true);
  let showInProgress = $state(true);
  let showFeatured = $state(false);

  // Filtered projects based on current filters
  const filteredProjects = $derived.by(() => {
    return data.projects.filter((project) => {
      // Service filter
      if (
        selectedService &&
        !project.services?.some((s) => s.slug.current === selectedService)
      ) {
        return false;
      }

      // Status filter
      if (!showCompleted && project.status === "completed") return false;
      if (!showInProgress && project.status === "in-progress") return false;

      // Featured filter
      if (showFeatured && !project.featured) return false;

      return true;
    });
  });

  // Currently visible projects
  const visibleProjects = $derived(filteredProjects.slice(0, itemsToShow));

  // Check if there are more items to load
  const hasMoreItems = $derived(itemsToShow < filteredProjects.length);

  // Load more function
  const loadMore = () => {
    itemsToShow = Math.min(itemsToShow + itemsPerLoad, filteredProjects.length);
  };

  // Reset items when filters change
  const resetItems = () => {
    itemsToShow = 6;
  };

  // Watch for filter changes and reset
  $effect(() => {
    // Watch filter dependencies
    selectedService;
    showCompleted;
    showInProgress;
    showFeatured;
    // Reset when filters change
    resetItems();
  });

  // Generate structured data for SEO
  const structuredData = generateGalleryStructuredData(data.projects);

  // Get all media count for a project
  const getMediaCount = (project: any) => {
    let count = 0;
    if (project.featuredImageUrl) count++;
    if (project.galleryImages?.length) count += project.galleryImages.length;
    if (project.beforeAfterImages?.before?.length)
      count += project.beforeAfterImages.before.length;
    if (project.beforeAfterImages?.after?.length)
      count += project.beforeAfterImages.after.length;
    return count;
  };
</script>

<svelte:head>
  <title>{data.seo.title}</title>
  <meta name="description" content={data.seo.description} />
  <meta name="keywords" content={data.seo.keywords.join(", ")} />
  <link rel="canonical" href="https://www.splashnshine.ca/gallery" />

  <!-- Open Graph -->
  <meta property="og:title" content={data.seo.title} />
  <meta property="og:description" content={data.seo.description} />
  <meta property="og:url" content="https://www.splashnshine.ca/gallery" />
  <meta property="og:type" content="website" />
  {#if data.projects[0]?.featuredImageUrl}
    <meta property="og:image" content={data.projects[0].featuredImageUrl} />
  {/if}

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="min-h-screen bg-background">
  <!-- Hero Section -->
  <section class="relative bg-background py-16">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Our Work Gallery
        </h1>
        <p class="text-lg text-muted-foreground mb-8">
          Explore our complete collection of professional cleaning
          transformations. See detailed before & after comparisons, project
          photos, and videos from our work across Vancouver, BC.
        </p>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {data.stats.total}
            </div>
            <div class="text-sm text-muted-foreground">Projects</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {data.stats.completed}
            </div>
            <div class="text-sm text-muted-foreground">Completed</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {data.stats.featured}
            </div>
            <div class="text-sm text-muted-foreground">Featured</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {data.projects.reduce((acc, p) => acc + getMediaCount(p), 0)}
            </div>
            <div class="text-sm text-muted-foreground">Media Items</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Filters & Controls -->
  <section class="py-8 border-b bg-background">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
      >
        <!-- Filters -->
        <div class="flex flex-wrap gap-3 items-center">
          <span class="text-sm font-medium text-muted-foreground"
            >Filter by:</span
          >

          <!-- Service Filter -->
          <select
            bind:value={selectedService}
            onchange={resetItems}
            class="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Services</option>
            {#each data.filters.services as service}
              <option value={service.slug.current}>{service.title}</option>
            {/each}
          </select>

          <!-- Status Toggles -->
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                bind:checked={showCompleted}
                class="w-4 h-4 text-primary bg-background border-input rounded focus:ring-primary"
              />
              Completed
            </label>
            <label class="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                bind:checked={showInProgress}
                class="w-4 h-4 text-primary bg-background border-input rounded focus:ring-primary"
              />
              In Progress
            </label>
            <label class="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                bind:checked={showFeatured}
                class="w-4 h-4 text-primary bg-background border-input rounded focus:ring-primary"
              />
              Featured Only
            </label>
          </div>
        </div>

        <!-- Results Count -->
        <div class="text-sm text-muted-foreground">
          Showing {visibleProjects.length} of {filteredProjects.length} projects
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Gallery -->
  <section class="py-12">
    <div class="container mx-auto px-4">
      {#if filteredProjects.length === 0}
        <div class="text-center py-16">
          <p class="text-lg text-muted-foreground mb-4">
            No projects found matching your filters.
          </p>
          <Button
            onclick={() => {
              selectedService = "";
              showFeatured = false;
            }}>Reset Filters</Button
          >
        </div>
      {:else}
        <div class="space-y-16">
          {#each visibleProjects as project, index}
            <article
              class="bg-card rounded-xl border shadow-sm overflow-hidden"
            >
              <!-- Project Header -->
              <div
                class="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 border-b"
              >
                <div
                  class="flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <div class="flex items-center gap-3 mb-2">
                      <h2 class="text-2xl font-bold text-foreground">
                        {project.title}
                      </h2>
                      {#if project.featured}
                        <span
                          class="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full"
                        >
                          Featured
                        </span>
                      {/if}
                      <span
                        class={cn(
                          "text-xs font-medium px-2 py-1 rounded-full",
                          project.status === "completed" &&
                            "bg-green-500/20 text-green-700 dark:text-green-300",
                          project.status === "in-progress" &&
                            "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300"
                        )}
                      >
                        {project.status === "in-progress"
                          ? "In Progress"
                          : project.status.charAt(0).toUpperCase() +
                            project.status.slice(1)}
                      </span>
                    </div>
                    <p class="text-muted-foreground mb-3">
                      {project.description}
                    </p>

                    <!-- Services Tags -->
                    {#if project.services && project.services.length > 0}
                      <div class="flex flex-wrap gap-2 mb-3">
                        {#each project.services as service}
                          <span
                            class="text-xs bg-primary text-primary-foreground px-2 py-1 rounded"
                          >
                            {service.title}
                          </span>
                        {/each}
                      </div>
                    {/if}
                  </div>

                  <!-- Project Meta -->
                  <div class="text-right">
                    {#if project.location}
                      <div class="text-sm text-muted-foreground mb-1">
                        📍 {project.location.name}
                      </div>
                    {/if}
                    <div class="text-sm text-muted-foreground mb-2">
                      {new Date(project.publishedAt).toLocaleDateString()}
                    </div>
                    <div class="text-sm font-medium text-primary">
                      {getMediaCount(project)} Media Items
                    </div>
                  </div>
                </div>
              </div>

              <!-- Media Content -->
              <div class="p-6">
                <!-- Featured Image -->
                {#if project.featuredImageUrl}
                  <div class="mb-8">
                    <h3 class="text-lg font-semibold mb-4">Featured Image</h3>
                    <div class="rounded-lg overflow-hidden shadow-md">
                      <img
                        src={project.featuredImageUrl}
                        alt={project.featuredImageAlt || project.title}
                        class="w-full h-[400px] object-cover"
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  </div>
                {/if}

                <!-- Before & After Comparisons -->
                {#if project.beforeAfterImages && (project.beforeAfterImages.before?.length || project.beforeAfterImages.after?.length)}
                  <div class="mb-8">
                    <h3 class="text-lg font-semibold mb-4">Before & After</h3>

                    {#if project.beforeAfterImages?.before?.[0] && project.beforeAfterImages?.after?.[0]}
                      <div class="mb-6">
                        <BeforeAfterComparison
                          class="rounded-lg overflow-hidden"
                        >
                          {#snippet left()}
                            <img
                              class="select-none pointer-events-none w-full h-auto aspect-video object-cover"
                              src={project.beforeAfterImages?.before?.[0]?.url}
                              alt="Before - {project.title}"
                            />
                          {/snippet}
                          {#snippet right()}
                            <img
                              class="select-none pointer-events-none w-full h-auto aspect-video object-cover"
                              src={project.beforeAfterImages?.after?.[0]?.url}
                              alt="After - {project.title}"
                            />
                          {/snippet}
                        </BeforeAfterComparison>
                      </div>
                    {/if}

                    <!-- Additional Before/After Images -->
                    {#if (project.beforeAfterImages.before && project.beforeAfterImages.before.length > 1) || (project.beforeAfterImages.after && project.beforeAfterImages.after.length > 1)}
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Before Images -->
                        {#if project.beforeAfterImages.before && project.beforeAfterImages.before.length > 1}
                          <div>
                            <h4 class="font-medium mb-3 text-muted-foreground">
                              Additional Before Images
                            </h4>
                            <div class="grid grid-cols-2 gap-3">
                              {#each project.beforeAfterImages.before.slice(1) as image}
                                <div
                                  class="relative rounded-lg overflow-hidden aspect-[4/3]"
                                >
                                  <img
                                    src={image.url}
                                    alt={image.alt ||
                                      `Before - ${project.title}`}
                                    class="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                  <div
                                    class="absolute bottom-2 left-2 bg-red-500/90 text-white text-xs px-2 py-1 rounded"
                                  >
                                    BEFORE
                                  </div>
                                </div>
                              {/each}
                            </div>
                          </div>
                        {/if}

                        <!-- After Images -->
                        {#if project.beforeAfterImages.after && project.beforeAfterImages.after.length > 1}
                          <div>
                            <h4 class="font-medium mb-3 text-muted-foreground">
                              Additional After Images
                            </h4>
                            <div class="grid grid-cols-2 gap-3">
                              {#each project.beforeAfterImages.after.slice(1) as image}
                                <div
                                  class="relative rounded-lg overflow-hidden aspect-[4/3]"
                                >
                                  <img
                                    src={image.url}
                                    alt={image.alt ||
                                      `After - ${project.title}`}
                                    class="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                  <div
                                    class="absolute bottom-2 left-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded"
                                  >
                                    AFTER
                                  </div>
                                </div>
                              {/each}
                            </div>
                          </div>
                        {/if}
                      </div>
                    {/if}
                  </div>
                {/if}

                <!-- Gallery Images -->
                {#if project.galleryImages && project.galleryImages.length > 0}
                  <div class="mb-8">
                    <h3 class="text-lg font-semibold mb-4">
                      Project Gallery ({project.galleryImages.length} images)
                    </h3>
                    <div
                      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                      {#each project.galleryImages as image}
                        <div
                          class="rounded-lg overflow-hidden aspect-square group hover:shadow-lg transition-all duration-300"
                        >
                          <img
                            src={image.url}
                            alt={image.alt || `${project.title} gallery image`}
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      {/each}
                    </div>
                  </div>
                {/if}
              </div>
            </article>
          {/each}
        </div>

        <!-- Load More Button -->
        {#if hasMoreItems}
          <div class="text-center mt-12">
            <Button onclick={loadMore} size="lg" class="px-8">
              Load More Projects ({filteredProjects.length - itemsToShow} remaining)
            </Button>
          </div>
        {/if}
      {/if}
    </div>
  </section>

  <!-- CTA Section -->
  <section
    class="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
  >
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
      <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
        Inspired by these transformations? Get your own professional cleaning
        service and join our gallery of satisfied customers across Vancouver.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="secondary"
          size="lg"
          class="bg-white text-primary hover:bg-white/90"
        >
          <a href="/contact" class="flex items-center gap-2">
            <span>🎯</span>
            Get Free Quote
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          class="border-white text-white hover:bg-white/10"
        >
          <a href="/services" class="flex items-center gap-2">
            <span>🧽</span>
            View Services
          </a>
        </Button>
      </div>

      <!-- Call to Action Stats -->
      <div
        class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
      >
        <div class="bg-white/10 rounded-lg p-4">
          <div class="text-2xl font-bold">500+</div>
          <div class="text-sm opacity-90">Happy Customers</div>
        </div>
        <div class="bg-white/10 rounded-lg p-4">
          <div class="text-2xl font-bold">100%</div>
          <div class="text-sm opacity-90">Satisfaction Guarantee</div>
        </div>
        <div class="bg-white/10 rounded-lg p-4">
          <div class="text-2xl font-bold">24h</div>
          <div class="text-sm opacity-90">Response Time</div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  /* Custom styles for the gallery layout */
  .project-card {
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.95);
  }

  .media-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .comparison-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .load-more-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .load-more-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s ease;
  }

  /* Smooth loading animation for new items */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .project-card {
    animation: fadeInUp 0.5s ease-out;
  }

  /* Gallery image hover effects */
  .gallery-image {
    transition: all 0.3s ease;
  }

  .gallery-image:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
</style>
