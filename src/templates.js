// Shared layout, components and helpers used by build.js
const site = require('./data/site');
const services = require('./data/services');

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const abs = (p = '/') => site.url + p;

const fmtDate = (d) =>
  new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// ---------- Icons (inline SVG, stroke-based) ----------
const ICONS = {
  brand: '<path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9 5.5-.8z"/>',
  web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
  uiux: '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10 18.5h4M9 7h6M9 10.5h6M9 14h3"/>',
  cart: '<path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H6.2"/><circle cx="9.5" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',
  graphic: '<path d="M4 20l6-6M14.5 4.5l5 5L10 19l-6 1 1-6z"/>',
  package: '<path d="M12 2.8l8.5 4.6v9.2L12 21.2l-8.5-4.6V7.4z"/><path d="M3.5 7.4L12 12l8.5-4.6M12 12v9.2"/>',
  social: '<path d="M20 12a8 8 0 1 1-3.1-6.3"/><path d="M8.5 11.5l3 3L21 5"/>',
  motion: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.2v5.6l4.8-2.8z"/>',
  pen: '<path d="M12 19l7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
  slides: '<rect x="2.5" y="3.5" width="19" height="13" rx="1.5"/><path d="M12 16.5V21M8 21h8M7 12l3-3 2.5 2.5L17 7"/>',
  cube: '<path d="M12 2.5l8.5 4.8v9.4L12 21.5l-8.5-4.8V7.3z"/><path d="M12 12l8.5-4.7M12 12L3.5 7.3M12 12v9.5"/>',
  compass: '<circle cx="12" cy="12" r="9.5"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
  phone: '<path d="M5 3.5h3.5l2 5-2.5 1.5a11 11 0 0 0 6 6l1.5-2.5 5 2V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5.5a2 2 0 0 1 2-2z"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3.5 2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  globe: '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.8 3 2.8 16 0 19M12 2.5c-2.8 3-2.8 16 0 19"/>',
};
const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

const SOCIAL_ICONS = {
  linkedin: '<path d="M6.94 8.5H3.56V20h3.38zM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94zM20.44 13.4c0-3.1-1.65-4.55-3.86-4.55a3.33 3.33 0 0 0-3.02 1.66V8.5h-3.38V20h3.38v-6.09c0-1.6.3-3.15 2.29-3.15 1.96 0 1.99 1.83 1.99 3.25V20h3.38z"/>',
  behance: '<path d="M8.3 11.3c.9-.4 1.5-1.2 1.5-2.4 0-2.2-1.6-2.9-3.7-2.9H1v12h5.3c2.2 0 4.2-1 4.2-3.5 0-1.5-.7-2.7-2.2-3.2zM3.6 8.1h2.2c.9 0 1.6.2 1.6 1.2s-.6 1.3-1.5 1.3H3.6zm2.5 7.8H3.6v-3.2h2.6c1 0 1.7.4 1.7 1.6s-.8 1.6-1.8 1.6zM18.5 9.3c-2.6 0-4.4 2-4.4 4.6 0 2.7 1.7 4.5 4.4 4.5 2 0 3.4-.9 4-2.9h-2c-.2.7-1.1 1.1-1.9 1.1-1.3 0-2-.8-2-2.1H22.6c.2-2.7-1.3-5.2-4.1-5.2zm-1.9 3.7c.1-1.1.8-1.8 1.9-1.8s1.7.6 1.8 1.8zM15.4 6.7h5.2v1.3h-5.2z"/>',
  dribbble: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.6 4.6a8.5 8.5 0 0 1 1.9 5.3c-.3-.1-3.1-.6-5.9-.3l-.7-1.7c3.1-1.3 4.5-3.1 4.7-3.3zM12 3.5c2.2 0 4.1.8 5.6 2.1-.2.2-1.4 1.9-4.4 3a43 43 0 0 0-3.1-4.9c.6-.1 1.2-.2 1.9-.2zm-3.5.8a52 52 0 0 1 3.1 4.8 31.6 31.6 0 0 1-7.9 1 8.5 8.5 0 0 1 4.8-5.8zM3.5 12v-.3c.3 0 4.6.1 9-1.3l.7 1.4c-3.5 1-6 3.8-6.6 4.8A8.5 8.5 0 0 1 3.5 12zM12 20.5a8.5 8.5 0 0 1-5.3-1.8c.2-.4 2-3.7 6.6-5.3h.1c1.2 3 1.6 5.5 1.7 6.3-1 .5-2 .8-3.1.8zm4.6-1.4c-.1-.6-.5-3-1.6-5.9 2.6-.4 4.9.3 5.2.4a8.5 8.5 0 0 1-3.6 5.5z"/>',
  instagram: '<path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zM17 6a1.1 1.1 0 1 0 0 2.2A1.1 1.1 0 0 0 17 6z"/><path d="M12 2.5c-2.6 0-2.9 0-3.9.1-3.5.2-5.4 2.1-5.6 5.6-.1 1-.1 1.3-.1 3.9s0 2.9.1 3.9c.2 3.5 2.1 5.4 5.6 5.6 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c3.5-.2 5.4-2.1 5.6-5.6.1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c-.2-3.5-2.1-5.4-5.6-5.6-1-.1-1.3-.1-3.9-.1zm0 1.7c2.5 0 2.8 0 3.8.1 2.6.1 3.8 1.3 3.9 3.9.1 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.6-1.3 3.8-3.9 3.9-1 .1-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.6-.1-3.8-1.3-3.9-3.9-.1-1-.1-1.3-.1-3.8s0-2.8.1-3.8c.1-2.6 1.3-3.8 3.9-3.9 1-.1 1.3-.1 3.8-.1z"/>',
};
const socialLinks = () =>
  Object.entries(site.social)
    .filter(([, url]) => url)
    .map(
      ([k, url]) =>
        `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${SOCIAL_ICONS[k]}</svg></a>`
    )
    .join('');

const logo = (variant = 'dark') => `
<a href="/" class="logo logo--${variant}" aria-label="${esc(site.name)} home">
  <svg viewBox="0 0 48 48" class="logo__mark" aria-hidden="true"><rect width="48" height="48" rx="12" class="logo__bg"/><path d="M10 34V14l9 11 9-11" class="logo__m"/><path d="M28 14h10L28 34h10" class="logo__z"/></svg>
  <span class="logo__text"><strong>${esc(site.name)}</strong><small>Design Studio</small></span>
</a>`;

// ---------- Header ----------
function header(active) {
  const mega = services
    .map(
      (s) => `<a href="/services/${s.slug}/" class="mega__item">${icon(s.icon)}<span><strong>${esc(s.name)}</strong><small>${s.subs
        .slice(0, 3)
        .map((x) => esc(x.name))
        .join(' · ')}</small></span></a>`
    )
    .join('');
  const link = (href, label, key) =>
    `<a href="${href}" class="nav__link${active === key ? ' is-active' : ''}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`;
  return `
<a class="skip" href="#main">Skip to content</a>
<header class="header" data-header>
  <div class="container header__inner">
    ${logo()}
    <nav class="nav" aria-label="Main" data-nav>
      ${link('/', 'Home', 'home')}
      <div class="nav__dropdown" data-dropdown>
        <a href="/services/" class="nav__link${active === 'services' ? ' is-active' : ''}" aria-haspopup="true">Services <svg viewBox="0 0 24 24" class="chev" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2"/></svg></a>
        <button class="nav__expand" aria-label="Show services" aria-expanded="false" data-expand>${icon('plus')}</button>
        <div class="mega"><div class="mega__grid">${mega}</div><div class="mega__foot"><span>Not sure what you need?</span><a href="/contact/">Book a free consultation ${icon('arrow')}</a></div></div>
      </div>
      ${link('/portfolio/', 'Portfolio', 'portfolio')}
      ${link('/case-studies/', 'Case Studies', 'case-studies')}
      ${link('/about/', 'About', 'about')}
      ${link('/blog/', 'Blog', 'blog')}
      ${link('/contact/', 'Contact', 'contact')}
      <a href="/contact/" class="btn btn--primary nav__cta">Start a Project</a>
    </nav>
    <button class="burger" aria-label="Open menu" aria-expanded="false" data-burger><span></span><span></span></button>
  </div>
</header>`;
}

// ---------- Footer ----------
function footer() {
  const year = new Date().getFullYear();
  return `
<section class="cta-band">
  <div class="container cta-band__inner">
    <div>
      <p class="eyebrow eyebrow--light">Let's build something great</p>
      <h2>Have a project in mind? Let's talk about it.</h2>
      <p>Free 30-minute consultation · Fixed quotes · Reply within one business day</p>
    </div>
    <div class="cta-band__actions">
      <a href="/contact/" class="btn btn--primary btn--lg">Get a Free Quote ${icon('arrow')}</a>
      <a href="https://wa.me/${site.whatsapp}" class="btn btn--ghost-light btn--lg" target="_blank" rel="noopener">WhatsApp Me</a>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="container footer__grid">
    <div class="footer__brand">
      ${logo('light')}
      <p>${esc(site.role)} with ${site.experienceYears}+ years of experience in branding, UI/UX, web, packaging and print. Based in ${esc(site.city)}, ${esc(site.country)}, working with clients worldwide.</p>
      <div class="social">${socialLinks()}</div>
    </div>
    <div>
      <h3>Services</h3>
      <ul>${services.slice(0, 7).map((s) => `<li><a href="/services/${s.slug}/">${esc(s.name)}</a></li>`).join('')}<li><a href="/services/">All services →</a></li></ul>
    </div>
    <div>
      <h3>Studio</h3>
      <ul>
        <li><a href="/about/">About</a></li>
        <li><a href="/portfolio/">Portfolio</a></li>
        <li><a href="/case-studies/">Case Studies</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="/privacy-policy/">Privacy Policy</a></li>
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <ul class="footer__contact">
        <li>${icon('mail')}<a href="mailto:${esc(site.email)}">${esc(site.email)}</a></li>
        <li>${icon('phone')}<a href="tel:${site.phoneHref}">${esc(site.phone)}</a></li>
        <li>${icon('pin')}<span>${esc(site.city)}, ${esc(site.country)} · Serving clients worldwide</span></li>
        <li>${icon('clock')}<span>${esc(site.hours)}</span></li>
      </ul>
    </div>
  </div>
  <div class="container footer__bottom">
    <p>© ${year} ${esc(site.name)}. All rights reserved.</p>
    <p>Logo design · Branding · UI/UX · Web design in Pakistan &amp; worldwide</p>
  </div>
</footer>
<a href="https://wa.me/${site.whatsapp}" class="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM12 .2A11.8 11.8 0 0 0 1.9 18L.2 24l6.2-1.6A11.8 11.8 0 1 0 12 .2z"/></svg></a>`;
}

// ---------- Layout ----------
function layout({ title, description, path, body, active, schema = [], ogType = 'website', noindex = false }) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': abs('/#business'),
      name: `${site.name} Design Studio`,
      url: abs('/'),
      logo: abs('/assets/img/logo-mark.svg'),
      image: abs('/assets/img/og-image.png'),
      description: `${site.role} with ${site.experienceYears}+ years of experience offering logo design, branding, UI/UX, website design, packaging and graphic design services.`,
      email: site.email,
      telephone: site.phone,
      priceRange: '$$',
      address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: site.countryCode },
      areaServed: site.areaServed.map((n) => ({ '@type': 'Place', name: n })),
      founder: { '@id': abs('/#person') },
      sameAs: Object.values(site.social).filter(Boolean),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': abs('/#person'),
      name: site.name,
      jobTitle: site.role,
      url: abs('/about/'),
      knowsAbout: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Website Design', 'Packaging Design', 'Graphic Design', 'Motion Graphics', 'Creative Direction'],
      sameAs: Object.values(site.social).filter(Boolean),
    },
    ...schema,
  ];
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${abs(path)}">
${noindex ? '<meta name="robots" content="noindex">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
<meta name="author" content="${esc(site.name)}">
<meta name="geo.region" content="${site.countryCode}">
<meta name="geo.placename" content="${esc(site.city)}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(path)}">
<meta property="og:image" content="${abs('/assets/img/og-image.png')}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${abs('/assets/img/og-image.png')}">
<meta name="theme-color" content="#0E0E10">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
${header(active)}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

// ---------- Reusable components ----------
const breadcrumbs = (items) => {
  const html = `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items
    .map((it, i) =>
      i === items.length - 1 ? `<li aria-current="page">${esc(it.name)}</li>` : `<li><a href="${it.path}">${esc(it.name)}</a></li>`
    )
    .join('')}</ol></nav>`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
  return { html, schema };
};

const pageHero = ({ eyebrow, title, lead, crumbs, extra = '' }) => `
<section class="page-hero">
  <div class="container">
    ${crumbs || ''}
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
    <h1>${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
    ${extra}
  </div>
</section>`;

const faqBlock = (faqs, heading = 'Frequently asked questions') => ({
  html: `<div class="faq">${faqs
    .map(
      (f) => `<details class="faq__item"><summary>${esc(f.q)}<span class="faq__icon">${icon('plus')}</span></summary><div class="faq__a"><p>${esc(f.a)}</p></div></details>`
    )
    .join('')}</div>`,
  heading,
  schema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
});

const cover = (colors, label, cls = '') => `
<div class="cover ${cls}" style="--c1:${colors[0]};--c2:${colors[1]}" aria-hidden="true">
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice"><circle cx="320" cy="60" r="120" fill="var(--c2)" opacity=".55"/><circle cx="60" cy="280" r="90" fill="var(--c2)" opacity=".25"/><path d="M0 220 Q120 150 220 210 T400 180 V300 H0Z" fill="#fff" opacity=".06"/></svg>
  <span class="cover__label">${esc(label)}</span>
</div>`;

const caseCard = (c) => `
<a href="/case-studies/${c.slug}/" class="case-card reveal">
  ${cover(c.cover, c.client)}
  <div class="case-card__body">
    <p class="tag">${esc(c.category)} · ${esc(c.location)}</p>
    <h3>${esc(c.title)}</h3>
    <p>${esc(c.summary)}</p>
    <span class="link-arrow">Read case study ${icon('arrow')}</span>
  </div>
</a>`;

const postCard = (p) => `
<article class="post-card reveal">
  <a href="/blog/${p.slug}/" class="post-card__link">
    <p class="tag">${esc(p.category)} · ${p.readTime} min read</p>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.excerpt)}</p>
    <span class="post-card__meta"><time datetime="${p.date}">${fmtDate(p.date)}</time><span class="link-arrow">Read ${icon('arrow')}</span></span>
  </a>
</article>`;

const serviceCard = (s, i) => `
<a href="/services/${s.slug}/" class="service-card reveal">
  <span class="service-card__num">${String(i + 1).padStart(2, '0')}</span>
  <span class="service-card__icon">${icon(s.icon)}</span>
  <h3>${esc(s.name)}</h3>
  <p>${esc(s.short)}</p>
  <ul class="service-card__subs">${s.subs.slice(0, 4).map((x) => `<li>${esc(x.name)}</li>`).join('')}</ul>
  <span class="link-arrow">Explore ${icon('arrow')}</span>
</a>`;

const PROCESS = [
  { t: 'Discover', d: 'A free consultation to understand your business, audience, competitors and goals. You get a clear scope and fixed quote.' },
  { t: 'Strategy', d: 'Research, positioning and creative direction that make every design decision purposeful, not random.' },
  { t: 'Design', d: 'Concepts, refinement and feedback rounds in Figma or Adobe, with full transparency at every milestone.' },
  { t: 'Deliver & Support', d: 'Final files, guidelines, launch support and ongoing help as your brand and business grow.' },
];
const processBlock = () => `
<ol class="process">${PROCESS.map(
  (p, i) => `<li class="process__step reveal"><span class="process__num">${String(i + 1).padStart(2, '0')}</span><h3>${p.t}</h3><p>${p.d}</p></li>`
).join('')}</ol>`;

module.exports = {
  esc, abs, fmtDate, icon, layout, breadcrumbs, pageHero, faqBlock, cover, caseCard, postCard, serviceCard, processBlock, socialLinks, logo,
};
