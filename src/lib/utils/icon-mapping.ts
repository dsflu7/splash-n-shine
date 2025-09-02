// Icon mapping utilities for converting emoji-based icons to Lucide icons
import {
	Home,
	Building,
	Building2,
	Droplets,
	HardHat,
	Wrench,
	Sparkles,
	Star,
	Target,
	Clock,
	Shield,
	Smile,
	Trophy,
	Settings,
	Leaf,
	CheckCircle,
	Sun,
	Handshake,
	MapPin,
	Brush
} from "@lucide/svelte";
import type { ComponentType } from "svelte";

// Type for the icon mapping
type IconMap = Record<string, ComponentType>;

// Main icon mapping function
export const getIconComponent = (iconName: string): ComponentType => {
	const iconMap: IconMap = {
		// Service icons
		'window-cleaning': Home,
		'pressure-washing': Droplets,
		'house-washing': Home,
		'gutter-cleaning': Building2,
		'roof-cleaning': HardHat,
		'commercial-cleaning': Building,
		'deck-cleaning': Wrench,
		'solar-panel-cleaning': Sun,

		// Property type icons
		'residential': Home,
		'commercial': Building,
		'multi-unit': Building2,

		// Feature icons
		'eco-friendly': Leaf,
		'quality': Star,
		'customer-service': Handshake,
		'local': MapPin,
		'professional': CheckCircle,
		'reliable': Shield,
		'satisfaction': Smile,
		'experience': Trophy,
		'equipment': Settings,
		'sparkle': Sparkles,
		'target': Target,
		'time': Clock,
		'check': CheckCircle,
		'brush': Brush,

		// Emoji mappings for backward compatibility
		'🏠': Home,
		'🪟': Home,
		'🚿': Droplets,
		'🏡': Home,
		'🏘️': Building2,
		'🏗️': HardHat,
		'🏢': Building,
		'🏛️': Building,
		'🪚': Wrench,
		'☀️': Sun,
		'🎯': Target,
		'⏰': Clock,
		'🛡️': Shield,
		'😊': Smile,
		'🏆': Trophy,
		'⚙️': Settings,
		'🌱': Leaf,
		'✨': Sparkles,
		'✓': CheckCircle,
		'⭐': Star,
		'☆': Star,
		'🤝': Handshake,
		'📍': MapPin,
		'🧽': Brush
	};

	return iconMap[iconName] || CheckCircle;
};

// Service-specific icon mapping
export const getServiceIcon = (serviceId: string): ComponentType => {
	const serviceIconMap: IconMap = {
		'window-cleaning': Home,
		'pressure-washing': Droplets,
		'house-washing': Home,
		'gutter-cleaning': Building2,
		'roof-cleaning': HardHat,
		'commercial-cleaning': Building,
		'deck-cleaning': Wrench,
		'solar-panel-cleaning': Sun
	};

	return serviceIconMap[serviceId] || Home;
};

// Property type icon mapping
export const getPropertyTypeIcon = (typeId: string): ComponentType => {
	const propertyIconMap: IconMap = {
		'residential': Home,
		'commercial': Building,
		'multi-unit': Building2
	};

	return propertyIconMap[typeId] || Home;
};

// Feature icon mapping
export const getFeatureIcon = (featureId: string): ComponentType => {
	const featureIconMap: IconMap = {
		'eco-friendly': Leaf,
		'quality': Star,
		'customer-service': Handshake,
		'local': Home,
		'professional': CheckCircle,
		'reliable': Shield,
		'satisfaction': Smile,
		'experience': Trophy,
		'equipment': Settings
	};

	return featureIconMap[featureId] || CheckCircle;
};
