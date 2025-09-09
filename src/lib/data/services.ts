import {
	RectangleHorizontal as Window,
	Droplets as Shower,
	Home,
	Building,
	Construction,
	Landmark,
	Wrench,
	Sun,
	Building2,
	Target,
	Clock,
	Shield,
	Smile,
	Trophy,
	Settings,
	Leaf,
	Sparkles
} from '@lucide/svelte';

interface Service {
	id: string;
	title: string;
	name: string;
	category: string;
	description: string;
	shortDescription: string;
	longDescription: string;
	features: string[];
	benefits: string[];
	process: string[];
	image: string;
	href: string;
	popular: boolean;
	icon: any;
	faqs: Array<{
		question?: string;
		answer: string;
	}>;
	primaryKeywords: string[];
	secondaryKeywords: string[];
	localKeywords: string[];
	beforeAfterExamples: any[];
}

interface WhyChooseUsItem {
	title: string;
	description: string;
	icon: any;
}

interface ServiceHighlight {
	title: string;
	description: string;
	icon: any;
}

interface SEO {
	title: string;
	description: string;
	keywords: string;
	ogImage: string;
}

export const services: Record<string, Service> = {
	"window-cleaning": {
		id: "window-cleaning",
		title: "Window Cleaning",
		name: "Window Cleaning",
		category: "Exterior Cleaning",
		description: "Crystal-clean windows inside and out, including screens and sills for a spotless, streak-free finish.",
		shortDescription: "Professional residential and commercial window cleaning services",
		longDescription: "Transform your property's appearance with our professional window cleaning services. Our experienced team uses eco-friendly solutions and professional-grade equipment to deliver streak-free, crystal-clear windows for both residential and commercial properties.",
		features: [
			"Interior & exterior cleaning",
			"Screen cleaning",
			"Sill & frame cleaning",
			"Streak-free guarantee"
		],
		benefits: [
			"Streak-free, crystal-clear results",
			"Eco-friendly cleaning solutions",
			"Professional-grade equipment",
			"Fully insured and bonded technicians",
			"Interior and exterior cleaning available",
			"Competitive pricing with no hidden fees"
		],
		process: [
			"Initial assessment of windows and accessibility",
			"Pre-cleaning preparation and protection of surrounding areas",
			"Professional cleaning using eco-friendly solutions",
			"Detailed cleaning of frames, sills, and screens",
			"Final inspection and quality assurance check",
			"Customer walkthrough and satisfaction confirmation"
		],
		image: "https://cdn.sanity.io/files/ws2fgpe5/production/5eff2b73137d1c4a1936381e17515d23af4477bc.webp?w=400&h=300&fit=crop&auto=format&q=80",
		href: "/services/window-cleaning",
		popular: true,
		icon: Window,
		faqs: [
			{
				question: "How often should I have my windows professionally cleaned?",
				answer: "For most residential properties, we recommend professional window cleaning every 3-6 months. Commercial properties may benefit from monthly or bi-monthly cleaning depending on location and environmental factors."
			},
			{
				question: "Do you clean both interior and exterior windows?",
				answer: "Yes, we provide comprehensive window cleaning services including both interior and exterior surfaces, frames, sills, and screens upon request."
			},
			{
				question: "What makes your window cleaning eco-friendly?",
				answer: "We use biodegradable, non-toxic cleaning solutions that are safe for your family, pets, and the environment while still delivering professional results."
			},
			{
				question: "Do you provide window cleaning for high-rise buildings?",
				answer: "We provide window cleaning for buildings up to 3 stories. For higher buildings requiring specialized equipment, we can refer you to our trusted commercial partners."
			},
			{
				question: "What's included in your window cleaning service?",
				answer: "Our standard service includes cleaning both sides of windows, frames, sills, and screens. We also check for any window hardware issues and provide recommendations for maintenance."
			},
			{
				question: "How do you handle delicate or antique windows?",
				answer: "We have experience with various window types and use appropriate techniques and gentler solutions for older or delicate windows to ensure no damage occurs."
			}
		],
		primaryKeywords: [
			"window cleaning",
			"window cleaners near me",
			"residential window cleaning",
			"professional window cleaning"
		],
		secondaryKeywords: [
			"window washers near me",
			"window cleaning company near me",
			"window cleaning services",
			"window cleaning near me residential",
			"local window cleaners",
			"glass cleaning services"
		],
		localKeywords: [
			"window cleaning vancouver",
			"window cleaning surrey",
			"window cleaning burnaby",
			"window cleaning richmond"
		],
		beforeAfterExamples: []
	},
	"window-washing": {
		id: "window-washing",
		title: "Window Washing",
		name: "Window Washing",
		category: "Exterior Cleaning",
		description: "Professional window washing services for residential and commercial properties with thorough cleaning and water-fed pole system.",
		shortDescription: "Expert window washing using advanced water-fed pole systems",
		longDescription: "Experience the difference with our professional window washing services. Using state-of-the-art water-fed pole systems and purified water, we deliver superior cleaning results while ensuring the safety of our technicians and your property.",
		features: [
			"Water-fed pole system",
			"Purified water cleaning",
			"Safe ground-level operation",
			"No ladder work required",
			"Environmentally friendly process"
		],
		benefits: [
			"Superior cleaning with purified water system",
			"Safer cleaning process - no ladders required",
			"Longer-lasting results with spot-free finish",
			"Environmentally friendly - no chemicals needed",
			"Professional equipment and trained technicians",
			"Comprehensive service including frames and sills"
		],
		process: [
			"Property assessment and window inspection",
			"Setup of water-fed pole system with purified water",
			"Systematic cleaning from ground level for safety",
			"Thorough cleaning of glass, frames, and sills",
			"Quality check and spot-free rinse",
			"Final inspection and customer satisfaction review"
		],
		image: "https://cdn.sanity.io/files/ws2fgpe5/production/5eff2b73137d1c4a1936381e17515d23af4477bc.webp?w=400&h=300&fit=crop&auto=format&q=80",
		href: "/services/window-washing",
		popular: false,
		icon: Shower,
		faqs: [
			{
				question: "What is the difference between window washing and window cleaning?",
				answer: "Window washing typically uses water-fed pole systems with purified water for a spot-free finish, while traditional window cleaning uses squeegees and cleaning solutions. Both methods are effective, but window washing offers safer ground-level operation."
			},
			{
				question: "How does the water-fed pole system work?",
				answer: "Our water-fed pole system uses purified water that's free of minerals and impurities. This allows us to clean windows from the ground up to 3-4 stories safely, leaving a spot-free finish as the pure water dries naturally."
			},
			{
				question: "Is window washing safe for all types of windows?",
				answer: "Yes, our water-fed pole system is safe for all window types including double-glazed, tinted, and modern energy-efficient windows. The soft brush heads and pure water won't damage any window surfaces."
			},
			{
				question: "How often should I have my windows washed?",
				answer: "We recommend window washing every 2-3 months for optimal results. The frequency may vary based on your location, environmental factors, and personal preferences."
			},
			{
				question: "Do you still clean the inside of windows with this method?",
				answer: "The water-fed pole system is primarily for exterior cleaning. For interior windows, we use traditional hand-cleaning methods with professional squeegees and eco-friendly solutions."
			}
		],
		primaryKeywords: [
			"window washing",
			"window washing near me",
			"professional window washing",
			"water fed pole window cleaning"
		],
		secondaryKeywords: [
			"window washing services",
			"commercial window washing",
			"residential window washing",
			"pure water window cleaning",
			"spot free window cleaning"
		],
		localKeywords: [
			"window washing vancouver",
			"window washing surrey",
			"window washing burnaby",
			"window washing richmond"
		],
		beforeAfterExamples: []
	},
	"pressure-washing": {
		id: "pressure-washing",
		title: "Pressure Washing",
		name: "Pressure Washing",
		category: "Exterior Cleaning",
		description: "Professional high-pressure cleaning to remove dirt, grime, and stains from driveways, sidewalks, decks, and exterior surfaces.",
		shortDescription: "Professional pressure washing services for driveways, patios, siding, and more",
		longDescription: "Restore your property's curb appeal with our professional pressure washing services. We use state-of-the-art equipment and proven techniques to safely remove dirt, grime, mold, and stains from various surfaces including driveways, patios, siding, decks, and walkways.",
		features: [
			"Driveway cleaning",
			"Sidewalk restoration",
			"Deck & patio cleaning",
			"Building exterior wash"
		],
		benefits: [
			"Powerful cleaning removes years of buildup",
			"Safe for all surface types when done professionally",
			"Eco-friendly cleaning solutions",
			"Increases property value and curb appeal",
			"Prevents damage from mold and mildew",
			"Fast and efficient cleaning process"
		],
		process: [
			"Property assessment and surface evaluation",
			"Pre-treatment of stained or heavily soiled areas",
			"Selection of appropriate pressure and cleaning solutions",
			"Systematic cleaning of all targeted surfaces",
			"Post-cleaning inspection and touch-ups",
			"Final walkthrough with customer approval"
		],
		image: "https://cdn.sanity.io/files/ws2fgpe5/production/3c97d10d7b69ceec5d190891c35c99e0eee2f210.webp?w=400&h=300&fit=crop&auto=format&q=80",
		href: "/services/pressure-washing",
		popular: false,
		icon: Shower,
		faqs: [],
		primaryKeywords: [
			"pressure washing",
			"power washing near me",
			"pressure washing companies near me"
		],
		secondaryKeywords: [
			"residential pressure washing"
		],
		localKeywords: [
			"power washing richmond"
		],
		beforeAfterExamples: []
	},
	"house-washing": {
		id: "house-washing",
		title: "House Washing",
		name: "House Washing",
		category: "Exterior Cleaning",
		description: "Complete exterior house washing to restore your home's curb appeal and protect your investment.",
		shortDescription: "Professional exterior house washing and soft wash services",
		longDescription: "Restore your home's beauty and protect your investment with our professional house washing services. We use gentle soft wash techniques and eco-friendly solutions to safely remove dirt, algae, mildew, and stains from all types of siding without damage.",
		features: ["Eco-friendly solutions"],
		benefits: ["Professional equipment and trained technicians"],
		process: ["Post-cleaning maintenance recommendations"],
		image: "https://cdn.sanity.io/files/ws2fgpe5/production/6a99ac3d0a536dd54fe2c5e41a2ffdca8b11960d.jpg",
		href: "/services/house-washing",
		popular: false,
		icon: Home,
		faqs: [],
		primaryKeywords: ["house pressure washing"],
		secondaryKeywords: ["house washing companies"],
		localKeywords: ["exterior washing richmond"],
		beforeAfterExamples: []
	},
	"gutter-cleaning": {
		id: "gutter-cleaning",
		title: "Gutter Cleaning",
		name: "Gutter Cleaning",
		category: "Exterior Cleaning",
		description: "Complete gutter cleaning and maintenance to protect your home from water damage and ensure proper drainage.",
		shortDescription: "Complete gutter cleaning and maintenance services to protect your property",
		longDescription: "Protect your property investment with our comprehensive gutter cleaning and maintenance services. Our experienced team safely removes debris, inspects for damage, and ensures proper water flow to prevent costly water damage to your home's foundation, siding, and landscaping.",
		features: ["Minor repair identification"],
		benefits: ["Competitive rates with quality guarantee"],
		process: ["Proper disposal of all collected debris"],
		image: "https://cdn.sanity.io/files/ws2fgpe5/production/2dce3b3d4def977ccea4bf8c1cef5e981342327f.webp",
		href: "/services/gutter-cleaning",
		popular: false,
		icon: Building,
		faqs: [],
		primaryKeywords: ["gutter cleaning vancouver"],
		secondaryKeywords: ["downspout cleaning"],
		localKeywords: ["gutter cleaning richmond"],
		beforeAfterExamples: []
	},
	"roof-cleaning": {
		id: "roof-cleaning",
		title: "Roof Cleaning",
		name: "Roof Cleaning",
		category: "Exterior Cleaning",
		description: "Safe, effective roof cleaning to remove moss, algae, and debris while preserving your roof's integrity.",
		shortDescription: "Professional roof cleaning and moss removal services",
		longDescription: "Extend your roof's lifespan and maintain your home's appearance with our professional roof cleaning services. We safely remove moss, algae, debris, and stains using industry-approved methods that won't damage your roofing materials.",
		features: ["Gentle soft washing"],
		benefits: ["Fully insured with warranty protection"],
		process: ["Final inspection and progress documentation"],
		image: "https://cdn.sanity.io/files/ws2fgpe5/production/c8e5920de6436c1e190143d5604a7da9dcc95708.webp",
		href: "/services/roof-cleaning",
		popular: false,
		icon: Construction,
		faqs: [],
		primaryKeywords: ["roof moss removal near me"],
		secondaryKeywords: ["roof demossing"],
		localKeywords: ["roof cleaning burnaby"],
		beforeAfterExamples: []
	},
	"concrete-cleaning": {
		id: "concrete-cleaning",
		title: "Concrete Cleaning",
		name: "Concrete Cleaning",
		category: "Exterior Cleaning",
		description: "Deep cleaning of concrete surfaces including driveways, walkways, patios, and parking areas.",
		shortDescription: "Professional concrete pressure washing and stain removal services",
		longDescription: "Revitalize your concrete surfaces with our professional cleaning services. From driveways to sidewalks, patios to pool decks, we remove oil stains, tire marks, algae, and years of accumulated dirt to restore your concrete's original appearance.",
		features: ["Sealing preparation"],
		benefits: ["Professional-grade equipment and solutions"],
		process: ["Optional sealing recommendations"],
		image: "/assets/services/concrete-cleaning-hero.webp",
		href: "/services/concrete-cleaning",
		popular: false,
		icon: Landmark,
		faqs: [],
		primaryKeywords: ["concrete stain removal"],
		secondaryKeywords: ["oil stain removal concrete"],
		localKeywords: ["patio cleaning richmond"],
		beforeAfterExamples: []
	},
	"deck-fence-cleaning": {
		id: "deck-fence-cleaning",
		title: "Deck & Fence Cleaning",
		name: "Deck & Fence Cleaning",
		category: "Exterior Cleaning",
		description: "Restore and protect your outdoor wood and composite surfaces with specialized cleaning techniques.",
		shortDescription: "Professional deck and fence cleaning and restoration services",
		longDescription: "Restore the natural beauty of your deck and fence with our professional cleaning services. We safely remove dirt, grime, mildew, and weathering from all types of wood and composite materials, preparing them for staining or sealing if desired.",
		features: ["Weatherproofing prep"],
		benefits: ["Professional assessment and recommendations"],
		process: ["Maintenance and care recommendations"],
		image: "/assets/services/deck-fence-cleaning-hero.webp",
		href: "/services/deck-fence-cleaning",
		popular: false,
		icon: Wrench,
		faqs: [],
		primaryKeywords: ["wood deck restoration"],
		secondaryKeywords: ["wood fence cleaning"],
		localKeywords: ["fence maintenance richmond"],
		beforeAfterExamples: []
	},
	"solar-panel-cleaning": {
		id: "solar-panel-cleaning",
		title: "Solar Panel Cleaning",
		name: "Solar Panel Cleaning",
		category: "Specialized Services",
		description: "Maximize energy efficiency with professional solar panel cleaning and maintenance services.",
		shortDescription: "Professional solar panel cleaning to maximize energy efficiency",
		longDescription: "Maximize your solar investment with our specialized solar panel cleaning services. Our trained technicians safely remove dust, debris, and buildup that can reduce your panels' efficiency by up to 25%, ensuring optimal energy production.",
		features: ["Regular maintenance"],
		benefits: ["Inspection included with every cleaning"],
		process: ["Maintenance schedule recommendations"],
		image: "https://cdn.sanity.io/files/ws2fgpe5/production/c274e70c23d3ecc7661dcd239b56a18558498448.jpg",
		href: "/services/solar-panel-cleaning",
		popular: false,
		icon: Sun,
		faqs: [],
		primaryKeywords: ["solar panel efficiency"],
		secondaryKeywords: ["renewable energy maintenance"],
		localKeywords: ["solar maintenance richmond"],
		beforeAfterExamples: []
	},
	"commercial-cleaning": {
		id: "commercial-cleaning",
		title: "Commercial Cleaning",
		name: "Commercial Cleaning",
		category: "Commercial Services",
		description: "Professional cleaning services for businesses, storefronts, and commercial properties.",
		shortDescription: "Professional commercial cleaning services for offices and businesses",
		longDescription: "Maintain a clean, professional environment with our comprehensive commercial cleaning services. We provide reliable, consistent cleaning for offices, retail spaces, and commercial properties, helping you create a positive impression for employees and customers.",
		features: ["Regular service schedules"],
		benefits: ["Consistent quality with regular oversight"],
		process: ["Regular performance reviews and optimization"],
		image: "https://cdn.sanity.io/files/ws2fgpe5/production/481fbe2710deb835bcf264e96c174702e5cec635.webp",
		href: "/services/commercial-cleaning",
		popular: false,
		icon: Building2,
		faqs: [],
		primaryKeywords: ["commercial cleaning company"],
		secondaryKeywords: ["workplace cleaning"],
		localKeywords: ["business cleaning richmond"],
		beforeAfterExamples: []
	}
};

export const whyChooseUs: WhyChooseUsItem[] = [
	{
		title: "Experienced Professionals",
		description: "Backed by years of experience and expertise in the best exterior cleaning and maintenance practices.",
		icon: Target
	},
	{
		title: "Time-Saving Service",
		description: "Save time while we restore your property promptly without losing attention to detail.",
		icon: Clock
	},
	{
		title: "Fully Equipped & Safe",
		description: "Latest cleaning equipment and eco-friendly products delivered by insured professionals.",
		icon: Shield
	},
	{
		title: "100% Satisfaction",
		description: "We stand behind our work with a complete satisfaction guarantee on every service.",
		icon: Smile
	}
];

export const serviceHighlights: ServiceHighlight[] = [
	{
		title: "Premium Results",
		description: "We deliver consistently outstanding results using professional-grade equipment and proven techniques.",
		icon: Trophy
	},
	{
		title: "Latest Equipment",
		description: "State-of-the-art cleaning technology ensures efficient, safe, and effective service every time.",
		icon: Settings
	},
	{
		title: "Eco-Friendly",
		description: "Environmentally responsible cleaning solutions that are safe for your family, pets, and plants.",
		icon: Leaf
	},
	{
		title: "Attention to Detail",
		description: "Meticulous attention to every aspect of your cleaning project, from preparation to final inspection.",
		icon: Sparkles
	}
];

export const seo: SEO = {
	title: "Professional Cleaning Services Vancouver Surrey Burnaby | Splash n' Shine",
	description: "Professional exterior cleaning services in Vancouver, Surrey, Burnaby & Fraser Valley. Window cleaning, pressure washing, house washing, gutter cleaning & more!",
	keywords: "cleaning services, window cleaning, pressure washing, house washing, gutter cleaning, roof cleaning, Vancouver, Surrey, Burnaby, Richmond, Fraser Valley",
	ogImage: "/assets/services-overview.webp"
};
