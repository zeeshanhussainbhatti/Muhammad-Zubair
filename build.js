#!/usr/bin/env node
// Static site generator: `node build.js` → writes the full website to ./dist
const fs = require('fs');
const path = require('path');

const site = require('./src/data/site');
const services = require('./src/data/services');
const caseStudies = require('./src/data/caseStudies');
const posts = require('./src/data/posts');
const portfolio = require('./src/data/portfolio');
const T = require('./src/templates');
const { esc, abs, icon, layout, breadcrumbs, pageHero, faqBlock, cover, caseCard, postCard, serviceCard, processBlock, fmtDate } = T;

const OUT = path.join(__dirname, 'dist');
const pages = []; // for sitemap

function write(urlPath, html, { sitemap = true, priority = '0.7' } = {}) {
  const file = urlPath === '/404.html' ? path.join(OUT, '404.html') : path.join(OUT, urlPath, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  if (sitemap) pages.push({ loc: abs(urlPath), priority });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dest, e.name);
    e.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
copyDir(path.join(__dirname, 'assets'), path.join(OUT, 'assets'));

const subCount = services.reduce((n, s) => n + s.subs.length, 0);
const years = site.experienceYears;

const GENERAL_FAQS = [
  { q: 'Do you work with clients outside Pakistan?', a: 'Yes. I work with clients across Pakistan and internationally, including the UAE, Saudi Arabia, the UK, the USA, Canada and Australia. Communication happens over email, WhatsApp, Slack and video calls, and invoices can be in PKR or USD.' },
  { q: 'How do your prices work?', a: 'Every project gets a fixed, itemised quote after a free discovery call, so there are no hourly surprises. Larger projects are split into milestones, typically 50% upfront and 50% on completion.' },
  { q: 'How many revisions are included?', a: 'Most projects include two to three structured revision rounds. The exact number is stated in your proposal before we start.' },
  { q: 'Will I own the final designs?', a: 'Yes. Once the project is paid in full, you receive full ownership and all editable source files.' },
  { q: 'How quickly can you start?', a: 'Usually within one to two weeks, depending on the current schedule. Urgent projects can sometimes be accommodated, so just ask.' },
];

const INDUSTRIES = ['Startups & SaaS', 'Retail & E-commerce', 'Food & Restaurants', 'Healthcare & Pharma', 'Real Estate & Construction', 'Fashion & Textiles', 'Education & EdTech', 'Finance & Fintech', 'FMCG & Packaged Goods', 'Corporate & B2B', 'Hospitality & Travel', 'NGOs & Non-profits'];

const TOOLS = ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'After Effects', 'Premiere Pro', 'Blender', 'WordPress', 'Shopify', 'Webflow', 'HTML / CSS / JS', 'Canva'];

// ============================================================ HOME
{
  const faq = faqBlock(GENERAL_FAQS);
  const marquee = services.map((s) => `<span>${esc(s.name)}</span>`).join('<span class="dot">✦</span>');
  const body = `
<section class="hero">
  <div class="container hero__inner">
    <div class="hero__copy">
      <p class="eyebrow eyebrow--light"><span class="pulse"></span> Available for new projects</p>
      <h1>Senior Designer in Pakistan crafting <em>brands, websites &amp; digital products</em> for the world.</h1>
      <p class="hero__lead">I'm ${esc(site.name)}, a ${esc(site.role.toLowerCase())} with <strong>${years}+ years</strong> of experience in logo design, brand identity, UI/UX, website design, packaging and everything in between. I help businesses in Pakistan and around the world look as good as they really are.</p>
      <div class="hero__actions">
        <a href="/contact/" class="btn btn--primary btn--lg">Start Your Project ${icon('arrow')}</a>
        <a href="/portfolio/" class="btn btn--ghost-light btn--lg">View Portfolio</a>
      </div>
      <ul class="hero__trust">
        <li>${icon('check')} Free consultation</li>
        <li>${icon('check')} Fixed-price quotes</li>
        <li>${icon('check')} 100% original work</li>
      </ul>
    </div>
    <div class="hero__art" aria-hidden="true">
      <div class="hero__card hero__card--a"><span>Brand Identity</span><div class="swatches"><i style="background:#2563EB"></i><i style="background:#0E0E10"></i><i style="background:#F3F5F9"></i><i style="background:#0EA5E9"></i></div></div>
      <div class="hero__card hero__card--b"><svg viewBox="0 0 48 48"><path d="M10 34V14l9 11 9-11" fill="none" stroke="#fff" stroke-width="3.6"/><path d="M28 14h10L28 34h10" fill="none" stroke="#2563EB" stroke-width="3.6"/></svg></div>
      <div class="hero__card hero__card--c"><span>UI/UX</span><div class="ui-lines"><i></i><i></i><i></i><b></b></div></div>
      <div class="hero__card hero__card--d"><strong>${years}+</strong><span>Years in design</span></div>
    </div>
  </div>
  <div class="marquee" aria-hidden="true"><div class="marquee__track">${marquee}<span class="dot">✦</span>${marquee}<span class="dot">✦</span></div></div>
</section>

<section class="stats">
  <div class="container stats__grid">
    <div class="stat reveal"><strong><span data-count="${years}">${years}</span>+</strong><span>Years of design experience</span></div>
    <div class="stat reveal"><strong><span data-count="${services.length}">${services.length}</span></strong><span>Core design disciplines</span></div>
    <div class="stat reveal"><strong><span data-count="${subCount}">${subCount}</span>+</strong><span>Specialised services</span></div>
    <div class="stat reveal"><strong>PK + Global</strong><span>Local &amp; international clients</span></div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">What I do</p><h2>Complete design services under one roof</h2></div>
      <p>From your first logo to a full digital product, get senior-level design across every discipline your brand needs, without managing multiple agencies.</p>
    </div>
    <div class="services-grid">${services.map(serviceCard).join('')}</div>
  </div>
</section>

<section class="section section--dark">
  <div class="container split">
    <div class="split__media reveal">
      <div class="portrait">
        <div class="portrait__ph" role="img" aria-label="Portrait of ${esc(site.name)}"><span>MZ</span></div>
        <div class="portrait__badge"><strong>${years}+</strong> years<br>of experience</div>
      </div>
    </div>
    <div class="split__copy">
      <p class="eyebrow eyebrow--light">About me</p>
      <h2>Design experience you can trust, with the care of a personal partner.</h2>
      <p>For more than ${years} years I have helped startups, SMEs, agencies and established companies turn ideas into brands people remember. I have worked across agencies, in-house teams and my own independent studio, which means I understand both creative excellence and business realities.</p>
      <p>When you work with me, you work directly with a senior designer. No juniors, no hand-offs, no hidden layers. Just clear communication, strategic thinking and work delivered on time.</p>
      <ul class="checklist">
        <li>${icon('check')} Strategy-led, not trend-led design</li>
        <li>${icon('check')} One partner for brand, web, print &amp; digital</li>
        <li>${icon('check')} Experience with local &amp; global markets</li>
        <li>${icon('check')} Transparent pricing &amp; dependable deadlines</li>
      </ul>
      <a href="/about/" class="btn btn--primary">More about me ${icon('arrow')}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">Selected work</p><h2>Case studies</h2></div>
      <a href="/case-studies/" class="link-arrow">All case studies ${icon('arrow')}</a>
    </div>
    <div class="case-grid">${caseStudies.map(caseCard).join('')}</div>
  </div>
</section>

<section class="section section--tint">
  <div class="container">
    <div class="section-head section-head--center">
      <p class="eyebrow">How it works</p>
      <h2>A simple, proven design process</h2>
      <p>Clear steps, clear timelines and no surprises, whether your project takes a week or six months.</p>
    </div>
    ${processBlock()}
  </div>
</section>

<section class="section">
  <div class="container split split--top">
    <div class="split__copy">
      <p class="eyebrow">Industries</p>
      <h2>Design experience across industries</h2>
      <p>Over ${years}+ years I have designed for a wide range of sectors, which means I learn your business fast and bring proven ideas from other industries to yours.</p>
      <a href="/portfolio/" class="btn btn--outline">See the portfolio ${icon('arrow')}</a>
    </div>
    <ul class="pill-grid">${INDUSTRIES.map((i) => `<li class="reveal">${esc(i)}</li>`).join('')}</ul>
  </div>
</section>

<section class="section section--tint">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">Insights</p><h2>From the blog</h2></div>
      <a href="/blog/" class="link-arrow">All articles ${icon('arrow')}</a>
    </div>
    <div class="post-grid">${posts.slice(0, 3).map(postCard).join('')}</div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section-head section-head--center"><p class="eyebrow">FAQ</p><h2>${faq.heading}</h2></div>
    ${faq.html}
  </div>
</section>`;
  write(
    '/',
    layout({
      title: `${site.name} | Logo, Brand & Web Designer in Pakistan`,
      description: `${site.name}, a senior graphic designer in Pakistan with ${years}+ years of experience. Logo design, branding, UI/UX, website design, packaging and print for clients in Pakistan and worldwide.`,
      path: '/',
      active: 'home',
      body,
      schema: [
        faq.schema,
        { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: abs('/'), inLanguage: 'en' },
      ],
    }),
    { priority: '1.0' }
  );
}

// ============================================================ ABOUT
{
  const bc = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }]);
  const values = [
    { t: 'Strategy first', d: 'Every pixel has a purpose. I start with your business goals and audience, then design to achieve them.' },
    { t: 'Craft & detail', d: `${years}+ years of craft show in the details: typography, spacing, consistency and files that are flawless to hand over.` },
    { t: 'Honest partnership', d: 'Straight answers, realistic timelines, transparent pricing and design advice in your best interest.' },
    { t: 'Built to last', d: 'I design brands and systems that scale with you, not quick fixes you will need to replace next year.' },
  ];
  const journey = [
    { y: 'The early years', d: 'Started in print and advertising, learning the fundamentals of typography, layout, colour and pre-press on real production deadlines.' },
    { y: 'Agency & brand work', d: 'Led branding, campaign and packaging projects for clients across FMCG, retail, real estate and corporate sectors.' },
    { y: 'Digital & product design', d: 'Expanded into website design, UI/UX and digital products as businesses moved online, designing apps, platforms and online stores.' },
    { y: 'Independent studio', d: 'Today I run my own design practice, partnering directly with businesses and agencies in Pakistan and internationally as designer, creative director and consultant.' },
  ];
  const body = `
${pageHero({
  crumbs: bc.html,
  eyebrow: 'About',
  title: `Hi, I'm ${esc(site.name)}. I've been designing brands for ${years}+ years.`,
  lead: `A senior designer and creative director from ${esc(site.city)}, Pakistan, helping businesses around the world build brands, websites and products that people trust and remember.`,
})}
<section class="section">
  <div class="container split split--top">
    <div class="split__media reveal">
      <div class="portrait portrait--light">
        <div class="portrait__ph" role="img" aria-label="Portrait of ${esc(site.name)}"><span>MZ</span></div>
        <div class="portrait__badge"><strong>${years}+</strong> years<br>of experience</div>
      </div>
    </div>
    <div class="split__copy prose">
      <h2>My story</h2>
      <p>My journey in design began more than ${years} years ago, with a fascination for how a simple shape, colour or word can change the way people feel about a business. That curiosity grew into a career spanning <strong>branding, graphic design, packaging, web design, UI/UX and creative direction</strong>.</p>
      <p>Over the years I have worked with startups launching their first product, family businesses modernising for a new generation, and established companies expanding into international markets. I have designed for clients in Lahore, Karachi and Islamabad as well as in the Gulf, the UK and North America.</p>
      <p>That breadth is my strength. Because I understand the entire design ecosystem, from a business card to a SaaS dashboard and from a shopfront sign to a social media campaign, I make sure your brand is consistent and powerful everywhere it appears.</p>
      <p>Today I run an independent design studio where clients work directly with me. I combine the strategic thinking of an agency with the personal attention, speed and value of a dedicated partner.</p>
      <a href="/contact/" class="btn btn--primary">Work with me ${icon('arrow')}</a>
    </div>
  </div>
</section>
<section class="section section--tint">
  <div class="container">
    <div class="section-head section-head--center"><p class="eyebrow">Journey</p><h2>${years}+ years in the design industry</h2></div>
    <ol class="timeline">${journey.map((j) => `<li class="reveal"><h3>${j.y}</h3><p>${j.d}</p></li>`).join('')}</ol>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head section-head--center"><p class="eyebrow">Values</p><h2>How I work</h2></div>
    <div class="values">${values.map((v, i) => `<div class="value reveal"><span>${String(i + 1).padStart(2, '0')}</span><h3>${v.t}</h3><p>${v.d}</p></div>`).join('')}</div>
  </div>
</section>
<section class="section section--dark">
  <div class="container split split--top">
    <div class="split__copy">
      <p class="eyebrow eyebrow--light">Expertise</p>
      <h2>Skills &amp; tools</h2>
      <p>I use industry-standard tools and keep up with modern workflows, so your files are always professional, editable and developer-friendly.</p>
    </div>
    <div>
      <ul class="pill-grid pill-grid--dark">${TOOLS.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <ul class="skill-list">${services.map((s) => `<li><a href="/services/${s.slug}/">${icon(s.icon)} ${esc(s.name)}</a></li>`).join('')}</ul>
    </div>
  </div>
</section>`;
  write(
    '/about/',
    layout({
      title: `About ${site.name} | Senior Designer with ${years}+ Years Experience`,
      description: `Meet ${site.name}, a senior graphic designer, brand designer and creative director from Pakistan with ${years}+ years of experience in branding, UI/UX, web and packaging design.`,
      path: '/about/',
      active: 'about',
      body,
      schema: [bc.schema, { '@context': 'https://schema.org', '@type': 'AboutPage', name: `About ${site.name}`, url: abs('/about/') }],
    }),
    { priority: '0.8' }
  );
}

// ============================================================ SERVICES INDEX
{
  const bc = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }]);
  const body = `
${pageHero({
  crumbs: bc.html,
  eyebrow: 'Services',
  title: 'Design services for every stage of your brand',
  lead: `${services.length} disciplines and ${subCount}+ specialised services: logo and brand identity, website and UI/UX design, e-commerce, packaging, print, social media, motion, illustration, presentations, 3D and creative direction.`,
  extra: `<div class="jump">${services.map((s) => `<a href="#${s.slug}">${esc(s.name)}</a>`).join('')}</div>`,
})}
<section class="section">
  <div class="container svc-list">
    ${services
      .map(
        (s, i) => `
    <article class="svc-row reveal" id="${s.slug}">
      <div class="svc-row__head">
        <span class="svc-row__num">${String(i + 1).padStart(2, '0')}</span>
        <span class="service-card__icon">${icon(s.icon)}</span>
        <h2><a href="/services/${s.slug}/">${esc(s.name)}</a></h2>
        <p>${esc(s.short)}</p>
        <a href="/services/${s.slug}/" class="btn btn--outline btn--sm">View service ${icon('arrow')}</a>
      </div>
      <ul class="svc-row__subs">${s.subs.map((x) => `<li><a href="/services/${s.slug}/#${x.id}">${esc(x.name)} ${icon('arrow')}</a></li>`).join('')}</ul>
    </article>`
      )
      .join('')}
  </div>
</section>
<section class="section section--tint">
  <div class="container">
    <div class="section-head section-head--center"><p class="eyebrow">Process</p><h2>How every project runs</h2></div>
    ${processBlock()}
  </div>
</section>`;
  write(
    '/services/',
    layout({
      title: 'Design Services | Logo, Branding, UI/UX, Web & Packaging Design',
      description: `Full-service design studio in Pakistan: logo design, brand identity, website design, UI/UX, e-commerce, packaging, graphic design, social media, motion graphics and more. ${years}+ years of experience.`,
      path: '/services/',
      active: 'services',
      body,
      schema: [
        bc.schema,
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/services/${s.slug}/`), name: s.name })),
        },
      ],
    }),
    { priority: '0.9' }
  );
}

// ============================================================ SERVICE PAGES
for (const s of services) {
  const bc = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: s.name, path: `/services/${s.slug}/` }]);
  const faq = faqBlock(s.faqs, `${s.name}: FAQs`);
  const related = caseStudies.filter((c) => c.service === s.slug);
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 6);
  const body = `
${pageHero({
  crumbs: bc.html,
  eyebrow: 'Service',
  title: esc(s.seoTitle),
  lead: esc(s.short),
  extra: `<div class="hero-actions"><a href="/contact/?service=${s.slug}" class="btn btn--primary">Get a Free Quote ${icon('arrow')}</a><a href="#sub-services" class="btn btn--outline">See all ${s.subs.length} services</a></div>`,
})}
<section class="section">
  <div class="container split split--top">
    <div class="prose">
      <h2>${esc(s.name)} by a senior designer</h2>
      ${s.intro.map((p) => `<p>${esc(p)}</p>`).join('')}
    </div>
    <aside class="aside-card reveal">
      <h3>What's included</h3>
      <ul class="checklist">${s.subs.map((x) => `<li>${icon('check')} <a href="#${x.id}">${esc(x.name)}</a></li>`).join('')}</ul>
      <a href="/contact/?service=${s.slug}" class="btn btn--primary btn--block">Discuss your project</a>
      <p class="aside-card__note">Free consultation · Fixed quote in 24h</p>
    </aside>
  </div>
</section>
<section class="section section--tint" id="sub-services">
  <div class="container">
    <div class="section-head"><div><p class="eyebrow">Sub-services</p><h2>${esc(s.name)} services</h2></div><p>Choose a single service or combine several into one package. Every project is tailored to your goals.</p></div>
    <div class="sub-grid">
      ${s.subs
        .map(
          (x) => `
      <article class="sub-card reveal" id="${x.id}">
        <h3>${esc(x.name)}</h3>
        <p>${esc(x.desc)}</p>
        <ul>${x.deliverables.map((d) => `<li>${icon('check')} ${esc(d)}</li>`).join('')}</ul>
        <a href="/contact/?service=${s.slug}" class="link-arrow">Enquire ${icon('arrow')}</a>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head section-head--center"><p class="eyebrow">Process</p><h2>How we'll work together</h2></div>
    ${processBlock()}
  </div>
</section>
${
  related.length
    ? `<section class="section section--tint"><div class="container"><div class="section-head"><div><p class="eyebrow">Proof</p><h2>Related case study</h2></div></div><div class="case-grid">${related.map(caseCard).join('')}</div></div></section>`
    : ''
}
<section class="section">
  <div class="container narrow">
    <div class="section-head section-head--center"><p class="eyebrow">FAQ</p><h2>${esc(faq.heading)}</h2></div>
    ${faq.html}
  </div>
</section>
<section class="section section--tint">
  <div class="container">
    <div class="section-head"><div><p class="eyebrow">More services</p><h2>Explore other services</h2></div><a href="/services/" class="link-arrow">All services ${icon('arrow')}</a></div>
    <div class="mini-grid">${others.map((o) => `<a href="/services/${o.slug}/" class="mini-card">${icon(o.icon)}<span>${esc(o.name)}</span>${icon('arrow', 'icon mini-card__arrow')}</a>`).join('')}</div>
  </div>
</section>`;
  write(
    `/services/${s.slug}/`,
    layout({
      title: s.seoTitle,
      description: s.metaDescription,
      path: `/services/${s.slug}/`,
      active: 'services',
      body,
      schema: [
        bc.schema,
        faq.schema,
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: s.name,
          serviceType: s.name,
          description: s.metaDescription,
          provider: { '@id': abs('/#business') },
          areaServed: site.areaServed.map((n) => ({ '@type': 'Place', name: n })),
          url: abs(`/services/${s.slug}/`),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${s.name} services`,
            itemListElement: s.subs.map((x) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: x.name, description: x.desc } })),
          },
        },
      ],
    }),
    { priority: '0.9' }
  );
}

// ============================================================ PORTFOLIO
{
  const bc = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio/' }]);
  const filters = [
    ['all', 'All'], ['branding', 'Branding'], ['uiux', 'UI/UX'], ['web', 'Web & E-commerce'], ['packaging', 'Packaging'], ['print', 'Print & Decks'], ['motion', 'Motion'],
  ];
  const body = `
${pageHero({
  crumbs: bc.html,
  eyebrow: 'Portfolio',
  title: 'Selected design work',
  lead: 'A selection of branding, UI/UX, website, packaging, print and motion projects for clients in Pakistan and around the world.',
})}
<section class="section section--flush-top">
  <div class="container">
    <div class="filters" role="group" aria-label="Filter projects">${filters
      .map(([k, l], i) => `<button class="filter${i === 0 ? ' is-active' : ''}" data-filter="${k}" aria-pressed="${i === 0}">${l}</button>`)
      .join('')}</div>
    <div class="portfolio-grid" data-portfolio>
      ${portfolio
        .map((p) => {
          const media = p.image
            ? `<img src="${esc(p.image)}" alt="${esc(p.title)} – ${esc(p.type)}" loading="lazy">`
            : cover(p.colors, p.title);
          const inner = `${media}<div class="work__meta"><h3>${esc(p.title)}</h3><span>${esc(p.type)}</span></div>`;
          return p.link
            ? `<a href="${esc(p.link)}" class="work reveal" data-cat="${p.filter}">${inner}</a>`
            : `<div class="work reveal" data-cat="${p.filter}">${inner}</div>`;
        })
        .join('')}
    </div>
    <p class="center muted">Want to see more work relevant to your industry? <a href="/contact/">Request the full portfolio</a>.</p>
  </div>
</section>`;
  write(
    '/portfolio/',
    layout({
      title: 'Design Portfolio | Logo, Branding, UI/UX & Website Projects',
      description: `Portfolio of ${site.name}: logo design, brand identity, UI/UX, website, packaging and print design projects for clients in Pakistan, the UAE, the UK and worldwide.`,
      path: '/portfolio/',
      active: 'portfolio',
      body,
      schema: [bc.schema, { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Portfolio', url: abs('/portfolio/') }],
    }),
    { priority: '0.8' }
  );
}

// ============================================================ CASE STUDIES
{
  const bc = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies/' }]);
  const body = `
${pageHero({
  crumbs: bc.html,
  eyebrow: 'Case studies',
  title: 'How great design solves real business problems',
  lead: 'In-depth stories of the challenge, the process and the results behind selected projects.',
})}
<section class="section section--flush-top"><div class="container"><div class="case-grid">${caseStudies.map(caseCard).join('')}</div></div></section>`;
  write(
    '/case-studies/',
    layout({
      title: 'Design Case Studies | Branding, UI/UX & Packaging Projects',
      description: `Design case studies by ${site.name}: brand identity, mobile app UX, packaging and e-commerce projects with the challenge, process and results.`,
      path: '/case-studies/',
      active: 'case-studies',
      body,
      schema: [bc.schema],
    }),
    { priority: '0.8' }
  );

  caseStudies.forEach((c, idx) => {
    const svc = services.find((s) => s.slug === c.service);
    const bc2 = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies/' }, { name: c.client, path: `/case-studies/${c.slug}/` }]);
    const next = caseStudies[(idx + 1) % caseStudies.length];
    const body2 = `
${pageHero({ crumbs: bc2.html, eyebrow: `Case study · ${c.category}`, title: esc(c.title), lead: esc(c.summary) })}
<section class="section section--flush-top">
  <div class="container">
    ${cover(c.cover, c.client, 'cover--hero')}
    <dl class="facts">
      <div><dt>Client</dt><dd>${esc(c.client)}</dd></div>
      <div><dt>Location</dt><dd>${esc(c.location)}</dd></div>
      <div><dt>Year</dt><dd>${esc(c.year)}</dd></div>
      <div><dt>Service</dt><dd>${svc ? `<a href="/services/${svc.slug}/">${esc(svc.name)}</a>` : esc(c.category)}</dd></div>
    </dl>
  </div>
</section>
<section class="section section--flush-top">
  <div class="container split split--top">
    <div class="prose">
      <h2>The challenge</h2>
      <p>${esc(c.challenge)}</p>
      <h2>The approach</h2>
      <ol>${c.approach.map((a) => `<li>${esc(a)}</li>`).join('')}</ol>
    </div>
    <aside class="aside-card">
      <h3>Deliverables</h3>
      <ul class="checklist">${c.deliverables.map((d) => `<li>${icon('check')} ${esc(d)}</li>`).join('')}</ul>
    </aside>
  </div>
</section>
<section class="section section--dark">
  <div class="container">
    <div class="section-head"><div><p class="eyebrow eyebrow--light">Outcome</p><h2>The results</h2></div></div>
    <div class="results">${c.results.map((r) => `<div class="result"><strong>${esc(r.value)}</strong><span>${esc(r.label)}</span></div>`).join('')}</div>
  </div>
</section>
<section class="section">
  <div class="container next-case">
    <p class="eyebrow">Next case study</p>
    <a href="/case-studies/${next.slug}/"><h2>${esc(next.title)} ${icon('arrow')}</h2></a>
  </div>
</section>`;
    write(
      `/case-studies/${c.slug}/`,
      layout({
        title: `${c.client} Case Study: ${c.category}`,
        description: c.metaDescription,
        path: `/case-studies/${c.slug}/`,
        active: 'case-studies',
        ogType: 'article',
        body: body2,
        schema: [
          bc2.schema,
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: c.title,
            about: c.category,
            creator: { '@id': abs('/#person') },
            url: abs(`/case-studies/${c.slug}/`),
            dateCreated: c.year,
          },
        ],
      })
    );
  });
}

// ============================================================ BLOG
{
  const bc = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }]);
  const cats = [...new Set(posts.map((p) => p.category))];
  const [first, ...rest] = posts;
  const body = `
${pageHero({
  crumbs: bc.html,
  eyebrow: 'Blog',
  title: 'Design insights, guides &amp; advice',
  lead: 'Practical articles on branding, logo design, UI/UX, web design and growing your business through better design.',
  extra: `<div class="jump">${cats.map((c) => `<span>${esc(c)}</span>`).join('')}</div>`,
})}
<section class="section section--flush-top">
  <div class="container">
    <a href="/blog/${first.slug}/" class="featured-post reveal">
      <div class="featured-post__art" aria-hidden="true"><span>${esc(first.category)}</span></div>
      <div class="featured-post__body">
        <p class="tag">Featured · ${first.readTime} min read</p>
        <h2>${esc(first.title)}</h2>
        <p>${esc(first.excerpt)}</p>
        <span class="post-card__meta"><time datetime="${first.date}">${fmtDate(first.date)}</time><span class="link-arrow">Read article ${icon('arrow')}</span></span>
      </div>
    </a>
    <div class="post-grid">${rest.map(postCard).join('')}</div>
  </div>
</section>`;
  write(
    '/blog/',
    layout({
      title: 'Design Blog | Branding, Logo, UI/UX & Web Design Tips',
      description: `Read the design blog by ${site.name}: guides on logo design cost in Pakistan, branding, UI/UX, website design and growing your business through better design.`,
      path: '/blog/',
      active: 'blog',
      body,
      schema: [bc.schema, { '@context': 'https://schema.org', '@type': 'Blog', name: `${site.name} Design Blog`, url: abs('/blog/') }],
    }),
    { priority: '0.8' }
  );

  for (const p of posts) {
    const bc2 = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }, { name: p.title, path: `/blog/${p.slug}/` }]);
    const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
    const shareUrl = encodeURIComponent(abs(`/blog/${p.slug}/`));
    const body2 = `
${pageHero({
  crumbs: bc2.html,
  eyebrow: p.category,
  title: esc(p.title),
  extra: `<p class="post-meta">By <a href="/about/">${esc(site.name)}</a> · <time datetime="${p.date}">${fmtDate(p.date)}</time> · ${p.readTime} min read</p>`,
})}
<section class="section section--flush-top">
  <div class="container article-wrap">
    <article class="prose article">${p.body}</article>
    <aside class="article-aside">
      <div class="aside-card">
        <div class="author">${T.logo('dark').replace('class="logo logo--dark"', 'class="logo logo--dark logo--mini"')}</div>
        <p>${esc(site.role)} with ${years}+ years of experience helping brands in Pakistan and worldwide.</p>
        <a href="/contact/" class="btn btn--primary btn--block">Get a free consultation</a>
      </div>
      <div class="share">
        <span>Share</span>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://twitter.com/intent/tweet?url=${shareUrl}" target="_blank" rel="noopener">X</a>
        <a href="https://wa.me/?text=${shareUrl}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </aside>
  </div>
</section>
<section class="section section--tint">
  <div class="container">
    <div class="section-head"><div><p class="eyebrow">Keep reading</p><h2>Related articles</h2></div></div>
    <div class="post-grid">${related.map(postCard).join('')}</div>
  </div>
</section>`;
    write(
      `/blog/${p.slug}/`,
      layout({
        title: p.title,
        description: p.metaDescription,
        path: `/blog/${p.slug}/`,
        active: 'blog',
        ogType: 'article',
        body: body2,
        schema: [
          bc2.schema,
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.metaDescription,
            datePublished: p.date,
            dateModified: p.date,
            keywords: p.keywords.join(', '),
            author: { '@id': abs('/#person'), '@type': 'Person', name: site.name, url: abs('/about/') },
            publisher: { '@id': abs('/#business') },
            mainEntityOfPage: abs(`/blog/${p.slug}/`),
            image: abs('/assets/img/og-image.png'),
          },
        ],
      }),
      { priority: '0.7' }
    );
  }
}

// ============================================================ CONTACT
{
  const bc = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }]);
  const faq = faqBlock(GENERAL_FAQS.slice(0, 3));
  const action = site.formspreeId ? `https://formspree.io/f/${site.formspreeId}` : `mailto:${site.email}`;
  const body = `
${pageHero({
  crumbs: bc.html,
  eyebrow: 'Contact',
  title: "Let's start your project",
  lead: 'Tell me a little about your business and what you need. I reply to every enquiry within one business day with next steps and, where possible, a fixed quote.',
})}
<section class="section section--flush-top">
  <div class="container contact">
    <form class="form reveal" action="${action}" method="POST" data-form data-mailto="${site.formspreeId ? '' : esc(site.email)}">
      <div class="form__row">
        <label>Full name *<input type="text" name="name" required autocomplete="name"></label>
        <label>Email *<input type="email" name="email" required autocomplete="email"></label>
      </div>
      <div class="form__row">
        <label>Phone / WhatsApp<input type="tel" name="phone" autocomplete="tel"></label>
        <label>Company / Brand<input type="text" name="company" autocomplete="organization"></label>
      </div>
      <div class="form__row">
        <label>Service needed *
          <select name="service" required data-service-select>
            <option value="">Select a service</option>
            ${services.map((s) => `<option value="${s.slug}">${esc(s.name)}</option>`).join('')}
            <option value="other">Something else</option>
          </select>
        </label>
        <label>Estimated budget
          <select name="budget">
            <option value="">Select a range</option>
            <option>Under PKR 100k / USD 500</option>
            <option>PKR 100k–300k / USD 500–1,500</option>
            <option>PKR 300k–750k / USD 1,500–3,500</option>
            <option>PKR 750k+ / USD 3,500+</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label>Project details *<textarea name="message" rows="6" required placeholder="What are you looking to achieve? Any deadlines or examples you like?"></textarea></label>
      <input type="text" name="_gotcha" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button class="btn btn--primary btn--lg" type="submit">Send enquiry ${icon('arrow')}</button>
      <p class="form__status" role="status" aria-live="polite"></p>
    </form>
    <aside class="contact__info">
      <div class="info-card"><span>${icon('mail')}</span><div><h3>Email</h3><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></div></div>
      <div class="info-card"><span>${icon('phone')}</span><div><h3>Phone / WhatsApp</h3><a href="tel:${site.phoneHref}">${esc(site.phone)}</a><br><a href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener">Chat on WhatsApp →</a></div></div>
      <div class="info-card"><span>${icon('pin')}</span><div><h3>Location</h3><p>${esc(site.city)}, ${esc(site.country)}<br>Serving clients across Pakistan &amp; worldwide</p></div></div>
      <div class="info-card"><span>${icon('clock')}</span><div><h3>Working hours</h3><p>${esc(site.hours)}<br>Flexible calls for UK, US &amp; Gulf clients</p></div></div>
      <div class="social social--dark">${T.socialLinks()}</div>
    </aside>
  </div>
</section>
<section class="section section--tint">
  <div class="container narrow">
    <div class="section-head section-head--center"><p class="eyebrow">FAQ</p><h2>Before you get in touch</h2></div>
    ${faq.html}
  </div>
</section>`;
  write(
    '/contact/',
    layout({
      title: `Contact ${site.name} | Hire a Graphic & Web Designer`,
      description: `Contact ${site.name} for logo design, branding, website design, UI/UX and packaging. Free consultation and fixed quotes for clients in Pakistan and worldwide.`,
      path: '/contact/',
      active: 'contact',
      body,
      schema: [bc.schema, faq.schema, { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact', url: abs('/contact/') }],
    }),
    { priority: '0.8' }
  );
}

// ============================================================ PRIVACY
{
  const bc = breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy/' }]);
  const body = `
${pageHero({ crumbs: bc.html, eyebrow: 'Legal', title: 'Privacy Policy', lead: 'How information you share through this website is collected and used.' })}
<section class="section section--flush-top"><div class="container narrow prose">
<p>This website is operated by ${esc(site.name)}. Your privacy matters, and this policy explains what information is collected and how it is used.</p>
<h2>Information you provide</h2>
<p>When you submit the contact form or email us, we receive the details you choose to share, such as your name, email, phone number, company and project information. This information is used only to respond to your enquiry and to provide our services.</p>
<h2>Analytics</h2>
<p>We may use privacy-friendly analytics to understand how visitors use the website. This data is aggregated and is not used to identify you personally.</p>
<h2>Sharing</h2>
<p>We do not sell or rent your personal information. We may share it with trusted service providers (for example, email or form-handling services) only as needed to operate this website.</p>
<h2>Your rights</h2>
<p>You may request access to, correction of or deletion of your personal information at any time by emailing <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>.</p>
<h2>Updates</h2>
<p>This policy may be updated from time to time. The latest version will always be available on this page.</p>
</div></section>`;
  write('/privacy-policy/', layout({ title: 'Privacy Policy', description: `Privacy policy for the ${site.name} design studio website.`, path: '/privacy-policy/', body, schema: [bc.schema] }), { priority: '0.3' });
}

// ============================================================ 404
write(
  '/404.html',
  layout({
    title: 'Page not found',
    description: 'The page you are looking for could not be found.',
    path: '/404.html',
    noindex: true,
    body: `<section class="section notfound"><div class="container narrow center"><p class="eyebrow">Error 404</p><h1>This page took a design break.</h1><p class="lead">The page you're looking for doesn't exist or has moved.</p><div class="hero-actions hero-actions--center"><a href="/" class="btn btn--primary">Back to home</a><a href="/services/" class="btn btn--outline">Browse services</a></div></div></section>`,
  }),
  { sitemap: false }
);

// ============================================================ SEO FILES
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${p.loc}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`)
    .join('\n')}\n</urlset>\n`
);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);
fs.writeFileSync(
  path.join(OUT, 'site.webmanifest'),
  JSON.stringify(
    {
      name: `${site.name} Design Studio`,
      short_name: site.shortName,
      start_url: '/',
      display: 'standalone',
      background_color: '#0E0E10',
      theme_color: '#0E0E10',
      icons: [
        { src: '/assets/img/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
        { src: '/assets/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    null,
    2
  )
);

console.log(`✓ Built ${pages.length + 1} pages into dist/`);
