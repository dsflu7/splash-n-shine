<script lang="ts">
  import { page } from '$app/stores';
  import Link from '$lib/components/Link.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib/components/ui/accordion';
  import BeforeAfterComparison from '$lib/components/BeforeAfterComparison.svelte';
  import ProcessSteps from '$lib/components/ProcessSteps.svelte';
  import type { Service, Location } from '$lib/server/data.js';
  
  interface Props {
    data: {
      service: Service;
      locations: Location[];
      metaTitle: string;
      metaDescription: string;
      serviceStructuredData: any;
      faqStructuredData: any;
    };
  }
  
  let { data }: Props = $props();
  
  const { service, locations, metaTitle, metaDescription, serviceStructuredData, faqStructuredData } = data;
  const primaryAreas = locations.slice(0, 6); // Show top 6 service areas
  
  // Sample before/after images - in production, these would come from the service data
  const beforeAfterExamples = [
    {
      beforeImage: `/assets/before-after/${service.id}-before-1.webp`,
      afterImage: `/assets/before-after/${service.id}-after-1.webp`,
      title: `${service.name} Results`,
      altText: `Professional ${service.name.toLowerCase()} transformation`
    }
  ];
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta name="keywords" content={service.primaryKeywords.concat(service.secondaryKeywords).join(', ')} />
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
    <span class="text-foreground font-medium">{service.name}</span>
  </div>
</nav>

<!-- Hero Section -->
<section class="bg-primary/5 py-12 lg:py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
        Professional {service.name} Services
      </h1>
      <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
        {service.longDescription}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="default">
          <Link href="/quote" class="flex items-center gap-2 text-primary-foreground">
            Get Free Quote
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

<!-- Service Benefits -->
<section class="py-16 bg-background">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        Why Choose Our {service.name} Services?
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each service.benefits as benefit}
          <div class="flex items-start space-x-3 p-6 bg-card rounded-lg border shadow-sm">
            <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <p class="text-foreground font-medium leading-relaxed">{benefit}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Before & After Results -->
<section class="py-16 bg-secondary/30">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
        See the Difference Our {service.name} Makes
      </h2>
      <p class="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Professional {service.name.toLowerCase()} delivers remarkable transformations. 
        See actual before and after results from our recent projects.
      </p>
      
      {#each beforeAfterExamples as example}
        <div class="mb-12">
          <BeforeAfterComparison 
            beforeImage={example.beforeImage}
            afterImage={example.afterImage}
            altText={example.altText}
            title={example.title}
            className="max-w-4xl mx-auto"
          />
        </div>
      {/each}
      
      <div class="text-center mt-12">
        <Button size="lg" variant="default">
          <Link href="/quote" class="flex items-center gap-2 text-primary-foreground">
            Get Similar Results for Your Property
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Service Process -->
<ProcessSteps 
  steps={service.process}
  title="Our {service.name} Process"
  subtitle="Professional {service.name.toLowerCase()} delivered through our proven step-by-step approach"
  variant="vertical"
  showConnectors={true}
  animated={true}
/>

<!-- Service Areas -->
<section class="py-16 bg-background">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        {service.name} Service Areas
      </h2>
      <div class="text-center mb-8">
        <p class="text-xl text-muted-foreground mb-6">
          We provide professional {service.name.toLowerCase()} services throughout Metro Vancouver and the Fraser Valley.
        </p>
      </div>
      
      <!-- Primary Service Areas -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-center mb-8 text-foreground">Primary Service Areas</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each primaryAreas as location}
            <div class="bg-card rounded-lg border p-6 text-center hover:shadow-lg transition-shadow">
              <h4 class="font-semibold text-lg mb-3 text-foreground">{location.name}</h4>
              <p class="text-sm text-muted-foreground mb-4">{location.description}</p>
              <Button variant="outline" size="sm" class="w-full">
                <Link href="/locations/{location.id}">
                  View {location.name} Services
                </Link>
              </Button>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- All Locations -->
      <div class="text-center">
        <h3 class="text-2xl font-semibold mb-6 text-foreground">All Service Locations</h3>
        <div class="flex flex-wrap gap-3 justify-center">
          {#each locations as location}
            <Link 
              href="/locations/{location.id}"
              class="inline-flex items-center px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium transition-colors"
            >
              {location.name}
            </Link>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-16 bg-secondary/30">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        Frequently Asked Questions
      </h2>
      <Accordion type="multiple">
        {#each service.faqs as faq, index}
          <AccordionItem value="item-{index}">
            <AccordionTrigger class="text-left font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent class="text-muted-foreground leading-relaxed">
              {faq.answer}
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
        Ready for Professional {service.name}?
      </h2>
      <p class="text-xl mb-8 text-primary-foreground/90">
        Join thousands of satisfied customers who trust Splash & Shine for their {service.name.toLowerCase()} needs.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary">
          <Link href="/quote" class="flex items-center gap-2">
            Get Your Free Quote Today
          </Link>
        </Button>
        <Button size="lg" variant="outline">
          <Link href="tel:+1-604-XXX-XXXX" class="flex items-center gap-2">
            Call (604) XXX-XXXX
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>
