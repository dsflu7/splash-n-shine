<script lang="ts">
	import { PUBLIC_PHONE } from '$env/static/public';
	import { Button } from '$lib/components/ui/button';
	import Link from '$lib/components/Link.svelte';

	interface Props {
		title?: string;
		subtitle?: string;
		primaryButtonText?: string;
		primaryButtonHref?: string;
		secondaryButtonText?: string;
		secondaryButtonHref?: string;
		variant?: 'primary' | 'secondary';
		class?: string;
	}

	let {
		title = "100% Satisfaction Guaranteed",
		subtitle = "We stand behind our work with a complete satisfaction guarantee on all services.<br/><strong>Work done right, smiles delivered.</strong>",
		primaryButtonText = "Get Your Free Quote",
		primaryButtonHref = "/contact",
		secondaryButtonText = `Call ${PUBLIC_PHONE}`,
		secondaryButtonHref = `tel:${PUBLIC_PHONE}`,
		variant = 'primary',
		class: className = ''
	}: Props = $props();

	const sectionClass = variant === 'primary' 
		? 'bg-primary text-primary-foreground' 
		: 'bg-primary/5 text-foreground';
</script>

<!-- Final CTA with Guarantee -->
<section class="{sectionClass} py-16 {className} relative overflow-hidden">
	<!-- Subtle background accent -->
	<div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/3 rounded-full blur-2xl"></div>
	
	<div class="max-w-4xl mx-auto px-[6%] text-center relative z-10">
		<h2 class="text-3xl md:text-4xl font-bold mb-4 font-[Cantarell]">
			{title}
		</h2>
		<p class="text-lg mb-8 opacity-90 leading-relaxed">
			{@html subtitle}
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Link href={primaryButtonHref}>
				<Button 
					variant={variant === 'primary' ? 'secondary' : 'default'} 
					size="lg" 
					class="text-lg px-8 hover:scale-105 transition-all duration-300"
				>
					{primaryButtonText}
				</Button>
			</Link>
			<Link href={secondaryButtonHref}>
				<Button 
					variant={variant === 'primary' ? 'outline' : 'outline'} 
					size="lg" 
					class="text-lg px-8 hover:scale-105 hover:border-blue-300/50 transition-all duration-300 {variant === 'primary' ? 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10' : 'border'}"
				>
					{secondaryButtonText}
				</Button>
			</Link>
		</div>
	</div>
</section>