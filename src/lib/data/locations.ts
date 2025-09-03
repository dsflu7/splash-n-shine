import {
	Building2,
	Trees,
	Mountain,
	Waves,
	Home,
	Zap,
	Users,
	CloudRain,
	MapPin,
	Map,
	Trophy
} from '@lucide/svelte';

interface Location {
	id: string;
	name: string;
	province: string;
	fullName: string;
	population: string;
	searchVolume: number;
	description: string;
	longDescription: string;
	services: string[];
	image: string;
	href: string;
	serviceAreas: string[];
	localKeywords: string[];
	demographics: {
		population: string;
		medianIncome: string;
		homeOwnership: string;
	};
	localFeatures: string[];
	testimonials: Array<{
		name: string;
		location: string;
		service: string;
		text: string;
	}>;
}

interface ServiceArea {
	title: string;
	description: string;
	icon: any;
}

interface WhyLocalItem {
	title: string;
	description: string;
	icon: any;
}

interface LocationStat {
	value: string;
	description: string;
	icon: any;
}

interface PrimaryServiceArea {
	name: string;
	population: string;
	description: string;
	services: string[];
	image: string;
	href: string;
}

interface SEO {
	title: string;
	description: string;
	keywords: string;
	ogImage: string;
}

// Note: This is a simplified version with key data for the locations page
// The full data structure from the JSON is extensive and would make this file very large

export const primaryServiceAreas: PrimaryServiceArea[] = [
	{
		name: "Vancouver",
		population: "675,218",
		description: "Professional cleaning services throughout Vancouver including downtown, Kitsilano, West End, and all neighborhoods.",
		services: ["Window Cleaning", "Pressure Washing", "House Washing", "Gutter Cleaning"],
		image: "/assets/locations/vancouver-hero.webp",
		href: "/locations/vancouver"
	},
	{
		name: "Surrey",
		population: "568,322",
		description: "Comprehensive cleaning services across Surrey's diverse neighborhoods from Whalley to White Rock border.",
		services: ["House Washing", "Pressure Washing", "Gutter Cleaning", "Window Cleaning"],
		image: "/assets/locations/surrey-hero.webp",
		href: "/locations/surrey"
	},
	{
		name: "Burnaby",
		population: "249,125",
		description: "Expert cleaning services for Burnaby residents from Brentwood to Metrotown and everywhere in between.",
		services: ["Window Cleaning", "House Washing", "Roof Cleaning", "Pressure Washing"],
		image: "/assets/locations/burnaby-hero.webp",
		href: "/locations/burnaby"
	}
];

export const allLocations = [
	{ name: "Vancouver", population: "675,218", href: "/locations/vancouver" },
	{ name: "Surrey", population: "568,322", href: "/locations/surrey" },
	{ name: "Burnaby", population: "249,125", href: "/locations/burnaby" },
	{ name: "Richmond", population: "209,937", href: "/locations/richmond" },
	{ name: "Coquitlam", population: "148,625", href: "/locations/coquitlam" },
	{ name: "Langley", population: "132,603", href: "/locations/langley" },
	{ name: "Delta", population: "108,455", href: "/locations/delta" },
	{ name: "North Vancouver", population: "88,168", href: "/locations/north-vancouver" },
	{ name: "Maple Ridge", population: "90,990", href: "/locations/maple-ridge" },
	{ name: "New Westminster", population: "78,916", href: "/locations/new-westminster" },
	{ name: "Port Coquitlam", population: "61,498", href: "/locations/port-coquitlam" },
	{ name: "West Vancouver", population: "44,122", href: "/locations/west-vancouver" },
	{ name: "Port Moody", population: "37,845", href: "/locations/port-moody" },
	{ name: "Chilliwack", population: "93,203", href: "/locations/chilliwack" },
	{ name: "Abbotsford", population: "153,524", href: "/locations/abbotsford" },
	{ name: "Mission", population: "41,519", href: "/locations/mission" },
	{ name: "Pitt Meadows", population: "19,146", href: "/locations/pitt-meadows" },
	{ name: "White Rock", population: "21,939", href: "/locations/white-rock" },
	{ name: "Tsawwassen", population: "28,000", href: "/locations/tsawwassen" },
	{ name: "Ladner", population: "25,000", href: "/locations/ladner" }
];

export const serviceAreas: ServiceArea[] = [
	{
		title: "Metro Vancouver",
		description: "Urban and suburban communities across the Lower Mainland with specialized city expertise.",
		icon: Building2
	},
	{
		title: "Fraser Valley",
		description: "Growing communities from Burnaby to Chilliwack with dedicated regional knowledge.",
		icon: Trees
	},
	{
		title: "North Shore",
		description: "Mountain communities requiring specialized equipment and techniques for challenging terrain.",
		icon: Mountain
	},
	{
		title: "Coastal Areas",
		description: "Waterfront properties with unique salt air and moisture cleaning requirements.",
		icon: Waves
	}
];

export const whyLocal: WhyLocalItem[] = [
	{
		title: "Local Knowledge",
		description: "We understand BC's unique climate challenges and adjust our methods accordingly.",
		icon: Home
	},
	{
		title: "Fast Response",
		description: "Local teams mean faster service and emergency response when you need it most.",
		icon: Zap
	},
	{
		title: "Community Focused",
		description: "We're your neighbors, invested in keeping our shared communities beautiful.",
		icon: Users
	},
	{
		title: "Weather Experts",
		description: "Rain, sun, snow - we know how BC weather affects your property year-round.",
		icon: CloudRain
	}
];

export const locationStats: LocationStat[] = [
	{
		value: "25+",
		description: "Communities Served",
		icon: MapPin
	},
	{
		value: "2.8M",
		description: "Regional Population",
		icon: Users
	},
	{
		value: "3000km²",
		description: "Service Coverage Area",
		icon: Map
	},
	{
		value: "15+",
		description: "Years Local Experience",
		icon: Trophy
	}
];

export const seo: SEO = {
	title: "Professional Cleaning Services Vancouver Surrey Burnaby | Local Experts",
	description: "Local professional cleaning services across Metro Vancouver, Fraser Valley & BC. Vancouver, Surrey, Burnaby, Richmond window cleaning, pressure washing & more!",
	keywords: "cleaning services vancouver, window cleaning surrey, pressure washing burnaby, house washing richmond, gutter cleaning langley, local cleaners BC",
	ogImage: "/assets/locations-overview.webp"
};
