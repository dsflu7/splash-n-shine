import unifiedServicesData from './unified-services.json';
import unifiedLocationsData from './unified-locations.json';

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
	icon: string;
	faqs: Array<{
		question: string;
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
	return Object.values(unifiedServicesData.services);
};

export const getServiceById = (id: string): Service | undefined => {
	return unifiedServicesData.services[id as keyof typeof unifiedServicesData.services];
};

export const getServicesForUI = () => {
	return {
		services: getServices(),
		whyChooseUs: unifiedServicesData.whyChooseUs,
		serviceHighlights: unifiedServicesData.serviceHighlights,
		seo: unifiedServicesData.seo
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
	return Object.values(unifiedLocationsData.locations);
};

export const getLocationById = (id: string): Location | undefined => {
	return unifiedLocationsData.locations[id as keyof typeof unifiedLocationsData.locations];
};

export const getLocationsForUI = () => {
	return {
		primaryServiceAreas: unifiedLocationsData.primaryServiceAreas,
		allLocations: unifiedLocationsData.allLocations,
		serviceAreas: unifiedLocationsData.serviceAreas,
		whyLocal: unifiedLocationsData.whyLocal,
		locationStats: unifiedLocationsData.locationStats,
		seo: unifiedLocationsData.seo
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
	return unifiedLocationsData.primaryServiceAreas;
};

// Export the raw data for any advanced use cases
export const rawServicesData = unifiedServicesData;
export const rawLocationsData = unifiedLocationsData;
