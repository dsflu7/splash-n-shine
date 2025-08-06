<script lang="ts">
	import '../app.css';
	import { fade, slide } from 'svelte/transition';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { CaretUp } from 'svelte-radix';
	import FloatingShare from '$lib/components/FloatingShare.svelte';
	import { isMobile } from '$lib/utils/stores';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let scrollY = $state(0);
	let { children }: Props = $props();

	const metadata = {
		title: 'Splash n Shine',
		description:
			'Expert Soft Wash & Pressure Washing in Vancouver & Surrey! We clean roofs, gutters, siding, windows & driveways ',
		keywords:
			'pressure washing, soft wash, roof cleaning, gutter cleaning, siding cleaning, window cleaning, driveway cleaning, Vancouver, Surrey, British Columbia, exterior cleaning, house washing, power washing, professional cleaning, residential cleaning, commercial cleaning',
		url: 'https://splashnshine.ca/'
	};
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
	<link rel="manifest" href="/favicon/manifest.json" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
	<meta name="theme-color" content="#e0b23d" />

	<meta name="msvalidate.01" content="B6452AF26DC66424390A9A5C30B9741C" />
	<meta name="google-site-verification" content="DXvftpzIopYp2VylaucB6Z-fTwgSBnj2isOeYsu29Yo" />

	<!-- Microsoft Clarity - Load asynchronously for better performance -->
	<script>
	/* onMount(() => {
		// Register service worker for caching critical resources
		if ('serviceWorker' in navigator && browser) {
			navigator.serviceWorker.register('/sw.js').catch(console.error);
		}
	}); */		// Defer non-critical scripts for better performance
		window.addEventListener('load', function() {
			// Microsoft Clarity - only load in production, delayed for better performance
			if (location.hostname !== 'localhost') {
				setTimeout(function() {
					(function (c, l, a, r, i, t, y) {
						c[a] =
							c[a] ||
							function () {
								(c[a].q = c[a].q || []).push(arguments);
							};
						t = l.createElement(r);
						t.async = 1;
						t.src = 'https://www.clarity.ms/tag/' + i;
						y = l.getElementsByTagName(r)[0];
						y.parentNode.insertBefore(t, y);
					})(window, document, 'clarity', 'script', 'sizv7mjncs');
				}, 3000); // 3 second delay after page load
			}
		});
	</script>

	<!-- Google Analytics - Optimized loading -->
	<script>
		// Load Google Analytics after page load + 2 seconds for better performance - only in production
		if (location.hostname !== 'localhost') {
			window.addEventListener('load', function() {
				setTimeout(function() {
					const script = document.createElement('script');
					script.async = true;
					script.src = 'https://www.googletagmanager.com/gtag/js?id=G-S6214ND4P9';
					script.onerror = function() {
						console.log('Google Analytics failed to load');
					};
					document.head.appendChild(script);
					
					script.onload = function() {
						window.dataLayer = window.dataLayer || [];
						function gtag() { dataLayer.push(arguments); }
						gtag('js', new Date());
						gtag('config', 'G-S6214ND4P9');
					};
				}, 2000); // 2 second delay after page load
			});
		}
	</script>

</svelte:head>

<svelte:window bind:scrollY />

<Toaster />

{#if scrollY}
	<div transition:slide={{ axis: 'x', duration: 500 }}>
		<FloatingShare mobile={$isMobile} />
	</div>
{/if}

<div class="flex h-screen flex-col justify-between">
	<Header />
	<main class="">
		{@render children?.()}
	</main>
	<Footer />
</div>

{#if scrollY !== 0}
	<button
		transition:fade
		class="group fixed bottom-4 right-4 z-[999] rounded-full bg-primary/90 object-cover p-4 shadow-lg transition-all duration-500 hover:-translate-y-1"
		aria-label="Scroll to top"
		onclick={() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}}
	>
		<CaretUp class="scale-125 text-foreground transition-all duration-500 group-hover:scale-110" />
	</button>
{/if}

<!-- Optimized font loading - use local fonts with fallbacks -->
<style>
	/* Ensure fonts are loaded efficiently with local files and fallbacks */
	@font-face {
		font-family: 'Alatsi';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url('/fonts/alatsi.woff2') format('woff2'),
			 url('https://fonts.gstatic.com/s/alatsi/v13/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUZiZQ.woff2') format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	
	@font-face {
		font-family: 'Cantarell';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url('/fonts/cantarell.woff2') format('woff2'),
			 url('https://fonts.gstatic.com/s/cantarell/v15/B50WF_CzZFOtaOyW_Ty0z-3_5X01Ng.woff2') format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	
	/* Add font fallbacks for better performance */
	:global(body) {
		font-family: 'Cantarell', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	}
</style>
