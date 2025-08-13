<script lang="ts">
  import { page } from '$app/stores';
  import Link from '$lib/components/Link.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib/components/ui/accordion';
  import ProcessSteps from '$lib/components/ProcessSteps.svelte';
  import type { Service, Location } from '$lib/server/data.js';
  
  interface ServiceLocationKeywords {
    primaryKeyword: string;
    secondaryKeywords: string[];
    localKeywords: string[];
  }
  
  interface Props {
    data: {
      service: Service;
      location: Location;
      keywords: ServiceLocationKeywords;
      metaTitle: string;
      metaDescription: string;
      serviceStructuredData: any;
      faqStructuredData: any;
    };
  }
  
  let { data }: Props = $props();
  
  const { service, location, keywords, metaTitle, metaDescription, serviceStructuredData, faqStructuredData } = data;
  
  // Get location-specific testimonial if available
  const localTestimonial = location.testimonials?.find((t) => 
    t.service.toLowerCase().includes(service.name.toLowerCase().split(' ')[0])
  ) || location.testimonials?.[0];
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta name="keywords" content={[keywords.primaryKeyword, ...keywords.secondaryKeywords, ...keywords.localKeywords].join(', ')} />
  <link rel="canonical" href={$page.url.href} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:type" content="service" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(serviceStructuredData)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(faqStructuredData)}</script>`}
</svelte:head>

<!-- Breadcrumb Navigation -->
<nav class="container mx-auto px-4 py-4">
  <div class="flex items-center space-x-2 text-sm text-muted-foreground">
    <Link href="/" class="hover:text-foreground">Home</Link>
    <span>/</span>
    <Link href="/services" class="hover:text-foreground">Services</Link>
    <span>/</span>
    <Link href="/services/{service.id}" class="hover:text-foreground">{service.name}</Link>
    <span>/</span>
    <span class="text-foreground font-medium">{location.name}</span>
  </div>
</nav>

<!-- Hero Section -->
<section class="bg-background py-12 lg:py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
        Professional {service.name} in {location.name}, BC
      </h1>
      <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
        Serving {location.name} and surrounding areas with premium {service.name.toLowerCase()} services. 
        {service.shortDescription}
      </p>
      
      <!-- Local Keywords Integration -->
      <div class="bg-background border rounded-lg p-4 mb-8 text-sm">
        <p class="text-muted-foreground">
          <span class="font-semibold text-foreground">Looking for:</span> 
          {keywords.secondaryKeywords.slice(0, 3).join(' • ')} in {location.name}? You've found the right place!
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="default">
          <Link href="/quote" class="flex items-center gap-2 text-primary-foreground">
            Get Free {location.name} Quote
          </Link>
        </Button>
        <Button size="lg" variant="outline">
          <Link href="tel:+1-604-XXX-XXXX" class="flex items-center gap-2">
            Call Now: (604) XXX-XXXX
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Us for This Location -->
<section class="py-16 bg-background">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        Why Choose Our {service.name} Services in {location.name}?
      </h2>
      <div class="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 class="text-2xl font-semibold mb-6 text-foreground">Service Benefits</h3>
          <div class="space-y-4">
            {#each service.benefits.slice(0, 4) as benefit}
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p class="text-muted-foreground leading-relaxed">{benefit}</p>
              </div>
            {/each}
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-6 text-foreground">Local Advantages in {location.name}</h3>
          <div class="space-y-4">
            {#each location.localFeatures.slice(0, 4) as feature}
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <p class="text-muted-foreground leading-relaxed">{feature}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Service Process -->
<ProcessSteps 
  steps={service.process}
  title="Our {service.name} Process in {location.name}"
  subtitle="Delivering professional {service.name.toLowerCase()} services to {location.name} residents with our proven approach"
  variant="vertical"
  showConnectors={true}
  animated={true}
/>

<!-- Service Areas in Location -->
<section class="py-16 bg-background">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        {service.name} Service Areas in {location.name}
      </h2>
      <div class="text-center mb-8">
        <p class="text-xl text-muted-foreground mb-6">
          We provide {service.name.toLowerCase()} services throughout {location.name} and surrounding neighborhoods.
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each location.serviceAreas as area}
          <div class="bg-card rounded-lg border p-4 text-center">
            <div class="flex items-center justify-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-primary"></div>
              <span class="font-medium text-foreground">{area}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Local Testimonial -->
{#if localTestimonial}
<section class="py-16 bg-primary text-primary-foreground">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl lg:text-4xl font-bold mb-8">
        What {location.name} Customers Say
      </h2>
      <div class="bg-primary-foreground/10 rounded-lg p-8 backdrop-blur-sm">
        <div class="flex items-center justify-center mb-6">
          <div class="w-16 h-16 rounded-full bg-primary-foreground text-primary flex items-center justify-center text-xl font-bold">
            {localTestimonial.name.charAt(0)}
          </div>
        </div>
        <blockquote class="text-xl italic mb-6 text-primary-foreground/90">
          "{localTestimonial.text}"
        </blockquote>
        <div class="font-semibold">
          — {localTestimonial.name}, {localTestimonial.location}
        </div>
        <div class="text-sm text-primary-foreground/80">
          {localTestimonial.service}
        </div>
      </div>
    </div>
  </div>
</section>
{/if}

<!-- FAQ Section -->
<section class="py-16 bg-background">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        {service.name} FAQ for {location.name} Residents
      </h2>
      <Accordion type="multiple">
        {#each service.faqs as faq, index}
          <AccordionItem value="item-{index}">
            <AccordionTrigger class="text-left font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent class="text-muted-foreground leading-relaxed">
              {faq.answer}
              {#if index === 0}
                <br><br>
                <em>Note: We proudly serve all areas of {location.name} including {location.serviceAreas.slice(0, 3).join(', ')}, and more.</em>
              {/if}
            </AccordionContent>
          </AccordionItem>
        {/each}
      </Accordion>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-16 bg-primary text-primary-foreground">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl lg:text-4xl font-bold mb-6">
        Ready for {service.name} in {location.name}?
      </h2>
      <p class="text-xl mb-8 text-primary-foreground/90">
        Join your {location.name} neighbors who trust Splash & Shine for professional {service.name.toLowerCase()} services. 
        We're committed to providing same-day quotes and flexible scheduling throughout our service area.
      </p>
      
      <!-- Local SEO keywords integration -->
      <div class="bg-primary-foreground/10 rounded-lg p-4 mb-8 backdrop-blur-sm">
        <p class="text-sm text-primary-foreground/90">
          <span class="font-semibold">Popular searches:</span> 
          {keywords.localKeywords.slice(0, 2).concat([keywords.primaryKeyword]).join(' • ')}
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary">
          <Link href="/quote" class="flex items-center gap-2">
            Get Your Free {location.name} Quote
          </Link>
        </Button>
        <Button size="lg" variant="outline">
          <Link href="tel:+1-604-XXX-XXXX" class="flex items-center gap-2">
            Call (604) XXX-XXXX Now
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>
