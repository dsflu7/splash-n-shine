// Lazy-loaded animation utilities
let gsap: any = null;
let ScrollTrigger: any = null;

async function loadGSAP() {
	if (!gsap) {
		const [gsapModule, scrollTriggerModule] = await Promise.all([
			import('gsap'),
			import('gsap/dist/ScrollTrigger')
		]);
		gsap = gsapModule.gsap;
		ScrollTrigger = scrollTriggerModule.ScrollTrigger;
		gsap.registerPlugin(ScrollTrigger);
	}
	return { gsap, ScrollTrigger };
}

export async function fadeIn(node: HTMLElement) {
	const { gsap, ScrollTrigger } = await loadGSAP();
	
	const tl = gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: node,
			start: 'top 90%',
			end: 'bottom 10%',
			toggleActions: 'play none none none',
			markers: false
		}
	});

	tl.from(node, {
		opacity: 0,
		y: 50,
		duration: 0.5,
		ease: 'power2.out'
	});

	return tl;
}

export async function slideInFromLeft(node: HTMLElement, delay: number = 0) {
	const { gsap, ScrollTrigger } = await loadGSAP();
	
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: node,
			start: 'top 85%',
			toggleActions: 'play none none none'
		}
	});

	tl.from(node, {
		x: -100,
		opacity: 0,
		duration: 0.8,
		delay,
		ease: 'power2.out'
	});

	return tl;
}

export async function slideInFromRight(node: HTMLElement, delay: number = 0) {
	const { gsap, ScrollTrigger } = await loadGSAP();
	
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: node,
			start: 'top 85%',
			toggleActions: 'play none none none'
		}
	});

	tl.from(node, {
		x: 100,
		opacity: 0,
		duration: 0.8,
		delay,
		ease: 'power2.out'
	});

	return tl;
}

export async function scaleIn(node: HTMLElement) {
	const { gsap, ScrollTrigger } = await loadGSAP();
	
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: node,
			start: 'top 90%',
			toggleActions: 'play none none none'
		}
	});

	tl.from(node, {
		scale: 0.8,
		opacity: 0,
		duration: 0.6,
		ease: 'back.out(1.7)'
	});

	return tl;
}
