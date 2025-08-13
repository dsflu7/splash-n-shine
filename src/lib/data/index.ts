import servicesData from './services.json';
import locationsData from './locations.json';

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
	return Object.values(servicesData.services);
};

export const getServiceById = (id: string): Service | undefined => {
	return servicesData.services[id as keyof typeof servicesData.services];
};

export const getServicesForUI = () => {
	return {
		services: getServices(),
		whyChooseUs: servicesData.whyChooseUs,
		serviceHighlights: servicesData.serviceHighlights,
		seo: servicesData.seo
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
	return Object.values(locationsData.locations);
};

export const getLocationById = (id: string): Location | undefined => {
	return locationsData.locations[id as keyof typeof locationsData.locations];
};

export const getLocationsForUI = () => {
	return {
		primaryServiceAreas: locationsData.primaryServiceAreas,
		allLocations: locationsData.allLocations,
		serviceAreas: locationsData.serviceAreas,
		whyLocal: locationsData.whyLocal,
		locationStats: locationsData.locationStats,
		seo: locationsData.seo
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
	return locationsData.primaryServiceAreas;
};

// Export the raw data for any advanced use cases
export const rawServicesData = servicesData;
export const rawLocationsData = locationsData;
