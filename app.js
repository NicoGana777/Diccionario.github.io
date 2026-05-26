(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof window.gsap !== 'undefined';
  const hasScrollTrigger = typeof window.ScrollTrigger !== 'undefined';

  const revealNow = (selector) => {
    document.querySelectorAll(selector).forEach((el) => el.classList.add('revealed'));
  };

  const setStatBars = () => {
    document.querySelectorAll('.stat-fill').forEach((bar) => {
      const width = bar.dataset.width || '0';
      bar.style.width = `${width}%`;
    });
  };

  const updateReadingProgress = () => {
    const bar = document.getElementById('reading-progress');
    if (!bar) return;

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  };

  const countNumbers = () => {
    document.querySelectorAll('.imm-number').forEach((number) => {
      const target = Number(number.dataset.target || 0);
      const hasDecimal = !Number.isInteger(target);
      const start = performance.now();
      const duration = prefersReducedMotion ? 1 : 1400;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        number.textContent = hasDecimal ? value.toFixed(1) : Math.round(value);

        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });
  };

  const initPointerParallax = () => {
    const poster = document.getElementById('hero-poster');
    const hero = document.getElementById('hero');

    if (!poster || !hero || prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    hero.addEventListener('mousemove', (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      poster.style.setProperty('--poster-x', `${x * 14}px`);
      poster.style.setProperty('--poster-y', `${y * 18}px`);
    });
  };

  const initFallbackReveals = () => {
    const targets = document.querySelectorAll(
      '.hero-tag, .word, .hero-sub, .float-quote, .clip-note, .hero-poster, .scroll-indicator, .hero-stats-bar, .research-panel, .why-headline, .why-copy, .hypothesis-copy, .hypothesis-evidence, .reveal-para, .reveal-quote, .reveal-dossier, .pillar-card, .technique-item, .discourse-block, .immersive-title, .ltr-layer, .montage-frame, .montage-copy, .conclusion-body p, .stamp-text'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((el) => observer.observe(el));

    const barsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setStatBars();
        barsObserver.disconnect();
      });
    }, { threshold: 0.3 });

    const pillars = document.querySelector('.pillars-section');
    if (pillars) barsObserver.observe(pillars);

    const countersObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countNumbers();
        countersObserver.disconnect();
      });
    }, { threshold: 0.25 });

    const immersive = document.querySelector('.immersive-section');
    if (immersive) countersObserver.observe(immersive);
  };

  const initGsap = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .to('.hero-tag', { opacity: 1, y: 0, duration: 0.7 })
      .to('.word', { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.08 }, '-=0.35')
      .to('.hero-poster', { opacity: 0.9, y: 0, duration: 1, ease: 'power4.out' }, '-=0.8')
      .to('.hero-sub', { opacity: 1, y: 0, duration: 0.7 }, '-=0.45')
      .to('.float-quote', { opacity: 0.82, x: 0, duration: 0.7, stagger: 0.12 }, '-=0.45')
      .to('.clip-note', { opacity: 1, y: 0, duration: 0.55, stagger: 0.09 }, '-=0.5')
      .to('.hero-stats-bar', { opacity: 1, y: 0, duration: 0.75 }, '-=0.35')
      .to('.scroll-indicator', { opacity: 1, duration: 0.6 }, '-=0.3');

    gsap.to('.hero-poster', {
      yPercent: 0,
      rotate: 0,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    gsap.to('.flames-svg', {
      scale: 1.08,
      yPercent: 8,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    gsap.to('.research-panel', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.research-core__grid', start: 'top 78%' }
    });

    gsap.to('.why-headline, .why-copy', {
      opacity: 1,
      y: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.why-layout', start: 'top 78%' }
    });

    gsap.to('.hypothesis-copy, .hypothesis-evidence', {
      opacity: 1,
      y: 0,
      duration: 0.85,
      stagger: 0.14,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.hypothesis-layout', start: 'top 76%' }
    });

    gsap.utils.toArray('.reveal-para, .reveal-quote').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%' }
      });
    });

    gsap.to('.reveal-dossier', {
      opacity: 1,
      y: 0,
      rotate: -0.5,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.intro-grid', start: 'top 72%' }
    });

    gsap.to('.pillar-card', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.pillars-grid',
        start: 'top 78%',
        onEnter: setStatBars
      }
    });

    gsap.to('.technique-item', {
      opacity: 1,
      x: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.techniques-list', start: 'top 78%' }
    });

    gsap.to('.discourse-block', {
      opacity: 1,
      x: 0,
      duration: 0.9,
      stagger: 0.14,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.comparison-grid', start: 'top 75%' }
    });

    gsap.to('.immersive-title', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.immersive-title', start: 'top 80%' }
    });

    ScrollTrigger.create({
      trigger: '.immersive-stats',
      start: 'top 75%',
      once: true,
      onEnter: countNumbers
    });

    gsap.to('.ltr-layer', {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.16,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.layered-text-reveal', start: 'top 82%' }
    });

    gsap.to('.montage-frame, .montage-copy', {
      opacity: 1,
      y: 0,
      rotate: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.media-montage', start: 'top 78%' }
    });

    gsap.to('.montage-frame img', {
      scale: 1.12,
      yPercent: -8,
      ease: 'none',
      scrollTrigger: { trigger: '.media-montage', start: 'top bottom', end: 'bottom top', scrub: true }
    });

    gsap.to('.conclusion-body p', {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.conclusion-body', start: 'top 78%' }
    });

    gsap.to('.stamp-text', {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 0.65,
      stagger: 0.1,
      ease: 'back.out(1.8)',
      scrollTrigger: { trigger: '.final-stamp', start: 'top 82%' }
    });
  };

  window.addEventListener('DOMContentLoaded', () => {
    initPointerParallax();
    updateReadingProgress();
    window.addEventListener('scroll', updateReadingProgress, { passive: true });
    window.addEventListener('resize', updateReadingProgress);

    if (prefersReducedMotion || !hasGsap || !hasScrollTrigger) {
      revealNow('.hero-tag, .word, .hero-sub, .float-quote, .clip-note, .hero-poster, .scroll-indicator, .hero-stats-bar');
      initFallbackReveals();
      return;
    }

    initGsap();
  });
})();
