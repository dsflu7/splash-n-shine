<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { PUBLIC_COMPANY_NAME, PUBLIC_PHONE } from "$env/static/public";
  import {
    House,
    Building,
    Building2,
    HardHat,
    Droplets,
    Sparkles,
    Check,
  } from "@lucide/svelte";

  interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    popular?: boolean;
  }

  interface Props {
    title?: string;
    subtitle?: string;
    showServiceSelection?: boolean;
    useIframe?: boolean;
  }

  let {
    title = "Get Your Free Estimate",
    subtitle = "Tell us about your project and we'll provide a comprehensive quote within 24 hours.",
    showServiceSelection = true,
    useIframe = true,
  }: Props = $props();

  // Service icon mapping
  const serviceIcons: Record<string, any> = {
    "pressure-washing": Droplets,
    "window-cleaning": Sparkles,
    "gutter-cleaning": Building2,
    "roof-cleaning": HardHat,
    "house-washing": House,
    "commercial-cleaning": Building,
  };

  // Property type icon mapping
  const propertyIcons: Record<string, any> = {
    residential: House,
    commercial: Building,
    "multi-unit": Building2,
  };

  const services: Service[] = [
    {
      id: "pressure-washing",
      title: "Pressure Washing",
      description: "Driveways, sidewalks, decks & exterior surfaces",
      icon: "pressure-washing",
      popular: true,
    },
    {
      id: "window-cleaning",
      title: "Window Cleaning",
      description: "Interior & exterior windows, screens & sills",
      icon: "window-cleaning",
    },
    {
      id: "gutter-cleaning",
      title: "Gutter Cleaning",
      description: "Complete gutter cleaning & maintenance",
      icon: "gutter-cleaning",
    },
    {
      id: "roof-cleaning",
      title: "Roof Cleaning",
      description: "Safe roof cleaning & moss removal",
      icon: "roof-cleaning",
    },
    {
      id: "house-washing",
      title: "House Washing",
      description: "Complete exterior house cleaning",
      icon: "house-washing",
    },
    {
      id: "commercial",
      title: "Commercial Cleaning",
      description: "Business & commercial property services",
      icon: "commercial-cleaning",
    },
  ];

  const propertyTypes = [
    { id: "residential", title: "Residential", icon: "residential" },
    { id: "commercial", title: "Commercial", icon: "commercial" },
    { id: "multi-unit", title: "Multi-Unit", icon: "multi-unit" },
  ];

  const timeFrames = [
    { id: "asap", title: "ASAP", description: "Within 1-2 weeks" },
    { id: "flexible", title: "Flexible", description: "Within 1 month" },
    { id: "planning", title: "Planning Ahead", description: "1-3 months" },
  ];

  // Form state
  let selectedServices = $state<string[]>([]);
  let selectedPropertyType = $state<string>("");
  let selectedTimeFrame = $state<string>("");
  let formData = $state({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let isSubmitting = $state(false);
  let submitSuccess = $state(false);
  let submitError = $state("");

  // Form handlers
  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      selectedServices = selectedServices.filter((id) => id !== serviceId);
    } else {
      selectedServices = [...selectedServices, serviceId];
    }
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      submitError = "Please fill in all required fields.";
      return;
    }

    if (showServiceSelection && selectedServices.length === 0) {
      submitError = "Please select at least one service.";
      return;
    }

    isSubmitting = true;
    submitError = "";

    try {
      // In a real app, this would submit to your backend
      const submitData = {
        ...formData,
        services: selectedServices,
        propertyType: selectedPropertyType,
        timeFrame: selectedTimeFrame,
        timestamp: new Date().toISOString(),
      };

      console.log("Form submission:", submitData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      submitSuccess = true;

      // Reset form
      selectedServices = [];
      selectedPropertyType = "";
      selectedTimeFrame = "";
      formData = {
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      };
    } catch (error) {
      submitError =
        "Something went wrong. Please try again or call us directly.";
    } finally {
      isSubmitting = false;
    }
  };
</script>

<div
  class="w-full max-w-4xl mx-auto bg-card border border-border rounded-lg shadow-lg overflow-hidden"
>
  <!-- Header -->
  <div class="bg-primary text-primary-foreground p-6">
    <h2 class="text-2xl md:text-3xl font-bold mb-2">
      {title}
    </h2>
    <p class="opacity-90 text-sm md:text-base">
      {subtitle}
    </p>
  </div>

  {#if useIframe}
    <!-- Iframe Form -->
    <div class="md:p-6 h-[1400px]">
      <p class="text-center text-sm mt-4">
        If the form below doesn't load, please click <a
          class="italic underline"
          href="https://api.leadconnectorhq.com/widget/form/iqHTKrAbOOGjMJuQrvYW"
          >here</a
        >
      </p>

      <iframe
        src="https://api.leadconnectorhq.com/widget/form/iqHTKrAbOOGjMJuQrvYW"
        style="width:100%;height:100%;border:none;border-radius:3px"
        id="inline-iqHTKrAbOOGjMJuQrvYW"
        data-layout={"{'id':'INLINE'}"}
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form"
        data-height="1179"
        data-layout-iframe-id="inline-iqHTKrAbOOGjMJuQrvYW"
        data-form-id="iqHTKrAbOOGjMJuQrvYW"
        title="Website Form"
      ></iframe>
    </div>
  {:else}
    <!-- Original Form -->
    <form onsubmit={handleSubmit} class="p-6 space-y-8">
      {#if showServiceSelection}
        <!-- Service Selection -->
        <div>
          <h3
            class="text-lg font-semibold text-foreground mb-4 flex items-center"
          >
            <span
              class="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-3"
              >1</span
            >
            Select Services Needed
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each services as service}
              {@const IconComponent = serviceIcons[service.icon]}
              <button
                type="button"
                onclick={() => toggleService(service.id)}
                class="relative p-4 border-2 rounded-lg text-left transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/20
								{selectedServices.includes(service.id)
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'}"
              >
                {#if service.popular}
                  <div
                    class="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full"
                  >
                    Popular
                  </div>
                {/if}

                <div class="flex items-start space-x-3">
                  <div class="text-2xl flex-shrink-0">
                    {#if IconComponent}
                      <IconComponent size={24} class="text-primary" />
                    {/if}
                  </div>
                  <div>
                    <div class="font-medium text-foreground mb-1">
                      {service.title}
                    </div>
                    <div class="text-sm text-muted-foreground">
                      {service.description}
                    </div>
                  </div>
                </div>

                {#if selectedServices.includes(service.id)}
                  <div
                    class="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                  >
                    <Check size={12} class="text-primary-foreground" />
                  </div>
                {/if}
              </button>
            {/each}
          </div>
        </div>

        <!-- Property Type -->
        <div>
          <h3
            class="text-lg font-semibold text-foreground mb-4 flex items-center"
          >
            <span
              class="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-3"
              >2</span
            >
            Property Type
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {#each propertyTypes as type}
              {@const IconComponent = propertyIcons[type.icon]}
              <button
                type="button"
                onclick={() => (selectedPropertyType = type.id)}
                class="p-4 border-2 rounded-lg text-center transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/20
								{selectedPropertyType === type.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'}"
              >
                <div class="text-3xl mb-2 flex justify-center">
                  {#if IconComponent}
                    <IconComponent size={32} class="text-primary" />
                  {/if}
                </div>
                <div class="font-medium text-foreground">
                  {type.title}
                </div>
              </button>
            {/each}
          </div>
        </div>

        <!-- Timeline -->
        <div>
          <h3
            class="text-lg font-semibold text-foreground mb-4 flex items-center"
          >
            <span
              class="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-3"
              >3</span
            >
            When do you need this done?
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {#each timeFrames as timeFrame}
              <button
                type="button"
                onclick={() => (selectedTimeFrame = timeFrame.id)}
                class="p-4 border-2 rounded-lg text-left transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/20
								{selectedTimeFrame === timeFrame.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'}"
              >
                <div class="font-medium text-foreground mb-1">
                  {timeFrame.title}
                </div>
                <div class="text-sm text-muted-foreground">
                  {timeFrame.description}
                </div>
              </button>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Contact Information -->
      <div>
        <h3
          class="text-lg font-semibold text-foreground mb-4 flex items-center"
        >
          <span
            class="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-3"
            >{showServiceSelection ? "4" : "1"}</span
          >
          Your Contact Information
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-foreground mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              required
              class="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              for="phone"
              class="block text-sm font-medium text-foreground mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              bind:value={formData.phone}
              required
              class="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="(555) 123-4567"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-medium text-foreground mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              required
              class="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="your.email@example.com"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="address"
              class="block text-sm font-medium text-foreground mb-2"
            >
              Property Address
            </label>
            <input
              type="text"
              id="address"
              bind:value={formData.address}
              class="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="123 Main Street, City, State ZIP"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-medium text-foreground mb-2"
            >
              Additional Details or Questions
            </label>
            <textarea
              id="message"
              bind:value={formData.message}
              rows="4"
              class="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-vertical"
              placeholder="Tell us more about your project, specific areas of concern, or any questions you have..."
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Error/Success Messages -->
      {#if submitError}
        <div
          class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
        >
          {submitError}
        </div>
      {/if}

      {#if submitSuccess}
        <div
          class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
        >
          <strong>Thank you!</strong> We've received your request and will contact
          you within 24 hours with your free estimate.
        </div>
      {/if}

      <!-- Submit Button -->
      <div class="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
        <Button
          type="submit"
          size="lg"
          class="flex-1 text-lg py-3"
          disabled={isSubmitting}
        >
          {#if isSubmitting}
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          {:else}
            Get My Free Estimate
          {/if}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          class="sm:flex-initial text-lg py-3"
          onclick={() => (window.location.href = `tel:${PUBLIC_PHONE}`)}
        >
          Or Call {PUBLIC_PHONE}
        </Button>
      </div>

      <!-- Additional Info -->
      <div class="text-center pt-4 border-t border-border">
        <p class="text-sm text-muted-foreground">
          <strong>100% Free Estimate</strong> • No obligation • Response within
          24 hours<br />
          Licensed & Insured • Satisfaction Guaranteed
        </p>
      </div>
    </form>
  {/if}
</div>
