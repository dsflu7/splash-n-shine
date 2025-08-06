<script lang="ts">
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import { quoteDialogOpen } from '$lib/utils/stores';

	const siteMap = {
		'Services': [
			{ label: 'Pressure Washing', route: '/services/pressure-washing' },
			{ label: 'House Washing', route: '/services/house-washing' },
			{ label: 'Roof Cleaning', route: '/services/roof-cleaning' },
			{ label: 'Gutter Cleaning', route: '/services/gutter-cleaning' },
			{ label: 'Window Washing', route: '/services/window-washing' },
			{ label: 'All Services', route: '/services' }
		],
		'Company': [
			{ label: 'Our Story', route: '/our-story' },
			{ label: 'Gallery', route: '/gallery' },
			{ label: 'Blog', route: '/blog' },
			{ label: 'Contact', route: '/contact' }
		],
		'Locations': [
			{ label: 'Vancouver', route: '/locations/vancouver' },
			{ label: 'Surrey', route: '/locations/surrey' },
			{ label: 'Richmond', route: '/locations/richmond' },
			{ label: 'All Locations', route: '/locations' }
		],
		'Legal': [
			{ label: 'Privacy Policy', route: '/privacy-policy' },
			{ label: 'Terms & Conditions', route: '/terms-and-conditions' }
		]
	};

	const socialLinks = [
		{ label: 'Instagram', url: 'https://www.instagram.com/splashnshine.ca/' },
		{ label: 'TikTok', url: 'https://www.tiktok.com/@splashnshine.ca?_t=ZM-8uAbspTLuI1&_r=1' },
		{ label: 'Facebook', url: 'https://www.facebook.com/105341482673651' }
	];
</script>

<footer class="bg-foreground text-muted px-[6%] py-16">
	<div class="max-w-7xl mx-auto">
		<!-- Main Footer Content: Logo Left, Sitemap Right -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
			<!-- Left Side: Logo and Company Info -->
			<div class="flex flex-col items-center lg:items-start space-y-6">
				<div class="flex flex-col items-center lg:items-start space-y-4">
					<!-- Logo -->
					<img 
						src="/assets/logo.png" 
						alt="{PUBLIC_COMPANY_NAME} Logo" 
						class="h-24 w-24 object-contain"
					/>
					
					<!-- Company Name -->
					<h2 class="text-2xl font-bold text-white font-[Cantarell]">
						{PUBLIC_COMPANY_NAME}
					</h2>
					
					<!-- Tagline -->
					<p class="text-muted-foreground text-center lg:text-left max-w-md leading-relaxed">
						Professional exterior cleaning services across Metro Vancouver. 
						Your trusted partner for pressure washing, house washing, and property maintenance.
					</p>
				</div>
				
				<!-- Call to Action -->
				<button 
					onclick={() => ($quoteDialogOpen = true)} 
					class="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors duration-200"
					aria-label="Open quote request form"
				>
					Get Free Quote
				</button>
				
				<!-- Social Links -->
				<div class="flex space-x-4">
					{#each socialLinks as social}
						<a 
							href={social.url} 
							target="_blank" 
							rel="noopener noreferrer"
							class="text-muted hover:text-white transition-colors duration-200"
							aria-label="Visit our {social.label} page"
						>
							{social.label}
						</a>
					{/each}
				</div>
			</div>
			
			<!-- Right Side: Sitemap -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				{#each Object.entries(siteMap) as [category, links]}
					<div class="space-y-4">
						<h3 class="text-white font-semibold text-lg font-[Cantarell]">
							{category}
						</h3>
						<ul class="space-y-2">
							{#each links as link}
								<li>
									<a 
										href={link.route}
										class="text-muted hover:text-white transition-colors duration-200 text-sm"
										aria-label="Go to {link.label} page"
									>
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
		
		<!-- Bottom Section: Copyright and Credits -->
		<div class="border-t border-muted/20 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
				<div class="text-center md:text-left">
					<p class="text-sm text-muted-foreground">
						© 2024 - 2028 {PUBLIC_COMPANY_NAME}. All rights reserved.
					</p>
					<p class="text-sm text-muted-foreground">
						{PUBLIC_DOMAIN}
					</p>
				</div>
				
				<div class="text-center md:text-right">
					<p class="text-sm text-muted-foreground">
						Website by 
						<a 
							href="https://www.rightmarketing.ca" 
							target="_blank" 
							rel="dofollow"
							class="text-primary hover:text-primary/80 transition-colors font-semibold"
						>
							rightmarketing.ca
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>
