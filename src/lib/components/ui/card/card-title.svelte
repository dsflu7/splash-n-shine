<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLHeadingElement> {
		children?: Snippet;
	}

	let { class: className, children, ...props }: Props = $props();
</script>

<h3 class={cn('font-semibold leading-none tracking-tight', className)} {...props}>
	{@render children?.()}
</h3>