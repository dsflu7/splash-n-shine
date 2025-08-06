<!-- Lazy-loaded accordion component -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	
	interface Props {
		children: Snippet<[]>;
		value?: string;
		class?: string;
	}
	
	let { children, value, class: className = '' }: Props = $props();
	
	let AccordionComponent: any = $state(null);
	let isLoading = $state(true);
	
	// Lazy load accordion
	async function loadAccordion() {
		if (!AccordionComponent) {
			const accordionModule = await import('$lib/components/ui/accordion');
			AccordionComponent = accordionModule;
			isLoading = false;
		}
	}
	
	// Load on component mount or when intersecting viewport
	$effect(() => {
		loadAccordion();
	});
</script>

{#if isLoading}
	<div class="space-y-2 {className}">
		{#each Array(3) as _}
			<div class="h-12 bg-muted rounded animate-pulse"></div>
		{/each}
	</div>
{:else if AccordionComponent}
	<AccordionComponent.Root {value} class={className}>
		{@render children()}
	</AccordionComponent.Root>
{/if}
