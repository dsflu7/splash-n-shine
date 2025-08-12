<script lang="ts">
	import { PUBLIC_COMPANY_NAME, PUBLIC_PHONE } from "$env/static/public";
	import BeforeAfterComparison from "$lib/components/BeforeAfterComparison.svelte";
	import { Button } from "$lib/components/ui/button";
	import Link from "$lib/components/Link.svelte";
	import QuoteForm from "$lib/components/QuoteForm.svelte";
	import Infographic from "$lib/components/Infographic.svelte";
	import Testimonials from "$lib/components/Testimonials.svelte";
</script>

<svelte:head>
	<title>Professional Exterior Cleaning Services | {PUBLIC_COMPANY_NAME}</title>
	<meta name="description" content="Let your home shine with professional pressure washing, house washing, window cleaning, and more. Expert results with 100% satisfaction guarantee. Free estimates!" />
	<meta name="keywords" content="exterior cleaning, pressure washing, house washing, window cleaning, gutter cleaning, roof cleaning, Metro Vancouver" />
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
				<Button variant="outline" size="lg" class="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
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
					title: "Pressure Washing", 
					desc: "Professional service that removes dirt, grime, and stains from driveways, sidewalks, and exterior surfaces", 
					icon: "🚿",
					image: "/assets/services/pressure-washing-preview.webp",
					href: "/services/pressure-washing",
					popular: true
				},
				{ 
					title: "Window Cleaning", 
					desc: "Crystal-clear windows inside and out with screen cleaning and sill maintenance", 
					icon: "🪟",
					image: "/assets/services/window-cleaning-preview.webp", 
					href: "/services/window-cleaning"
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
			{#each [
				{
					icon: "⏰",
					title: "Time-saving",
					description: "You save time while we restore your property promptly without losing attention to detail."
				},
				{
					icon: "🛡️",
					title: "Equipped & Safe", 
					description: "We carry the latest cleaning equipment and eco-friendly products delivered by insured professionals."
				},
				{
					icon: "🎯",
					title: "Experienced",
					description: "Backed by years of experience and expertise in the best exterior cleaning and maintenance practices."
				},
				{
					icon: "😊",
					title: "Friendly & Reliable",
					description: "Committed to customer satisfaction with a smile. We're proud of our customer reviews."
				}
			] as value}
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
		</div>
	</div>
</section>

<!-- Company Stats Infographic -->
<section class="py-16 md:py-20 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<Infographic
			title="Trusted by Your Neighbors"
			subtitle="Our track record speaks for itself with satisfied customers across Metro Vancouver"
			stats={[
				{
					value: "500+",
					label: "Happy Customers",
					icon: "😊"
				},
				{
					value: "5,000+",
					label: "Projects Completed", 
					icon: "✅"
				},
				{
					value: "100%",
					label: "Satisfaction Rate",
					icon: "⭐"
				},
				{
					value: "24hr",
					label: "Response Time",
					icon: "⚡"
				}
			]}
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

<!-- Customer Testimonials -->
<Testimonials
	title="Don't Take Our Word For It"
	subtitle="See what your neighbors are saying about our professional cleaning services"
	testimonials={[
		{
			name: "Sarah Chen",
			location: "Vancouver",
			service: "House Washing",
			rating: 5,
			text: "Amazing results! My house looks brand new again. The team was professional, punctual, and the results exceeded my expectations. Highly recommend!",
			date: "2 weeks ago"
		},
		{
			name: "Mike Johnson", 
			location: "Surrey",
			service: "Pressure Washing",
			rating: 5,
			text: "Best pressure washing service in the area. They cleaned my driveway, walkway, and deck. Everything looks incredible - like new construction!",
			date: "1 month ago"
		},
		{
			name: "Jennifer Liu",
			location: "Richmond",
			service: "Window Cleaning", 
			rating: 5,
			text: "Crystal clear windows, inside and out. They even cleaned the screens and sills. Very thorough work and competitive pricing. Will use again!",
			date: "3 weeks ago"
		},
		{
			name: "David Thompson",
			location: "Burnaby", 
			service: "Gutter Cleaning",
			rating: 5,
			text: "Excellent gutter cleaning service. They removed all the debris and even identified a small issue before it became a problem. Great value!",
			date: "1 month ago"
		},
		{
			name: "Lisa Rodriguez",
			location: "North Vancouver",
			service: "Multiple Services",
			rating: 5,
			text: "Used them for pressure washing and window cleaning. Outstanding work on both! Professional, friendly, and the results speak for themselves.",
			date: "2 weeks ago"
		},
		{
			name: "Robert Kim",
			location: "West Vancouver", 
			service: "Roof Cleaning",
			rating: 5,
			text: "They safely cleaned moss and debris from my roof. Very careful work and fair pricing. My roof looks great and should last much longer now!",
			date: "3 weeks ago"
		}
	]}
	className="bg-muted/30"
/>

<!-- Simple 3-Step Process -->
<section class="py-16 md:py-20 bg-muted/30">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
				Simple Steps to Get Started
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Our streamlined process makes it easy to get professional results for your property
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
			{#each [
				{
					step: "01",
					title: "Get A Free Estimate", 
					description: "Fill out your request or call us to get your comprehensive free estimate."
				},
				{
					step: "02",
					title: "Get Scheduled",
					description: "Once you approve your quote, we'll work with you to find the perfect time."
				},
				{
					step: "03",
					title: "Relax",
					description: "Work done right, results delivered. Your satisfaction is guaranteed."
				}
			] as step}
				<div class="text-center group">
					<div class="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
						{step.step}
					</div>
					<h3 class="text-xl font-semibold text-foreground mb-3 font-[Cantarell]">
						{step.title}
					</h3>
					<p class="text-muted-foreground leading-relaxed">
						{step.description}
					</p>
				</div>
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<Link href="/contact">
				<Button size="lg" class="text-lg px-8">
					Start Your Free Estimate
				</Button>
			</Link>
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
				<Button variant="outline" size="lg" class="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
					Call {PUBLIC_PHONE}
				</Button>
			</Link>
		</div>
	</div>
</section>
