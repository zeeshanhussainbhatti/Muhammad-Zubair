// Muhammad Zubair — site interactions (no dependencies)
(function () {
  document.documentElement.classList.add('js');
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  // Sticky header shadow
  const header = $('[data-header]');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const burger = $('[data-burger]');
  if (burger) {
    burger.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open);
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }
  $$('[data-expand]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const dd = btn.closest('[data-dropdown]');
      const open = dd.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    })
  );
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) burger.click();
  });

  // Reveal on scroll
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible');
            io.unobserve(en.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    reveals.forEach((el, i) => {
      el.style.transitionDelay = (i % 3) * 80 + 'ms';
      io.observe(el);
    });
  } else reveals.forEach((el) => el.classList.add('is-visible'));

  // Count-up stats
  $$('[data-count]').forEach((el) => {
    const target = +el.dataset.count;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / 1200, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
  });

  // Portfolio filter
  const grid = $('[data-portfolio]');
  if (grid) {
    $$('[data-filter]').forEach((btn) =>
      btn.addEventListener('click', () => {
        $$('[data-filter]').forEach((b) => {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', b === btn);
        });
        const f = btn.dataset.filter;
        $$('.work', grid).forEach((w) => {
          const show = f === 'all' || w.dataset.cat === f;
          w.classList.toggle('is-hidden', !show);
          if (show) w.classList.add('is-visible');
        });
      })
    );
  }

  // Contact form: preselect service from ?service=
  const select = $('[data-service-select]');
  if (select) {
    const svc = new URLSearchParams(location.search).get('service');
    if (svc && select.querySelector(`option[value="${CSS.escape(svc)}"]`)) select.value = svc;
  }

  // Contact form submit (Formspree via fetch, or mailto fallback)
  const form = $('[data-form]');
  if (form) {
    const status = $('.form__status', form);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      if (data.get('_gotcha')) return;
      const mailto = form.dataset.mailto;
      if (mailto) {
        const lines = ['name', 'email', 'phone', 'company', 'service', 'budget', 'message']
          .map((k) => `${k[0].toUpperCase() + k.slice(1)}: ${data.get(k) || '-'}`)
          .join('\n');
        location.href = `mailto:${mailto}?subject=${encodeURIComponent('Project enquiry from ' + data.get('name'))}&body=${encodeURIComponent(lines)}`;
        status.textContent = 'Opening your email app…';
        status.className = 'form__status is-ok';
        return;
      }
      const btn = $('button[type="submit"]', form);
      btn.disabled = true;
      status.textContent = 'Sending…';
      status.className = 'form__status';
      try {
        const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error();
        form.reset();
        status.textContent = 'Thank you! Your message has been sent. I will reply within one business day.';
        status.className = 'form__status is-ok';
      } catch {
        status.textContent = 'Sorry, something went wrong. Please email or WhatsApp me directly.';
        status.className = 'form__status is-err';
      } finally {
        btn.disabled = false;
      }
    });
  }
})();
