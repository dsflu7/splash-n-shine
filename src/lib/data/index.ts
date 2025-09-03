import { services as servicesData, whyChooseUs, serviceHighlights, seo as servicesSeo } from './services.js';
import { primaryServiceAreas, allLocations, serviceAreas, whyLocal, locationStats, seo as locationsSeo } from './locations.js';

// Type definitions
export interface Service {
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
	icon: any; // Changed from string to any to support Lucide components
	faqs: Array<{
		question?: string; // Made optional to match services.ts
		answer: string;
	}>;
	primaryKeywords: string[];
	secondaryKeywords: string[];
	localKeywords: string[];
	beforeAfterExamples: Array<{
		beforeImage: string;
		afterImage: string;
		title: string;
		altText: string;
	}>;
}

export interface Location {
	id: string;
	name: string;
	province: string;
	fullName: string;
	population: string;
	searchVolume?: number;
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

// Services data access
export const getServices = (): Service[] => {
	return Object.values(servicesData);
};

export const getServiceById = (id: string): Service | undefined => {
	return servicesData[id as keyof typeof servicesData];
};

export const getServicesForUI = () => {
	return {
		services: getServices(),
		whyChooseUs,
		serviceHighlights,
		seo: servicesSeo
	};
};

export const getServiceForSEO = (id: string) => {
	const service = getServiceById(id);
	if (!service) return null;

	return {
		...service,
		// Add any SEO-specific transformations here if needed
	};
};

// Locations data access  
export const getLocations = (): Location[] => {
	// For now, return empty array since we simplified the structure
	// The full location data would need to be added to locations.ts
	return [];
};

export const getLocationById = (id: string): Location | undefined => {
	// For now, return undefined since we simplified the structure
	// Individual location pages would need full data in locations.ts
	return undefined;
};

export const getLocationsForUI = () => {
	return {
		primaryServiceAreas,
		allLocations,
		serviceAreas,
		whyLocal,
		locationStats,
		seo: locationsSeo
	};
};

export const getLocationForSEO = (id: string) => {
	const location = getLocationById(id);
	if (!location) return null;

	return {
		...location,
		// Add any SEO-specific transformations here if needed
	};
};

// Helper functions for backward compatibility
export const getServicesByCategory = (category?: string) => {
	const services = getServices();
	if (!category) return services;
	return services.filter(service => service.category === category);
};

export const getPopularServices = () => {
	return getServices().filter(service => service.popular);
};

export const getPrimaryServiceAreas = () => {
	return primaryServiceAreas;
};

// Export the raw data for any advanced use cases
export const rawServicesData = servicesData;
export const rawLocationsData = { primaryServiceAreas, allLocations, serviceAreas, whyLocal, locationStats, seo: locationsSeo };
