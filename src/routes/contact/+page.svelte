<script lang="ts">
  import {
    PUBLIC_COMPANY_NAME,
    PUBLIC_DOMAIN,
    PUBLIC_PHONE,
  } from "$env/static/public";
  import { Button } from "$lib/components/ui/button";
  import PhoneCall from "$lib/components/icons/PhoneCall.svelte";
  import QuoteForm from "$lib/components/QuoteForm.svelte";
</script>

<svelte:head>
  <title>Contact Us - Get Your Free Quote | {PUBLIC_COMPANY_NAME}</title>
  <meta
    name="description"
    content="Contact {PUBLIC_COMPANY_NAME} for professional exterior cleaning services. Get your free quote today! Serving Metro Vancouver."
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/contact" />

  <link
    rel="preload"
    href="https://api.leadconnectorhq.com/widget/form/iqHTKrAbOOGjMJuQrvYW"
    as="embed"
    fetchpriority="high"
  />
</svelte:head>

<div class="bg-background py-16">
  <div class="max-w-7xl mx-auto px-[6%]">
    <!-- Header -->
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-foreground mb-4 font-[Cantarell]">
        Get Your Free Quote
      </h1>
      <p
        class="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
      >
        Ready to transform your property? Contact us today for a free,
        no-obligation quote on our professional exterior cleaning services.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Enhanced Quote Form -->
      <div class="lg:col-span-2">
        <QuoteForm />
      </div>

      <!-- Contact Information Sidebar -->
      <div class="space-y-8">
        <!-- Quick Contact -->
        <div class="bg-card rounded-lg shadow-sm border border-border p-6">
          <h3
            class="text-xl font-semibold text-foreground mb-4 font-[Cantarell]"
          >
            Quick Contact
          </h3>

          <div class="space-y-4">
            <a
              href="tel:{PUBLIC_PHONE}"
              class="flex items-center space-x-3 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
            >
              <PhoneCall color="currentColor" class="w-5 h-5" />
              <div>
                <div class="font-medium">Call Now</div>
                <div class="text-sm opacity-90">{PUBLIC_PHONE}</div>
              </div>
            </a>

            <div class="text-center text-sm text-muted-foreground">
              Average response time: Under 2 hours
            </div>
          </div>
        </div>

        <!-- Service Areas -->
        <div class="bg-card rounded-lg shadow-sm border border-border p-6">
          <h3
            class="text-xl font-semibold text-foreground mb-4 font-[Cantarell]"
          >
            Service Areas
          </h3>
          <div class="space-y-2 text-muted-foreground">
            <p>• Vancouver</p>
            <p>• Surrey</p>
            <p>• Richmond</p>
            <p>• Burnaby</p>
            <p>• North Vancouver</p>
            <p>• West Vancouver</p>
            <p class="text-sm pt-2 border-t border-border">
              Don't see your area? <a
                href="tel:{PUBLIC_PHONE}"
                class="text-primary hover:underline">Call us</a
              > to check availability.
            </p>
          </div>
        </div>

        <!-- Business Hours -->
        <div class="bg-card rounded-lg shadow-sm border border-border p-6">
          <h3
            class="text-xl font-semibold text-foreground mb-4 font-[Cantarell]"
          >
            Business Hours
          </h3>
          <div class="space-y-2 text-muted-foreground">
            <div class="flex justify-between">
              <span>Monday - Friday</span>
              <span>7:00 AM - 7:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span>Saturday</span>
              <span>8:00 AM - 6:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
            <p class="text-sm pt-2 border-t border-border">
              Emergency services available 24/7
            </p>
          </div>
        </div>

        <!-- Why Choose Us -->
        <div class="bg-card rounded-lg shadow-sm border border-border p-6">
          <h3
            class="text-xl font-semibold text-foreground mb-4 font-[Cantarell]"
          >
            Why Choose Us?
          </h3>
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <p class="text-muted-foreground text-sm">
                100% satisfaction guarantee
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <p class="text-muted-foreground text-sm">
                Fully insured and bonded
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <p class="text-muted-foreground text-sm">
                Eco-friendly cleaning solutions
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <p class="text-muted-foreground text-sm">
                Professional equipment and techniques
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <p class="text-muted-foreground text-sm">
                Local family-owned business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
