<script lang="ts">
	import { PUBLIC_COMPANY_NAME } from "$env/static/public";
</script>

<svelte:head>
	<title>Professional Exterior Cleaning Services | {PUBLIC_COMPANY_NAME}</title>
	<meta name="description" content="Professional pressure washing, house washing, and exterior cleaning services across Metro Vancouver. Get your free quote today!" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
	<div class="max-w-7xl mx-auto px-[6%] text-center">
		<h1 class="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[Cantarell]">
			Professional Exterior Cleaning
		</h1>
		<p class="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
			Transform your property with our expert pressure washing, house washing, and exterior cleaning services across Metro Vancouver.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/contact"
				class="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg"
			>
				Get Free Quote
			</a>
			<a
				href="/services"
				class="bg-background text-foreground border border-border px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
			>
				View Services
			</a>
		</div>
	</div>
</section>

<!-- Services Preview -->
<section class="py-16 bg-background">
	<div class="max-w-7xl mx-auto px-[6%]">
		<h2 class="text-3xl font-bold text-foreground text-center mb-12 font-[Cantarell]">
			Our Services
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each [
				{ title: "Pressure Washing", desc: "Professional pressure washing for driveways, walkways, and more", icon: "🏠" },
				{ title: "House Washing", desc: "Gentle yet effective house washing to restore your home's beauty", icon: "✨" },
				{ title: "Roof Cleaning", desc: "Safe and thorough roof cleaning to extend your roof's lifespan", icon: "🏘️" },
			] as service}
				<div class="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
					<div class="text-3xl mb-4">{service.icon}</div>
					<h3 class="text-xl font-semibold text-foreground mb-3 font-[Cantarell]">
						{service.title}
					</h3>
					<p class="text-muted-foreground leading-relaxed">
						{service.desc}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="bg-primary text-primary-foreground py-16">
	<div class="max-w-4xl mx-auto px-[6%] text-center">
		<h2 class="text-3xl font-bold mb-4 font-[Cantarell]">
			Ready to Transform Your Property?
		</h2>
		<p class="text-lg mb-8 opacity-90">
			Get a free, no-obligation quote for your exterior cleaning needs.
		</p>
		<a
			href="/contact"
			class="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors duration-200 shadow-lg"
		>
			Get Your Free Quote Today
		</a>
	</div>
</section>
