# SvelteKit Business Template

A modern, production-ready SvelteKit 5 template for service-based businesses. Built with TypeScript, Tailwind CSS 4, and shadcn-svelte components.

## ✨ Features

- **SvelteKit 5** with latest runes syntax
- **TypeScript** for type safety
- **Tailwind CSS 4** with custom design system
- **shadcn-svelte** UI components
- **Responsive design** with mobile-first approach
- **SEO optimized** with meta tags and structured data
- **Performance focused** with lazy loading and image optimization
- **Accessible** components following WCAG guidelines
- **Modern development** with Vite and hot reload

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd business-template-sveltekit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your business information:
   ```
   PUBLIC_COMPANY_NAME=Your Business Name
   PUBLIC_DOMAIN=yourbusiness.com  
   PUBLIC_PHONE=(555) 123-4567
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable components
│   │   ├── ui/             # shadcn-svelte components
│   │   ├── icons/          # Custom SVG icons
│   │   └── *.svelte        # Custom components
│   ├── data/               # Static data files
│   ├── assets/             # Images and static assets
│   ├── utils.ts            # Utility functions
│   └── seo-utils.ts        # SEO helpers
├── routes/                 # SvelteKit file-based routes
│   ├── +layout.svelte      # Global layout
│   ├── +page.svelte        # Homepage
│   ├── services/           # Services pages
│   ├── locations/          # Location pages
│   ├── contact/            # Contact page
│   └── ...                 # Other pages
├── app.html               # HTML template
├── app.css               # Global styles
└── app.d.ts              # Type definitions
```

## 🎨 Customization

### 1. Update Business Information

Edit these files to customize for your business:

- `.env` - Basic company info
- `src/lib/data/homepage.json` - Homepage content
- `src/lib/data/services-preview.json` - Service previews
- `src/lib/data/services.json` - Full services data
- `src/lib/data/locations.json` - Service areas
- `src/lib/data/service-locations.json` - Service-location combinations

### 2. Update Navigation

Edit `src/lib/components/Header.svelte` and `src/lib/components/Footer.svelte` to customize navigation menus.

### 3. Customize Styling

- `src/app.css` - Global CSS variables and theme
- Tailwind configuration is built-in with CSS variables
- Components use semantic color tokens

### 4. Replace Images

Replace placeholder images with your business photos:
- Logo: `src/lib/assets/logo.png`
- Update image URLs in data files
- Use optimized formats (WebP recommended)

## 🧩 Available Components

### Reusable Components
- `BeforeAfterComparison.svelte` - Image comparison slider
- `Infographic.svelte` - Stats and metrics display
- `CTA.svelte` - Call-to-action sections  
- `QuoteForm.svelte` - Contact/quote forms
- `FloatingShare.svelte` - Social sharing widget
- `Link.svelte` - SvelteKit navigation wrapper
- `ProcessSteps.svelte` - Step-by-step process display

### UI Components (shadcn-svelte)
- Button
- Navigation Menu
- Accordion
- Breadcrumb
- And more...

### Icons
Custom SVG icon components in `src/lib/components/icons/`

## 📱 Pages Included

- **Homepage** - Hero, services, testimonials, process, CTA
- **Services** - Service listings with details
- **Locations** - Service areas and coverage
- **Contact** - Contact form and information
- **Our Story** - About page
- **Privacy Policy** - Legal page
- **Terms & Conditions** - Legal page

## 🔧 Development

### Adding New Components

```bash
# Add shadcn-svelte components
npx shadcn-svelte@latest add [component-name]
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Type checking
npm run check:watch  # Type checking in watch mode
```

### Environment Variables

- `PUBLIC_COMPANY_NAME` - Your business name
- `PUBLIC_DOMAIN` - Your domain name
- `PUBLIC_PHONE` - Your phone number

## 🚀 Deployment

This template is configured for Vercel deployment with `@sveltejs/adapter-vercel`.

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Change adapter in `svelte.config.js`:
- `@sveltejs/adapter-static` for static sites
- `@sveltejs/adapter-node` for Node.js
- `@sveltejs/adapter-auto` for automatic detection

## 📊 SEO & Performance

### Built-in SEO Features
- Meta tags for all pages
- Open Graph tags
- Canonical URLs
- Structured data (JSON-LD)
- Sitemap ready
- Robots.txt ready

### Performance Features
- Image lazy loading
- Code splitting
- Optimized bundles
- Critical CSS inlining
- Responsive images

## 🎯 Recommended for Commission Common Library

These components are ideal for `@devnull03/commission-common`:

### High-Value Reusable Components
1. **BeforeAfterComparison.svelte** - Universal image comparison
2. **Infographic.svelte** - Stats display component
3. **CTA.svelte** - Call-to-action sections
4. **ContactForm.svelte** (rename from QuoteForm) - Generic contact forms
5. **FloatingShare.svelte** - Social sharing widget
6. **Link.svelte** - SvelteKit navigation component

### Utility Components
7. **Icon components** - WhatsApp, Facebook, Instagram, etc.
8. **SEO utilities** - Meta tag helpers
9. **Button variants** - Enhanced button component
10. **Navigation components** - Menu and breadcrumb components

## 🛠 Technical Stack

- **Framework**: SvelteKit 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Library**: shadcn-svelte
- **Icons**: Custom SVG components
- **Deployment**: Vercel (configurable)
- **Package Manager**: npm/pnpm

## 📝 License

This template is ready for use in client projects. Customize as needed for your business requirements.

## 🤝 Support

For questions or customization help, refer to:
- [SvelteKit Documentation](https://svelte.dev/docs/kit)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn-svelte Documentation](https://shadcn-svelte.com)

---

**Ready to build your business website? Start customizing!** 🚀