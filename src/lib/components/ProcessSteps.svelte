<script lang="ts">
	import { onMount } from 'svelte';

	interface ProcessStep {
		icon?: string;
		step?: number | string;
		title?: string;
		description?: string;
	}

	interface Props {
		steps: (ProcessStep | string)[];
		title?: string;
		subtitle?: string;
		variant?: 'horizontal' | 'vertical';
		showConnectors?: boolean;
		animated?: boolean;
		class?: string;
	}

	let {
		steps,
		title = 'Our Process',
		subtitle,
		variant = 'vertical',
		showConnectors = true,
		animated = true,
		class: className = ''
	}: Props = $props();

	let mounted = $state(false);
	let processContainer: HTMLDivElement;

	onMount(() => {
		mounted = true;
		
		if (animated && processContainer) {
			// Animate steps in sequence
			const stepElements = processContainer.querySelectorAll('.process-step');
			stepElements.forEach((step, index) => {
				setTimeout(() => {
					step.classList.add('animate-in');
				}, index * 200);
			});
		}
	});

	// Convert string steps to ProcessStep objects
	const processSteps: ProcessStep[] = $derived(
		steps.map((step, index) => {
			if (typeof step === 'string') {
				return {
					step: index + 1,
					description: step,
					icon: '✓'
				};
			}
			return {
				step: step.step || index + 1,
				icon: step.icon || '✓',
				...step
			};
		})
	);
</script>

<section class="py-16 bg-secondary/30 {className}">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<h2 class="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
					{title}
				</h2>
				{#if subtitle}
					<p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						{subtitle}
					</p>
				{/if}
			</div>

			<!-- Process Steps -->
			<div 
				bind:this={processContainer}
				class="relative {variant === 'horizontal' ? 'grid grid-cols-1 md:grid-cols-3 gap-8' : 'max-w-4xl mx-auto space-y-8'}"
			>
				<!-- Background connector line for horizontal variant -->
				{#if variant === 'horizontal' && showConnectors}
					<div class="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>
				{/if}

				{#each processSteps as step, index (step.step || index)}
					<div 
						class="process-step relative group {animated ? 'opacity-0 translate-y-8' : ''}"
						class:md:flex-1={variant === 'horizontal'}
					>
						<!-- Vertical connector line -->
						{#if variant === 'vertical' && showConnectors && index < processSteps.length - 1}
							<div class="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent z-0"></div>
						{/if}

						<!-- Step container -->
						<div class="relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
							<!-- Background glow effect -->
							<div class="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							
							<!-- Floating particles effect -->
							<div class="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
							<div class="absolute top-8 right-8 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
							<div class="absolute top-6 right-12 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style="animation-delay: 2s;"></div>

							<div class="relative z-10 {variant === 'horizontal' ? 'text-center' : 'flex items-start space-x-6'}">
								<!-- Step icon/number -->
								<div class="flex-shrink-0 {variant === 'horizontal' ? 'mx-auto mb-6' : ''} relative">
									<div class="w-16 h-16 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden">
										<!-- Inner glow -->
										<div class="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										
										{#if step.icon}
											<div class="text-2xl filter drop-shadow-sm relative z-10">
												{step.icon}
											</div>
										{:else}
											<span class="text-xl font-bold relative z-10">{step.step}</span>
										{/if}
									</div>

									<!-- Step number badge -->
									<div class="absolute -top-2 -right-2 w-7 h-7 bg-background border-2 border-primary/30 text-primary rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-125 transition-all duration-300">
										{step.step}
									</div>

									<!-- Connection dot for horizontal variant -->
									{#if variant === 'horizontal' && showConnectors && index < processSteps.length - 1}
										<div class="hidden md:block absolute top-1/2 -right-12 w-4 h-4 bg-primary rounded-full shadow-lg -translate-y-1/2 z-10"></div>
									{/if}
								</div>

								<!-- Step content -->
								<div class="flex-1 {variant === 'horizontal' ? 'text-center' : ''}">
									{#if step.title}
										<h3 class="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
											{step.title}
										</h3>
									{/if}
									
									<p class="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
										{step.description}
									</p>

									<!-- Subtle progress bar -->
									<div class="mt-6 h-1 bg-border/30 rounded-full overflow-hidden">
										<div 
											class="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 group-hover:shadow-glow"
											style="width: {((index + 1) / processSteps.length) * 100}%"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Bottom CTA hint -->
			{#if variant === 'vertical'}
				<div class="text-center mt-16">
					<div class="inline-flex items-center space-x-2 text-muted-foreground">
						<div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/30"></div>
						<span class="text-sm font-medium">Simple, professional, reliable</span>
						<div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/30"></div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.process-step.animate-in {
		opacity: 1;
		transform: translateY(0);
		transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.shadow-glow {
		box-shadow: 0 0 20px rgba(var(--primary-rgb, 59 130 246), 0.3);
	}

	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
	}

	.group:hover .process-step {
		animation: float 3s ease-in-out infinite;
	}
</style>
