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
		<p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
			Professional exterior cleaning services with <strong>experienced teams</strong>, <strong>latest equipment</strong>, and <strong>guaranteed satisfaction</strong>
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
		
		<!-- Quick Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center">
			<div class="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
				<div class="text-2xl font-bold text-primary">100%</div>
				<div class="text-sm">Satisfaction</div>
			</div>
			<div class="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
				<div class="text-2xl font-bold text-primary">500+</div>
				<div class="text-sm">Happy Clients</div>
			</div>
			<div class="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
				<div class="text-2xl font-bold text-primary">24hr</div>
				<div class="text-sm">Response Time</div>
			</div>
			<div class="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
				<div class="text-2xl font-bold text-primary">Insured</div>
				<div class="text-sm">& Licensed</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Preview -->
<section class="py-10 md:py-12 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
				Choose What Your Home Needs
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Professional cleaning solutions with the latest equipment and eco-friendly methods
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each servicesPreviewData as service}
				<div class="group bg-card relative rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-blue-200/30 transition-all duration-300">
					{#if service.popular}
						<div class="absolute z-10 top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium w-fit animate-pulse">
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
						<div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
					
					<div class="p-6">
						<div class="flex items-center mb-3">
							<div class="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
							<h3 class="text-xl font-semibold text-foreground font-[Helvetica] group-hover:text-primary transition-colors duration-300">
								{service.title}
							</h3>
						</div>
						<p class="text-muted-foreground leading-relaxed mb-4">
							{service.desc}
						</p>
						<Link href={service.href}>
							<Button variant="outline" class="w-full hover:border-blue-300/50 transition-colors duration-300">
								View {service.title} Services
							</Button>
						</Link>
					</div>
				</div>
			{/each}
		</div>
		
		<div class="text-center mt-8">
			<Link href="/services">
				<Button size="lg" variant="outline" class="text-lg px-8">
					View All Services
				</Button>
			</Link>
		</div>
	</div>
</section>

<!-- Why Choose Us - 4 Key Values -->
<section class="py-10 md:py-12 bg-primary/5">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
				Our "You" Approach
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Four key values that make us the perfect solution for your property
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each homepageData.whyChooseUs as value}
				<div class="text-center group p-6 rounded-lg border border-transparent hover:border-blue-200/30 hover:bg-card/50 transition-all duration-300">
					<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						{value.icon}
					</div>
					<h3 class="text-xl font-semibold text-foreground mb-3 font-[Helvetica] group-hover:text-primary transition-colors duration-300">
						{value.title}
					</h3>
					<p class="text-muted-foreground leading-relaxed">
						{value.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Company Stats Infographic -->
<section class="py-10 md:py-12 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<Infographic
			title="Trusted by Your Neighbors"
			subtitle="Our track record speaks for itself with satisfied customers across Metro Vancouver"
			stats={homepageData.companyStats}
		/>
	</div>
</section>

<!-- Before & After Results -->
<section class="py-10 md:py-12 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
				Let Results Do the Talking
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Experience the remarkable difference our professional cleaning services make. See real transformations from our satisfied customers.
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
<section bind:this={reviewsSection} class="py-10 md:py-12 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
				Don't Take Our Word For It
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				See what your neighbors are saying about our professional cleaning services
			</p>
		</div>
		
		{#if reviewsIframeVisible}
			<div class="">
				<iframe
					class="lc_reviews_widget w-full h-[450px]"
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

<!-- Enhanced 3-Step Process -->
<section class="py-10 md:py-12 bg-primary/3">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-10">
			<div class="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
				<span class="mr-2">✨</span>
				Our Simple Process
			</div>
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
				How We Transform Your Property
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				From estimate to completion, we make professional cleaning effortless for you
			</p>
		</div>
		
		<div class="relative">
			<!-- Animated connection line for desktop -->
			<div class="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-blue-100/20 rounded-full">
				<div class="h-full bg-primary rounded-full animate-pulse" style="width: 60%;"></div>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
				{#if homepageData?.process}
					{#each homepageData.process as step, index}
						<div class="relative text-center group">
							<!-- Mobile connection line -->
							{#if index < homepageData.process.length - 1}
								<div class="md:hidden absolute left-1/2 -bottom-6 w-0.5 h-12 bg-blue-200/30 transform -translate-x-1/2"></div>
							{/if}
							
							<!-- Floating background circle -->
							<div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-125 transition-all duration-500"></div>
							
							<!-- Main step container -->
							<div class="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 group-hover:-translate-y-2">
								<!-- Step icon circle -->
								<div class="relative mx-auto mb-6 w-20 h-20 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
									<div class="text-3xl filter drop-shadow-sm">{step.icon}</div>
									
									<!-- Step number badge -->
									<div class="absolute -top-3 -right-3 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-blue-100/50 group-hover:scale-125 transition-all duration-300">
										{step.step}
									</div>
									
									<!-- Glow effect -->
									<div class="absolute inset-0 rounded-2xl bg-blue-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
								</div>
								
								<div class="space-y-4">
									<h3 class="text-xl font-bold text-foreground font-[Helvetica] group-hover:text-primary transition-colors duration-300">
										{step.title}
									</h3>
									<p class="text-muted-foreground leading-relaxed text-base">
										{step.description}
									</p>
									
									<!-- Enhanced details section -->
									<div class="mt-6 p-4 bg-blue-50/30 border-l-3 border-blue-400/40 rounded-r-lg">
										<p class="text-sm text-muted-foreground/90 leading-relaxed italic">
											{step.details}
										</p>
									</div>
								</div>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
		
		<!-- Enhanced CTA section -->
		<div class="text-center mt-10">
			<div class="inline-flex flex-col items-center space-y-6 p-8 bg-blue-50/20 rounded-2xl border border-blue-200/30">
				<div class="flex items-center space-x-2">
					<span class="text-2xl">🎯</span>
					<div class="text-lg font-medium text-primary">Ready to get started?</div>
				</div>
				<p class="text-muted-foreground max-w-md">
					Join hundreds of satisfied customers who trust us for their cleaning needs
				</p>
				<Link href="/contact">
					<Button size="lg" variant="default" class="hover:scale-105 transition-all duration-300">
						<span class="flex items-center space-x-2">
							<span>Start Your Free Estimate</span>
							<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
							</svg>
						</span>
					</Button>
				</Link>
			</div>
		</div>
	</div>
</section>

<!-- Quote Form Section -->
<section class="py-10 md:py-12 bg-background">
	<div class="max-w-5xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
				Ready to Transform Your Property?
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Get your free, comprehensive estimate in under 2 minutes. No hidden fees, no pressure.
			</p>
		</div>
		
		{#if QuoteForm}
			<QuoteForm 
				title="Get Your Free Estimate Now"
				subtitle="Tell us about your project and receive a comprehensive quote within 24 hours"
			/>
		{:else}
			<div class="flex justify-center py-16">
				<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
			</div>
		{/if}
	</div>
</section>

<!-- Service-Location Combinations -->
<section class="py-10 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-8">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Helvetica]">
				Popular Service Areas
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Find specialized cleaning services in your area with local expertise and guaranteed results
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each serviceLocationsData as serviceLocation}
			<div class="bg-card rounded-lg border p-6 hover:shadow-lg hover:border-blue-200/30 transition-all duration-200 group">
				<div class="flex items-center justify-between mb-3">
					<h3 class="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{serviceLocation.title}</h3>
					<svg class="w-5 h-5 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</div>
				<p class="text-sm text-muted-foreground mb-4">{serviceLocation.description}</p>
				<Link href={serviceLocation.href} class="text-primary hover:text-blue-600 font-medium text-sm transition-colors duration-300">
					Get {serviceLocation.location} {serviceLocation.service} →
				</Link>
			</div>
			{/each}
		</div>
		
		<div class="text-center mt-8">
			<p class="text-muted-foreground mb-6">
				Can't find your area? We serve all of Metro Vancouver and the Fraser Valley.
			</p>
			<Link href="/locations">
				<Button variant="outline" size="lg">
					View All Service Areas
				</Button>
			</Link>
		</div>
	</div>
</section>

<!-- Final CTA with Guarantee -->
<CTA />
