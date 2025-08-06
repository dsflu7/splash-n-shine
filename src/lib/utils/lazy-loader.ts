// Enhanced lazy loading utility with intersection observer
interface LazyLoadOptions {
	rootMargin?: string;
	threshold?: number | number[];
	once?: boolean;
}

interface ComponentLoader {
	loader: () => Promise<any>;
	fallback?: any;
	placeholder?: string;
}

export class LazyComponentLoader {
	private static loadedComponents = new Map<string, any>();
	private static observers = new Map<Element, IntersectionObserver>();

	/**
	 * Load a component when it enters the viewport
	 */
	static observe(
		element: Element, 
		componentName: string, 
		loader: ComponentLoader,
		options: LazyLoadOptions = {}
	): () => void {
		const {
			rootMargin = '100px',
			threshold = 0.1,
			once = true
		} = options;

		// Return cached component if already loaded
		if (this.loadedComponents.has(componentName)) {
			return () => {};
		}

		const observer = new IntersectionObserver(
			async (entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						try {
							// Load the component
							const component = await loader.loader();
							this.loadedComponents.set(componentName, component.default || component);
							
							// Cleanup observer if set to observe once
							if (once) {
								observer.disconnect();
								this.observers.delete(element);
							}
						} catch (error) {
							console.error(`Failed to load component ${componentName}:`, error);
							// Fallback to placeholder or error component
							if (loader.fallback) {
								this.loadedComponents.set(componentName, loader.fallback);
							}
						}
					}
				}
			},
			{ rootMargin, threshold }
		);

		observer.observe(element);
		this.observers.set(element, observer);

		// Return cleanup function
		return () => {
			observer.disconnect();
			this.observers.delete(element);
		};
	}

	/**
	 * Preload a component without waiting for viewport intersection
	 */
	static async preload(componentName: string, loader: () => Promise<any>): Promise<any> {
		if (!this.loadedComponents.has(componentName)) {
			try {
				const component = await loader();
				this.loadedComponents.set(componentName, component.default || component);
			} catch (error) {
				console.error(`Failed to preload component ${componentName}:`, error);
			}
		}
		return this.loadedComponents.get(componentName);
	}

	/**
	 * Get a loaded component
	 */
	static get(componentName: string): any {
		return this.loadedComponents.get(componentName);
	}

	/**
	 * Check if a component is loaded
	 */
	static isLoaded(componentName: string): boolean {
		return this.loadedComponents.has(componentName);
	}

	/**
	 * Clean up all observers
	 */
	static cleanup(): void {
		this.observers.forEach(observer => observer.disconnect());
		this.observers.clear();
	}
}

// Predefined component loaders for your app
export const componentLoaders = {
	carousel: () => import('$lib/components/ui/carousel'),
	accordion: () => import('$lib/components/ui/accordion'),
	gsapAnims: () => import('$lib/utils/anims'),
	sanityClient: () => import('$lib/sanity'),
	phoneIcon: () => import('$lib/icons/PhoneCall.svelte'),
	imageComponent: () => import('$lib/components/Image.svelte'),
	button: () => import('$lib/components/ui/button/button.svelte'),
	icons: () => import('svelte-radix'),
	autoplay: () => import('embla-carousel-autoplay'),
	team: () => import('$lib/icons/team.jpg?enhanced'),
	aboutbg: () => import('$lib/icons/aboutbg.jpg?enhanced')
};

// Intersection observer action for Svelte
export function lazyLoad(
	node: Element, 
	{ componentName, loader, options = {} }: {
		componentName: string;
		loader: ComponentLoader;
		options?: LazyLoadOptions;
	}
) {
	const cleanup = LazyComponentLoader.observe(node, componentName, loader, options);
	
	return {
		destroy: cleanup
	};
}
