<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { isMobile, servicesPageNavigating } from '$lib/utils/stores';
	import type { PageData } from './$types';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import { page } from '$app/state';
	import { contactInfo } from '$lib/data/locations';

	// Critical imports only - defer heavy components
	import heroAddr from '$lib/icons/landingHero.webp?enhanced';
	import { serviceImagesDict } from '$lib/icons/services/service_images';
	import { serviceData, services } from '$lib/data/services';

	// Lazy load heavy dependencies with $state for reactivity
	let Button: any = $state();
	let Accordion: any = $state();
	let CaretDown: any = $state();
	let DoubleArrowDown: any = $state();
	let PhoneCall: any = $state();
	let team: any = $state();
	let aboutbg: any = $state();
	let fadeIn: any = $state();
	let Image: any = $state();
	let { data }: { data: PageData } = $props();

	// Optimize state management for performance
	let initScroll = $state(0);
	let servicesSection: HTMLElement | undefined = $state();
	let reviewsSection: HTMLElement | undefined = $state();

	// Component loading states
	let componentsLoaded = $state(false);

	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	// Optimize intersection observer with proper cleanup
	onMount(() => {
		// Inject ReputationHub reviews widget script once
		const existing = document.querySelector(
			'script[src="https://reputationhub.site/reputation/assets/review-widget.js"]'
		) as HTMLScriptElement | null;
		if (!existing) {
			const s = document.createElement('script');
			s.type = 'text/javascript';
			s.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
			document.head.appendChild(s);
		}

		// Load structured data asynchronously for better performance
		setTimeout(async () => {
			const { injectStructuredData } = await import('$lib/data/structured-data');
			injectStructuredData();
		}, 200);

		// Defer loading of heavy components after initial render
		setTimeout(async () => {
			const [buttonModule, accordionModule, iconsModule, animsModule] = await Promise.all([
				import('$lib/components/ui/button/button.svelte'),
				import('$lib/components/ui/accordion'),
				import('svelte-radix'),
				import('$lib/utils/anims.js')
			]);

			Button = buttonModule.default;
			Accordion = accordionModule;
			CaretDown = iconsModule.CaretDown;
			DoubleArrowDown = iconsModule.DoubleArrowDown;
			fadeIn = animsModule.fadeIn;

			// Also load other dependencies
			const [teamModule, aboutModule, phoneModule, imageModule] = await Promise.all([
				import('$lib/icons/team.jpg?enhanced'),
				import('$lib/icons/aboutbg.jpg?enhanced'),
				import('$lib/icons/PhoneCall.svelte'),
				import('$lib/components/Image.svelte')
			]);

			team = teamModule.default;
			aboutbg = aboutModule.default;
			PhoneCall = phoneModule.default;
			Image = imageModule.default;

			componentsLoaded = true;
		}, 100); // Small delay to allow hero to render first

		// Optimize scroll behavior for prerendered content
		if (page.url.toString().includes('services')) {
			// Use requestAnimationFrame for better performance
			requestAnimationFrame(() => {
				servicesSection?.scrollIntoView({ behavior: 'smooth' });
			});
		}

		return () => {
			// no-op
		};
	});

	$effect(() => {
		if ($servicesPageNavigating || page.url.toString().includes('services')) {
			$servicesPageNavigating = false;
		}
	});
</script>

<svelte:head>
	<title>Professional Cleaning Services in Vancouver | Splash n' Shine</title>
	<meta
		name="description"
		content="Top-rated professional exterior cleaning in Vancouver and the Lower Mainland. Pressure washing, soft washing, roof, gutter, and window cleaning. Free quote."
	/>
	<meta name="keywords" content="professional cleaning services Vancouver, pressure washing, soft washing, roof cleaning, gutter cleaning, window washing" />
	<meta property="og:title" content="Professional Cleaning Services in Vancouver | Splash n' Shine" />
	<meta
		property="og:description"
		content="Top-rated professional exterior cleaning in Vancouver and the Lower Mainland. Pressure washing, soft washing, roof, gutter, and window cleaning. Free quote."
	/>
	<meta property="og:image" content={`${domain}/assets/logo.png`} />
	<meta property="og:url" content={`${domain}/`} />
	<meta property="og:type" content="website" />
	<link rel="canonical" href={`${domain}/`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Professional Cleaning Services in Vancouver | Splash n' Shine" />
	<meta name="twitter:description" content="Top-rated professional exterior cleaning in Vancouver and the Lower Mainland. Pressure washing, soft washing, roof, gutter, and window cleaning. Free quote." />
	<meta name="twitter:image" content={`${domain}/assets/logo.png`} />
</svelte:head>

<!-- Preload critical hero image for faster LCP -->
<link rel="preload" as="image" href="/assets/landing/1.webp" fetchpriority="high" />

<svelte:window bind:scrollY={initScroll} />

{#snippet desktopServiceBlock(serviceKey: string, i: number)}
	{@const service = serviceData[serviceKey]}
	<div class="mb-6 flex flex-col gap-4 text-center">
		<h3 class="font-alatsi text-3xl text-primary-foreground">{service.title}</h3>

		<button
			onclick={() => goto(`/services/${serviceKey}`)}
			class="aspect-square overflow-hidden rounded object-cover"
			aria-label={`Learn more about ${service.title}`}
		>
			<a
				href={`${domain}/services/${serviceKey}`}
				onclick={(e) => {
					e.preventDefault();
					goto(`/services/${serviceKey}`);
				}}
				class="block"
				aria-label={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
			>
				<!-- <Image
					url={`/assets/services/${serviceKey}/1.webp`}
					description={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
					class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
					width="480"
					height="480"
					quality={50}
				/> -->
				<enhanced:img
					class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
					src={serviceImagesDict[serviceKey]}
					sizes="640px"
					alt={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
				/>
			</a>
		</button>

		<span class="font-cantarell text-[#00000099]">{service.shortDescription}</span>
		<a
			href={`${domain}/services/${services[i]}`}
			onclick={(e) => {
				e.preventDefault();
				goto(`/services/${serviceKey}`);
			}}
			class="py-2 text-xs italic hover:underline">Read more...</a
		>
	</div>
{/snippet}

{#snippet mobileServiceBlock(serviceKey: string, i: number)}
	{@const service = serviceData[serviceKey]}
	<Accordion.Root class="mb-2 w-[90vw]" type="multiple" value={!i ? [serviceKey] : []}>
		<Accordion.Item value={serviceKey}>
			<Accordion.Trigger class="group relative w-full rounded-lg bg-primary/10 px-4 py-3 text-left">
				<div class="flex w-full items-center justify-between">
					<h3 class="font-alatsi text-xl text-primary-foreground">
						{@html service.title.split('|').join('<br>')}
					</h3>
				</div>
			</Accordion.Trigger>
			<Accordion.Content class="px-1 pt-2">
				<div class="flex flex-col gap-3">
					<div class="aspect-video h-48 max-h-48 w-full overflow-hidden rounded">
						<enhanced:img
							class="h-full w-full object-cover"
							src={serviceImagesDict[serviceKey]}
							sizes="400px"
							alt={`${service.title} service highlight - professional cleaning demonstration by Splash n' Shine`}
						/>
					</div>
					<p class="py-1 font-cantarell text-sm text-[#00000099]">{service.shortDescription}</p>
					<div class="mt-1 flex justify-between gap-2">
						<Button
							variant="outline"
							size="sm"
							onclick={() => goto(`/services/${serviceKey}`)}
							class="min-h-[44px] min-w-[44px] flex-1"
						>
							<a
								href={`${domain}/services/${serviceKey}`}
								onclick={(e) => {
									e.preventDefault();
									goto(`/services/${serviceKey}`);
								}}
								class="flex h-full w-full items-center justify-center text-left"
							>
								<span class="block truncate">
									Learn More about {serviceKey
										.split('-')
										.map((v) => v.charAt(0).toUpperCase() + v.slice(1))
										.join(' ')}
								</span>
							</a>
						</Button>
						<Button
							size="sm"
							onclick={() => goto('/contact')}
							class="min-h-[44px] min-w-[44px] flex-none"
						>
							<a
								href={`${domain}/contact`}
								onclick={(e) => {
									e.preventDefault();
									goto('/contact');
								}}
								class="flex h-full w-full items-center justify-center"
							>
								Get Quote
							</a>
						</Button>
					</div>
				</div>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
{/snippet}

<main class="flex w-full flex-col items-center gap-16 pb-48 lg:gap-16">
	<!-- Critical hero section - highest priority loading -->
	<section
		class="relative flex h-[85vh] w-full flex-row justify-evenly gap-0 overflow-hidden object-cover text-background"
	>
		<!-- Hero image loading placeholder -->
		<div
			class="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-600 to-blue-800"
			style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);"
		></div>

		<!-- Optimized hero image with maximum priority -->
		<Image
			url={heroAddr}
			description="Professional exterior cleaning service in action - Splash n' Shine"
			class="relative z-10 h-full w-full object-cover"
			size={[1200, 1600, 1920, 2560, 3200]}
			sizes="100vw"
			quality={60}
			format="avif"
			width="3522"
			height="2140"
			fetchpriority="high"
			loading="eager"
			decoding="sync"
		/>

		<div class="absolute z-20 h-full w-full bg-black/30"></div>
		<div
			class="absolute left-1/2 top-1/2 z-30 mt-12 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center"
		>
			<h1 class="text-shadow text-center text-[6vh] font-semibold md:text-[10vw]">
				Professional<br />Cleaning Services
			</h1>
			<h2 class="text-shadow mb-8 text-center text-[3vh] font-light md:text-[4vw]">
				Vancouver & Lower Mainland
			</h2>

			<!-- Critical call-to-action - load immediately -->
			<div class="flex flex-col gap-4 md:flex-row">
				<a
					href="tel:{contactInfo.phone}"
					class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
				>
					Call Now: {contactInfo.phone}
				</a>
				<a
					href="/contact"
					class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-black ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
				>
					Get Free Quote
				</a>
			</div>
		</div>
	</section>

	<!-- Defer non-critical content loading -->
	{#if componentsLoaded}
		<section class="flex w-full flex-col items-center gap-6 px-4 py-8">
			<h2
				class="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight md:text-5xl lg:text-4xl"
			>
				Transform Your Home with Professional Cleaning Services
			</h2>
			<div class="my-2 h-1 w-24 rounded-full bg-primary"></div>
			<p class="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
				Experience the difference professional residential cleaning services make. Our expert
				cleaning team delivers exceptional results that will enhance your property's curb appeal and
				value.
			</p>
		</section>

		<!-- About -->
		<section class="container mx-auto flex flex-col items-center gap-8 px-4 py-12 lg:flex-row">
			<div class="w-full lg:w-1/2">
				<Image
					url="/assets/landing/team.jpg"
					description="Splash n' Shine professional cleaning team in Vancouver"
					class="h-[60vh] w-full rounded-lg object-cover shadow-xl saturate-50"
					width="800"
					height="600"
					size={[480, 640, 800]}
					sizes="(min-width: 1024px) 50vw, 100vw"
					quality={65}
					format="avif"
				/>
				<!-- <enhanced:img
				src={team}
				sizes="640px"
				alt="Splash n' Shine professional cleaning team in Vancouver"
				class="h-[60vh] w-full rounded-lg object-cover shadow-xl saturate-50"
			/> -->
			</div>
			<div class="w-full space-y-6 lg:w-1/2">
				<h2 class="text-3xl font-semibold">
					Vancouver's Trusted Professional Cleaning Services Experts
				</h2>
				<div class="h-1 w-20 rounded-full bg-primary"></div>
				<p class="text-muted-foreground">
					Welcome to Splash n' Shine, your premier professional cleaning services provider in the
					Greater Vancouver area. With years of expertise in <a
						href="{domain}/services/pressure-washing"
						class="rounded bg-primary/30 px-1 text-black">pressure washing services</a
					>
					and
					<a href="{domain}/services/pressure-washing" class="rounded bg-primary/30 px-1 text-black"
						>soft washing services</a
					>, we've built our reputation on delivering exceptional results for both residential
					cleaning and commercial cleaning services.
				</p>
				<p class="text-muted-foreground">
					Serving <a
						href="{domain}/locations/vancouver"
						class="rounded bg-primary/30 px-1 text-black">Vancouver</a
					>,
					<a href="{domain}/locations/surrey" class="rounded bg-primary/30 px-1 text-black"
						>Surrey</a
					>, and the entire Lower Mainland, our professional cleaning team specializes in
					comprehensive residential cleaning services, including
					<a href="{domain}/services/roof-cleaning" class="rounded bg-primary/30 px-1 text-black"
						>roof cleaning services</a
					>,
					<a href="{domain}/services/gutter-cleaning" class="rounded bg-primary/30 px-1 text-black"
						>gutter cleaning services</a
					>, and
					<a href="{domain}/services/window-washing" class="rounded bg-primary/30 px-1 text-black"
						>window washing services</a
					>.
				</p>
				<p class="text-muted-foreground">
					What sets our cleaning services apart is our commitment to using cutting-edge equipment
					and eco-friendly cleaning solutions, ensuring your property receives the professional
					cleaning care it deserves while protecting the environment.
				</p>
				<Button onclick={() => goto('/contact')} class="mt-4 min-h-[44px] min-w-[44px]">
					<a
						href={`${domain}/contact`}
						onclick={(e) => {
							e.preventDefault();
							goto('/contact');
						}}
						class="flex h-full w-full items-center justify-center"
					>
						Schedule a Free Consultation
					</a>
				</Button>
			</div>
		</section>

		<!-- services -->
		<section
			class="flex scroll-mt-32 flex-col items-center gap-12 px-4 pb-8 lg:gap-16"
			id="services"
			bind:this={servicesSection}
		>
			<h2 class="text-center text-5xl font-semibold leading-10">
				Professional Cleaning Services We Offer
			</h2>

			<div class="grid w-full items-end gap-2 lg:grid-cols-3">
				{#each Object.keys(serviceData) as serviceKey, i}
					{#if !$isMobile}
						{@render desktopServiceBlock(serviceKey, i)}
					{:else}
						{@render mobileServiceBlock(serviceKey, i)}
					{/if}
				{/each}
			</div>
		</section>

		<!-- Phone CTA -->
		<section class="relative flex h-[60vh] w-full items-center justify-center py-24 text-white">
			<div class="absolute inset-0 z-0">
				<Image
					url="/assets/landing/2.jpg"
					description="Professional exterior cleaning background"
					class="h-full w-full object-cover"
					width="1920"
					height="1080"
					size={[960, 1280, 1600, 1920]}
					sizes="100vw"
					quality={60}
					format="avif"
				/>
				<div class="absolute inset-0 bg-secondary-foreground/65">&nbsp;</div>
			</div>
			<div class="container relative z-10 mx-auto my-auto text-center">
				<h2 class="mb-4 text-4xl font-semibold">
					Ready to Transform Your Property with Professional Cleaning Services?
				</h2>
				<p class="mb-8 text-xl opacity-90">
					Call now for a free consultation and cleaning estimate
				</p>
				<a
					href="tel:778-804-5911"
					class="group inline-flex items-center gap-4 text-[8vw] font-bold hover:opacity-90"
				>
					<PhoneCall
						class="h-auto w-[6vw] transition-transform group-hover:scale-110"
						color="white"
					/>
					{contactInfo.phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
				</a>
			</div>
		</section>

		<!-- testimonials replaced with external widget -->
		<section bind:this={reviewsSection} class="flex w-full flex-col gap-8 overflow-hidden pb-16 text-center lg:gap-10">
			<h2 class="text-center text-4xl font-semibold leading-10">Testimonials</h2>
			<div class="px-4 md:px-8 lg:px-16">
				<iframe
					class="lc_reviews_widget"
					src="https://reputationhub.site/reputation/widgets/review_widget/BlR0PXXBkzNERvcWVL4F"
					frameborder="0"
					scrolling="no"
					title="Customer reviews from ReputationHub"
					style="min-width: 100%; width: 100%;"
				></iframe>
			</div>
		</section>
	{/if}
</main>

<style>
	.text-shadow {
		text-shadow: 2px 3px 9px rgba(0, 0, 0, 0.59);
	}
</style>
