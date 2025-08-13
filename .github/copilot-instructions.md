---
applyTo: "**"
---
# GitHub Copilot Instructions

## General Development Guidelines


### Code Quality & Standards
- Always write clean, readable, and maintainable code
- Include meaningful comments for complex logic
- Follow consistent naming conventions
- Prioritize code clarity over brevity
- Use TypeScript when possible for better type safety
- DO NOT MAKE .md FILES EVERY FUCKING TIME YOU MAKE CHANGES PLEASE.

## Project Architecture & Patterns

### SvelteKit Structure
- **IMPORTANT**: This is a SvelteKit app using file-based routing in `src/routes/`
- Layout component is in `src/routes/+layout.svelte` with global CSS imports
- Use SvelteKit's `$app/state` for accessing page data (see `FloatingShare.svelte`)
- Environment variables are accessed via `$env/static/public` for public vars

### Component Organization
- Custom components in `src/lib/components/` (FloatingShare, Footer, Link)
- Icons are custom SVG components in `src/lib/components/icons/` - **DO NOT use external icon libraries**
- UI components follow shadcn-svelte patterns in `src/lib/components/ui/`
- All icons are inline SVG with props for `color` and `class` (see `whatsapp.svelte`)

### Design System & Theming
- **CRITICAL**: Theme system uses CSS custom properties in `src/app.css`
- Colors defined as `oklch()` values with light/dark variants
- Radius, spacing use CSS calc() with base variables: `--radius-sm: calc(var(--radius) - 4px)`
- Tailwind 4 with `@theme inline` block maps CSS vars to Tailwind tokens
- **NEVER** hardcode colors - use semantic tokens like `text-foreground`, `bg-primary`

### Package Management
- **IMPORTANT**: Always use `pnpm` for package management. Never use `npm` or `yarn`
- Note: `package.json` has `pnpm.onlyBuiltDependencies` configuration for specific packages

## Framework-Specific Guidelines

### Svelte 5 (Current Standard)
- **IMPORTANT**: Always use Svelte 5 runes syntax - never use legacy Svelte code
- Use `onclick={}` instead of `on:click={}` (remove the colon for all event handlers)
- Use `$state()` for reactive variables instead of `let`
- Use `$derived()` for computed values instead of `$:`
- Use `$effect()` for side effects instead of `$:`
- Use `$props()` for component props with TypeScript interfaces (see `FloatingShare.svelte`)
- Always use `bind:` for two-way data binding with the new syntax

### Component Development Patterns
- Define Props interface above component script: `interface Props { mobile?: boolean; }`
- Use destructuring with defaults: `let { mobile = false }: Props = $props();`
- Utility functions with `cn()` helper from `src/lib/utils.ts` for conditional classes
- Button component supports both button and anchor modes via `href` prop (see `button.svelte`)

### Styling with Tailwind 4
- **IMPORTANT**: Always use Tailwind CSS whenever possible
- Custom styles only for complex layouts (see `.floating-share` in `FloatingShare.svelte`)
- Responsive design with breakpoint-specific styles: `md:flex-row`, `lg:items-start`
- Use semantic color classes: `text-muted-foreground`, `bg-primary/90`

### Component Usage
- **IMPORTANT**: Check `src/lib/components/ui` for existing shadcn-svelte components first
- Use existing components: Button, Accordion, Breadcrumb, Navigation Menu available
- Install new shadcn-svelte components: `pnpm dlx shadcn-svelte@latest add [component-name]`
- Components configured via `components.json` with aliases for imports

## Development Workflow
- **Build**: `pnpm run build` (uses Vite + SvelteKit)
- **Dev**: `pnpm run dev` (Vite dev server)
- **Type Checking**: `pnpm run check` or `pnpm run check:watch`
- Deployment configured for Vercel via `@sveltejs/adapter-vercel`
- DO NOT RUN THE DEV SERVER OVER AND OVER AGAIN, IT WILL ALWAYS BE RUNNIG, JUST TELL ME TO CHECK IT DON'T RUNN IT.

## Figma Integration Rules
- The Figma Dev Mode MCP Server provides an assets endpoint for images and SVGs
- **IMPORTANT**: If the Figma Dev Mode MCP Server returns a localhost source for an image or SVG, use that source directly
- **IMPORTANT**: DO NOT import/add new icon packages - all assets should be in the Figma payload
- **IMPORTANT**: Do NOT use or create placeholders if a localhost source is provided
- Always extract and use design tokens from Figma selections
- Use `get_variable_defs` to retrieve color, spacing, and typography variables

## Core Web Vitals & Performance Optimization

### Largest Contentful Paint (LCP) - Target: <2.5s
- **CRITICAL**: Never use `loading="lazy"` on LCP images - always hurts performance
- **LCP Image Discovery**: Ensure LCP resources are discoverable in HTML source
- **Resource Priority**: Use `fetchpriority="high"` on LCP images: `<img fetchpriority="high" src="hero.webp">`
- **Background Images**: Preload CSS background images in HTML: `<link rel="preload" href="bg.webp" as="image" fetchpriority="high">`
- **Image Formats**: Use WebP with fallbacks, optimize compression
- **Preload Critical Resources**: Add `<link rel="preload">` for fonts, critical CSS, LCP images

### Interaction to Next Paint (INP) - Target: <200ms
- **Break Up Long Tasks**: Use `scheduler.yield()` API or `setTimeout(callback, 0)` for tasks >50ms
- **Event Handler Optimization**: Use passive listeners: `{ passive: true }` for scroll/touch events
- **Event Delegation**: Attach listeners to parent elements, use event bubbling
- **Debounce/Throttle**: Use for frequently firing events (scroll, resize, input)
- **Code Splitting**: Dynamic imports for non-critical components: `const Component = await import('./Component.svelte')`

### Cumulative Layout Shift (CLS) - Target: <0.1
- **Explicit Dimensions**: Always set `width` and `height` attributes on images and videos
- **Font Loading**: Preload critical fonts to prevent FOIT/FOUT
- **Reserve Space**: Use CSS aspect-ratio or min-height for dynamic content
- **Animation Performance**: Use `transform` and `opacity` for animations, never layout properties
- **Loading States**: Implement skeleton screens for dynamic content

### SvelteKit-Specific Performance Patterns
- **Font Preloading**: Use `handle` hook with preload filter for critical fonts
- **Selective Loading**: Dynamic imports for conditional components
- **Navigation Preloading**: Configure link options for client-side navigation
- **Third-Party Scripts**: Use Partytown integration for web workers when possible
- **Bundle Analysis**: Use `rollup-plugin-visualizer` to identify large dependencies

### Image Optimization Guidelines
```svelte
<!-- ✅ Good: LCP image with high priority -->
<img 
  src="hero.webp" 
  alt="Professional cleaning service"
  fetchpriority="high"
  width="800" 
  height="600"
  decoding="async"
/>

<!-- ✅ Good: Below-fold images with lazy loading -->
<img 
  src="gallery-image.webp"
  alt="Before and after cleaning"
  loading="lazy"
  width="400"
  height="300"
  decoding="async"
/>

<!-- ❌ Bad: Never lazy load LCP images -->
<img src="hero.webp" loading="lazy" alt="Hero image" />
```

### CSS Performance Best Practices
- **Critical CSS**: Inline critical CSS in `<style>` tags for above-fold content
- **Non-Critical CSS**: Load with `media="print" onload="this.media='all'"` trick
- **will-change**: Use judiciously on elements that will animate
- **content-visibility**: Use `content-visibility: auto` for off-screen content
- **Avoid Layout Thrashing**: Never read layout properties after writing them

### JavaScript Performance Patterns
- **Lazy Load Components**: Use dynamic imports for non-critical components
- **Tree Shaking**: Import only needed functions: `import { debounce } from 'lodash-es'`
- **Bundle Splitting**: Use route-based code splitting (automatic in SvelteKit)
- **Service Workers**: Cache critical resources for repeat visits
- **Minimize Main Thread Work**: Move heavy computations to Web Workers

### Measurement & Monitoring
- **Core Web Vitals**: Monitor LCP, INP, CLS with real user metrics (RUM)
- **Performance Budget**: Set thresholds for bundle size, image sizes
- **Lighthouse CI**: Automate performance testing in CI/CD pipeline
- **Field Data**: Use Chrome UX Report data for real-world performance insights

### Security & Accessibility
- Validate all user inputs
- Use secure authentication patterns
- Follow accessibility best practices (WCAG guidelines)
- Implement proper error handling and loading states
