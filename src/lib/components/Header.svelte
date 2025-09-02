<script lang="ts">
  import { PUBLIC_COMPANY_NAME, PUBLIC_PHONE } from "$env/static/public";
  import logo from "$lib/assets/logo.png";
  import Link from "./Link.svelte";
  import PhoneCall from "./icons/PhoneCall.svelte";
  import { Button } from "./ui/button/index.js";
  import * as NavigationMenu from "./ui/navigation-menu/index.js";

  // Mobile menu state
  let mobileMenuOpen = $state(false);

  // Navigation structure with complete services and locations
  const navigation = {
    Services: [
      { label: "Window Cleaning", route: "/services/window-cleaning" },
      { label: "Pressure Washing", route: "/services/pressure-washing" },
      { label: "Gutter Cleaning", route: "/services/gutter-cleaning" },
      { label: "House Washing", route: "/services/house-washing" },
      { label: "Roof Cleaning", route: "/services/roof-cleaning" },
      { label: "Concrete Cleaning", route: "/services/concrete-cleaning" },
      {
        label: "Deck & Fence Cleaning",
        route: "/services/deck-fence-cleaning",
      },
      {
        label: "Solar Panel Cleaning",
        route: "/services/solar-panel-cleaning",
      },
      { label: "All Services", route: "/services" },
    ],
    Company: [
      { label: "Gallery", route: "/gallery" },
      { label: "Our Story", route: "/our-story" },
      { label: "Privacy Policy", route: "/privacy-policy" },
      { label: "Terms & Conditions", route: "/terms-and-conditions" },
    ],
    Locations: [
      { label: "Vancouver", route: "/locations/vancouver" },
      { label: "Surrey", route: "/locations/surrey" },
      { label: "Burnaby", route: "/locations/burnaby" },
      { label: "Richmond", route: "/locations/richmond" },
      { label: "Fraser Valley", route: "/locations/fraser-valley" },
      { label: "Langley", route: "/locations/langley" },
      { label: "Coquitlam", route: "/locations/coquitlam" },
      { label: "North Vancouver", route: "/locations/north-vancouver" },
      { label: "All Locations", route: "/locations" },
    ],
  };

  const mainNavItems = [
    { label: "Services", items: navigation.Services },
    { label: "Company", items: navigation.Company },
    { label: "Locations", items: navigation.Locations },
    { label: "Blog", route: "/blog" },
    //     { label: "Contact", route: "/contact" },
  ];

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<!-- Top Bar with Phone CTA -->
<div class="bg-primary text-primary-foreground py-3">
  <div class="max-w-7xl mx-auto px-[6%]">
    <div class="flex items-center justify-center md:justify-between">
      <div class="hidden md:flex items-center space-x-6 text-sm">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span class="font-medium">Professional Cleaning Services</span>
        </div>
        <span class="text-primary-foreground/60">|</span>
        <span class="font-medium">Licensed & Insured</span>
      </div>
      
      <a
        href="tel:{PUBLIC_PHONE}"
        class="group flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        aria-label="Call {PUBLIC_COMPANY_NAME} at {PUBLIC_PHONE}"
      >
        <PhoneCall color="currentColor" class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
        <span class="font-semibold">Call Now: {PUBLIC_PHONE}</span>
      </a>
    </div>
  </div>
</div>

<!-- Main Header -->
<header class="bg-background border-b border-border sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-[6%]">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <Link
          href="/"
          class="group flex items-center space-x-3 transition-all duration-300"
          aria-label="Go to homepage"
        >
          <img src={logo} alt={`${PUBLIC_COMPANY_NAME} Logo`} class="size-12 group-hover:scale-110 transition-transform duration-300" />
          <!-- <div class="hidden sm:block">
            <div class="text-xl font-bold text-foreground font-[Helvetica] leading-tight group-hover:text-primary transition-colors duration-300">
              {PUBLIC_COMPANY_NAME}
            </div>
            <div class="text-xs text-muted-foreground font-medium">
              Professional Cleaning Services
            </div>
          </div> -->
        </Link>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        <NavigationMenu.Root>
          <NavigationMenu.List>
            {#each mainNavItems as item}
              <NavigationMenu.Item>
                {#if item.items}
                  <!-- Dropdown menu item -->
                  <NavigationMenu.Trigger
                    class="bg-transparent hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content>
                    <div class="w-[400px] p-4">
                      <div class="grid grid-cols-1 gap-2">
                        {#each item.items as subItem}
                          <NavigationMenu.Link
                            href={subItem.route}
                            class="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                          >
                            {subItem.label}
                          </NavigationMenu.Link>
                        {/each}
                      </div>
                    </div>
                  </NavigationMenu.Content>
                {:else}
                  <!-- Single menu item -->
                  <NavigationMenu.Link
                    href={item.route}
                    class="bg-transparent hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </NavigationMenu.Link>
                {/if}
              </NavigationMenu.Item>
            {/each}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>

      <!-- Desktop CTAs -->
      <div class="hidden lg:flex items-center space-x-4">
        <Link
          href="/contact"
          class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Open contact page"
        >
          Contact Us
        </Link>
        <Button variant="default">
          <Link href="/contact" class="text-inherit">Get Free Quote</Link>
        </Button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        onclick={toggleMobileMenu}
        class="lg:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        {#if mobileMenuOpen}
          <!-- Close icon -->
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        {:else}
          <!-- Hamburger icon -->
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        {/if}
      </button>
    </div>
  </div>
</header>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
  <div
    class="lg:hidden fixed inset-0 z-50 bg-black/50"
    onclick={closeMobileMenu}
    onkeydown={(e) => e.key === "Escape" && closeMobileMenu()}
    role="button"
    tabindex="0"
    aria-label="Close mobile menu"
  >
    <!-- Mobile Menu Panel -->
    <div
      class="fixed inset-y-0 right-0 w-80 max-w-full bg-background shadow-xl"
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      tabindex="-1"
    >
      <!-- Mobile Menu Header -->
      <div class="flex items-center justify-between p-6 border-b border-border">
        <h2
          id="mobile-menu-title"
          class="text-lg font-semibold text-foreground font-[Helvetica]"
        >
          Menu
        </h2>
        <button
          onclick={closeMobileMenu}
          class="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Close menu"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Content -->
      <div class="flex flex-col h-full">
        <nav class="flex-1 px-6 py-6 space-y-6 overflow-y-auto">
          {#each mainNavItems as item}
            <div class="space-y-3">
              {#if item.items}
                <!-- Category with sub-items -->
                <h3
                  class="text-sm font-semibold text-foreground font-[Helvetica] uppercase tracking-wide"
                >
                  {item.label}
                </h3>
                <div class="space-y-2 pl-4">
                  {#each item.items as subItem}
                    <a
                      href={subItem.route}
                      onclick={closeMobileMenu}
                      class="block py-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                      aria-label="Go to {subItem.label} page"
                    >
                      {subItem.label}
                    </a>
                  {/each}
                </div>
              {:else}
                <!-- Single item -->
                <a
                  href={item.route}
                  onclick={closeMobileMenu}
                  class="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                  aria-label="Go to {item.label} page"
                >
                  {item.label}
                </a>
              {/if}
            </div>
          {/each}
        </nav>

        <!-- Mobile Menu Footer -->
        <div class="p-6 border-t border-border space-y-4">
          <a
            href="tel:{PUBLIC_PHONE}"
            class="flex items-center space-x-3 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            onclick={closeMobileMenu}
            aria-label="Call {PUBLIC_COMPANY_NAME}"
          >
            <PhoneCall color="currentColor" class="w-5 h-5" />
            <span class="font-medium">Call: {PUBLIC_PHONE}</span>
          </a>

          <Link
            href="/contact"
            onclick={closeMobileMenu}
            class="block w-full text-center py-3 px-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
            aria-label="Request a free quote"
          >
            Get Free Quote
          </Link>

        </div>
      </div>
    </div>
  </div>
{/if}
