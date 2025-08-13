<script lang="ts">
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
    className = ""
  }: Props = $props();

  let sliderPosition = $state(50);
  let isDragging = $state(false);
  let containerRef: HTMLDivElement;

  function updateSliderPosition(clientX: number) {
    if (!containerRef) return;
    
    const rect = containerRef.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    sliderPosition = Math.max(0, Math.min(100, position));
  }

  function handleMouseDown(event: MouseEvent) {
    isDragging = true;
    updateSliderPosition(event.clientX);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDragging) return;
    updateSliderPosition(event.clientX);
  }

  function handleMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  function handleTouchStart(event: TouchEvent) {
    isDragging = true;
    updateSliderPosition(event.touches[0].clientX);
  }

  function handleTouchMove(event: TouchEvent) {
    if (!isDragging) return;
    event.preventDefault();
    updateSliderPosition(event.touches[0].clientX);
  }

  function handleTouchEnd() {
    isDragging = false;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      sliderPosition = Math.max(0, sliderPosition - 5);
    } else if (event.key === 'ArrowRight') {
      sliderPosition = Math.min(100, sliderPosition + 5);
    }
  }
</script>

<div class="w-full max-w-4xl mx-auto {className}">
  {#if title}
    <h3 class="text-2xl font-bold text-foreground text-center mb-6 font-[Cantarell]">
      {title}
    </h3>
  {/if}
  
  <div 
    bind:this={containerRef}
    class="relative overflow-hidden rounded-lg shadow-lg bg-card border border-border aspect-[4/3] md:aspect-[16/9] cursor-ew-resize select-none"
    onmousedown={handleMouseDown}
    ontouchstart={handleTouchStart}
    ontouchmove={handleTouchMove}
    ontouchend={handleTouchEnd}
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
      <div class="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold shadow-lg">
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
      <div class="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold shadow-lg">
        Before
      </div>
    </div>

    <!-- Slider Handle -->
    <div 
      class="absolute top-0 bottom-0 w-1 bg-primary shadow-lg transition-all duration-75 ease-out"
      style="left: {sliderPosition}%"
    >
      <!-- Handle Circle -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-lg border-2 border-primary-foreground flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform duration-200">
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
