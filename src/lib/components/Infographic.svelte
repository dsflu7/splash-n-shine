<script lang="ts">
	interface Stat {
		value: string;
		label: string;
		icon: string;
		color?: string;
	}

	interface Props {
		title: string;
		subtitle?: string;
		stats: Stat[];
		layout?: 'horizontal' | 'vertical' | 'grid';
		className?: string;
	}

	let { 
		title, 
		subtitle, 
		stats, 
		layout = 'grid', 
		className = ''
	}: Props = $props();

	const getLayoutClasses = () => {
		switch (layout) {
			case 'horizontal':
				return 'flex flex-wrap justify-center gap-8';
			case 'vertical':
				return 'flex flex-col space-y-6';
			case 'grid':
			default:
				return `grid gap-6 ${stats.length <= 2 ? 'grid-cols-1 sm:grid-cols-2' : 
					stats.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 
					'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`;
		}
	};
</script>

<div class="py-12 {className}">
	<div class="text-center mb-8">
		<h3 class="text-2xl md:text-3xl font-bold text-foreground mb-3">
			{title}
		</h3>
		{#if subtitle}
			<p class="text-muted-foreground max-w-2xl mx-auto">
				{subtitle}
			</p>
		{/if}
	</div>

	<div class={getLayoutClasses()}>
		{#each stats as stat}
			<div class="text-center group">
				<div class="relative mb-4">
					<!-- Background circle -->
					<div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
						<!-- Icon -->
						<div class="text-3xl {stat.color || 'text-primary'}">
							{stat.icon}
						</div>
					</div>
					
					<!-- Animated border on hover -->
					<div class="absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"></div>
				</div>
				
				<div class="space-y-2">
					<div class="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
						{stat.value}
					</div>
					<div class="text-sm md:text-base font-medium text-muted-foreground">
						{stat.label}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
