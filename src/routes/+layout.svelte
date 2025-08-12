<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { fade } from "svelte/transition";
  import { ChevronUp } from "@lucide/svelte";
  import type { Component } from "svelte";
  let FloatingShareComponent: Component | null = $state(null);

  let { children } = $props();

  let scrollY = $state(0);

  $effect(() => {
    if (scrollY > 0 && !FloatingShareComponent) {
      import("$lib/components/FloatingShare.svelte").then((c) => {
        FloatingShareComponent = c.default;
      });
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:scrollY />

{#if scrollY > 0 && FloatingShareComponent}
  <div transition:fade>
    <FloatingShareComponent />
  </div>
{/if}

<!-- Page Structure -->
<div class="min-h-screen flex flex-col">
  <!-- Header -->
  <Header />

  <!-- Main Content -->
  <main class="flex-1">
    {@render children?.()}
  </main>

  <!-- Footer -->
  <Footer />
</div>

{#if scrollY !== 0}
  <button
    transition:fade
    class="group fixed bottom-4 right-4 z-[999] rounded-full bg-white object-cover p-4 shadow-lg transition-all duration-500 hover:-translate-y-1"
    aria-label="Scroll to top"
    onclick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <ChevronUp
      class="scale-125 text-foreground transition-all duration-500 group-hover:scale-110"
    />
  </button>
{/if}
