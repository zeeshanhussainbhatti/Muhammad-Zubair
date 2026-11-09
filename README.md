# Muhammad Zubair — Design Studio Website

A fast, SEO-optimised, multi-page website for a senior designer (16+ years): logo & branding, web, UI/UX, e-commerce, packaging, print, social, motion, illustration, presentations, 3D and creative direction.

## Pages (28)
- Home, About, Contact, Privacy Policy, 404
- Services overview + **12 service pages** with **64 sub-services** (each sub-service has its own anchor, e.g. `/services/brand-identity/#logo-design`)
- Portfolio (filterable)
- Case Studies (index + 3 detail pages)
- Blog (index + 4 SEO articles)
- `sitemap.xml`, `robots.txt`, `site.webmanifest`, Open Graph image

## Edit content
All content lives in `src/data/`:

| File | What it controls |
|---|---|
| `site.js` | Name, domain, email, phone, WhatsApp, city, social links, Formspree form ID |
| `services.js` | Services, sub-services, SEO titles/descriptions, FAQs |
| `caseStudies.js` | Case studies (**sample content — replace with real projects**) |
| `portfolio.js` | Portfolio grid (add `image:` paths for real thumbnails) |
| `posts.js` | Blog posts (newest first) |

Then rebuild:

```bash
npm run build      # outputs the site to dist/
npm run dev        # build + preview at http://localhost:3000
```

## Before going live — checklist
1. `src/data/site.js`: set real **domain**, **email**, **phone/WhatsApp**, **city** and **social links**.
2. Contact form: create a free form at formspree.io and paste the ID into `formspreeId` (until then the form opens the visitor's email app).
3. Replace sample **case studies** and **portfolio** items with your real work and images (`assets/img/portfolio/`).
4. Replace the "MZ" portrait placeholder with your photo (search `portrait__ph` in `build.js`).
5. Review the indicative prices in the blog post "Logo Design Cost in Pakistan".
6. After deploying: submit `sitemap.xml` to Google Search Console & Bing Webmaster Tools, and create a Google Business Profile for local Pakistan rankings.

## Deploy
- **Vercel**: import the repo — `vercel.json` is already configured (build `node build.js`, output `dist`).
- **Netlify / Cloudflare Pages**: build command `node build.js`, publish directory `dist`.
- **Any host / cPanel**: upload the contents of `dist/`.

## SEO built in
Unique titles & meta descriptions, canonical URLs, Open Graph/Twitter cards, JSON-LD schema (ProfessionalService, Person, Service + OfferCatalog, FAQPage, BreadcrumbList, BlogPosting), local signals (Lahore, Karachi, Islamabad, Pakistan) plus international targeting (UAE, KSA, UK, USA, Canada, Australia), semantic HTML, fast static pages, mobile-first design, internal linking between services, case studies and blog.
