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
		: 'bg-muted/30 text-foreground';
</script>

<!-- Final CTA with Guarantee -->
<section class="{sectionClass} py-16 {className}">
	<div class="max-w-4xl mx-auto px-[6%] text-center">
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
					class="text-lg px-8"
				>
					{primaryButtonText}
				</Button>
			</Link>
			<Link href={secondaryButtonHref}>
				<Button 
					variant={variant === 'primary' ? 'default' : 'outline'} 
					size="lg" 
					class="text-lg px-8 border"
				>
					{secondaryButtonText}
				</Button>
			</Link>
		</div>
	</div>
</section>