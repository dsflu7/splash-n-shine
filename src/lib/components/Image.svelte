<script lang="ts">
	import { optimize } from '$lib/utils/image';

	interface Props {
		url: string;
		description: string;
		class?: string;
		size?: number[];
		sizes?: string; // responsive sizes attribute
		quality?: number;
		fetchpriority?: 'high' | 'low';
		loading?: 'lazy' | 'eager';
		decoding?: 'async' | 'sync' | 'auto';
		width?: string;
		height?: string;
		// optional format hint if optimize supports it
		format?: 'avif' | 'webp' | 'jpeg';
	}

	let {
		url,
		description,
		class: className = '',
		size = [640, 828, 1200],
		sizes = '100vw',
		quality = 75,
		fetchpriority = 'low',
		loading = 'lazy',
		decoding = 'async',
		width,
		height,
		format
	}: Props = $props();
</script>

<img
	{width}
	{height}
	class={className}
	src={url}
	srcset={optimize(url, size, quality, format)}
	sizes={sizes}
	alt={description}
	{fetchpriority}
	{loading}
	{decoding}
/>
