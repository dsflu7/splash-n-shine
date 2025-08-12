<script lang="ts">
	interface Testimonial {
		name: string;
		location: string;
		service: string;
		rating: number;
		text: string;
		date?: string;
	}

	interface Props {
		title?: string;
		subtitle?: string;
		testimonials: Testimonial[];
		layout?: 'grid' | 'carousel';
		className?: string;
	}

	let { 
		title = "What Our Customers Say",
		subtitle = "Real reviews from satisfied customers across Metro Vancouver",
		testimonials,
		layout = 'grid',
		className = ''
	}: Props = $props();

	const renderStars = (rating: number) => {
		return Array(5).fill(0).map((_, i) => i < rating ? '⭐' : '☆').join('');
	};
</script>

<section class="py-16 md:py-20 {className}">
	<div class="max-w-7xl mx-auto px-[6%]">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
				{title}
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				{subtitle}
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each testimonials as testimonial}
				<div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
					<div class="flex items-center mb-4">
						<div class="flex-1">
							<div class="font-semibold text-foreground text-lg">
								{testimonial.name}
							</div>
							<div class="text-sm text-muted-foreground">
								{testimonial.location} • {testimonial.service}
							</div>
						</div>
						<div class="text-right">
							<div class="text-lg mb-1" title="{testimonial.rating} out of 5 stars">
								{renderStars(testimonial.rating)}
							</div>
							{#if testimonial.date}
								<div class="text-xs text-muted-foreground">
									{testimonial.date}
								</div>
							{/if}
						</div>
					</div>
					
					<blockquote class="text-muted-foreground leading-relaxed italic">
						"{testimonial.text}"
					</blockquote>
				</div>
			{/each}
		</div>
	</div>
</section>
