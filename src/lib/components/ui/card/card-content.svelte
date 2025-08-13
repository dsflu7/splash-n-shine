<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
	}

	let { class: className, children, ...props }: Props = $props();
</script>

<div class={cn('p-6 pt-0', className)} {...props}>
	{@render children?.()}
</div>