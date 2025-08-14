<script lang="ts">
  import { PUBLIC_PHONE } from "$env/static/public";
  import PhoneCall from "./icons/PhoneCall.svelte";
  import { Button } from "./ui/button/index.js";
  import { Input } from "./ui/input/index.js";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  // Cities from locations data
  const cities = [
    "Vancouver",
    "Surrey", 
    "Burnaby",
    "Richmond",
    "Langley",
    "Coquitlam",
    "North Vancouver",
    "Fraser Valley",
    "Delta",
    "White Rock"
  ];

  let cityTextElement: HTMLElement;
  let currentCityIndex = $state(0);
  let quickQuoteValue = $state("");

  onMount(() => {
    // Set up city rotation animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    
    cities.forEach((_, index) => {
      tl.to(cityTextElement, {
        duration: 0.5,
        opacity: 0,
        y: -10,
        ease: "power2.inOut",
        onComplete: () => {
          currentCityIndex = (index + 1) % cities.length;
        }
      })
      .to(cityTextElement, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.out"
      })
      .to({}, { duration: 2 }); // Pause for 2 seconds
    });
  });

  function handleQuickQuote() {
    if (quickQuoteValue.trim()) {
      // Navigate to contact page with pre-filled data
      goto(`/contact?message=${encodeURIComponent(`Quick quote request: ${quickQuoteValue}`)}`);
    } else {
      goto('/contact');
    }
  }

  function handleQuoteKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleQuickQuote();
    }
  }
</script>

<!-- Improved Top Bar -->
<div class="bg-primary text-primary-foreground py-3 shadow-sm">
  <div class="max-w-7xl mx-auto px-[6%]">
    <div class="flex items-center justify-center md:justify-between gap-4">
      <!-- Left side - Animated text for desktop -->
      <div class="hidden md:flex items-center space-x-6 text-sm">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span class="font-medium">Serving</span>
          <span bind:this={cityTextElement} class="font-bold">{cities[currentCityIndex]}</span>
          <span class="font-medium">& Area</span>
        </div>
        <span class="text-primary-foreground/60">|</span>
        <span class="font-medium">Licensed & Insured</span>
      </div>
      
      <!-- Right side - Quick quote input and phone -->
      <div class="flex items-center gap-3">
        <!-- Quick Quote Input -->
        <div class="hidden sm:flex items-center gap-2">
          <Input
            bind:value={quickQuoteValue}
            placeholder="Quick quote request..."
            class="w-48 h-8 text-sm bg-white/90 border-white/20 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-white/50"
            onkeydown={handleQuoteKeydown}
          />
          <Button
            onclick={handleQuickQuote}
            size="sm"
            variant="secondary"
            class="h-8 px-3 bg-white text-primary hover:bg-white/90 font-medium text-sm"
          >
            Quote
          </Button>
        </div>
        
        <!-- Phone CTA -->
        <a
          href="tel:{PUBLIC_PHONE}"
          class="group flex items-center space-x-2 bg-white/15 hover:bg-white/25 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          aria-label="Call us at {PUBLIC_PHONE}"
        >
          <PhoneCall color="currentColor" class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          <span class="font-semibold text-sm">Call: {PUBLIC_PHONE}</span>
        </a>
      </div>
    </div>
    
    <!-- Mobile quick quote -->
    <div class="sm:hidden mt-3 pt-3 border-t border-white/20">
      <div class="flex items-center gap-2">
        <Input
          bind:value={quickQuoteValue}
          placeholder="Quick quote request..."
          class="flex-1 h-8 text-sm bg-white/90 border-white/20 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-white/50"
          onkeydown={handleQuoteKeydown}
        />
        <Button
          onclick={handleQuickQuote}
          size="sm"
          variant="secondary"
          class="h-8 px-4 bg-white text-primary hover:bg-white/90 font-medium text-sm"
        >
          Get Quote
        </Button>
      </div>
    </div>
  </div>
</div>