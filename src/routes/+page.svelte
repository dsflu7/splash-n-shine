<script lang="ts">
	import { PUBLIC_COMPANY_NAME, PUBLIC_PHONE } from "$env/static/public";
	import BeforeAfterComparison from "$lib/components/BeforeAfterComparison.svelte";
	import { Button } from "$lib/components/ui/button";
	import Link from "$lib/components/Link.svelte";
	import QuoteForm from "$lib/components/QuoteForm.svelte";
	import Infographic from "$lib/components/Infographic.svelte";
	import { onMount } from 'svelte';

	interface Service {
		title: string;
		desc: string;
		icon: string;
		image: string;
		href: string;
		popular?: boolean;
	}

	interface WhyChooseUsItem {
		icon: string;
		title: string;
		description: string;
	}

	interface CompanyStat {
		value: string;
		label: string;
		icon: string;
	}

	interface ProcessStep {
		step: string;
		title: string;
		description: string;
		icon: string;
		details: string;
	}

	interface HomepageData {
		services: Service[];
		whyChooseUs: WhyChooseUsItem[];
		companyStats: CompanyStat[];
		process: ProcessStep[];
	}

	let homepageData: HomepageData | null = $state(null);
	let reviewsIframeVisible = $state(false);

	onMount(async () => {
		// Load homepage data dynamically
		const response = await fetch('/api/homepage-data');
		if (response.ok) {
			homepageData = await response.json();
		}
	});

	// Intersection Observer for lazy loading reviews iframe
	let reviewsSection: HTMLElement;
	onMount(() => {
		if (reviewsSection) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
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
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 md:py-28 overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img 
			src="/assets/hero/clean-home-exterior.webp"
			alt="Beautiful clean home exterior after professional cleaning"
			class="w-full h-full object-cover"
			fetchpriority="high"
			width="1920"
			height="1080"
		/>
		<div class="absolute inset-0 bg-black/50"></div>
	</div>
	
	<!-- Hero Content -->
	<div class="relative max-w-7xl mx-auto px-[6%] text-center text-white">
		<h1 class="text-4xl md:text-6xl font-bold mb-6 font-[Cantarell] leading-tight">
			Let Your Home <span class="text-primary">Shine</span>
		</h1>
		<p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
			Professional exterior cleaning services with <strong>experienced teams</strong>, <strong>latest equipment</strong>, and <strong>guaranteed satisfaction</strong>
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
			<Link href="/contact">
				<Button size="lg" class="text-lg px-8 py-4">
					Get Free Estimate
				</Button>
			</Link>
			<Link href={`tel:${PUBLIC_PHONE}`}>
				<Button variant="secondary" size="lg" class="text-lg px-8 py-4">
					Call {PUBLIC_PHONE}
				</Button>
			</Link>
		</div>
		
		<!-- Quick Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center">
			<div>
				<div class="text-2xl font-bold text-primary">100%</div>
				<div class="text-sm opacity-90">Satisfaction</div>
			</div>
			<div>
				<div class="text-2xl font-bold text-primary">500+</div>
				<div class="text-sm opacity-90">Happy Clients</div>
			</div>
			<div>
				<div class="text-2xl font-bold text-primary">24hr</div>
				<div class="text-sm opacity-90">Response Time</div>
			</div>
			<div>
				<div class="text-2xl font-bold text-primary">Insured</div>
				<div class="text-sm opacity-90">& Licensed</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Preview -->
<section class="py-16 md:py-20 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
				Choose What Your Home Needs
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Professional cleaning solutions with the latest equipment and eco-friendly methods
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each [
				{ 
					title: "Window Cleaning", 
					desc: "Crystal-clear windows inside and out with screen cleaning and streak-free professional results", 
					icon: "🪟",
					image: "/assets/services/window-cleaning-preview.webp", 
					href: "/services/window-cleaning",
					popular: true
				},
				{ 
					title: "Pressure Washing", 
					desc: "Professional high-pressure cleaning that removes dirt, grime, and stains from all exterior surfaces", 
					icon: "🚿",
					image: "/assets/services/pressure-washing-preview.webp",
					href: "/services/pressure-washing"
				},
				{ 
					title: "House Washing", 
					desc: "Complete exterior house cleaning to restore your home's curb appeal and protect your investment", 
					icon: "🏡",
					image: "/assets/services/house-washing-preview.webp",
					href: "/services/house-washing"
				},
				{ 
					title: "Gutter Cleaning", 
					desc: "Complete gutter cleaning and maintenance to protect your home from water damage", 
					icon: "🏘️",
					image: "/assets/services/gutter-cleaning-preview.webp",
					href: "/services/gutter-cleaning"
				},
				{ 
					title: "Roof Cleaning", 
					desc: "Safe roof cleaning to remove moss, algae, and debris while preserving your roof's integrity", 
					icon: "🏗️",
					image: "/assets/services/roof-cleaning-preview.webp",
					href: "/services/roof-cleaning"
				},
				{ 
					title: "Commercial Cleaning", 
					desc: "Professional cleaning services for businesses, storefronts, and commercial properties", 
					icon: "�",
					image: "/assets/services/commercial-cleaning-preview.webp",
					href: "/services/commercial-cleaning"
				}
			] as service}
				<div class="group bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300">
					{#if service.popular}
						<div class="absolute z-10 top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
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
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
					
					<div class="p-6">
						<div class="flex items-center mb-3">
							<div class="text-2xl mr-3">{service.icon}</div>
							<h3 class="text-xl font-semibold text-foreground font-[Cantarell]">
								{service.title}
							</h3>
						</div>
						<p class="text-muted-foreground leading-relaxed mb-4">
							{service.desc}
						</p>
						<Link href={service.href}>
							<Button variant="outline" class="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
								Learn More
							</Button>
						</Link>
					</div>
				</div>
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<Link href="/services">
				<Button size="lg" variant="outline" class="text-lg px-8">
					View All Services
				</Button>
			</Link>
		</div>
	</div>
</section>

<!-- Why Choose Us - 4 Key Values -->
<section class="py-16 md:py-20 bg-muted/30">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
				Our "You" Approach
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Four key values that make us the perfect solution for your property
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#if homepageData?.whyChooseUs}
				{#each homepageData.whyChooseUs as value}
					<div class="text-center group">
						<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
							{value.icon}
						</div>
						<h3 class="text-xl font-semibold text-foreground mb-3 font-[Cantarell]">
							{value.title}
						</h3>
						<p class="text-muted-foreground leading-relaxed">
							{value.description}
						</p>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>

<!-- Company Stats Infographic -->
<section class="py-16 md:py-20 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<Infographic
			title="Trusted by Your Neighbors"
			subtitle="Our track record speaks for itself with satisfied customers across Metro Vancouver"
			stats={homepageData?.companyStats || []}
		/>
	</div>
</section>

<!-- Before & After Results -->
<section class="py-16 md:py-20 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
				Let Results Do the Talking
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Experience the remarkable difference our professional cleaning services make. See real transformations from our satisfied customers.
			</p>
		</div>
		
		<div class="space-y-12">
			<!-- House Washing Before/After -->
			<BeforeAfterComparison
				beforeImage="/assets/before-after/house-washing-before.webp"
				afterImage="/assets/before-after/house-washing-after.webp"
				altText="House exterior cleaning transformation showing dramatic improvement"
				title="House Washing Transformation"
				className="mb-12"
			/>
			
			<!-- Driveway Pressure Washing Before/After -->
			<BeforeAfterComparison
				beforeImage="/assets/before-after/driveway-before.webp"
				afterImage="/assets/before-after/driveway-after.webp"
				altText="Driveway pressure washing before and after showing clean concrete"
				title="Driveway Pressure Washing Results"
			/>
		</div>
	</div>
</section>

<!-- Customer Reviews -->
<section bind:this={reviewsSection} class="py-16 md:py-20 bg-muted/30">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
				Don't Take Our Word For It
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				See what your neighbors are saying about our professional cleaning services
			</p>
		</div>
		
		{#if reviewsIframeVisible}
			<div class="bg-background rounded-lg shadow-sm border border-border p-4">
				<iframe
					class="lc_reviews_widget"
					src="https://reputationhub.site/reputation/widgets/review_widget/BlR0PXXBkzNERvcWVL4F"
					frameborder="0"
					scrolling="no"
					title="Customer reviews from ReputationHub"
					style="min-width: 100%; width: 100%; height: 600px;"
				></iframe>
			</div>
		{:else}
			<div class="flex items-center justify-center h-96 bg-background rounded-lg border border-border">
				<div class="text-center">
					<div class="text-4xl mb-4">⭐</div>
					<p class="text-muted-foreground">Loading customer reviews...</p>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- Enhanced 3-Step Process -->
<section class="py-16 md:py-20 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
				How We Transform Your Property
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Our proven three-step process ensures exceptional results every time
			</p>
		</div>
		
		<div class="relative">
			<!-- Connection line for desktop -->
			<div class="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30 -translate-y-1/2"></div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
				{#if homepageData?.process}
					{#each homepageData.process as step, index}
						<div class="relative text-center group">
							<!-- Step connection dots -->
							{#if index < homepageData.process.length - 1}
								<div class="md:hidden absolute left-1/2 bottom-0 w-px h-8 bg-gradient-to-b from-primary to-primary/30 transform -translate-x-1/2 translate-y-full"></div>
							{/if}
							
							<!-- Main step circle -->
							<div class="relative mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 z-10">
								<div class="text-3xl">{step.icon}</div>
								<div class="absolute -top-2 -right-2 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold shadow-md">
									{step.step}
								</div>
							</div>
							
							<div class="space-y-4">
								<h3 class="text-xl font-bold text-foreground font-[Cantarell]">
									{step.title}
								</h3>
								<p class="text-muted-foreground leading-relaxed">
									{step.description}
								</p>
								<div class="text-sm text-muted-foreground/80 italic border-l-2 border-primary/30 pl-4 ml-4 text-left">
									{step.details}
								</div>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
		
		<div class="text-center mt-16">
			<div class="inline-flex flex-col items-center space-y-4">
				<div class="text-sm font-medium text-primary uppercase tracking-wide">Ready to get started?</div>
				<Link href="/contact">
					<Button size="lg" class="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
						<span class="flex items-center space-x-2">
							<span>Start Your Free Estimate</span>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
<section class="py-16 md:py-20 bg-background">
	<div class="max-w-5xl mx-auto px-[6%]">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
				Ready to Transform Your Property?
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Get your free, comprehensive estimate in under 2 minutes. No hidden fees, no pressure.
			</p>
		</div>
		
		<QuoteForm 
			title="Get Your Free Estimate Now"
			subtitle="Tell us about your project and receive a comprehensive quote within 24 hours"
		/>
	</div>
</section>

<!-- Service-Location Combinations -->
<section class="py-16 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
				Popular Service Areas
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Find specialized cleaning services in your area with local expertise and guaranteed results
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- High-Value Service-Location Combinations -->
			<div class="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 group">
				<div class="flex items-center justify-between mb-3">
					<h3 class="font-semibold text-lg text-foreground">Window Cleaning Vancouver</h3>
					<svg class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</div>
				<p class="text-sm text-muted-foreground mb-4">Professional window cleaning services throughout Vancouver with same-day availability.</p>
				<Link href="/window-cleaning-vancouver" class="text-primary hover:text-primary/80 font-medium text-sm">
					Get Vancouver Window Cleaning →
				</Link>
			</div>
			
			<div class="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 group">
				<div class="flex items-center justify-between mb-3">
					<h3 class="font-semibold text-lg text-foreground">Pressure Washing Surrey</h3>
					<svg class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</div>
				<p class="text-sm text-muted-foreground mb-4">Expert driveway, patio and exterior pressure washing services in Surrey and Fraser Valley.</p>
				<Link href="/pressure-washing-surrey" class="text-primary hover:text-primary/80 font-medium text-sm">
					Get Surrey Pressure Washing →
				</Link>
			</div>
			
			<div class="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 group">
				<div class="flex items-center justify-between mb-3">
					<h3 class="font-semibold text-lg text-foreground">Gutter Cleaning Burnaby</h3>
					<svg class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</div>
				<p class="text-sm text-muted-foreground mb-4">Complete gutter cleaning and maintenance services throughout Burnaby and North Shore.</p>
				<Link href="/gutter-cleaning-burnaby" class="text-primary hover:text-primary/80 font-medium text-sm">
					Get Burnaby Gutter Cleaning →
				</Link>
			</div>
			
			<div class="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 group">
				<div class="flex items-center justify-between mb-3">
					<h3 class="font-semibold text-lg text-foreground">House Washing Richmond</h3>
					<svg class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</div>
				<p class="text-sm text-muted-foreground mb-4">Gentle soft wash house cleaning services for Richmond homes and properties.</p>
				<Link href="/house-washing-richmond" class="text-primary hover:text-primary/80 font-medium text-sm">
					Get Richmond House Washing →
				</Link>
			</div>
			
			<div class="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 group">
				<div class="flex items-center justify-between mb-3">
					<h3 class="font-semibold text-lg text-foreground">Roof Cleaning Vancouver</h3>
					<svg class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</div>
				<p class="text-sm text-muted-foreground mb-4">Safe moss removal and roof cleaning services with Vancouver weather expertise.</p>
				<Link href="/roof-cleaning-vancouver" class="text-primary hover:text-primary/80 font-medium text-sm">
					Get Vancouver Roof Cleaning →
				</Link>
			</div>
			
			<div class="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-200 group">
				<div class="flex items-center justify-between mb-3">
					<h3 class="font-semibold text-lg text-foreground">Deck Cleaning Langley</h3>
					<svg class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</div>
				<p class="text-sm text-muted-foreground mb-4">Professional deck and fence restoration services throughout Langley and surrounding areas.</p>
				<Link href="/deck-fence-cleaning-langley" class="text-primary hover:text-primary/80 font-medium text-sm">
					Get Langley Deck Cleaning →
				</Link>
			</div>
		</div>
		
		<div class="text-center mt-12">
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
<section class="bg-primary text-primary-foreground py-16">
	<div class="max-w-4xl mx-auto px-[6%] text-center">
		<h2 class="text-3xl md:text-4xl font-bold mb-4 font-[Cantarell]">
			100% Satisfaction Guaranteed
		</h2>
		<p class="text-lg mb-8 opacity-90 leading-relaxed">
			We stand behind our work with a complete satisfaction guarantee on all services.<br/>
			<strong>Work done right, smiles delivered.</strong>
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Link href="/contact">
				<Button variant="secondary" size="lg" class="text-lg px-8">
					Get Your Free Quote
				</Button>
			</Link>
			<Link href={`tel:${PUBLIC_PHONE}`}>
				<Button variant="secondary" size="lg" class="text-lg px-8">
					Call {PUBLIC_PHONE}
				</Button>
			</Link>
		</div>
	</div>
</section>
