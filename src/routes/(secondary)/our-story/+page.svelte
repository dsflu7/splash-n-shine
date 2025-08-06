<script lang="ts">
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import Image from '$lib/components/Image.svelte';
	import { fadeIn } from '$lib/utils/anims';
	import { page } from '$app/stores';

	// Derive domain for absolute URLs
	const domain = `${$page.url.protocol}//${$page.url.host}`;
</script>

<svelte:head>
	<title>About Our Story | Splash n' Shine Vancouver Cleaning Experts</title>
	<meta
		name="description"
		content="Discover how Splash n' Shine became Vancouver's trusted exterior cleaning company. Learn about our commitment to quality, eco-friendly methods, and customer satisfaction."
	/>
	<meta name="keywords" content="Splash n' Shine story, exterior cleaning company Vancouver, eco-friendly cleaning, professional cleaning background, family-owned cleaning business" />
	<!-- Open Graph tags -->
	<meta property="og:title" content="About Our Story | Splash n' Shine Vancouver Cleaning Experts" />
	<meta
		property="og:description"
		content="Discover how Splash n' Shine became Vancouver's trusted exterior cleaning company. Learn about our commitment to quality, eco-friendly methods, and customer satisfaction."
	/>
	<meta property="og:image" content={`${domain}/assets/logo.png`} />
	<meta property="og:url" content={`${domain}/our-story`} />
	<meta property="og:type" content="website" />
	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Our Story | Splash n' Shine Vancouver Cleaning Experts" />
	<meta name="twitter:description" content="Discover how Splash n' Shine became Vancouver's trusted exterior cleaning company. Learn about our commitment to quality, eco-friendly methods, and customer satisfaction." />
	<meta name="twitter:image" content={`${domain}/assets/logo.png`} />
	<link rel="canonical" href={`${domain}/our-story`} />
</svelte:head>

<!-- Structured Data for Our Story Page -->
{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "About Our Story | Splash n' Shine Vancouver Cleaning Experts",
			"description": "Discover how Splash n' Shine became Vancouver's trusted exterior cleaning company. Learn about our commitment to quality, eco-friendly methods, and customer satisfaction.",
			"url": "${domain}/our-story",
			"provider": {
				"@type": "Organization",
				"name": "Splash n' Shine",
				"url": "${domain}",
				"logo": {
					"@type": "ImageObject",
					"url": "${domain}/assets/logo.png"
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

<main use:fadeIn class="mt-24 lg:mt-16">
	<!-- landing -->
	<section class="flex flex-col items-center justify-center gap-16 bg-black px-10 py-28 lg:px-36">
		<div class="text-center font-[Cantarell] text-white">
			<div class="foot-logo aspect-square h-[40vh]">
				<!-- <Logo class="w-full h-auto" /> -->
				<Image url="/assets/logo.png" description="company logo header" size={[96,128,192]} sizes="25vh" width="192" height="192" quality={72} />
			</div>
			<h4 class="text-xl font-semibold">{PUBLIC_COMPANY_NAME}</h4>
		</div>
		<div class="text-center text-4xl font-semibold text-[#FFFFFFE0]">
			Welcome to Splash N Shine, where passion meets expertise to create immaculate exteriors that
			transform properties into pristine showcases.
		</div>
	</section>

	<section class="p-10 font-[Cantarell] leading-10 lg:p-36">
		<h1 class="mb-4 text-center text-2xl font-bold">Our Story</h1>

		Our journey began with a simple vision: to redefine exterior cleaning by offering not just standard
		washing, but premium cleaning solutions that enhance durability, appearance, and value. Based in
		the heart of the Lower Mainland, Splash N Shine is proud to be one of the best exterior cleaning
		service providers in Vancouver and surrounding areas, specializing in comprehensive cleaning
		solutions for homes, businesses, and commercial properties.<br />
		<br />
		With our professional team of trained specialists, we bring unmatched expertise to every project.
		We deliver exceptional results using high-grade eco-friendly cleaning solutions and cutting-edge
		techniques, ensuring surfaces that not only look stunning but maintain their integrity for years
		to come. <br />
		<br />
		At Splash N Shine, we believe every property tells a story. Whether you're looking for
		comprehensive house cleaning, professional roof cleaning, commercial cleaning services, expert
		window washing, thorough post-construction cleanup, or reliable gutter cleaning, we offer
		solutions tailored to your specific needs. Each project reflects our commitment to quality and
		enhances the environment it occupies, creating a perfect blend of cleanliness and beauty. <br />
		<br />
		Our services extend throughout the Greater Vancouver area, including Surrey, Richmond, Burnaby,
		Coquitlam, North Vancouver, Delta, New Westminster, Langley, White Rock, and Abbotsford. We take
		pride in our ability to adapt our techniques to the specific challenges of each region, from the
		salt air of oceanfront properties in White Rock to the agricultural environments of Langley and
		Abbotsford. <br />
		<br />
		More than just a cleaning company, we are restoration specialists, environmental stewards, and
		experts in transforming and maintaining property exteriors. Our commitment to using biodegradable,
		non-toxic cleaning solutions ensures that we protect not only your property but also your family
		and the environment. <br />
		<br />
		Join us on this journey, and let Splash N Shine bring your property back to its original glory,
		one exceptional cleaning service at a time.<br />
	</section>
</main>
