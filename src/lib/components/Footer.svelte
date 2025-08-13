<script lang="ts">
  import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from "$env/static/public";
  import logo from "$lib/assets/logo.png";
  import Link from "./Link.svelte";

  const siteMap = {
    Services: [
      { label: "Primary Service", route: "/services/primary-service" },
      { label: "Secondary Service", route: "/services/secondary-service" },
      { label: "Premium Service", route: "/services/premium-service" },
      { label: "Maintenance Service", route: "/services/maintenance-service" },
      { label: "Specialized Service", route: "/services/specialized-service" },
      { label: "All Services", route: "/services" },
    ],
    Company: [
      { label: "Our Story", route: "/our-story" },
      { label: "Contact", route: "/contact" },
    ],
    Locations: [
      { label: "Downtown", route: "/locations/downtown" },
      { label: "Suburbs", route: "/locations/suburbs" },
      { label: "Business District", route: "/locations/business-district" },
      { label: "All Locations", route: "/locations" },
    ],
    Legal: [
      { label: "Privacy Policy", route: "/privacy-policy" },
      { label: "Terms & Conditions", route: "/terms-and-conditions" },
    ],
  };

  const socialLinks = [
    { label: "Instagram", url: "https://www.instagram.com/yourbusiness/" },
    { label: "Facebook", url: "https://www.facebook.com/yourbusiness" },
    { label: "Twitter", url: "https://twitter.com/yourbusiness" },
  ];
</script>

<footer class="bg-secondary text-secondary-foreground px-[6%] py-16">
  <div class="max-w-7xl mx-auto">
    <!-- Main Footer Content: Logo Left, Sitemap Right -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <!-- Left Side: Logo and Company Info -->
      <div class="flex flex-col items-center lg:items-start space-y-6">
        <div class="flex flex-col items-center lg:items-start space-y-4">
          <!-- Logo -->
          <img src={logo} alt={`${PUBLIC_COMPANY_NAME} Logo`} class="h-24 w-24 object-contain hover:scale-105 transition-transform duration-300" />

          <!-- Company Name -->
          <h2 class="text-2xl font-bold text-primary font-[Cantarell]">
            {PUBLIC_COMPANY_NAME}
          </h2>

          <!-- Tagline -->
          <p
            class="text-muted-foreground text-center lg:text-left max-w-md leading-relaxed"
          >
            Professional services delivering exceptional results. Your trusted partner for quality service and reliable solutions.
          </p>
        </div>

        <!-- Call to Action -->
        <Link
          href="/contact"
          class="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          aria-label="Open quote request form"
        >
          Get Free Quote
        </Link>

        <!-- Social Links -->
        <div class="flex space-x-4">
          {#each socialLinks as social}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-blue-400 hover:scale-110 transition-all duration-300"
              aria-label="Visit our {social.label} page"
            >
              {social.label}
            </a>
          {/each}
        </div>
      </div>

      <!-- Right Side: Sitemap -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {#each Object.entries(siteMap) as [category, links]}
          <div class="space-y-4 group">
            <h3 class="text-primary font-semibold text-lg font-[Cantarell] group-hover:text-blue-400 transition-colors duration-300">
              {category}
            </h3>
            <ul class="space-y-2">
              {#each links as link}
                <li>
                  <a
                    href={link.route}
                    class="text-muted-foreground hover:text-blue-300 hover:translate-x-1 transition-all duration-200 text-sm inline-block"
                    aria-label="Go to {link.label} page"
                  >
                    {link.label}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <!-- Bottom Section: Copyright and Credits -->
    <div class="border-t border-muted-foreground/20 pt-8">
      <div
        class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      >
        <div class="text-center md:text-left">
          <p class="text-sm text-muted-foreground">
            © 2024 - 2028 {PUBLIC_COMPANY_NAME}. All rights reserved.
          </p>
          <p class="text-sm text-muted-foreground">
            {PUBLIC_DOMAIN}
          </p>
        </div>

        <div class="text-center md:text-right">
          <p class="text-sm text-muted-foreground">
            Website by
            <a
              href="https://www.rightmarketing.ca"
              target="_blank"
              rel="dofollow"
              class="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
            >
              rightmarketing.ca
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
