<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';

	import Facebook from '$lib/components/icons/facebook.svelte';
	import Instagram from '$lib/components/icons/Instagram.svelte';
	import Twitter from '$lib/components/icons/x.svelte';
	import Whatsapp from '$lib/components/icons/whatsapp.svelte';
	import Telegram from '$lib/components/icons/telegram.svelte';

	import { Copy } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let currentUrl = $derived(page.url.toString());
	let title = $state(
		'Professional Exterior Cleaning Services | Transform Your Property Today! ✨🏠'
	);

	function copyToClipboard() {
		navigator.clipboard.writeText(currentUrl);
		alert('Link copied to clipboard!');
	}

	onMount(() => {
		title = `${document.title} | Transform Your Property Today! ✨🏠`;
	});
</script>

<div
	class="fixed z-50 flex gap-2 rounded-md bg-background/80 p-2 backdrop-blur shadow-md
	bottom-4 left-1/2 -translate-x-1/2 flex-row
	md:bottom-auto md:top-1/2 md:left-4 md:-translate-y-1/2 md:translate-x-0 md:flex-col
	scale-90 md:scale-100 max-[480px]:scale-80"
>
	<Button
		variant="ghost"
		size="icon"
		href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
		target="_blank"
		rel="noopener noreferrer"
		title="Share on Facebook"
	>
		<Facebook class="h-5 w-5" />
	</Button>

	<Button
		variant="ghost"
		size="icon"
		href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`}
		target="_blank"
		rel="noopener noreferrer"
		class="share-button"
		title="Share on Twitter"
	>
		<Twitter class="h-5 w-5" />
	</Button>

	<Button
		variant="ghost"
		size="icon"
		href={`https://www.instagram.com/`}
		target="_blank"
		rel="noopener noreferrer"
		class="share-button"
		title="Share on Instagram"
	>
		<Instagram class="h-5 w-5" />
	</Button>

	<Button
		variant="ghost"
		size="icon"
		href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + currentUrl)}`}
		target="_blank"
		rel="noopener noreferrer"
		class="share-button"
		title="Share on WhatsApp"
	>
		<Whatsapp class="h-5 w-5" />
	</Button>

	<Button
		variant="ghost"
		size="icon"
		href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`}
		target="_blank"
		rel="noopener noreferrer"
		class="share-button"
		title="Share on Telegram"
	>
		<Telegram class="h-5 w-5" />
	</Button>

	<Button
		variant="ghost"
		size="icon"
		onclick={copyToClipboard}
		class="share-button"
		title="Copy Link"
	>
		<Copy class="h-5 w-5" />
	</Button>
</div>