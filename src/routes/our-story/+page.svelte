<script lang="ts">
  import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from "$env/static/public";
  import logo from "$lib/assets/logo.png";
</script>

<svelte:head>
  <title>About Our Story | Splash n' Shine Vancouver Cleaning Experts</title>
  <meta
    name="description"
    content="Discover how Splash n' Shine became Vancouver's trusted exterior cleaning company. Learn about our commitment to quality, eco-friendly methods, and customer satisfaction."
  />
  <meta
    name="keywords"
    content="Splash n' Shine story, exterior cleaning company Vancouver, eco-friendly cleaning, professional cleaning background, family-owned cleaning business"
  />
  <!-- Open Graph tags -->
  <meta
    property="og:title"
    content="About Our Story | Splash n' Shine Vancouver Cleaning Experts"
  />
  <meta
    property="og:description"
    content="Discover how Splash n' Shine became Vancouver's trusted exterior cleaning company. Learn about our commitment to quality, eco-friendly methods, and customer satisfaction."
  />
  <meta property="og:image" content={`${logo}`} />
  <meta property="og:url" content={`${PUBLIC_DOMAIN}/our-story`} />
  <meta property="og:type" content="website" />
  <!-- Twitter Card tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="About Our Story | Splash n' Shine Vancouver Cleaning Experts"
  />
  <meta
    name="twitter:description"
    content="Discover how Splash n' Shine became Vancouver's trusted exterior cleaning company. Learn about our commitment to quality, eco-friendly methods, and customer satisfaction."
  />
  <meta name="twitter:image" content={`${logo}`} />
  <link rel="canonical" href={`${PUBLIC_DOMAIN}/our-story`} />
</svelte:head>

<!-- Structured Data for Our Story Page -->
{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "About Our Story | Splash n' Shine Vancouver Cleaning Experts",
			"description": "Discover how Splash n' Shine became Vancouver's trusted exterior cleaning company. Learn about our commitment to quality, eco-friendly methods, and customer satisfaction.",
			"url": "${PUBLIC_DOMAIN}/our-story",
			"provider": {
				"@type": "Organization",
				"name": "Splash n' Shine",
				"url": "${PUBLIC_DOMAIN}",
				"logo": {
					"@type": "ImageObject",
					"url": "${logo}"
				}
			},
			"about": {
				"@type": "Organization",
				"name": "Splash n' Shine",
				"description": "Vancouver's leading exterior cleaning company specializing in power washing, soft washing, and property maintenance."
			}
		}
	</script>
`}

<article class="bg-background py-16">
  <div class="max-w-4xl mx-auto px-[6%]">
    <!-- Header -->
    <header class="text-center mb-12">
      <div class="flex justify-center mb-8">
        <img
          src={logo}
          alt="Splash n' Shine company logo"
          class="w-24 h-24 object-contain"
          width="96"
          height="96"
          fetchpriority="high"
        />
      </div>
      <h1 class="text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
        Our Story
      </h1>
      <p
        class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
      >
        Welcome to Splash N Shine, where passion meets expertise to create
        immaculate exteriors that transform properties into pristine showcases.
      </p>
    </header>

    <!-- Content -->
    <div class="prose prose-lg max-w-none text-foreground">
      <section class="mb-8">
        <h2
          class="text-2xl font-semibold text-foreground mb-4 font-[Helvetica]"
        >
          Our Journey
        </h2>
        <div class="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Our journey began with a simple vision: to redefine exterior
            cleaning by offering not just standard washing, but premium cleaning
            solutions that enhance durability, appearance, and value.
            PUBLIC_DOMAINd in the heart of the Lower Mainland, Splash N Shine is
            proud to be one of the best exterior cleaning service providers in
            Vancouver and surrounding areas, specializing in comprehensive
            cleaning solutions for homes, businesses, and commercial properties.
          </p>

          <p>
            With our professional team of trained specialists, we bring
            unmatched expertise to every project. We deliver exceptional results
            using high-grade eco-friendly cleaning solutions and cutting-edge
            techniques, ensuring surfaces that not only look stunning but
            maintain their integrity for years to come.
          </p>
        </div>
      </section>

      <section class="mb-8">
        <h2
          class="text-2xl font-semibold text-foreground mb-4 font-[Helvetica]"
        >
          Our Mission
        </h2>
        <div class="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            At Splash N Shine, we believe every property tells a story. Whether
            you're looking for comprehensive house cleaning, professional roof
            cleaning, commercial cleaning services, expert window washing,
            thorough post-construction cleanup, or reliable gutter cleaning, we
            offer solutions tailored to your specific needs. Each project
            reflects our commitment to quality and enhances the environment it
            occupies, creating a perfect blend of cleanliness and beauty.
          </p>

          <p>
            Our services extend throughout the Greater Vancouver area, including
            Surrey, Richmond, Burnaby, Coquitlam, North Vancouver, Delta, New
            Westminster, Langley, White Rock, and Abbotsford. We take pride in
            our ability to adapt our techniques to the specific challenges of
            each region, from the salt air of oceanfront properties in White
            Rock to the agricultural environments of Langley and Abbotsford.
          </p>
        </div>
      </section>

      <section class="mb-8">
        <h2
          class="text-2xl font-semibold text-foreground mb-4 font-[Helvetica]"
        >
          Our Commitment
        </h2>
        <div class="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            More than just a cleaning company, we are restoration specialists,
            environmental stewards, and experts in transforming and maintaining
            property exteriors. Our commitment to using biodegradable, non-toxic
            cleaning solutions ensures that we protect not only your property
            but also your family and the environment.
          </p>

          <p class="text-lg font-medium text-foreground">
            Join us on this journey, and let Splash N Shine bring your property
            back to its original glory, one exceptional cleaning service at a
            time.
          </p>
        </div>
      </section>
      <section class="mb-8">
        <h2
          class="text-2xl font-semibold text-foreground mb-4 font-[Helvetica]"
        >
          Our Core Values
        </h2>
        <div class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 bg-card rounded-lg border border-border">
              <div class="flex items-center mb-3">
                <span class="text-2xl mr-3">🌱</span>
                <h3
                  class="text-xl font-medium text-foreground font-[Helvetica]"
                >
                  Eco-Friendly Approach
                </h3>
              </div>
              <p class="text-muted-foreground leading-relaxed">
                Using biodegradable, non-toxic cleaning solutions that protect
                your family and the environment while delivering exceptional
                results.
              </p>
            </div>

            <div class="p-6 bg-card rounded-lg border border-border">
              <div class="flex items-center mb-3">
                <span class="text-2xl mr-3">⭐</span>
                <h3
                  class="text-xl font-medium text-foreground font-[Helvetica]"
                >
                  Quality Excellence
                </h3>
              </div>
              <p class="text-muted-foreground leading-relaxed">
                Uncompromising commitment to quality with trained specialists
                and cutting-edge techniques that ensure lasting results.
              </p>
            </div>

            <div class="p-6 bg-card rounded-lg border border-border">
              <div class="flex items-center mb-3">
                <span class="text-2xl mr-3">🤝</span>
                <h3
                  class="text-xl font-medium text-foreground font-[Helvetica]"
                >
                  Customer Partnership
                </h3>
              </div>
              <p class="text-muted-foreground leading-relaxed">
                Building lasting relationships through personalized service,
                transparent communication, and guaranteed satisfaction.
              </p>
            </div>

            <div class="p-6 bg-card rounded-lg border border-border">
              <div class="flex items-center mb-3">
                <span class="text-2xl mr-3">🏠</span>
                <h3
                  class="text-xl font-medium text-foreground font-[Helvetica]"
                >
                  Local Expertise
                </h3>
              </div>
              <p class="text-muted-foreground leading-relaxed">
                Deep understanding of Metro Vancouver's unique environmental
                challenges and property needs across all service areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2
          class="text-2xl font-semibold text-foreground mb-4 font-[Helvetica]"
        >
          Meet Our Team
        </h2>
        <div class="space-y-4">
          <div class="rounded-lg overflow-hidden border border-border">
            <img
              src="https://cdn.sanity.io/files/ws2fgpe5/production/be7a6b12c5648f0b7b95ae5d40afb822756aa069.jpg"
              alt="Splash n' Shine professional cleaning team"
              class="w-full h-auto object-cover"
              loading="lazy"
              width="800"
              height="400"
            />
          </div>
          <p class="text-muted-foreground leading-relaxed">
            Our experienced team of cleaning professionals is dedicated to
            transforming your property with expertise, care, and attention to
            detail. Every team member is trained in the latest cleaning
            techniques and committed to delivering exceptional results that
            exceed your expectations.
          </p>
        </div>
      </section>

      <section class="mb-8">
        <h2
          class="text-2xl font-semibold text-foreground mb-4 font-[Helvetica]"
        >
          Service Areas
        </h2>
        <p class="text-muted-foreground leading-relaxed mb-4">
          We proudly serve communities throughout Metro Vancouver and the Fraser
          Valley:
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {#each ["Vancouver", "Surrey", "Richmond", "Burnaby", "Coquitlam", "North Vancouver", "Delta", "New Westminster", "Langley", "White Rock", "Abbotsford", "West Vancouver"] as location}
            <div
              class="p-3 bg-card rounded-lg border border-border text-center"
            >
              <span class="text-sm font-medium text-foreground">{location}</span
              >
            </div>
          {/each}
        </div>
      </section>

      <section class="mb-8">
        <h2
          class="text-2xl font-semibold text-foreground mb-4 font-[Helvetica]"
        >
          Contact Us
        </h2>
        <p class="text-muted-foreground leading-relaxed mb-4">
          Ready to experience the Splash n' Shine difference? Get in touch with
          us today:
        </p>
        <div class="bg-card p-6 rounded-lg border border-border">
          <p class="font-semibold text-foreground mb-2">
            {PUBLIC_COMPANY_NAME}
          </p>
          <p class="text-muted-foreground">
            Website: <a
              href={PUBLIC_DOMAIN}
              class="text-primary hover:underline">{PUBLIC_DOMAIN}</a
            >
          </p>
          <p class="text-muted-foreground">
            Get Quote: <a href="/contact" class="text-primary hover:underline"
              >Free Estimate</a
            >
          </p>
        </div>
      </section>
    </div>
  </div>
</article>
