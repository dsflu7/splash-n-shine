<!-- Lazy Loading Dialog Component -->
<script lang="ts">
	import { onMount } from 'svelte';
	
	let dialogOpen = $state(false);
	let DialogModule: any = $state(null);
	let ScrollAreaModule: any = $state(null);
	let loadingComponents = $state(false);
	
	// Props
	interface Props {
		dialogImageSrc: string;
		open: boolean;
		onOpenChange: (open: boolean) => void;
	}
	
	let { dialogImageSrc, open = $bindable(), onOpenChange }: Props = $props();
	
	// Sync with parent binding
	$effect(() => {
		dialogOpen = open;
	});
	
	$effect(() => {
		open = dialogOpen;
		onOpenChange?.(dialogOpen);
	});
	
	async function loadDialogComponents() {
		if (!DialogModule || !ScrollAreaModule) {
			loadingComponents = true;
			try {
				const [dialogImport, scrollAreaImport] = await Promise.all([
					import('$lib/components/ui/dialog'),
					import('$lib/components/ui/scroll-area')
				]);
				
				DialogModule = dialogImport;
				ScrollAreaModule = scrollAreaImport.ScrollArea;
			} catch (error) {
				console.error('Failed to load dialog components:', error);
			} finally {
				loadingComponents = false;
			}
		}
	}
	
	$effect(() => {
		if (dialogOpen && !DialogModule) {
			loadDialogComponents();
		}
	});
</script>

{#if dialogOpen}
	{#if DialogModule && ScrollAreaModule}
		<DialogModule.Root bind:open={dialogOpen}>
			<DialogModule.Content>
				<ScrollAreaModule class="max-h-[80vh]">
					<img
						src={dialogImageSrc}
						alt="High resolution before/after comparison of our professional cleaning work"
						class="w-full h-auto"
						loading="lazy"
					/>
				</ScrollAreaModule>
			</DialogModule.Content>
		</DialogModule.Root>
	{:else if loadingComponents}
		<!-- Simple loading placeholder -->
		<div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
			<div class="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full"></div>
		</div>
	{/if}
{/if}
