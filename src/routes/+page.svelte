<script lang="ts">
	import { PUBLIC_COMPANY_NAME, PUBLIC_PHONE } from "$env/static/public";
	import BeforeAfterComparison from "$lib/components/BeforeAfterComparison.svelte";
	import { Button } from "$lib/components/ui/button";
	import Link from "$lib/components/Link.svelte";
	import CTA from "$lib/components/CTA.svelte";
	import Infographic from "$lib/components/Infographic.svelte";
	import { onMount } from 'svelte';

	// Import static data
	import homepageData from "$lib/data/homepage.json";
	import servicesPreviewData from "$lib/data/services-preview.json";
	import serviceLocationsData from "$lib/data/service-locations.json";
	import landingHero from "$lib/assets/landing-hero.webp"

	let QuoteForm: any = $state(null);
	let reviewsIframeVisible = $state(false);
	let reviewsSection: HTMLElement;

	onMount(() => {
		if (reviewsSection) {
			const observer = new IntersectionObserver(
				async (entries) => {
					entries.forEach(async (entry) => {
						if (entry.isIntersecting) {
							const module = await import("$lib/components/QuoteForm.svelte");
							QuoteForm = module.default;

							reviewsIframeVisible = true;														
							observer.unobserve(entry.target);
						}
					});
				},
				{ threshold: 0.1 }
			);
			observer.observe(reviewsSection);
		}
	});
</script>

<svelte:head>
	<title>Professional Exterior Cleaning Services | {PUBLIC_COMPANY_NAME}</title>
	<meta name="description" content="Professional window cleaning, pressure washing, house washing & gutter cleaning services in Vancouver, Surrey, Burnaby. Free estimates & satisfaction guaranteed!" />
	<meta name="keywords" content="cleaning services, window cleaning, pressure washing, house washing, gutter cleaning, roof cleaning, Vancouver, Surrey, Burnaby, Richmond" />
	
	<link rel="preload" href={landingHero} as="image" fetchpriority="high" />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-12 md:py-16 overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src={landingHero}
			alt="Professional exterior cleaning services - beautiful clean home after pressure washing and window cleaning"
			class="w-full h-full object-cover"
			fetchpriority="high"
			width="1920"
			height="1080"
		/>
		<div class="absolute inset-0 bg-black/50"></div>
	</div>
	
	<!-- Hero Content -->
	<div class="relative max-w-7xl mx-auto px-[6%] text-center text-white z-10">
		<h1 class="text-4xl md:text-6xl font-bold mb-6 font-[Helvetica] leading-tight">
			Let Your Home <span class="text-primary">Shine</span>
		</h1>
		<p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
			Professional cleaning with <strong>expert teams</strong> and <strong>guaranteed results</strong>
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Link href="/contact">
				<Button size="lg" class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
					Get Free Estimate
				</Button>
			</Link>
			<Link href={`tel:${PUBLIC_PHONE}`}>
				<Button variant="secondary" size="lg" class="text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
					Call {PUBLIC_PHONE}
				</Button>
			</Link>
		</div>
	</div>
</section>

<!-- House Cleaning Info Section -->
<section class="py-gutter-lg bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Text Content -->
			<div class="space-y-6">
				<h2 class="text-3xl md:text-4xl font-bold text-foreground font-[Helvetica]">
					Transform Your Home's <span class="text-primary">Exterior</span>
				</h2>
				<p class="text-lg text-muted-foreground leading-relaxed">
					Your home deserves professional care. Our exterior cleaning services protect your investment while enhancing curb appeal and property value.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
						<div>
							<h3 class="font-semibold text-foreground">Protect Your Investment</h3>
							<p class="text-sm text-muted-foreground">Prevent costly damage from buildup</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
						<div>
							<h3 class="font-semibold text-foreground">Boost Curb Appeal</h3>
							<p class="text-sm text-muted-foreground">Increase property value instantly</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
						<div>
							<h3 class="font-semibold text-foreground">Save Time</h3>
							<p class="text-sm text-muted-foreground">Focus on what matters to you</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
						<div>
							<h3 class="font-semibold text-foreground">Eco-Friendly</h3>
							<p class="text-sm text-muted-foreground">Safe for family and environment</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Large Image -->
			<div class="relative">
				<img
					src="https://cdn.sanity.io/files/ws2fgpe5/production/5de4e0f59ab64d6994f54898e1ea799554c6b08f.jpg?w=600&h=400&fit=crop&auto=format&q=85"
					alt="Beautiful clean home exterior after professional house washing and cleaning services"
					class="w-full h-[400px] object-cover rounded-lg shadow-lg"
					loading="lazy"
					width="600"
					height="400"
				/>
				<div class="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
			</div>
		</div>
	</div>
</section>

<!-- Small Services Section -->
<section class="py-gutter-md bg-background">
	<div class="max-w-6xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-foreground mb-3 font-[Helvetica]">
				Our Services
			</h2>
			<p class="text-muted-foreground">
				Professional cleaning solutions for your home
			</p>
		</div>
		
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
			{#each servicesPreviewData.slice(0, 6) as service}
				<Link href={service.href} class="group">
					<div class="text-center p-4 rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
						<div class="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
						<h3 class="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
							{service.title}
						</h3>
					</div>
				</Link>
			{/each}
		</div>
		
		<div class="text-center mt-6">
			<Link href="/services">
				<Button variant="outline" class="text-sm px-6">
					View All Services
				</Button>
			</Link>
		</div>
	</div>
</section>

<!-- Why Choose Us -->
<section class="py-gutter-md bg-primary/5">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-foreground mb-3 font-[Helvetica]">
				Why Choose Us
			</h2>
			<p class="text-muted-foreground">
				What makes us different
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each homepageData.whyChooseUs as value}
				<div class="text-center group p-4 rounded-lg border border-transparent hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
					<div class="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
						{value.icon}
					</div>
					<h3 class="text-lg font-semibold text-foreground mb-2 font-[Helvetica] group-hover:text-primary transition-colors duration-300">
						{value.title}
					</h3>
					<p class="text-sm text-muted-foreground">
						{value.description.split('.')[0]}.
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Before & After Results -->
<section class="py-gutter-md bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-foreground mb-3 font-[Helvetica]">
				See the Results
			</h2>
			<p class="text-muted-foreground">
				Real transformations from our professional cleaning
			</p>
		</div>
		
		<div class="space-y-8">
			<!-- House Washing Before/After -->
			<BeforeAfterComparison
				beforeImage="https://cdn.sanity.io/files/ws2fgpe5/production/1792e570b24374a784ba3db66a9a89c233a93e18.jpg?w=800&h=450&fit=crop&auto=format&q=85"
				afterImage="https://cdn.sanity.io/files/ws2fgpe5/production/5de4e0f59ab64d6994f54898e1ea799554c6b08f.jpg?w=800&h=450&fit=crop&auto=format&q=85"
				altText="House exterior cleaning transformation showing dramatic improvement"
				title="House Washing Transformation"
				className="mb-8"
			/>
			
			<BeforeAfterComparison
				beforeImage="https://cdn.sanity.io/files/ws2fgpe5/production/4eb6bc0c0429bd9229b86dbec6aec01d8aa1e7d6.webp?w=800&h=450&fit=crop&auto=format&q=85"
				afterImage="https://cdn.sanity.io/files/ws2fgpe5/production/94f4132b51090e478da9820a1835189c20a9ae19.webp?w=800&h=450&fit=crop&auto=format&q=85"
				altText="Roof cleaning transformation showing removal of moss, algae, and debris for improved appearance and longevity"
				title="Roof Cleaning Transformation"
			/>
			
		</div>
	</div>
</section>

<!-- Customer Reviews -->
<section bind:this={reviewsSection} class="py-gutter-md bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-foreground mb-3 font-[Helvetica]">
				Customer Reviews
			</h2>
			<p class="text-muted-foreground">
				What our customers say
			</p>
		</div>
		
		{#if reviewsIframeVisible}
			<div class="">
				<iframe
					class="lc_reviews_widget w-full h-[600px]"
					src="https://reputationhub.site/reputation/widgets/review_widget/BlR0PXXBkzNERvcWVL4F"
					frameborder="0"
					scrolling="no"
					title="Customer reviews from ReputationHub"
				></iframe>
			</div>
		{:else}
			<div class="flex items-center justify-center h-[600px] bg-background rounded-lg border border-border">
				<div class="text-center">
					<div class="text-4xl mb-4">⭐</div>
					<p class="text-muted-foreground">Loading customer reviews...</p>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- Team Photo Section -->
<section class="py-gutter-lg bg-primary/5">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Team Photo -->
			<div class="relative">
				<img
					src="https://cdn.sanity.io/files/ws2fgpe5/production/6a99ac3d0a536dd54fe2c5e41a2ffdca8b11960d.jpg?w=600&h=400&fit=crop&auto=format&q=85"
					alt="Professional cleaning team ready to help transform your home exterior"
					class="w-full h-[400px] object-cover rounded-lg shadow-lg"
					loading="lazy"
					width="600"
					height="400"
				/>
				<div class="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/20 to-transparent"></div>
			</div>
			
			<!-- Team Content -->
			<div class="space-y-6">
				<h2 class="text-3xl md:text-4xl font-bold text-foreground font-[Helvetica]">
					We'll Help Your Home <span class="text-primary">Shine</span>
				</h2>
				<p class="text-lg text-muted-foreground leading-relaxed">
					Our experienced team brings years of expertise and passion for transforming homes across Metro Vancouver.
				</p>
				<div class="space-y-4">
					<div class="flex items-center space-x-3">
						<div class="w-2 h-2 bg-primary rounded-full"></div>
						<span class="text-foreground">Expert technicians with years of experience</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-2 h-2 bg-primary rounded-full"></div>
						<span class="text-foreground">Fully insured and bonded professionals</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-2 h-2 bg-primary rounded-full"></div>
						<span class="text-foreground">100% satisfaction guarantee</span>
					</div>
				</div>
				<Link href="/contact">
					<Button size="lg" class="hover:scale-105 transition-all duration-300">
						Get Your Free Estimate
					</Button>
				</Link>
			</div>
		</div>
	</div>
</section>

<!-- How It Works -->
<section class="py-gutter-md bg-primary/3">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-foreground mb-3 font-[Helvetica]">
				How It Works
			</h2>
			<p class="text-muted-foreground">
				Simple, professional, and reliable
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#if homepageData?.process}
				{#each homepageData.process as step, index}
					<div class="text-center group">
						<!-- Step icon -->
						<div class="mx-auto mb-4 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
							<div class="text-2xl">{step.icon}</div>
						</div>
						
						<div class="space-y-3">
							<h3 class="text-lg font-bold text-foreground font-[Helvetica] group-hover:text-primary transition-colors duration-300">
								{step.title}
							</h3>
							<p class="text-sm text-muted-foreground">
								{step.description.split('.')[0]}.
							</p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>

<!-- Quote Form Section -->
<section class="py-gutter-md bg-background">
	<div class="max-w-5xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-foreground mb-3 font-[Helvetica]">
				Get Your Free Estimate
			</h2>
			<p class="text-muted-foreground">
				Quick quote in under 2 minutes
			</p>
		</div>
		
		{#if QuoteForm}
			<QuoteForm 
				title=""
				subtitle=""
			/>
		{:else}
			<div class="flex justify-center py-16">
				<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
			</div>
		{/if}
	</div>
</section>

<!-- Company Stats with Icons -->
<section class="py-gutter-lg bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
				Trusted by Your Neighbors
			</h2>
			<p class="text-muted-foreground">
				Our track record speaks for itself
			</p>
		</div>
		
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
			<div class="text-center group">
				<div class="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
					<span class="text-2xl">🏆</span>
				</div>
				<div class="text-3xl font-bold text-primary mb-2">500+</div>
				<div class="text-muted-foreground">Happy Customers</div>
			</div>
			<div class="text-center group">
				<div class="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
					<span class="text-2xl">⭐</span>
				</div>
				<div class="text-3xl font-bold text-primary mb-2">100%</div>
				<div class="text-muted-foreground">Satisfaction Rate</div>
			</div>
			<div class="text-center group">
				<div class="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
					<span class="text-2xl">📍</span>
				</div>
				<div class="text-3xl font-bold text-primary mb-2">15+</div>
				<div class="text-muted-foreground">Service Areas</div>
			</div>
			<div class="text-center group">
				<div class="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
					<span class="text-2xl">🛡️</span>
				</div>
				<div class="text-3xl font-bold text-primary mb-2">Licensed</div>
				<div class="text-muted-foreground">& Insured</div>
			</div>
		</div>
	</div>
</section>

<!-- Final CTA with Guarantee -->
<CTA />
