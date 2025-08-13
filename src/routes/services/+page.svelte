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

  const services = [
    {
      title: "Window Cleaning",
      description:
        "Crystal-clean windows inside and out, including screens and sills for a spotless, streak-free finish.",
      features: [
        "Interior & exterior cleaning",
        "Screen cleaning",
        "Sill & frame cleaning",
        "Streak-free guarantee",
      ],
      image: "/assets/services/window-cleaning-hero.webp",
      href: "/services/window-cleaning",
      popular: true,
    },
    {
      title: "Pressure Washing",
      description:
        "Professional high-pressure cleaning to remove dirt, grime, and stains from driveways, sidewalks, decks, and exterior surfaces.",
      features: [
        "Driveway cleaning",
        "Sidewalk restoration",
        "Deck & patio cleaning",
        "Building exterior wash",
      ],
      image: "/assets/services/pressure-washing-hero.webp",
      href: "/services/pressure-washing",
    },
    {
      title: "House Washing",
      description:
        "Complete exterior house washing to restore your home's curb appeal and protect your investment.",
      features: [
        "Siding cleaning",
        "Trim & detail work",
        "Soft wash technology",
        "Eco-friendly solutions",
      ],
      image: "/assets/services/house-washing-hero.webp",
      href: "/services/house-washing",
    },
    {
      title: "Gutter Cleaning",
      description:
        "Complete gutter cleaning and maintenance to protect your home from water damage and ensure proper drainage.",
      features: [
        "Debris removal",
        "Downspout clearing",
        "Gutter inspection",
        "Minor repair identification",
      ],
      image: "/assets/services/gutter-cleaning-hero.webp",
      href: "/services/gutter-cleaning",
    },
    {
      title: "Roof Cleaning",
      description:
        "Safe, effective roof cleaning to remove moss, algae, and debris while preserving your roof's integrity.",
      features: [
        "Moss removal",
        "Algae treatment",
        "Debris clearing",
        "Gentle soft washing",
      ],
      image: "/assets/services/roof-cleaning-hero.webp",
      href: "/services/roof-cleaning",
    },
    {
      title: "Concrete Cleaning",
      description:
        "Deep cleaning of concrete surfaces including driveways, walkways, patios, and parking areas.",
      features: [
        "Oil stain removal",
        "Deep cleaning",
        "Surface restoration",
        "Sealing preparation",
      ],
      image: "/assets/services/concrete-cleaning-hero.webp",
      href: "/services/concrete-cleaning",
    },
    {
      title: "Deck & Fence Cleaning",
      description:
        "Restore and protect your outdoor wood and composite surfaces with specialized cleaning techniques.",
      features: [
        "Wood restoration",
        "Composite cleaning",
        "Stain preparation",
        "Weatherproofing prep",
      ],
      image: "/assets/services/deck-fence-cleaning-hero.webp",
      href: "/services/deck-fence-cleaning",
    },
    {
      title: "Solar Panel Cleaning",
      description:
        "Maximize energy efficiency with professional solar panel cleaning and maintenance services.",
      features: [
        "Panel efficiency optimization",
        "Safe cleaning methods",
        "Performance improvement",
        "Regular maintenance",
      ],
      image: "/assets/services/solar-panel-cleaning-hero.webp",
      href: "/services/solar-panel-cleaning",
    },
    {
      title: "Commercial Cleaning",
      description:
        "Professional cleaning services for businesses, storefronts, and commercial properties.",
      features: [
        "Storefront cleaning",
        "Building maintenance",
        "Parking lot cleaning",
        "Regular service schedules",
      ],
      image: "/assets/services/commercial-cleaning-hero.webp",
      href: "/services/commercial-cleaning",
    },
  ];

  const whyChooseUs = [
    {
      title: "Experienced Professionals",
      description:
        "Backed by years of experience and expertise in the best exterior cleaning and maintenance practices.",
      icon: "🎯",
    },
    {
      title: "Time-Saving Service",
      description:
        "Save time while we restore your property promptly without losing attention to detail.",
      icon: "⏰",
    },
    {
      title: "Fully Equipped & Safe",
      description:
        "Latest cleaning equipment and eco-friendly products delivered by insured professionals.",
      icon: "🛡️",
    },
    {
      title: "Friendly & Reliable",
      description:
        "Committed to customer satisfaction with a smile. Check out our client reviews.",
      icon: "😊",
    },
  ];

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
  <title>Professional Cleaning Services Vancouver | {PUBLIC_COMPANY_NAME}</title
  >
  <meta
    name="description"
    content="Professional window cleaning, pressure washing, house washing & gutter cleaning services in Vancouver, Surrey, Burnaby. 9 specialized services with guaranteed results!"
  />
  <meta
    name="keywords"
    content="cleaning services Vancouver, window cleaning, pressure washing, house washing, gutter cleaning, roof cleaning, Surrey, Burnaby"
  />
  <meta
    property="og:title"
    content="Professional Cleaning Services Vancouver | {PUBLIC_COMPANY_NAME}"
  />
  <meta
    property="og:description"
    content="9 specialized exterior cleaning services with experienced teams and guaranteed satisfaction across Metro Vancouver."
  />
  <meta
    property="og:image"
    content="https://www.{PUBLIC_DOMAIN}/assets/services-overview.webp"
  />
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
      <h1 class="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[Cantarell]">
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
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
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
            <h3 class="text-xl font-semibold text-foreground mb-3 font-[Cantarell] group-hover:text-primary transition-colors duration-300">
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
              <Button variant="outline" class="w-full hover:border-blue-300/50 transition-colors duration-300">Learn More</Button>
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
      stats={[
        {
          value: "9",
          label: "Core Services",
          icon: "🏆",
        },
        {
          value: "Pro",
          label: "Equipment Grade",
          icon: "⚙️",
        },
        {
          value: "Eco",
          label: "Friendly Solutions",
          icon: "🌱",
        },
        {
          value: "100%",
          label: "Guaranteed Results",
          icon: "✨",
        },
      ]}
      layout="grid"
    />
  </div>
</section>

<!-- Why Choose Us -->
<section class="py-16 md:py-24 bg-primary/4">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
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
          <h3 class="text-lg font-semibold text-foreground mb-3 font-[Cantarell] group-hover:text-primary transition-colors duration-300">
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
