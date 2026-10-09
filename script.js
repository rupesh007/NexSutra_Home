(() => {
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const year = document.querySelector('#current-year');
  const tabs = [...document.querySelectorAll('.deployment-tab')];
  const detail = document.querySelector('#deployment-detail');
  const modes = {
    camera: {
      heading: 'Camera platform only',
      copy: 'Run camera APIs, signaling, and media integration independently. No ACS, OLT, or BNG integration is required.'
    },
    network: {
      heading: 'Network intelligence only',
      copy: 'Integrate network data sources and read-only adapters without deploying the camera signaling or media stack.'
    },
    combined: {
      heading: 'Combined deployment',
      copy: 'Bring both products together where an ISP wants connected-device services alongside network operations capabilities.'
    }
  };

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav?.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
      });
      const mode = modes[tab.dataset.mode];
      detail.setAttribute('aria-labelledby', tab.id);
      detail.querySelector('.detail-number').textContent = `0${index + 1}`;
      detail.querySelector('h4').textContent = mode.heading;
      detail.querySelector('p').textContent = mode.copy;
    });
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let index = tabs.indexOf(tab);
      if (event.key === 'ArrowRight') index = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') index = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') index = 0;
      if (event.key === 'End') index = tabs.length - 1;
      tabs[index].focus();
      tabs[index].click();
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
