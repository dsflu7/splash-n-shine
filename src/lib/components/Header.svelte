<script lang="ts">
	import Instagram from '../icons/Instagram.svelte';
	import PhoneCall from '../icons/PhoneCall.svelte';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import { scrollThreshold } from '$lib/utils/animations.store';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { isMobile, quoteDialogOpen, servicesPageNavigating } from '$lib/utils/stores';
	import { slide } from 'svelte/transition';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import { Cross2, HamburgerMenu } from 'svelte-radix';
	import { services } from '$lib/data/services';
	import { contactInfo, locationIds } from '$lib/data/locations';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import DropdownItem from '$lib/components/DropdownItem.svelte';
	import Image from './Image.svelte';

	import logoAddr from '$lib/icons/logo.png?enhanced';

	let initScroll = $state(0);
	let isLandingPage = $derived(page.route.id === '/');

	let mobileNavButtonWidth: number = $state(0);
	let mobileNavOpen = $state(false);
	let firstLoad = $state(true);

	$effect(() => {
		$isMobile = mobileNavButtonWidth !== 0;
	});

	let colorState = $derived(!$isMobile ? initScroll < $scrollThreshold && isLandingPage : false);
	let domain = $derived(`${page.url.protocol}//${page.url.host}`);

	onMount(() => {
		firstLoad = false;
	});
</script>

<svelte:window bind:scrollY={initScroll} />

<nav class="realtive">
	<div class="fixed left-[6%] top-10 z-[55] aspect-square h-16 w-16">
		<a
			href={domain}
			onclick={(e) => {
				e.preventDefault();
				goto('/');
			}}
			aria-label="Go to home page"
		>
			<!-- <Logo class="h-full w-full" /> -->
			<Image url="/assets/logo.png" description="company logo header" width="64px" height="64px" />
			<!-- <enhanced:img sizes="64px" src={logoAddr} alt="company logo header" class="h-full w-full" /> -->
		</a>
	</div>

	<div
		class="fixed top-0 z-[50] w-full bg-primary py-1 text-center font-[Cantarell] font-semibold text-primary-foreground md:pr-20 md:text-right lg:text-lg"
	>
		<a href="tel:{contactInfo.phone}">
			Call us at {contactInfo.phone
				.match(/(\d{3})(\d{3})(\d{4})/)
				?.slice(1)
				.join('-')}
		</a>
	</div>

	<div
		class="fixed top-8 z-50 flex h-20 w-full flex-row justify-between border-b px-[6%] {initScroll <
			$scrollThreshold && isLandingPage
			? 'border-transparent bg-transparent'
			: ' bg-secondary'} border-black transition-all duration-500 ease-in-out"
	>
		<!-- <button
			class="flex items-center pl-20 font-[Cantarell] text-xl lg:text-2xl {initScroll <
				$scrollThreshold && isLandingPage
				? 'text-transparent'
				: 'text-[#00000080]'}"
			id="header-logo-area"
			onclick={() => goto('/')}
			aria-label="Go to home page"
		>
			{PUBLIC_COMPANY_NAME}
		</button> -->
		<div class="hidden pl-20 md:block"></div>

		{#if !(initScroll < $scrollThreshold && isLandingPage) && $isMobile}
			<Button
				onclick={() => goto('/contact')}
				variant={colorState ? 'secondary' : 'default'}
				aria-label="Open quote request form"
				class="absolute right-20 top-6"
			>
				Get Free Quote
			</Button>
		{/if}

		<button
			class="absolute right-4 top-0 px-4 py-8 lg:hidden {initScroll < $scrollThreshold &&
			isLandingPage
				? 'text-white'
				: 'text-black'}"
			bind:clientWidth={mobileNavButtonWidth}
			onclick={() => (mobileNavOpen = !mobileNavOpen)}
			aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
		>
			{#if mobileNavOpen}
				<Cross2 />
			{:else}
				<HamburgerMenu />
			{/if}
		</button>

		{#if (!firstLoad && !$isMobile) || mobileNavOpen}
			<div
				in:slide
				class="absolute top-20 -mx-[6%] flex w-screen flex-col items-center justify-evenly gap-8 border-b border-black bg-white py-4 lg:relative lg:top-0 lg:mx-0 lg:w-auto lg:flex-row lg:border-transparent lg:bg-transparent lg:py-0"
			>
				<Dropdown
					label="Services"
					buttonClass={colorState ? 'text-white' : 'text-black'}
					title="Our Services"
					menuClass="w-56"
				>
					<DropdownItem
						onclick={() => {
							goto('/services');
							$servicesPageNavigating = true;
						}}
						class="border-b"
					>
						<a href="{domain}/services/" onclick={(e) => e.preventDefault()}> All Services </a>
					</DropdownItem>
					{#each services as service}
						<DropdownItem
							onclick={() => {
								goto(`/services/${service}`);
								$servicesPageNavigating = true;
							}}
						>
							<a href={`${domain}/services/${service}`} onclick={(e) => e.preventDefault()}>
								{service
									.split('-')
									.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
									.join(' ')}
							</a>
						</DropdownItem>
					{/each}
				</Dropdown>

				<Dropdown
					label="Locations"
					buttonClass={colorState ? 'text-white' : 'text-black'}
					title="Service Areas"
					menuClass="w-56"
				>
					<DropdownItem
						onclick={() => {
							goto('/locations');
							$servicesPageNavigating = true;
						}}
						class="border-b"
					>
						<a href="{domain}/locations/" onclick={(e) => e.preventDefault()}> All Locations </a>
					</DropdownItem>
					{#each locationIds as slug}
						<DropdownItem
							onclick={() => {
								goto(`/locations/${slug}`);
								$servicesPageNavigating = true;
							}}
						>
							<a href="{domain}/locations/{slug}" onclick={(e) => e.preventDefault()}>
								{slug
									.split('-')
									.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
									.join(' ')}
							</a>
						</DropdownItem>
					{/each}
				</Dropdown>

				<a
					href="{domain}/gallery"
					onclick={(e) => {
						e.preventDefault();
						goto('/gallery');
					}}
					class="font-semibold {colorState ? 'text-white' : 'text-black'}"
				>
					Gallery
				</a>

				<div class="flex items-center gap-4 md:flex-row md:gap-7">
					<a
						href="https://www.instagram.com/splashnshine.ca/"
						aria-label="Go to instagram page"
						class="text-xs font-semibold uppercase"
					>
						<Instagram color={colorState ? 'white' : 'black'} />
					</a>
					<a
						href="tel:{contactInfo.phone}"
						aria-label="Call phone number"
						class="text-xs font-semibold uppercase"
					>
						<PhoneCall color={colorState ? 'white' : 'black'} />
					</a>
				</div>
				<Button
					onclick={() => goto('/contact')}
					variant={colorState ? 'secondary' : 'default'}
					size="lg"
					class="hidden lg:block"
					aria-label="Open quote request form">Get Free Quote</Button
				>
			</div>
		{/if}
	</div>
</nav>
