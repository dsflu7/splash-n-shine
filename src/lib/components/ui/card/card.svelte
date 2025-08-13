<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
	}

	let { class: className, children, ...props }: Props = $props();
</script>

<div class={cn('rounded-xl border bg-card text-card-foreground shadow', className)} {...props}>
	{@render children?.()}
</div>