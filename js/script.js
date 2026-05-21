const LANG_KEY = 'tofariasti_lang_v1';
const COOKIE_KEY = 'tofariasti_cookie_policy_v1';
const WA_PHONE = '5551989030405';

const WA_MESSAGES = {
  dev: {
    pt: 'Olá Tiago, vi seu portfólio de Desenvolvedor de Software e gostaria de conversar sobre uma oportunidade ou projeto.',
    en: 'Hi Tiago, I saw your Software Developer portfolio and would like to discuss an opportunity or project.',
  },
  drone: {
    pt: 'Olá Tiago, vi o Tech Drone 360 e gostaria de um orçamento para captação aérea com drone.',
    en: 'Hi Tiago, I saw Tech Drone 360 and would like a quote for aerial drone photo and video.',
  },
};

function getWhatsAppContext() {
  return document.body.classList.contains('page-drone') ? 'drone' : 'dev';
}

function updateWhatsAppLinks() {
  const lang = document.body.classList.contains('lang-en') ? 'en' : 'pt';
  const text = WA_MESSAGES[getWhatsAppContext()][lang];
  const href = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  document.querySelectorAll('a.wa-link').forEach((a) => {
    a.href = href;
  });
}

function setLang(lang) {
  const next = lang === 'en' ? 'en' : 'pt';
  document.body.classList.remove('lang-pt', 'lang-en');
  document.body.classList.add('lang-' + next);
  document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('.lang-btn').forEach((b) => {
    const active = b.dataset.lang === next;
    b.classList.toggle('lang-btn--active', active);
    b.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  try {
    localStorage.setItem(LANG_KEY, next);
  } catch (e) {
    /* private mode */
  }
  updateWhatsAppLinks();
}

(function initLang() {
  let stored = null;
  try {
    stored = localStorage.getItem(LANG_KEY);
  } catch (e) {
    stored = null;
  }
  if (stored === 'en' || stored === 'pt') {
    setLang(stored);
  } else {
    updateWhatsAppLinks();
  }
})();

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

const menuHamburguer = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');

if (menuHamburguer && navResponsive) {
  menuHamburguer.addEventListener('click', () => {
    const open = navResponsive.classList.toggle('active');
    menuHamburguer.classList.toggle('change', open);
    menuHamburguer.setAttribute('aria-expanded', open ? 'true' : 'false');
    navResponsive.hidden = !open;
  });
}

document.querySelectorAll('.nav-responsive a').forEach((link) => {
  link.addEventListener('click', () => {
    navResponsive.classList.remove('active');
    menuHamburguer.classList.remove('change');
    menuHamburguer.setAttribute('aria-expanded', 'false');
    navResponsive.hidden = true;
  });
});

const header = document.getElementById('header');
window.addEventListener(
  'scroll',
  () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 40);
  },
  { passive: true }
);

(function initPortfolioCarousel() {
  const wrap = document.querySelector('.portfolio-carousel-wrap');
  const track = document.querySelector('[data-carousel-track]');
  const prev = document.querySelector('.portfolio-nav--prev');
  const next = document.querySelector('.portfolio-nav--next');
  if (!wrap || !track || !prev || !next) return;

  const AUTO_MS = 6000;
  let autoTimer = null;
  let resumeTimer = null;

  function getStep() {
    const card = track.querySelector('.project-card');
    if (!card) return 340;
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    return card.offsetWidth + gap;
  }

  function updateNav() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const left = track.scrollLeft;
    const eps = 3;
    prev.disabled = left <= eps;
    next.disabled = maxScroll <= eps || left >= maxScroll - eps;
  }

  function scrollByDir(dir) {
    track.scrollBy({ left: dir * getStep(), behavior: 'smooth' });
  }

  function goNextOrLoop() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;
    if (track.scrollLeft >= maxScroll - 4) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scrollByDir(1);
    }
  }

  function pauseAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = null;
  }

  function startAuto() {
    pauseAuto();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    autoTimer = setInterval(goNextOrLoop, AUTO_MS);
  }

  function scheduleResume() {
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      startAuto();
      resumeTimer = null;
    }, 3200);
  }

  prev.addEventListener('click', () => {
    scrollByDir(-1);
    pauseAuto();
    scheduleResume();
  });

  next.addEventListener('click', () => {
    goNextOrLoop();
    pauseAuto();
    scheduleResume();
  });

  track.addEventListener('scroll', () => requestAnimationFrame(updateNav), { passive: true });

  let dragOn = false;
  let startX = 0;
  let startScroll = 0;

  track.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('a, button')) return;
    dragOn = true;
    track.classList.add('is-dragging');
    startX = e.clientX;
    startScroll = track.scrollLeft;
    pauseAuto();
  });

  track.addEventListener(
    'mousemove',
    (e) => {
      if (!dragOn) return;
      e.preventDefault();
      track.scrollLeft = startScroll - (e.clientX - startX);
    },
    { passive: false }
  );

  function endDrag() {
    if (!dragOn) return;
    dragOn = false;
    track.classList.remove('is-dragging');
    updateNav();
    scheduleResume();
  }

  window.addEventListener('mouseup', endDrag);
  window.addEventListener('blur', endDrag);

  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByDir(-1);
      pauseAuto();
      scheduleResume();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNextOrLoop();
      pauseAuto();
      scheduleResume();
    }
  });

  wrap.addEventListener('mouseenter', pauseAuto);
  wrap.addEventListener('mouseleave', () => {
    if (!dragOn) startAuto();
  });

  window.addEventListener('resize', updateNav);
  updateNav();
  startAuto();
})();

(function initCookieModal() {
  const modal = document.getElementById('cookie-modal');
  if (!modal) return;

  const acceptBtn = modal.querySelector('[data-cookie-accept]');
  const rejectBtn = modal.querySelector('[data-cookie-reject]');
  const configBtn = modal.querySelector('[data-cookie-config]');
  const detailsEl = document.getElementById('cookie-modal-details');
  const footerBtn = document.querySelector('.footer-link-cookies');
  let focusBeforeOpen = null;

  function isOpen() {
    return !modal.hasAttribute('hidden');
  }

  function setStored(value) {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch (e) {
      /* ignore */
    }
  }

  function open() {
    focusBeforeOpen = document.activeElement;
    modal.removeAttribute('hidden');
    document.body.classList.add('cookie-modal-open');
    if (detailsEl) detailsEl.setAttribute('hidden', '');
    if (configBtn) configBtn.setAttribute('aria-expanded', 'false');
    if (acceptBtn) acceptBtn.focus();
  }

  function close() {
    modal.setAttribute('hidden', '');
    document.body.classList.remove('cookie-modal-open');
    if (detailsEl) detailsEl.setAttribute('hidden', '');
    if (configBtn) configBtn.setAttribute('aria-expanded', 'false');
    if (focusBeforeOpen && typeof focusBeforeOpen.focus === 'function') {
      focusBeforeOpen.focus();
    }
  }

  if (footerBtn) footerBtn.addEventListener('click', open);
  if (acceptBtn) acceptBtn.addEventListener('click', () => { setStored('1'); close(); });
  if (rejectBtn) rejectBtn.addEventListener('click', () => { setStored('0'); close(); });

  if (configBtn && detailsEl) {
    configBtn.addEventListener('click', () => {
      const collapsed = detailsEl.hasAttribute('hidden');
      if (collapsed) {
        detailsEl.removeAttribute('hidden');
        configBtn.setAttribute('aria-expanded', 'true');
      } else {
        detailsEl.setAttribute('hidden', '');
        configBtn.setAttribute('aria-expanded', 'false');
      }
    });
    configBtn.setAttribute('aria-expanded', 'false');
    configBtn.setAttribute('aria-controls', 'cookie-modal-details');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) close();
  });

  let stored = null;
  try {
    stored = localStorage.getItem(COOKIE_KEY);
  } catch (e) {
    stored = null;
  }
  if (!stored) open();
})();
