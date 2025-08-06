<!-- Lazy-loaded carousel component -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	
	interface Props {
		children: Snippet<[]>;
		images: string[];
		captions: string[];
		class?: string;
	}
	
	let { children, images, captions, class: className = '' }: Props = $props();
	
	let CarouselComponent: any = $state(null);
	let Autoplay: any = $state(null);
	let isLoading = $state(true);
	
	// Lazy load carousel dependencies
	async function loadCarousel() {
		if (!CarouselComponent) {
			const [carouselModule, autoplayModule] = await Promise.all([
				import('$lib/components/ui/carousel'),
				import('embla-carousel-autoplay')
			]);
			
			CarouselComponent = carouselModule;
			Autoplay = autoplayModule.default;
			isLoading = false;
		}
	}
	
	// Load on component mount
	$effect(() => {
		loadCarousel();
	});
</script>

{#if isLoading}
	<div class="flex items-center justify-center h-64 bg-muted rounded-lg {className}">
		<div class="flex flex-col items-center gap-2">
			<div class="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
			<p class="text-sm text-muted-foreground">Loading gallery...</p>
		</div>
	</div>
{:else if CarouselComponent}
	<CarouselComponent.Root 
		opts={{
			align: 'start',
			loop: true
		}}
		plugins={[
			Autoplay({
				delay: 4000,
				stopOnInteraction: true
			})
		]}
		class={className}
	>
		<CarouselComponent.Content>
			{#each images as image, i}
				<CarouselComponent.Item>
					{@render children()}
				</CarouselComponent.Item>
			{/each}
		</CarouselComponent.Content>
		<CarouselComponent.Previous />
		<CarouselComponent.Next />
	</CarouselComponent.Root>
{/if}
