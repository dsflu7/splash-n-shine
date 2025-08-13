<script lang="ts">
  import { page } from '$app/stores';
  import Link from '$lib/components/Link.svelte';
  import { Button } from '$lib/components/ui/button';
  import type { Service, Location } from '$lib/server/data.js';
  
  interface Props {
    data: {
      location: Location;
      services: Service[];
      metaTitle: string;
      metaDescription: string;
      locationStructuredData: any;
    };
  }
  
  let { data }: Props = $props();
  
  const { location, services, metaTitle, metaDescription, locationStructuredData } = data;
  
  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta name="keywords" content={location.localKeywords.join(', ')} />
  <link rel="canonical" href={$page.url.href} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:type" content="website" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(locationStructuredData)}</script>`}
</svelte:head>

<!-- Breadcrumb Navigation -->
<nav class="container mx-auto px-4 py-4">
  <div class="flex items-center space-x-2 text-sm text-muted-foreground">
    <Link href="/" class="hover:text-foreground">Home</Link>
    <span>/</span>
    <Link href="/locations" class="hover:text-foreground">Locations</Link>
    <span>/</span>
    <span class="text-foreground font-medium">{location.name}</span>
  </div>
</nav>

<!-- Hero Section -->
<section class="bg-background py-12 lg:py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl lg:text-5xl font-bold mb-6 text-foreground font-[Cantarell]">
        Professional Cleaning Services in {location.name}, BC
      </h1>
      <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
        {location.description}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
        <div class="bg-background p-4 rounded-lg border border-border hover:border-blue-200/30 hover:shadow-md transition-all duration-300">
          <div class="font-semibold text-foreground">Happy Customers</div>
          <div class="text-primary text-2xl font-bold">300+</div>
          <div class="text-muted-foreground text-xs">Local Homes & Businesses</div>
        </div>
        <div class="bg-background p-4 rounded-lg border border-border hover:border-blue-200/30 hover:shadow-md transition-all duration-300">
          <div class="font-semibold text-foreground">Projects Completed</div>
          <div class="text-primary text-2xl font-bold">1,200+</div>
          <div class="text-muted-foreground text-xs">Successful Services</div>
        </div>
        <div class="bg-background p-4 rounded-lg border border-border hover:border-blue-200/30 hover:shadow-md transition-all duration-300">
          <div class="font-semibold text-foreground">Response Time</div>
          <div class="text-primary text-2xl font-bold">24hrs</div>
          <div class="text-muted-foreground text-xs">Average Quote Response</div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="default" class="hover:scale-105 transition-all duration-300">
          <Link href="/quote" class="flex items-center gap-2 text-primary-foreground">
            Get Free Quote
          </Link>
        </Button>
        <Button size="lg" variant="outline" class="hover:scale-105 hover:border-blue-300/50 transition-all duration-300">
          <Link href="tel:+1-604-XXX-XXXX" class="flex items-center gap-2">
            Call (604) XXX-XXXX
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Services Available -->
<section class="py-16 bg-background">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        Cleaning Services Available in {location.name}
      </h2>
      
      {#each Object.entries(servicesByCategory) as [category, categoryServices]}
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6 text-foreground text-center font-[Cantarell]">{category}</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each categoryServices as service}
              <div class="bg-card rounded-lg border p-6 hover:shadow-lg hover:border-blue-200/30 transition-all duration-300 group">
                <h4 class="font-semibold text-xl mb-3 text-foreground font-[Cantarell] group-hover:text-primary transition-colors duration-300">{service.name}</h4>
                <p class="text-sm text-muted-foreground mb-4 leading-relaxed">{service.shortDescription}</p>
                <div class="flex flex-col gap-3">
                  <Button variant="outline" size="sm" class="w-full hover:border-blue-300/50 transition-colors duration-300">
                    <Link href="/services/{service.id}">
                      Learn More
                    </Link>
                  </Button>
                  <Button size="sm" class="w-full hover:scale-105 transition-all duration-300">
                    <Link href="/{service.id}-{location.id}" class="text-primary-foreground">
                      Get {service.name} in {location.name}
                    </Link>
                  </Button>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Service Areas -->
<section class="py-16 bg-background">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        Areas We Serve in {location.name}
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4 text-foreground">Neighborhoods & Communities</h3>
          <div class="grid grid-cols-1 gap-2">
            {#each location.serviceAreas as area}
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <span class="text-muted-foreground">{area}</span>
              </div>
            {/each}
          </div>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4 text-foreground">Why Choose Us in {location.name}?</h3>
          <div class="space-y-3">
            {#each location.localFeatures as feature}
              <div class="flex items-start space-x-2">
                <div class="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-3 h-3 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p class="text-sm text-muted-foreground leading-relaxed">{feature}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Customer Testimonials -->
{#if location.testimonials && location.testimonials.length > 0}
<section class="py-16 bg-background">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        What {location.name} Customers Say
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each location.testimonials as testimonial}
          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                {testimonial.name.charAt(0)}
              </div>
              <div class="ml-3">
                <div class="font-semibold text-foreground">{testimonial.name}</div>
                <div class="text-sm text-muted-foreground">{testimonial.location} • {testimonial.service}</div>
              </div>
            </div>
            <p class="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
{/if}

<!-- Call to Action -->
<section class="py-16 bg-primary text-primary-foreground">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl lg:text-4xl font-bold mb-6">
        Ready to Experience Premium Cleaning in {location.name}?
      </h2>
      <p class="text-xl mb-8 text-primary-foreground/90">
        Join your neighbors in {location.name} who trust Splash & Shine for all their cleaning needs. 
        We're committed to providing exceptional service throughout the Greater Vancouver area.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary">
          <Link href="/quote" class="flex items-center gap-2">
            Get Your Free {location.name} Quote
          </Link>
        </Button>
        <Button size="lg" variant="outline">
          <Link href="tel:+1-604-XXX-XXXX" class="flex items-center gap-2">
            Call Today: (604) XXX-XXXX
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>
