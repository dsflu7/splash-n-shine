<script lang="ts">
  import { gsap } from "gsap";
  import { Draggable } from "gsap/Draggable";
  import { onMount, onDestroy } from "svelte";

  interface Props {
    beforeImage: string;
    afterImage: string;
    altText: string;
    title?: string;
    className?: string;
  }

  let {
    beforeImage,
    afterImage,
    altText,
    title = "Before & After Transformation",
    className = "",
  }: Props = $props();

  let sliderPosition = $state(50);
  let containerRef: HTMLDivElement;
  let sliderRef: HTMLDivElement;
  let draggableInstance: Draggable[];

  onMount(() => {
    if (!containerRef || !sliderRef) return;

    // Register GSAP plugin
    gsap.registerPlugin(Draggable);

    // Create draggable instance
    draggableInstance = Draggable.create(sliderRef, {
      type: "x",
      bounds: containerRef,
      onDrag: function () {
        const containerWidth = containerRef.offsetWidth;
        const sliderLeft = this.x;
        const percentage = (sliderLeft / containerWidth) * 100;
        sliderPosition = Math.max(0, Math.min(100, percentage));
      },
      cursor: "ew-resize",
      allowContextMenu: true,
    });

    // Set initial position
    const initialX = (sliderPosition / 100) * containerRef.offsetWidth;
    gsap.set(sliderRef, { x: initialX });
  });

  onDestroy(() => {
    // Clean up draggable instances
    if (draggableInstance) {
      draggableInstance.forEach((instance) => instance.kill());
    }
  });

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      sliderPosition = Math.max(0, sliderPosition - 5);
      updateSliderVisualPosition();
    } else if (event.key === "ArrowRight") {
      sliderPosition = Math.min(100, sliderPosition + 5);
      updateSliderVisualPosition();
    }
  }

  function updateSliderVisualPosition() {
    if (!containerRef || !sliderRef) return;
    const newX = (sliderPosition / 100) * containerRef.offsetWidth;
    gsap.set(sliderRef, { x: newX });
  }

  function handleContainerClick(event: MouseEvent) {
    if (!containerRef || event.target === sliderRef) return;

    const rect = containerRef.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    sliderPosition = Math.max(0, Math.min(100, percentage));

    // Animate to new position
    const newX = (sliderPosition / 100) * containerRef.offsetWidth;
    gsap.to(sliderRef, {
      duration: 0.3,
      x: newX,
      ease: "power2.out",
    });
  }
</script>

<div class="w-full max-w-4xl mx-auto {className}">
  {#if title}
    <h3
      class="text-2xl font-bold text-foreground text-center mb-6 font-[Helvetica]"
    >
      {title}
    </h3>
  {/if}

  <div
    bind:this={containerRef}
    class="relative overflow-hidden rounded-lg shadow-lg bg-card border border-border aspect-[4/3] md:aspect-[16/9] cursor-ew-resize select-none"
    onclick={handleContainerClick}
    onkeydown={handleKeyDown}
    tabindex="0"
    role="slider"
    aria-label="Before and after comparison slider"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow={sliderPosition}
  >
    <!-- After Image (Background) -->
    <div class="absolute inset-0">
      <img
        src={afterImage}
        alt="After - {altText}"
        class="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <!-- After Label -->
      <div
        class="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold shadow-lg"
      >
        After
      </div>
    </div>

    <!-- Before Image (Clipped) -->
    <div
      class="absolute inset-0 transition-all duration-75 ease-out"
      style="clip-path: inset(0 {100 - sliderPosition}% 0 0)"
    >
      <img
        src={beforeImage}
        alt="Before - {altText}"
        class="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <!-- Before Label -->
      <div
        class="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold shadow-lg"
      >
        Before
      </div>
    </div>

    <!-- Slider Handle -->
    <div
      bind:this={sliderRef}
      class="absolute top-0 bottom-0 w-1 bg-primary shadow-lg"
      style="left: {sliderPosition}%"
    >
      <!-- Handle Circle -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-lg border-2 border-primary-foreground flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform duration-200 touch-none"
      >
        <!-- Drag Lines -->
        <div class="flex space-x-0.5">
          <div class="w-0.5 h-4 bg-primary-foreground rounded-full"></div>
          <div class="w-0.5 h-4 bg-primary-foreground rounded-full"></div>
        </div>
      </div>
    </div>

    <!-- Keyboard Instructions (Hidden) -->
    <div class="sr-only">
      Use arrow keys to move the slider and compare before and after images
    </div>
  </div>

  <!-- Usage Instructions -->
  <p class="text-center text-sm text-muted-foreground mt-4">
    Drag the slider or use arrow keys to compare before and after results
  </p>
</div>
