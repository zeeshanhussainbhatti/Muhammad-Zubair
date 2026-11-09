// ============================================================
//  SERVICES — each object becomes a page at /services/<slug>/
//  Sub-services are listed on that page with their own anchors
//  (e.g. /services/brand-identity/#logo-design).
// ============================================================
module.exports = [
  {
    slug: 'brand-identity',
    icon: 'brand',
    name: 'Brand Identity & Logo Design',
    short: 'Logos, visual identity systems and brand guidelines that make you recognisable and trusted.',
    seoTitle: 'Logo Design & Brand Identity Services in Pakistan',
    metaDescription:
      'Professional logo design and brand identity services in Pakistan and worldwide. Logos, visual identity, brand guidelines and rebranding by a designer with 16+ years of experience.',
    intro: [
      'Your brand is the first thing people judge and the last thing they remember. I design logos and complete identity systems that tell your story in a second, work everywhere from a mobile app icon to a 20-foot billboard, and stay relevant for years, not just one season.',
      'Whether you are a startup in Lahore preparing to launch, an established Karachi business that has outgrown its look, or an international company entering new markets, every identity starts with research into your audience, competitors and goals, so the result is strategic, not just pretty.',
    ],
    subs: [
      { name: 'Logo Design', id: 'logo-design', desc: 'Custom, hand-crafted logos: wordmarks, lettermarks, emblems, combination marks and symbols. Every concept is drawn from your brand strategy, tested at small sizes and delivered in every format you will ever need.', deliverables: ['3 initial concepts', 'Refinement rounds', 'Vector files (AI, SVG, PDF, EPS)', 'PNG/JPG for web & social'] },
      { name: 'Visual Identity Systems', id: 'visual-identity', desc: 'A logo is only the start. I build the full system around it: colour palette, typography, patterns, iconography, photography direction and layout rules that keep every touchpoint consistent.', deliverables: ['Colour & type system', 'Brand patterns & graphic elements', 'Imagery direction', 'Template starter kit'] },
      { name: 'Brand Guidelines', id: 'brand-guidelines', desc: 'A clear, practical brand book that shows your team, printers and agencies exactly how to use your brand, with real dos and don\'ts, so quality stays high as you grow.', deliverables: ['PDF brand book', 'Logo usage rules', 'Colour codes (CMYK, RGB, HEX, Pantone)', 'Typography hierarchy'] },
      { name: 'Rebranding & Brand Refresh', id: 'rebranding', desc: 'Modernise an outdated identity without losing the recognition you have earned. I audit what works, keep your brand equity and evolve the rest for today\'s digital-first audience.', deliverables: ['Brand audit', 'Evolution vs. revolution options', 'Rollout plan', 'Updated assets'] },
      { name: 'Brand Strategy & Naming', id: 'brand-strategy', desc: 'Positioning, brand personality, messaging pillars and name development, the thinking that makes design decisions obvious and gives your brand a clear voice in the market.', deliverables: ['Positioning statement', 'Audience personas', 'Tone of voice', 'Name shortlist & checks'] },
      { name: 'Stationery & Corporate Collateral', id: 'stationery', desc: 'Business cards, letterheads, envelopes, email signatures, ID cards and invoices designed to make every interaction feel professional.', deliverables: ['Business cards', 'Letterhead & envelopes', 'Email signature', 'Print-ready files'] },
    ],
    faqs: [
      { q: 'How much does logo design cost in Pakistan?', a: 'Pricing depends on scope. A standalone logo costs far less than a full identity system with guidelines. After a short discovery call I send a fixed quote with no hidden charges, and international clients are quoted in USD.' },
      { q: 'How long does a logo design project take?', a: 'A logo typically takes 1–2 weeks, and a complete brand identity with guidelines takes 3–5 weeks, depending on feedback speed and the number of applications.' },
      { q: 'Will I own the copyright to my logo?', a: 'Yes. On final payment you receive full ownership and all source files. Every logo is original and never sourced from templates or stock.' },
    ],
  },
  {
    slug: 'website-design',
    icon: 'web',
    name: 'Website Design & Development',
    short: 'Fast, beautiful, SEO-ready websites that turn visitors into enquiries and sales.',
    seoTitle: 'Website Design & Development Company in Pakistan',
    metaDescription:
      'Custom website design and development in Pakistan for businesses worldwide. Responsive, SEO-friendly websites on WordPress, Shopify, Webflow or custom code that convert visitors into customers.',
    intro: [
      'Your website is your best salesperson, working 24/7. I design and build websites that load fast, look premium on every screen and guide visitors towards one goal: contacting you or buying from you.',
      'From a sharp one-page site for a consultant to a complex corporate website or online store, every project combines strategy, UX, visual design and clean development, with on-page SEO built in from day one so you are found on Google in Pakistan and abroad.',
    ],
    subs: [
      { name: 'Custom Website Design', id: 'custom-website-design', desc: 'Unique, on-brand website designs created in Figma and built around your customer journey. No recycled templates, just layouts designed for your content and your conversions.', deliverables: ['Sitemap & wireframes', 'High-fidelity desktop & mobile designs', 'Clickable prototype', 'Design system'] },
      { name: 'Corporate & Business Websites', id: 'corporate-websites', desc: 'Credible, multi-page websites for companies, manufacturers, consultancies and service providers, built to win trust with B2B buyers and partners.', deliverables: ['Up to 20+ pages', 'CMS for easy editing', 'Lead forms', 'Analytics setup'] },
      { name: 'Landing Page Design', id: 'landing-pages', desc: 'Focused, high-converting landing pages for ads, launches and campaigns, built with persuasive copy structure, clear calls to action and A/B-test-ready layouts.', deliverables: ['Conversion-focused layout', 'Copywriting support', 'Fast-loading build', 'Tracking pixels'] },
      { name: 'WordPress Development', id: 'wordpress', desc: 'Custom WordPress themes that are fast, secure and easy for your team to update, without the bloat of heavy page builders.', deliverables: ['Custom theme', 'Editable blocks', 'Security & speed hardening', 'Training session'] },
      { name: 'Webflow & No-Code Websites', id: 'webflow', desc: 'Pixel-perfect Webflow builds with rich interactions and a visual CMS, ideal for marketing teams who want to publish without developers.', deliverables: ['Webflow build', 'CMS collections', 'Interactions & animations', 'Hosting setup'] },
      { name: 'Website Redesign', id: 'website-redesign', desc: 'Turn an outdated, slow or confusing website into a modern growth engine while protecting your existing Google rankings with proper redirects and SEO migration.', deliverables: ['UX & SEO audit', 'Redesign', '301 redirect map', 'Performance optimisation'] },
      { name: 'Website Maintenance & Speed Optimisation', id: 'maintenance', desc: 'Ongoing updates, backups, security monitoring and Core Web Vitals optimisation so your site stays fast, safe and ranking.', deliverables: ['Monthly updates', 'Backups', 'Uptime monitoring', 'Speed reports'] },
    ],
    faqs: [
      { q: 'How much does a website cost in Pakistan?', a: 'A landing page, a 5–8 page business website and a custom e-commerce store are very different projects. I provide a fixed, itemised quote after understanding your goals, so you only pay for what you need.' },
      { q: 'Will my website be mobile-friendly and SEO-optimised?', a: 'Always. Every website is fully responsive and built with technical SEO best practices: clean code, fast loading, schema markup, meta tags, sitemaps and Core Web Vitals optimisation.' },
      { q: 'Can I update the website myself?', a: 'Yes. I build on a CMS (WordPress, Webflow, Shopify or a headless CMS) and provide a walkthrough so your team can edit text, images and blog posts without coding.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    icon: 'uiux',
    name: 'UI/UX & Digital Product Design',
    short: 'Intuitive apps, SaaS platforms and dashboards that users love and businesses scale.',
    seoTitle: 'UI/UX Design & Product Design Services | Mobile App & SaaS',
    metaDescription:
      'Expert UI/UX and digital product design for mobile apps, SaaS, web apps and dashboards. User research, wireframes, prototypes and design systems by a senior product designer in Pakistan.',
    intro: [
      'Great products feel effortless, and that takes serious design work. I help startups and enterprises design mobile apps, SaaS platforms and internal tools that are easy to use, visually polished and ready for developers to build.',
      'My product design process is grounded in user research and business metrics: fewer drop-offs, faster onboarding, higher retention. You get clear flows, tested prototypes and a scalable design system, not just attractive screens.',
    ],
    subs: [
      { name: 'Mobile App Design (iOS & Android)', id: 'mobile-app-design', desc: 'Native-feeling app interfaces that follow Apple Human Interface and Material Design guidelines while staying true to your brand.', deliverables: ['User flows', 'App screens', 'Interactive prototype', 'Developer handoff'] },
      { name: 'SaaS & Web App Design', id: 'saas-design', desc: 'Complex software made simple: onboarding, dashboards, settings, billing and data-heavy screens designed for clarity and speed.', deliverables: ['Information architecture', 'Core workflows', 'Responsive web app UI', 'Edge-case states'] },
      { name: 'UX Research & Usability Testing', id: 'ux-research', desc: 'Interviews, surveys, heuristic reviews and usability tests that uncover what is really stopping users, so design decisions are based on evidence.', deliverables: ['Research plan', 'User interviews', 'Usability test report', 'Prioritised recommendations'] },
      { name: 'Wireframing & Prototyping', id: 'wireframing', desc: 'Rapid low- and high-fidelity prototypes that let you validate ideas with real users and investors before writing a line of code.', deliverables: ['Low-fi wireframes', 'Clickable Figma prototype', 'Test scripts', 'Iteration'] },
      { name: 'Design Systems', id: 'design-systems', desc: 'Reusable component libraries, tokens and documentation that keep large products consistent and help teams ship faster.', deliverables: ['Figma component library', 'Design tokens', 'Usage documentation', 'Accessibility guidelines'] },
      { name: 'Dashboard & Data Visualisation', id: 'dashboards', desc: 'Admin panels, analytics dashboards and reporting tools that turn complex data into decisions at a glance.', deliverables: ['KPI hierarchy', 'Chart system', 'Filter & table patterns', 'Dark/light modes'] },
      { name: 'UX Audit & Product Redesign', id: 'ux-audit', desc: 'An expert review of your existing product with a clear, prioritised plan to fix friction and lift conversion and retention.', deliverables: ['Heuristic audit', 'Funnel analysis', 'Quick-win list', 'Redesign concepts'] },
    ],
    faqs: [
      { q: 'What is the difference between UI and UX design?', a: 'UX (user experience) is how a product works: the flows, structure and ease of use. UI (user interface) is how it looks: layout, colour, typography and visual detail. I deliver both together so the product is usable and beautiful.' },
      { q: 'Do you work with developers?', a: 'Yes. I provide developer-ready Figma files, specs, assets and design tokens, and collaborate with your in-house or outsourced team through build and QA.' },
      { q: 'Can you design an MVP for my startup?', a: 'Absolutely. I help founders define the smallest valuable product, design it quickly, and create an investor-ready prototype you can test and pitch with.' },
    ],
  },
  {
    slug: 'ecommerce-design',
    icon: 'cart',
    name: 'E-commerce Design',
    short: 'Shopify, WooCommerce and custom online stores designed to sell more.',
    seoTitle: 'E-commerce Website Design | Shopify & WooCommerce Store Design',
    metaDescription:
      'Conversion-focused e-commerce website design for brands in Pakistan, UAE, UK and USA. Shopify and WooCommerce store design, product pages, checkout UX and marketplace graphics.',
    intro: [
      'An online store has one job: sell. I design e-commerce experiences that build trust instantly, make products irresistible and remove every bit of friction between "add to cart" and "order confirmed".',
      'I work with fashion, beauty, food, home and electronics brands selling locally in Pakistan with COD and to international customers, designing stores that perform on mobile, where most of your buyers shop.',
    ],
    subs: [
      { name: 'Shopify Store Design', id: 'shopify', desc: 'Custom Shopify themes and theme customisation with on-brand sections, upsells and apps configured for performance.', deliverables: ['Theme design & setup', 'Collection & product templates', 'App integration', 'Store training'] },
      { name: 'WooCommerce Store Design', id: 'woocommerce', desc: 'Flexible WordPress-based stores with local payment gateways, COD and courier integrations for the Pakistani market.', deliverables: ['Custom store design', 'Payment gateways', 'Shipping rules', 'Speed optimisation'] },
      { name: 'Product Page & Checkout Optimisation', id: 'conversion-optimisation', desc: 'Product pages and checkouts redesigned with proven conversion principles: social proof, clear pricing, trust badges and a frictionless flow.', deliverables: ['CRO audit', 'Product page redesign', 'Checkout simplification', 'A/B test ideas'] },
      { name: 'Amazon & Marketplace Graphics', id: 'marketplace-graphics', desc: 'Listing images, infographics and A+ / Enhanced Brand Content for Amazon, Daraz, Etsy and Noon that stand out in crowded search results.', deliverables: ['Main & lifestyle images', 'Infographics', 'A+ content modules', 'Storefront design'] },
      { name: 'E-commerce Banners & Sale Campaigns', id: 'sale-campaigns', desc: 'Homepage banners, sale creatives and seasonal campaigns for Eid, 11.11, Black Friday and more, designed as a consistent system.', deliverables: ['Hero banners', 'Category banners', 'Social & email variants', 'Campaign kit'] },
    ],
    faqs: [
      { q: 'Shopify or WooCommerce: which is better?', a: 'Shopify is ideal if you want a hosted, low-maintenance store and plan to sell internationally. WooCommerce offers more flexibility and lower running costs, and suits local Pakistani gateways well. I recommend based on your products, budget and growth plans.' },
      { q: 'Can you integrate local payment methods?', a: 'Yes: cash on delivery, bank transfer, JazzCash, Easypaisa and card gateways, plus courier integrations, depending on your platform.' },
      { q: 'Do you design product photos too?', a: 'I create marketplace graphics, infographics and retouching, and can art-direct your product photo shoots for a consistent look.' },
    ],
  },
  {
    slug: 'graphic-design',
    icon: 'graphic',
    name: 'Graphic Design & Print',
    short: 'Brochures, catalogues, company profiles and marketing collateral that look world-class.',
    seoTitle: 'Graphic Design Services in Pakistan | Brochure & Print Design',
    metaDescription:
      'Professional graphic design services: brochures, company profiles, catalogues, flyers, posters, annual reports and print collateral. Senior graphic designer in Pakistan serving clients worldwide.',
    intro: [
      'Print still matters when it is done right. A well-designed company profile wins tenders, a premium brochure closes deals and a striking poster fills seats. I create print and digital collateral with the polish of a top agency.',
      'Every file is prepared to professional pre-press standards: correct bleeds, colour profiles and resolution, so what you approve on screen is exactly what comes off the press.',
    ],
    subs: [
      { name: 'Company Profile Design', id: 'company-profile', desc: 'Persuasive corporate profiles for B2B companies, contractors and exporters that present your capabilities with authority.', deliverables: ['Content structure', 'Layout design', 'Infographics', 'Print & interactive PDF'] },
      { name: 'Brochure & Catalogue Design', id: 'brochures', desc: 'Product catalogues, tri-folds and sales brochures that make products easy to browse and services easy to buy.', deliverables: ['Multi-page layouts', 'Product grids', 'Print-ready files', 'Digital flipbook version'] },
      { name: 'Flyers, Posters & Leaflets', id: 'flyers-posters', desc: 'Eye-catching promotional material for events, offers and launches, designed to grab attention from across the room.', deliverables: ['Concepts', 'Multiple sizes', 'Print & social versions'] },
      { name: 'Annual Reports & Publications', id: 'annual-reports', desc: 'Annual reports, magazines, books and editorial layouts with clear data visualisation and elegant typography.', deliverables: ['Editorial grid', 'Charts & infographics', 'Cover design', 'Pre-press'] },
      { name: 'Infographic Design', id: 'infographics', desc: 'Complex information transformed into clear, shareable visuals for reports, presentations, social media and websites.', deliverables: ['Data structuring', 'Illustrated infographic', 'Social cut-downs'] },
      { name: 'Outdoor & Signage Design', id: 'signage', desc: 'Billboards, shop signage, vehicle branding, standees, exhibition booths and wayfinding that work at scale and at a glance.', deliverables: ['Billboard & hoarding', 'Shopfront signage', 'Exhibition stand graphics', 'Vehicle wraps'] },
    ],
    faqs: [
      { q: 'Do you handle printing as well?', a: 'I deliver press-ready files and can coordinate with trusted printers in Pakistan, or prepare files to your printer\'s specifications anywhere in the world.' },
      { q: 'Can you write the content for my company profile?', a: 'Yes. I offer copywriting with profile and brochure design, so the words and visuals work together.' },
      { q: 'What file formats will I receive?', a: 'Print-ready PDF (with bleeds and crop marks), editable source files (InDesign / Illustrator) and web-optimised versions for email and WhatsApp sharing.' },
    ],
  },
  {
    slug: 'packaging-design',
    icon: 'package',
    name: 'Packaging & Label Design',
    short: 'Packaging that wins the shelf and the unboxing moment.',
    seoTitle: 'Packaging Design & Label Design Services',
    metaDescription:
      'Creative packaging design and label design for FMCG, cosmetics, food, pharma and retail brands. Box design, pouches, bottles, dielines and 3D mockups by an experienced packaging designer.',
    intro: [
      'On a crowded shelf you have three seconds to win a customer. I design packaging that stands out, communicates value instantly and complies with print and regulatory requirements.',
      'From food and FMCG to cosmetics, pharmaceuticals and premium gift boxes, I handle concept, dielines, 3D visualisation and print supervision, for local retail and for export markets.',
    ],
    subs: [
      { name: 'Product Packaging & Box Design', id: 'box-design', desc: 'Folding cartons, rigid boxes, mailer boxes and premium gift packaging with structural and graphic design that elevates perceived value.', deliverables: ['Concepts', 'Dieline artwork', 'Print-ready files', '3D mockups'] },
      { name: 'Label Design', id: 'label-design', desc: 'Labels for bottles, jars, cans and pouches that balance brand appeal with mandatory information and legibility.', deliverables: ['Front & back labels', 'Nutritional / ingredient panels', 'Variant system'] },
      { name: 'Flexible Packaging & Pouches', id: 'pouches', desc: 'Stand-up pouches, sachets and wrappers for snacks, tea, spices and FMCG products, prepared for rotogravure and digital printing.', deliverables: ['Pouch artwork', 'Colour separations guidance', 'Print proofs check'] },
      { name: 'Packaging Range & Variant Systems', id: 'packaging-range', desc: 'A scalable design architecture so flavours, sizes and product lines stay consistent while each variant is easy to identify.', deliverables: ['Range architecture', 'Colour coding', 'Master templates'] },
      { name: '3D Packaging Mockups & Renders', id: 'packaging-renders', desc: 'Photo-realistic 3D renders for pre-launch marketing, investor decks, e-commerce listings and retailer pitches.', deliverables: ['Studio renders', 'Lifestyle scenes', '360° spins'] },
    ],
    faqs: [
      { q: 'Do you provide dielines?', a: 'I can work with your manufacturer\'s dieline or create one for standard box styles, then place artwork accurately with bleeds and safe zones.' },
      { q: 'Can you design packaging for export?', a: 'Yes. I design multilingual packaging and follow labelling conventions for markets such as the UAE, Saudi Arabia, the UK, the EU and the US. Final regulatory compliance should always be confirmed with your compliance team.' },
      { q: 'Will I see my packaging before printing?', a: 'Yes. You receive realistic 3D mockups and can request a physical proof from your printer before mass production.' },
    ],
  },
  {
    slug: 'social-media-design',
    icon: 'social',
    name: 'Social Media & Digital Marketing Design',
    short: 'Scroll-stopping creatives for Instagram, Facebook, LinkedIn, TikTok and paid ads.',
    seoTitle: 'Social Media Design & Ad Creatives Services',
    metaDescription:
      'Social media post design, ad creatives and digital marketing graphics for Instagram, Facebook, LinkedIn and TikTok. Consistent, on-brand content that drives engagement and leads.',
    intro: [
      'Social feeds move fast. Your brand needs creatives that stop the scroll, look unmistakably like you and push people to act. I design social content and ad creatives as a system, so you can publish consistently without losing quality.',
      'I work with businesses and marketing agencies in Pakistan, the Gulf and beyond, on monthly content packages and on performance campaigns.',
    ],
    subs: [
      { name: 'Social Media Post Design', id: 'social-posts', desc: 'Monthly content calendars of posts, carousels and stories designed around your brand and campaign goals.', deliverables: ['Post & carousel designs', 'Story templates', 'Highlight covers', 'Editable Canva/Figma templates'] },
      { name: 'Paid Ad Creatives', id: 'ad-creatives', desc: 'Meta, Google Display and LinkedIn ad creatives built for performance, with multiple variations for A/B testing.', deliverables: ['Static & carousel ads', 'All ad sizes', 'Hook variations', 'Performance iterations'] },
      { name: 'Social Media Branding Kit', id: 'social-kit', desc: 'Profile pictures, cover images, highlight icons and templates that make every channel look cohesive and professional.', deliverables: ['Profile & cover designs', 'Template library', 'Mini style guide'] },
      { name: 'Email & Newsletter Design', id: 'email-design', desc: 'Responsive email templates and campaign designs for Mailchimp, Klaviyo and other platforms that look great in every inbox.', deliverables: ['Modular email template', 'Campaign designs', 'Coded HTML (optional)'] },
      { name: 'YouTube & Podcast Graphics', id: 'youtube-graphics', desc: 'Thumbnails, channel art and podcast covers designed to increase click-through rates and grow subscribers.', deliverables: ['Thumbnail system', 'Channel banner', 'Podcast cover art'] },
    ],
    faqs: [
      { q: 'Do you offer monthly social media design packages?', a: 'Yes. Monthly retainers include a fixed number of posts, stories and ad creatives with fast turnaround, which is ideal for brands and agencies that post consistently.' },
      { q: 'Can you design ads for Ramadan, Eid and other seasonal campaigns?', a: 'Definitely. Seasonal and festive campaigns are a speciality, planned in advance so you launch on time.' },
      { q: 'Do you manage social media accounts too?', a: 'My focus is design and creative direction. I collaborate closely with your marketing team or agency, and can recommend trusted partners for posting and ad management.' },
    ],
  },
  {
    slug: 'motion-graphics',
    icon: 'motion',
    name: 'Motion Graphics & Video',
    short: 'Animated logos, explainer videos and social video that bring your brand to life.',
    seoTitle: 'Motion Graphics & Explainer Video Design Services',
    metaDescription:
      'Motion graphics, 2D animation, explainer videos, logo animation and social media video editing. Engaging animated content for brands in Pakistan and international markets.',
    intro: [
      'Video is the most engaging format on every platform. I create motion graphics that explain complex ideas simply, make your logo memorable and give your social content energy.',
      'From script and storyboard to animation and sound, I handle the full process, delivering versions optimised for YouTube, Instagram Reels, TikTok, LinkedIn and presentations.',
    ],
    subs: [
      { name: '2D Explainer Videos', id: 'explainer-videos', desc: 'Short animated videos that explain your product or service in 60–90 seconds, ideal for websites, pitches and ads.', deliverables: ['Script', 'Storyboard', 'Illustration & animation', 'Voice-over & music'] },
      { name: 'Logo Animation', id: 'logo-animation', desc: 'Animated logo intros and outros that add polish to videos, presentations and social content.', deliverables: ['Logo reveal', 'Sound design', 'Transparent & MP4 versions'] },
      { name: 'Social Media Video & Reels', id: 'social-video', desc: 'Short-form animated and edited videos for Reels, TikTok and Shorts, built to capture attention in the first second.', deliverables: ['Vertical edits', 'Kinetic typography', 'Captions', 'Multiple cut-downs'] },
      { name: 'Product & UI Animation', id: 'product-animation', desc: 'App and website walkthrough animations and micro-interactions that showcase your digital product beautifully.', deliverables: ['UI walkthrough video', 'Lottie animations', 'Micro-interactions'] },
      { name: 'Corporate Video Editing', id: 'video-editing', desc: 'Professional editing, colour grading and motion titles for corporate films, testimonials and event highlights.', deliverables: ['Edit & colour grade', 'Lower thirds & titles', 'Music licensing guidance'] },
    ],
    faqs: [
      { q: 'How long should an explainer video be?', a: 'Usually 60–90 seconds. That is long enough to explain the problem, the solution and a call to action while keeping viewers engaged.' },
      { q: 'Do you provide voice-over in Urdu and English?', a: 'Yes. Professional voice-overs in English, Urdu and Arabic can be arranged through trusted voice artists.' },
      { q: 'What formats will I receive?', a: 'MP4 in all the aspect ratios you need (16:9, 9:16, 1:1, 4:5), plus GIF or Lottie for web and app use.' },
    ],
  },
  {
    slug: 'illustration',
    icon: 'pen',
    name: 'Illustration & Iconography',
    short: 'Custom illustrations, icon sets and mascots that give your brand a unique personality.',
    seoTitle: 'Custom Illustration, Icon Design & Mascot Design',
    metaDescription:
      'Custom digital illustration, icon design, mascot and character design for brands, apps, websites and packaging. Unique visual assets that make your brand stand out from stock imagery.',
    intro: [
      'Stock images make brands look the same. Custom illustration gives you a visual language nobody else can copy. I create illustrations, icons and characters that express your personality and explain your ideas.',
      'Every asset is delivered as clean vectors, ready for websites, apps, packaging, animation and print.',
    ],
    subs: [
      { name: 'Custom Digital Illustration', id: 'digital-illustration', desc: 'Editorial, website and marketing illustrations in a consistent style crafted for your brand.', deliverables: ['Style exploration', 'Final illustrations', 'Vector source files'] },
      { name: 'Icon Set Design', id: 'icon-design', desc: 'Pixel-perfect icon families for apps, websites and signage, consistent in stroke, grid and style.', deliverables: ['Custom icon set', 'SVG & icon font', 'Usage guide'] },
      { name: 'Mascot & Character Design', id: 'mascot-design', desc: 'Memorable brand characters with expression sheets and poses, ready for marketing and animation.', deliverables: ['Character concepts', 'Turnaround & expressions', 'Pose library'] },
      { name: 'Book & Editorial Illustration', id: 'book-illustration', desc: 'Children\'s books, magazine features and educational material illustrated with care and storytelling.', deliverables: ['Sketches', 'Final colour illustrations', 'Print-ready files'] },
      { name: 'Islamic & Calligraphic Art', id: 'calligraphy', desc: 'Modern Arabic and Urdu calligraphy, Islamic geometric patterns and bilingual typography for brands and occasions.', deliverables: ['Calligraphic artwork', 'Bilingual logo lockups', 'Pattern design'] },
    ],
    faqs: [
      { q: 'Can you match an existing illustration style?', a: 'Yes. I can extend your existing style consistently or develop a new one from scratch that fits your brand.' },
      { q: 'Will illustrations be vector?', a: 'Most illustrations and all icons are delivered as scalable vectors (SVG/AI). Painterly styles are delivered at high resolution for print.' },
      { q: 'Do I get commercial rights?', a: 'Yes. All custom illustrations include full commercial usage rights for your brand.' },
    ],
  },
  {
    slug: 'presentation-design',
    icon: 'slides',
    name: 'Presentation & Pitch Deck Design',
    short: 'Investor decks, sales presentations and corporate slides that persuade.',
    seoTitle: 'Pitch Deck Design & PowerPoint Presentation Design',
    metaDescription:
      'Professional pitch deck design and PowerPoint, Keynote and Google Slides presentation design. Investor decks, sales decks and corporate presentations that win funding and deals.',
    intro: [
      'A great deck can be the difference between a "maybe" and a signed term sheet. I turn your story, data and vision into presentations that are clear, persuasive and beautiful.',
      'I have helped founders, sales teams and executives present to investors, boards and global clients, structuring the narrative and designing every slide for impact.',
    ],
    subs: [
      { name: 'Investor Pitch Decks', id: 'pitch-decks', desc: 'Startup and fundraising decks structured the way investors expect: problem, solution, market, traction, team and the ask.', deliverables: ['Story structure', '12–20 designed slides', 'Charts & data viz', 'Editable source'] },
      { name: 'Sales & Corporate Presentations', id: 'sales-decks', desc: 'Sales decks, capability presentations and proposals that help your team win more business.', deliverables: ['Master deck', 'Case study slides', 'Proposal templates'] },
      { name: 'Presentation Templates', id: 'presentation-templates', desc: 'Branded PowerPoint, Keynote and Google Slides templates with master layouts that make every presentation on-brand.', deliverables: ['Slide masters', '30+ layouts', 'Icon & chart library'] },
      { name: 'Conference & Keynote Slides', id: 'keynote-slides', desc: 'High-impact, minimal slides for conferences, webinars and events that keep your audience engaged.', deliverables: ['Keynote design', 'Animated transitions', 'Speaker notes formatting'] },
    ],
    faqs: [
      { q: 'Which software do you design in?', a: 'PowerPoint, Keynote and Google Slides. Final files are fully editable so your team can update numbers and content later.' },
      { q: 'Can you help with the story and content?', a: 'Yes. I help structure the narrative and refine the copy, not just decorate the slides.' },
      { q: 'How fast can you deliver a pitch deck?', a: 'A typical investor deck takes 5–10 working days. Rush delivery is possible for urgent fundraising timelines.' },
    ],
  },
  {
    slug: '3d-visualisation',
    icon: 'cube',
    name: '3D Design & Product Visualisation',
    short: 'Photo-realistic 3D product renders, mockups and visualisations.',
    seoTitle: '3D Product Rendering & Visualisation Services',
    metaDescription:
      '3D product design, photo-realistic product rendering, 3D mockups and visualisation for e-commerce, packaging, marketing and pre-launch campaigns.',
    intro: [
      'Show products before they exist, or better than a camera ever could. Photo-realistic 3D renders save the cost of photo shoots, speed up launches and give you unlimited angles and variations.',
      'I create 3D visuals for e-commerce listings, packaging pre-launch, product concepts, exhibitions and advertising.',
    ],
    subs: [
      { name: '3D Product Rendering', id: 'product-rendering', desc: 'Studio-quality renders of your products on white or in context, perfect for e-commerce and catalogues.', deliverables: ['3D modelling', 'Materials & lighting', 'High-res renders'] },
      { name: 'Product Concept Design', id: 'product-concept', desc: 'Concept development and visualisation for physical products, from sketches to 3D models ready for prototyping discussions with manufacturers.', deliverables: ['Concept sketches', '3D concept models', 'Presentation renders'] },
      { name: 'Lifestyle & Scene Visualisation', id: 'lifestyle-scenes', desc: 'Your product placed in realistic lifestyle environments for advertising and social campaigns.', deliverables: ['Scene design', 'Lifestyle renders', 'Social crops'] },
      { name: '3D Animation & 360° Views', id: '3d-animation', desc: 'Product spins, exploded views and feature animations for websites, ads and trade shows.', deliverables: ['360° spin', 'Feature animation', 'Web-ready formats'] },
    ],
    faqs: [
      { q: 'What do you need to create a 3D render?', a: 'Product photos, dimensions and any technical drawings or CAD files. For new products, sketches and references are enough to start.' },
      { q: 'Are 3D renders cheaper than photography?', a: 'Often yes, especially when you need many colour variants, angles or products that are not yet manufactured.' },
      { q: 'Can renders be used for Amazon listings?', a: 'Yes. Renders can be prepared to Amazon\'s pure-white background and size requirements.' },
    ],
  },
  {
    slug: 'creative-direction',
    icon: 'compass',
    name: 'Creative Direction & Design Consultancy',
    short: 'Senior design leadership, audits and mentoring for brands, agencies and teams.',
    seoTitle: 'Creative Director & Design Consultant for Hire',
    metaDescription:
      'Hire an experienced creative director and design consultant with 16+ years in the industry. Brand audits, campaign creative direction, design team mentoring and white-label services for agencies.',
    intro: [
      'Sometimes you do not need more designers, you need senior direction. With 16+ years across agencies, in-house teams and independent practice, I help businesses and agencies raise the quality and consistency of their creative work.',
      'I act as a fractional creative director, a consultant for specific challenges, or a white-label design partner for agencies in Pakistan and abroad.',
    ],
    subs: [
      { name: 'Fractional Creative Director', id: 'fractional-cd', desc: 'Part-time senior creative leadership for companies that need direction without a full-time executive hire.', deliverables: ['Creative strategy', 'Team direction', 'Quality control', 'Monthly retainer'] },
      { name: 'Brand & Design Audit', id: 'design-audit', desc: 'An objective review of your brand, website and marketing material with a clear, prioritised improvement plan.', deliverables: ['Audit report', 'Competitor benchmark', 'Action roadmap'] },
      { name: 'Campaign Creative Direction', id: 'campaign-direction', desc: 'Big ideas and art direction for advertising campaigns, product launches and photo/video shoots.', deliverables: ['Campaign concept', 'Key visuals', 'Shoot art direction'] },
      { name: 'White-Label Design for Agencies', id: 'white-label', desc: 'Reliable senior design capacity for marketing and development agencies, delivered under your agency\'s name.', deliverables: ['NDA & confidentiality', 'Agency-branded delivery', 'Flexible capacity'] },
      { name: 'Design Team Training & Mentoring', id: 'mentoring', desc: 'Workshops and mentoring for in-house designers on branding, UI/UX, design systems and creative process.', deliverables: ['Workshops', '1:1 mentoring', 'Process playbooks'] },
    ],
    faqs: [
      { q: 'What is a fractional creative director?', a: 'A senior creative leader who works with your company part-time, for a few days a month, to set direction, review work and guide your team, at a fraction of the cost of a full-time hire.' },
      { q: 'Do you work with agencies on a white-label basis?', a: 'Yes. Many agencies rely on me for senior design capacity. All work is confidential and delivered under your brand.' },
      { q: 'Do you offer design training?', a: 'Yes. I run custom workshops and ongoing mentoring for design teams and marketing departments, in person in Pakistan or online worldwide.' },
    ],
  },
];
