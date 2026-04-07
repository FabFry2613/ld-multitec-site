# LD MULTITEC - Site Web Professionnel CVC B2B

## Design Guidelines

### Design References
- Professional B2B industrial services websites
- Dark header/footer with clean white content sections
- Technical, structured, performance-oriented

### Color Palette
- Primary Dark: #1A1A2E (bleu nuit - header, footer, hero sections)
- Secondary Dark: #0F1C2E (hero alternate)
- Orange CTA: #D4550A (buttons, accents, hover)
- Blue Accent: #1A7BAA (icons, links, secondary elements)
- White: #FFFFFF (text on dark, card backgrounds)
- Light Gray: #F7F8FA (alternate section backgrounds)
- Text Dark: #1A1A2E (body text on light backgrounds)
- Text Muted: #6B7280 (secondary text)

### Typography
- Font: Inter (Google Fonts, preconnect)
- H1: Inter 700, 48px
- H2: Inter 600, 36px
- H3: Inter 600, 24px
- Body: Inter 400, 16px
- Navigation: Inter 600, 15px

### Key Component Styles
- CTA Buttons: bg #D4550A, text white, rounded 4px, hover darken
- Cards: bg white, subtle border, blue icon, hover shadow + orange accent
- Hero sections: bg #1A1A2E or #0F1C2E, white text, orange CTA
- Sections alternate: white / #F7F8FA / #1A1A2E

### Images
- Logo: /assets/logo.png (user provided)
- Hero images: /assets/hero-technician-1.png, /assets/hero-technician-2.png (user provided)
- Screenshots: /assets/screenshot-1.png, /assets/screenshot-2.png (user provided)
- Generated CDN images for service pages

---

## Development Tasks

### Files to Create (8 files max)

1. **src/components/Layout.tsx** - Header (fixed, dark), Footer, mobile hamburger menu, navigation
2. **src/pages/Index.tsx** - Homepage with all sections (hero, reassurance, services, technical scope, clients, engagements, LD SYSTEMS, FAQ, CTA)
3. **src/pages/ServicePage.tsx** - Generic service page template component with all 8 sections
4. **src/pages/ServicePages.tsx** - All 6 service page configurations (data + exports)
5. **src/pages/Realisations.tsx** - 3 case studies
6. **src/pages/APropos.tsx** - About page
7. **src/pages/Contact.tsx** - Contact form + info
8. **src/App.tsx** - Updated router with all 10 routes

### SEO
- Schema.org LocalBusiness on homepage
- Meta tags per page via document.title
- robots.txt already exists