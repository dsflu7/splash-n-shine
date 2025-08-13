<script lang="ts">
  import {
    PUBLIC_COMPANY_NAME,
    PUBLIC_DOMAIN,
    PUBLIC_PHONE,
  } from "$env/static/public";
  import { Button } from "$lib/components/ui/button";
  import Link from "$lib/components/Link.svelte";
  import Infographic from "$lib/components/Infographic.svelte";
  import CTA from "$lib/components/CTA.svelte";
  import ProcessSteps from "$lib/components/ProcessSteps.svelte";
	import { getServicesForUI } from "$lib/data";

  	const servicesData = getServicesForUI();
	const { services, whyChooseUs, serviceHighlights, seo } = servicesData;
   

  const process = [
    {
      step: 1,
      title: "Get A Free Estimate",
      description:
        "Fill out your request or call us to get your comprehensive free estimate.",
    },
    {
      step: 2,
      title: "Get Scheduled",
      description:
        "Once you approve your quote, we'll work with you to find the perfect time.",
    },
    {
      step: 3,
      title: "Relax & Enjoy",
      description:
        "Work done right, results delivered. Your satisfaction is guaranteed.",
    },
  ];
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <meta name="keywords" content={seo.keywords} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:image" content="https://www.{PUBLIC_DOMAIN}{seo.ogImage}" />
  <meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/services" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/services" />
</svelte:head>

{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			"name": "Professional Cleaning Services | ${PUBLIC_COMPANY_NAME}",
			"description": "Comprehensive exterior cleaning services including pressure washing, window cleaning, gutter cleaning, and more.",
			"url": "https://www.${PUBLIC_DOMAIN}/services",
			"provider": {
				"@type": "Organization", 
				"name": "${PUBLIC_COMPANY_NAME}",
				"url": "https://www.${PUBLIC_DOMAIN}",
				"telephone": "${PUBLIC_PHONE}"
			},
			"mainEntity": ${JSON.stringify(
        services.map((service) => ({
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: PUBLIC_COMPANY_NAME,
          },
        }))
      )}
		}
	</script>
`}

<!-- Hero Section -->
<section
  class="relative bg-primary/10 py-16 md:py-24"
>
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[Helvetica]">
        Let Your Property <span class="text-primary">Shine</span>
      </h1>
      <p class="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
        Professional exterior cleaning services with experienced teams, latest
        equipment, and guaranteed satisfaction. We make your property look its
        absolute best.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/contact">
          <Button size="lg" class="text-lg px-8 hover:scale-105 transition-all duration-300">Get Free Estimate</Button>
        </Link>
        <Link href={`tel:${PUBLIC_PHONE}`}>
          <Button variant="outline" size="lg" class="text-lg px-8 hover:scale-105 hover:border-blue-300/50 transition-all duration-300">
            Call {PUBLIC_PHONE}
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>

<!-- Services Grid -->
<section class="py-16 md:py-24 bg-background">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
        Choose What Your Property Needs
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Professional cleaning solutions tailored to your specific needs with
        guaranteed results.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service}
        <div
          class="group relative bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-blue-200/30 transition-all duration-300"
        >
          {#if service.popular}
            <div
              class="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse"
            >
              Popular
            </div>
          {/if}

          <div class="aspect-[4/3] relative overflow-hidden">
            <img
              src={service.image}
              alt="{service.title} service"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width="400"
              height="300"
            />
            <div
              class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold text-foreground mb-3 font-[Helvetica] group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p class="text-muted-foreground mb-4 leading-relaxed">
              {service.description}
            </p>

            <ul class="space-y-2 mb-6">
              {#each service.features as feature}
                <li class="flex items-center text-sm text-muted-foreground">
                  <div class="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-300"></div>
                  {feature}
                </li>
              {/each}
            </ul>

            <Link href={service.href}>
              <Button variant="outline" class="w-full hover:border-blue-300/50 transition-colors duration-300">View {service.title} Details</Button>
            </Link>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Service Capabilities Infographic -->
<section class="py-16 md:py-20 bg-background">
  <div class="container mx-auto px-4">
    <Infographic
      title="Our Comprehensive Capabilities"
      subtitle="Professional equipment and expertise for every cleaning challenge"
      stats={serviceHighlights.map(item => ({
        value: item.title.includes('Premium') ? '9' : 
               item.title.includes('Latest') ? 'Pro' :
               item.title.includes('Eco') ? 'Eco' : '100%',
        label: item.title.includes('Premium') ? 'Core Services' :
               item.title.includes('Latest') ? 'Equipment Grade' :
               item.title.includes('Eco') ? 'Friendly Solutions' : 'Guaranteed Results',
        icon: item.icon
      }))}
      layout="grid"
    />
  </div>
</section>

<!-- Why Choose Us -->
<section class="py-16 md:py-24 bg-primary/4">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
        Why Choose {PUBLIC_COMPANY_NAME}?
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        The perfect solution for your property with our proven approach and
        commitment to excellence.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each whyChooseUs as item}
        <div class="text-center group p-6 rounded-lg border border-transparent hover:border-blue-200/30 hover:bg-card/50 transition-all duration-300">
          <div
            class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
          >
            {item.icon}
          </div>
          <h3 class="text-lg font-semibold text-foreground mb-3 font-[Helvetica] group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<ProcessSteps
  steps={process}
  title="Simple Steps to Get Started"
  subtitle="Our streamlined process makes it easy to get professional cleaning services for your property."
  variant="horizontal"
  showConnectors={true}
  animated={true}
  class="bg-background"
/>

<CTA />
