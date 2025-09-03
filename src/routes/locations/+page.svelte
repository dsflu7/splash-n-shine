<script lang="ts">
  import {
    PUBLIC_COMPANY_NAME,
    PUBLIC_DOMAIN,
    PUBLIC_PHONE,
  } from "$env/static/public";
  import { Button } from "$lib/components/ui/button";
  import Link from "$lib/components/Link.svelte";
  import CTA from "$lib/components/CTA.svelte";
  import Infographic from "$lib/components/Infographic.svelte";
  import { getLocationsForUI } from "$lib/data";

  const locationsData = getLocationsForUI();
  const {
    primaryServiceAreas,
    allLocations,
    serviceAreas,
    whyLocal,
    locationStats,
    seo,
  } = locationsData;
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <meta name="keywords" content={seo.keywords} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta
    property="og:image"
    content="https://www.{PUBLIC_DOMAIN}{seo.ogImage}"
  />
  <meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/locations" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/locations" />
</svelte:head>

{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			"name": "Service Locations | ${PUBLIC_COMPANY_NAME}",
			"description": "Professional exterior cleaning services across Metro Vancouver, Fraser Valley, and surrounding BC communities.",
			"url": "https://www.${PUBLIC_DOMAIN}/locations",
			"provider": {
				"@type": "LocalBusiness", 
				"name": "${PUBLIC_COMPANY_NAME}",
				"url": "https://www.${PUBLIC_DOMAIN}",
				"telephone": "${PUBLIC_PHONE}",
				"areaServed": [
					"Vancouver, BC",
					"Surrey, BC", 
					"Burnaby, BC",
					"Richmond, BC",
					"Fraser Valley, BC",
					"Metro Vancouver, BC"
				]
			}
		}
	</script>
`}

<!-- Hero Section -->
<section class="relative bg-background py-16 md:py-24">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1
        class="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[Helvetica]"
      >
        Serving Communities <span class="text-primary">Across BC</span>
      </h1>
      <p class="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
        Professional exterior cleaning services with local teams throughout
        Metro Vancouver, Fraser Valley, and surrounding areas. Your neighbors,
        your trusted cleaning experts.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/contact">
          <Button
            size="lg"
            class="text-lg px-8 hover:scale-105 transition-all duration-300"
          >
            Find Your Local Team
          </Button>
        </Link>
        <Link href={`tel:${PUBLIC_PHONE}`}>
          <Button
            variant="outline"
            size="lg"
            class="text-lg px-8 hover:scale-105 hover:border-blue-300/50 transition-all duration-300"
          >
            Call {PUBLIC_PHONE}
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>

<!-- Primary Service Areas -->
<section class="py-16 md:py-24 bg-background">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2
        class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]"
      >
        Our Primary Service Areas
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Dedicated local teams serving Metro Vancouver's largest communities with
        specialized area knowledge.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each primaryServiceAreas as location}
        <div
          class="group relative bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-blue-200/30 transition-all duration-300"
        >
          <div class="aspect-[4/3] relative overflow-hidden">
            <img
              src={location.image}
              alt="{location.name} cleaning services"
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
            <div class="flex items-center justify-between mb-3">
              <h3
                class="text-xl font-semibold text-foreground font-[Helvetica] group-hover:text-primary transition-colors duration-300"
              >
                {location.name}
              </h3>
              <span class="text-sm text-muted-foreground">
                {location.population}
              </span>
            </div>
            <p class="text-muted-foreground mb-4 leading-relaxed">
              {location.description}
            </p>

            <div class="space-y-2 mb-6">
              <h4 class="text-sm font-medium text-foreground">
                Popular Services:
              </h4>
              <div class="flex flex-wrap gap-2">
                {#each location.services as service}
                  <span
                    class="text-xs bg-blue-50/50 text-muted-foreground px-2 py-1 rounded-full border border-blue-200/30"
                  >
                    {service}
                  </span>
                {/each}
              </div>
            </div>

            <Link href={location.href}>
              <Button
                variant="outline"
                class="w-full hover:border-blue-300/50 transition-colors duration-300"
              >
                View {location.name} Services
              </Button>
            </Link>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- All Locations Grid -->
<section class="py-16 md:py-20 bg-background">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]"
      >
        Complete Service Coverage
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Professional cleaning services available throughout these communities
        and surrounding areas.
      </p>
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
    >
      {#each allLocations as location}
        <Link href={location.href}>
          <div
            class="bg-card border border-border rounded-lg p-4 hover:shadow-md hover:border-blue-200/30 hover:bg-blue-50/20 transition-all duration-300"
          >
            <h3 class="font-semibold text-foreground mb-1 font-[Helvetica]">
              {location.name}
            </h3>
            <p class="text-sm text-muted-foreground">
              {location.population}
            </p>
          </div>
        </Link>
      {/each}
    </div>

    <div class="text-center mt-8">
      <p class="text-muted-foreground">
        Don't see your area listed? <Link
          href="/contact"
          class="text-primary hover:underline">Contact us</Link
        > - we may still serve your location!
      </p>
    </div>
  </div>
</section>

<!-- Service Area Regions -->
<section class="py-16 md:py-20 bg-background">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2
        class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]"
      >
        Regional Service Areas
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Comprehensive coverage across four major BC regions with specialized
        local expertise.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each serviceAreas as area}
        {@const IconComponent = area.icon}
        <div
          class="text-center group p-6 rounded-lg border border-transparent hover:border-blue-200/30 hover:bg-card/50 transition-all duration-300"
        >
          <div
            class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-primary w-full flex justify-center"
          >
            <IconComponent size={32} />
          </div>
          <h3
            class="text-lg font-semibold text-foreground mb-3 font-[Helvetica] group-hover:text-primary transition-colors duration-300"
          >
            {area.title}
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            {area.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Coverage Stats -->
<section class="py-16 md:py-20 bg-primary/4">
  <div class="container mx-auto px-4">
    <Infographic
      title="Extensive Local Coverage"
      subtitle="Professional cleaning services with true local expertise across BC's largest metropolitan area"
      stats={locationStats.map((stat) => ({
        value: stat.value,
        label: stat.description,
        icon: stat.icon,
      }))}
      layout="grid"
    />
  </div>
</section>

<!-- Why Choose Local -->
<section class="py-16 md:py-24 bg-background">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2
        class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]"
      >
        Why Choose Local Experts?
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Local knowledge makes all the difference in delivering exceptional
        cleaning results for your community.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each whyLocal as item}
        {@const IconComponent = item.icon}
        <div
          class="text-center group p-6 rounded-lg border border-transparent hover:border-blue-200/30 hover:bg-card/50 transition-all duration-300"
        >
          <div
            class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-primary flex justify-center"
          >
            <IconComponent size={32} />
          </div>
          <h3
            class="text-lg font-semibold text-foreground mb-3 font-[Helvetica] group-hover:text-primary transition-colors duration-300"
          >
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

<!-- Get Started -->
<CTA
  title="Ready to Connect with Your Local Team?"
  subtitle="Find out why your neighbors trust us for their exterior cleaning needs. Professional service, local expertise, guaranteed results."
  primaryButtonText="Get Local Quote"
/>
