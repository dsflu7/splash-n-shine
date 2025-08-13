# Components for @devnull03/commission-common

This document lists all the reusable components extracted from the SvelteKit Business Template that are suitable for the `@devnull03/commission-common` library.

## High-Priority Components

### 1. BeforeAfterComparison.svelte
**Purpose**: Interactive image comparison slider  
**Features**: 
- Drag slider to reveal before/after images
- Responsive design
- Touch/mouse support
- Accessible with keyboard navigation

**Props**:
```typescript
interface Props {
  beforeImage: string;
  afterImage: string;  
  altText: string;
  title?: string;
  className?: string;
}
```

**Usage**: Perfect for showing transformations, improvements, comparisons

---

### 2. Infographic.svelte
**Purpose**: Statistics and metrics display component  
**Features**:
- Grid layout for stats
- Animated counters
- Icon support
- Responsive design

**Props**:
```typescript
interface Props {
  title: string;
  subtitle?: string;
  stats: Array<{
    value: string;
    label: string;
    icon: string;
  }>;
}
```

**Usage**: Company stats, achievements, metrics display

---

### 3. CTA.svelte  
**Purpose**: Call-to-action sections
**Features**:
- Multiple CTA layouts
- Button variants
- Background styling
- Responsive design

**Props**:
```typescript
interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'default' | 'primary' | 'secondary';
}
```

**Usage**: Lead generation, conversion optimization

---

### 4. ContactForm.svelte (rename from QuoteForm)
**Purpose**: Generic contact/quote request forms
**Features**:
- Form validation
- Loading states  
- Error handling
- Customizable fields

**Props**:
```typescript
interface Props {
  title?: string;
  subtitle?: string;
  fields?: FormField[];
  onSubmit?: (data: FormData) => Promise<void>;
}
```

**Usage**: Contact forms, quote requests, lead capture

---

### 5. FloatingShare.svelte
**Purpose**: Social media sharing widget
**Features**:
- Floating position
- Multiple social platforms
- Custom styling
- Mobile responsive

**Props**:
```typescript
interface Props {
  platforms?: ('facebook' | 'twitter' | 'linkedin' | 'whatsapp')[];
  url?: string;
  title?: string;
  mobile?: boolean;
}
```

**Usage**: Social sharing, content promotion

---

### 6. Link.svelte
**Purpose**: Enhanced SvelteKit navigation component
**Features**:
- SvelteKit `goto()` integration
- External/internal link detection
- Loading states
- Accessibility features

**Props**:
```typescript
interface Props {
  href: string;
  children?: any;
  class?: string;
  external?: boolean;
  [key: string]: any;
}
```

**Usage**: All internal navigation, improved UX

---

## Utility Components

### 7. Icon Components
**Location**: `src/lib/components/icons/`
**Components**:
- `WhatsApp.svelte`
- `Facebook.svelte`
- `Instagram.svelte`
- `X.svelte` (Twitter)
- `Telegram.svelte`
- `PhoneCall.svelte`

**Features**:
- SVG-based
- Color and size props
- Consistent styling
- Optimized

**Props** (each):
```typescript
interface Props {
  color?: string;
  class?: string;
  size?: number | string;
}
```

---

### 8. ProcessSteps.svelte
**Purpose**: Step-by-step process visualization
**Features**:
- Numbered steps
- Progress indicators
- Responsive layout
- Animation support

**Props**:
```typescript
interface Props {
  steps: Array<{
    step: string;
    title: string;
    description: string;
    icon?: string;
    details?: string;
  }>;
}
```

---

### 9. Testimonials.svelte
**Purpose**: Customer testimonials display
**Features**:
- Multiple layouts
- Star ratings
- Customer photos
- Carousel support

**Props**:
```typescript
interface Props {
  testimonials: Array<{
    text: string;
    author: string;
    rating?: number;
    image?: string;
    title?: string;
  }>;
  layout?: 'grid' | 'carousel';
}
```

---

## SEO & Utility Functions

### 10. SEO Utilities
**Location**: `src/lib/seo-utils.ts`
**Functions**:
- `generateMetaTags()`
- `generateStructuredData()`
- `createCanonicalUrl()`
- `optimizeImageUrl()`

**Usage**: Consistent SEO across projects

---

### 11. Enhanced UI Components

From shadcn-svelte, already configured and styled:
- **Button** - Enhanced with loading states
- **NavigationMenu** - Accessible dropdown navigation
- **Accordion** - Collapsible content sections
- **Breadcrumb** - Navigation breadcrumbs

---

## Installation Guide for commission-common

### Package Structure
```
@devnull03/commission-common/
├── components/
│   ├── BeforeAfterComparison/
│   ├── Infographic/
│   ├── CTA/
│   ├── ContactForm/
│   ├── FloatingShare/
│   ├── Link/
│   ├── ProcessSteps/
│   ├── Testimonials/
│   └── icons/
├── utils/
│   ├── seo.ts
│   └── index.ts
├── styles/
│   └── globals.css
└── package.json
```

### Dependencies to Include
```json
{
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1"
  },
  "peerDependencies": {
    "svelte": "^5.0.0",
    "@sveltejs/kit": "^2.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

### Export Strategy
```typescript
// src/index.ts
export { default as BeforeAfterComparison } from './components/BeforeAfterComparison/BeforeAfterComparison.svelte';
export { default as Infographic } from './components/Infographic/Infographic.svelte';
export { default as CTA } from './components/CTA/CTA.svelte';
export { default as ContactForm } from './components/ContactForm/ContactForm.svelte';
export { default as FloatingShare } from './components/FloatingShare/FloatingShare.svelte';
export { default as Link } from './components/Link/Link.svelte';
export { default as ProcessSteps } from './components/ProcessSteps/ProcessSteps.svelte';

// Icons
export { default as WhatsAppIcon } from './components/icons/WhatsApp.svelte';
export { default as FacebookIcon } from './components/icons/Facebook.svelte';
// ... other icons

// Utilities
export * from './utils/seo';
```

## Benefits for Commission Work

1. **Consistent Branding** - Same components across all client projects
2. **Faster Development** - Pre-built, tested components
3. **Maintenance** - Single source of truth for updates
4. **Quality Assurance** - Battle-tested components
5. **Client Confidence** - Professional, polished results

## Next Steps

1. Extract components from this template
2. Create TypeScript definitions
3. Set up build pipeline for the library
4. Create comprehensive documentation
5. Publish to npm registry
6. Create usage examples and Storybook

---

**Total Components**: 10 major components + utilities  
**Estimated Development Time Saved**: 20-30 hours per project  
**Maintenance Benefit**: Single codebase for updates