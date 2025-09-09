<script lang="ts">
  import { page } from "$app/stores";
  import { Button } from "$lib/components/ui/button";
  import Link from "$lib/components/Link.svelte";

  // Get the error details from the page store
  const { status, error } = $derived({
    status: $page.status,
    error: $page.error,
  });
</script>

<svelte:head>
  <title>Page Not Found - Splash & Shine</title>
  <meta
    name="description"
    content="Sorry, the page you're looking for doesn't exist. Explore our professional cleaning services or return to our homepage."
  />
  <meta name="robots" content="noindex" />
</svelte:head>

<main class="min-h-screen bg-background flex items-center justify-center px-4">
  <div class="max-w-2xl mx-auto text-center">
    <!-- Logo -->
    <div class="mb-8 flex justify-center">
      <img
        src="/src/lib/assets/logo.png"
        alt="Splash & Shine Logo"
        class="h-20 w-auto"
        loading="eager"
      />
    </div>

    <!-- Error Status -->
    <div class="mb-6">
      <h1 class="text-8xl font-bold text-primary mb-4">
        {status || "404"}
      </h1>
      <h2
        class="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[Helvetica]"
      >
        {#if status === 404}
          Page Not Found
        {:else if status === 500}
          Server Error
        {:else}
          Something Went Wrong
        {/if}
      </h2>
    </div>

    <!-- Error Message -->
    <div class="mb-8">
      <p class="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
        {#if status === 404}
          Sorry, we couldn't find the page you're looking for. It might have
          been moved, deleted, or you entered the wrong URL.
        {:else if status === 500}
          We're experiencing some technical difficulties. Our team has been
          notified and is working to fix the issue.
        {:else}
          An unexpected error occurred. Please try again or contact us if the
          problem persists.
        {/if}
      </p>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/">
        <Button
          size="lg"
          variant="default"
          class="hover:scale-105 transition-all duration-300 font-medium"
        >
          Go to Homepage
        </Button>
      </Link>
      <Link href="/services">
        <Button
          size="lg"
          variant="outline"
          class="hover:border-blue-300/50 hover:scale-105 transition-all duration-300 font-medium"
        >
          Checkout Our Services
        </Button>
      </Link>
    </div>

    <!-- Additional Help -->
    <div class="mt-12 pt-8 border-t border-border/30">
      <p class="text-sm text-muted-foreground mb-4">
        Need help? We're here to assist you.
      </p>
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm"
      >
        <Link
          href="/contact"
          class="text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Contact Us
        </Link>
        <span class="hidden sm:inline text-muted-foreground">•</span>
        <Link
          href="tel:+1-778-804-5911"
          class="text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Call (778) 804-5911
        </Link>
        <span class="hidden sm:inline text-muted-foreground">•</span>
        <Link
          href="/locations"
          class="text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Service Areas
        </Link>
      </div>
    </div>
  </div>
</main>

<!-- Background decoration -->
<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
  <div
    class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
  ></div>
  <div
    class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
  ></div>
</div>
