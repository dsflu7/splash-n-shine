<script lang="ts">
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN, PUBLIC_PHONE } from '$env/static/public';
	import { Button } from '$lib/components/ui/button';
	import Link from '$lib/components/Link.svelte';
	import CTA from '$lib/components/CTA.svelte';
  import Infographic from '$lib/components/Infographic.svelte';

	const primaryServiceAreas = [
		{
			name: 'Vancouver',
			population: '662,248',
			description: 'Professional cleaning services throughout Vancouver including downtown, Kitsilano, West End, and all neighborhoods.',
			services: ['Window Cleaning', 'Pressure Washing', 'House Washing', 'Gutter Cleaning'],
			image: '/assets/locations/vancouver-hero.webp',
			href: '/locations/vancouver'
		},
		{
			name: 'Surrey',
			population: '568,322',
			description: 'Comprehensive exterior cleaning services for Surrey homes and businesses from Guildford to South Surrey.',
			services: ['Roof Cleaning', 'Concrete Cleaning', 'Window Cleaning', 'Pressure Washing'],
			image: '/assets/locations/surrey-hero.webp',
			href: '/locations/surrey'
		},
		{
			name: 'Burnaby',
			population: '249,125',
			description: 'Expert cleaning services for Burnaby residents including North Burnaby, Brentwood, and Deer Lake areas.',
			services: ['House Washing', 'Gutter Cleaning', 'Solar Panel Cleaning', 'Deck Cleaning'],
			image: '/assets/locations/burnaby-hero.webp',
			href: '/locations/burnaby'
		}
	];

	const allLocations = [
		{ name: 'Richmond', href: '/locations/richmond', population: '209,937' },
		{ name: 'Fraser Valley', href: '/locations/fraser-valley', population: '300,000+' },
		{ name: 'Langley', href: '/locations/langley', population: '132,603' },
		{ name: 'Coquitlam', href: '/locations/coquitlam', population: '148,625' },
		{ name: 'North Vancouver', href: '/locations/north-vancouver', population: '88,168' },
		{ name: 'West Vancouver', href: '/locations/west-vancouver', population: '42,473' },
		{ name: 'New Westminster', href: '/locations/new-westminster', population: '78,916' },
		{ name: 'Port Coquitlam', href: '/locations/port-coquitlam', population: '61,498' },
		{ name: 'Maple Ridge', href: '/locations/maple-ridge', population: '90,990' },
		{ name: 'Delta', href: '/locations/delta', population: '108,455' },
		{ name: 'White Rock', href: '/locations/white-rock', population: '21,939' },
		{ name: 'Pitt Meadows', href: '/locations/pitt-meadows', population: '19,146' }
	];

	const serviceAreas = [
		{
			title: 'Metro Vancouver Core',
			description: 'Downtown Vancouver, West End, Yaletown, Coal Harbour, and surrounding urban areas.',
			icon: '🏙️'
		},
		{
			title: 'Fraser Valley Region',
			description: 'Langley, Maple Ridge, Abbotsford, Chilliwack, and growing suburban communities.',
			icon: '🌲'
		},
		{
			title: 'North Shore',
			description: 'North Vancouver, West Vancouver, and mountainside communities with specialized access.',
			icon: '⛰️'
		},
		{
			title: 'South of Fraser',
			description: 'Surrey, Delta, Richmond, White Rock, and all communities south of the Fraser River.',
			icon: '🌊'
		}
	];

	const whyLocal = [
		{
			title: 'Local Knowledge',
			description: 'We understand BC weather patterns, local building styles, and community-specific cleaning challenges.',
			icon: '🏠'
		},
		{
			title: 'Quick Response',
			description: 'Local teams mean faster response times and flexible scheduling that works with your lifestyle.',
			icon: '⚡'
		},
		{
			title: 'Community Focused',
			description: 'We\'re your neighbors too. Our reputation in each community matters to us personally.',
			icon: '👥'
		},
		{
			title: 'Weather Expertise',
			description: 'We know when to clean for best results and how to handle BC\'s unique weather conditions.',
			icon: '🌦️'
		}
	];
</script>

<svelte:head>
	<title>Cleaning Services Locations Vancouver Surrey Burnaby | {PUBLIC_COMPANY_NAME}</title>
	<meta name="description" content="Professional cleaning services across Metro Vancouver, Surrey, Burnaby, Richmond, Fraser Valley & more. Local teams with 15+ service areas throughout BC!" />
	<meta name="keywords" content="cleaning services Vancouver, Surrey cleaning, Burnaby cleaning, Richmond cleaning, Fraser Valley cleaning, Metro Vancouver, BC cleaning services" />
	<meta property="og:title" content="Cleaning Services Locations - Vancouver, Surrey, Burnaby | {PUBLIC_COMPANY_NAME}" />
	<meta property="og:description" content="Local cleaning teams serving 15+ locations across Metro Vancouver and Fraser Valley with specialized area knowledge." />
	<meta property="og:image" content="https://www.{PUBLIC_DOMAIN}/assets/locations-overview.webp" />
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
<section class="relative bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-foreground mb-6">
				Serving Communities <span class="text-primary">Across BC</span>
			</h1>
			<p class="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
				Professional exterior cleaning services with local teams throughout Metro Vancouver, Fraser Valley, and surrounding areas. Your neighbors, your trusted cleaning experts.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Link href="/contact">
					<Button size="lg" class="text-lg px-8">
						Find Your Local Team
					</Button>
				</Link>
				<Link href={`tel:${PUBLIC_PHONE}`}>
					<Button variant="outline" size="lg" class="text-lg px-8">
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
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
				Our Primary Service Areas
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Dedicated local teams serving Metro Vancouver's largest communities with specialized area knowledge.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each primaryServiceAreas as location}
				<div class="group relative bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
					<div class="aspect-[4/3] relative overflow-hidden">
						<img 
							src={location.image} 
							alt="{location.name} cleaning services"
							class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
							width="400"
							height="300"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
					
					<div class="p-6">
						<div class="flex items-center justify-between mb-3">
							<h3 class="text-xl font-semibold text-foreground">
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
							<h4 class="text-sm font-medium text-foreground">Popular Services:</h4>
							<div class="flex flex-wrap gap-2">
								{#each location.services as service}
									<span class="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
										{service}
									</span>
								{/each}
							</div>
						</div>
						
						<Link href={location.href}>
							<Button variant="outline" class="w-full">
								Learn More
							</Button>
						</Link>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- All Locations Grid -->
<section class="py-16 md:py-20 bg-muted/30">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
				Complete Service Coverage
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Professional cleaning services available throughout these communities and surrounding areas.
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
			{#each allLocations as location}
				<Link href={location.href}>
					<div class="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary/50">
						<h3 class="font-semibold text-foreground mb-1">
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
				Don't see your area listed? <Link href="/contact" class="text-primary hover:underline">Contact us</Link> - we may still serve your location!
			</p>
		</div>
	</div>
</section>

<!-- Service Area Regions -->
<section class="py-16 md:py-20 bg-background">
	<div class="container mx-auto px-4">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
				Regional Service Areas
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Comprehensive coverage across four major BC regions with specialized local expertise.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each serviceAreas as area}
				<div class="text-center group">
					<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						{area.icon}
					</div>
					<h3 class="text-lg font-semibold text-foreground mb-3">
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
<section class="py-16 md:py-20 bg-muted/30">
	<div class="container mx-auto px-4">
		<Infographic
			title="Extensive Local Coverage"
			subtitle="Professional cleaning services with true local expertise across BC's largest metropolitan area"
			stats={[
				{
					value: "15+",
					label: "Service Locations",
					icon: "📍"
				},
				{
					value: "1.5M+",
					label: "Residents Served",
					icon: "👥"
				},
				{
					value: "4",
					label: "Major Regions",
					icon: "🗺️"
				},
				{
					value: "Local",
					label: "Expert Knowledge",
					icon: "🏆"
				}
			]}
			layout="grid"
		/>
	</div>
</section>

<!-- Why Choose Local -->
<section class="py-16 md:py-24 bg-background">
	<div class="container mx-auto px-4">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
				Why Choose Local Experts?
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Local knowledge makes all the difference in delivering exceptional cleaning results for your community.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each whyLocal as item}
				<div class="text-center group">
					<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						{item.icon}
					</div>
					<h3 class="text-lg font-semibold text-foreground mb-3">
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
