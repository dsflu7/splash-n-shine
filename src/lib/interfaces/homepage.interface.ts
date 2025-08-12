	interface Service {
		title: string;
		desc: string;
		icon: string;
		image: string;
		href: string;
		popular?: boolean;
	}

	interface WhyChooseUsItem {
		icon: string;
		title: string;
		description: string;
	}

	interface CompanyStat {
		value: string;
		label: string;
		icon: string;
	}

	interface ProcessStep {
		step: string;
		title: string;
		description: string;
		icon: string;
		details: string;
	}

	interface HomepageData {
		services: Service[];
		whyChooseUs: WhyChooseUsItem[];
		companyStats: CompanyStat[];
		process: ProcessStep[];
	}

