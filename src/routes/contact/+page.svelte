<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { fadeIn } from '$lib/utils/anims';
	import { page } from '$app/stores';

	// Derive domain for absolute URLs
	const domain = `${$page.url.protocol}//${$page.url.host}`;
</script>

<svelte:head>
	<title>Contact Us for Free Quotes | Splash n' Shine Vancouver</title>
	<meta
		name="description"
		content="Get free quotes for professional exterior cleaning in Vancouver. Contact our expert team for house washing, roof cleaning, and pressure washing services."
	/>
	<meta name="keywords" content="free cleaning quote Vancouver, exterior cleaning estimate, house washing consultation, pressure washing quote, contact cleaning professionals" />
	<!-- Open Graph tags -->
	<meta property="og:title" content="Contact Us for Free Quotes | Splash n' Shine Vancouver" />
	<meta
		property="og:description"
		content="Get free quotes for professional exterior cleaning in Vancouver. Contact our expert team for house washing, roof cleaning, and pressure washing services."
	/>
	<meta property="og:image" content={`${domain}/assets/logo.png`} />
	<meta property="og:url" content={`${domain}/contact`} />
	<meta property="og:type" content="website" />
	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Contact Us for Free Quotes | Splash n' Shine Vancouver" />
	<meta name="twitter:description" content="Get free quotes for professional exterior cleaning in Vancouver. Contact our expert team for house washing, roof cleaning, and pressure washing services." />
	<meta name="twitter:image" content={`${domain}/assets/logo.png`} />
	<link rel="canonical" href={`${domain}/contact`} />
</svelte:head>

<!-- Structured Data for Contact Page -->
{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ContactPage",
			"name": "Contact Us for Free Quotes | Splash n' Shine Vancouver",
			"description": "Get free quotes for professional exterior cleaning in Vancouver. Contact our expert team for house washing, roof cleaning, and pressure washing services.",
			"url": "${domain}/contact",
			"mainEntity": {
				"@type": "LocalBusiness",
				"name": "Splash n' Shine",
				"url": "${domain}",
				"contactPoint": {
					"@type": "ContactPoint",
					"contactType": "customer service",
					"availableLanguage": "English"
				},
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Vancouver",
					"addressRegion": "BC", 
					"addressCountry": "CA"
				}
			}
		}
	</script>
`}

<main use:fadeIn class="mt-24 flex w-full flex-col items-center pb-36 lg:mt-36">
	<section class="flex w-full flex-col items-center gap-6 px-4 py-8">
		<h1
			class="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight md:text-5xl lg:text-4xl"
		>
			Contact us | Get a Free Quote
		</h1>
		<div class="my-2 h-1 w-24 rounded-full bg-primary"></div>
		<p class="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
			We'd love to hear from you! Whether you have questions about our services, want to schedule a
			consultation, or just want to say hi, feel free to reach out.
		</p>
	</section>

	<section class="w-full">
		<ContactForm />
	</section>
</main>
