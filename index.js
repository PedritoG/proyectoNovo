// ============================================
// AURIA — Main JavaScript
// Minimalist, clean, SpaceX-inspired
// ============================================

const translations = {
  es: {
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.process': 'Proceso',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    'lang.toggle': 'EN',
    'hero.label': 'EXPERIENCIAS DIGITALES',
    'hero.title': 'Transformamos ideas en <em>experiencias digitales</em>',
    'hero.subtitle': 'Invitaciones digitales, sitios web interactivos y tiendas online que cautivan a tu audiencia.',
    'hero.cta': 'Empezá tu proyecto <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    'services.label': 'Servicios',
    'services.title': 'Soluciones digitales para cada necesidad',
    'services.subtitle': 'Diseñamos experiencias únicas adaptadas a cada cliente y proyecto.',
    'services.invitations.title': 'Invitaciones Digitales',
    'services.invitations.desc': 'Invitaciones elegantes y personalizadas para bodas, cumpleaños, bautismos y eventos corporativos. Animadas e interactivas.',
    'services.websites.title': 'Sitios Web Interactivos',
    'services.websites.desc': 'Landing pages, portafolios y sitios web a medida con diseño moderno, animaciones fluidas y experiencia premium.',
    'services.stores.title': 'Tiendas Online',
    'services.stores.desc': 'E-commerce con diseño visual impactante, catálogos interactivos, carrito de compras y pasarela de pagos.',
    'services.menus.title': 'Menús Digitales QR',
    'services.menus.desc': 'Menús digitales elegantes para restaurantes y bares. Acceso instantáneo por código QR, fácil de actualizar.',
    'services.cards.title': 'Tarjetas de Presentación Digitales',
    'services.cards.desc': 'Tarjetas interactivas con NFC/QR. Compartí tu información profesional de forma moderna y memorable.',
    'portfolio.label': 'Portafolio',
    'portfolio.title': 'Proyectos recientes',
    'portfolio.subtitle': 'Cada diseño cuenta una historia única.',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.invitations': 'Invitaciones',
    'portfolio.filter.websites': 'Sitios Web',
    'portfolio.filter.stores': 'Tiendas',
    'portfolio.filter.menus': 'Menús',
    'portfolio.item1.category': 'Invitación Digital',
    'portfolio.item2.category': 'Sitio Web',
    'portfolio.item3.category': 'Tienda Online',
    'portfolio.item4.category': 'Menú Digital',
    'process.label': 'Proceso',
    'process.title': 'Cómo trabajamos',
    'process.subtitle': 'Un proceso simple y transparente.',
    'process.step1.title': 'Consulta',
    'process.step1.desc': 'Nos contás tu idea y juntos definimos objetivos, estilo y alcance del proyecto.',
    'process.step2.title': 'Diseño',
    'process.step2.desc': 'Creamos la propuesta visual con tu feedback hasta lograr el diseño perfecto.',
    'process.step3.title': 'Desarrollo',
    'process.step3.desc': 'Desarrollamos tu proyecto con tecnología moderna, animaciones y responsividad.',
    'process.step4.title': 'Entrega',
    'process.step4.desc': 'Entregamos tu proyecto listo para compartir con el mundo. Soporte incluido.',
    'testimonials.label': 'Testimonios',
    'testimonials.title': 'Lo que dicen nuestros clientes',
    'testimonials.1.quote': 'Auria creó la invitación de nuestra boda y fue mágica. Todos los invitados quedaron encantados con la animación y el diseño.',
    'testimonials.1.service': 'Invitación Digital',
    'testimonials.2.quote': 'El sitio web que diseñaron para mi restaurante incrementó nuestras reservas online un 40%. Diseño impecable.',
    'testimonials.2.service': 'Sitio Web',
    'testimonials.3.quote': 'Nuestra tienda online tiene un diseño que compite con las grandes marcas. Profesionalismo total.',
    'testimonials.3.service': 'Tienda Online',
    'testimonials.4.quote': 'El menú digital QR fue un éxito en nuestro bar. Los clientes lo aman y es super fácil de actualizar.',
    'testimonials.4.service': 'Menú QR',
    'pricing.label': 'Precios',
    'pricing.title': 'Planes y precios',
    'pricing.subtitle': 'Precios estimados. Cada proyecto es único y se adapta a tus necesidades.',
    'pricing.essential': 'Esencial',
    'pricing.professional': 'Profesional',
    'pricing.popular': 'Más popular',
    'pricing.period.project': 'por proyecto',
    'pricing.cta': 'Elegir plan',
    'pricing.essential.f1': 'Invitación digital personalizada',
    'pricing.essential.f2': 'Diseño responsive',
    'pricing.essential.f3': 'Animaciones básicas',
    'pricing.essential.f4': 'Link para compartir',
    'pricing.essential.f5': '1 revisión de diseño',
    'pricing.professional.f1': 'Sitio web interactivo completo',
    'pricing.professional.f2': 'Diseño premium responsive',
    'pricing.professional.f3': 'Animaciones avanzadas',
    'pricing.professional.f4': 'SEO optimizado',
    'pricing.professional.f5': 'Formulario de contacto',
    'pricing.professional.f6': '3 revisiones de diseño',
    'pricing.professional.f7': 'Soporte 30 días',
    'pricing.premium.f1': 'Solución digital completa',
    'pricing.premium.f2': 'Diseño exclusivo a medida',
    'pricing.premium.f3': 'E-commerce integrado',
    'pricing.premium.f4': 'Panel de administración',
    'pricing.premium.f5': 'Pasarela de pagos',
    'pricing.premium.f6': 'Revisiones ilimitadas',
    'pricing.premium.f7': 'Soporte 90 días',
    'pricing.custom.title': '¿Necesitás algo a medida?',
    'pricing.custom.desc': 'Contanos tu idea y te armamos un presupuesto personalizado.',
    'pricing.custom.cta': 'Solicitar presupuesto',
    'contact.label': 'Contacto',
    'contact.title': 'Empecemos tu proyecto',
    'contact.subtitle': 'Contanos tu idea y la hacemos realidad.',
    'contact.name': 'Nombre',
    'contact.service.label': 'Servicio',
    'contact.service.select': 'Seleccionar servicio',
    'contact.service.invitation': 'Invitación Digital',
    'contact.service.website': 'Sitio Web',
    'contact.service.store': 'Tienda Online',
    'contact.service.menu': 'Menú Digital QR',
    'contact.service.card': 'Tarjeta Digital',
    'contact.service.other': 'Otro',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    'contact.success': '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
    'footer.copyright': '© 2026 Auria. Todos los derechos reservados.',
    'modal.features.title': 'Características principales:',
    'modal.cta': 'Solicitar proyecto similar <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
  },
  en: {
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'lang.toggle': 'ES',
    'hero.label': 'DIGITAL EXPERIENCES',
    'hero.title': 'We transform ideas into <em>digital experiences</em>',
    'hero.subtitle': 'Digital invitations, interactive websites and online stores that captivate your audience.',
    'hero.cta': 'Start your project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    'services.label': 'Services',
    'services.title': 'Digital solutions for every need',
    'services.subtitle': 'We design unique experiences tailored to each client and project.',
    'services.invitations.title': 'Digital Invitations',
    'services.invitations.desc': 'Elegant, personalized invitations for weddings, birthdays, baptisms and corporate events. Animated and interactive.',
    'services.websites.title': 'Interactive Websites',
    'services.websites.desc': 'Landing pages, portfolios and custom websites with modern design, smooth animations and premium experience.',
    'services.stores.title': 'Online Stores',
    'services.stores.desc': 'E-commerce with stunning visual design, interactive catalogs, shopping cart and payment gateway.',
    'services.menus.title': 'QR Digital Menus',
    'services.menus.desc': 'Elegant digital menus for restaurants and bars. Instant QR code access, easy to update.',
    'services.cards.title': 'Digital Business Cards',
    'services.cards.desc': 'Interactive business cards with NFC/QR. Share your professional information in a modern, memorable way.',
    'portfolio.label': 'Portfolio',
    'portfolio.title': 'Recent projects',
    'portfolio.subtitle': 'Each design tells a unique story.',
    'portfolio.filter.all': 'All',
    'portfolio.filter.invitations': 'Invitations',
    'portfolio.filter.websites': 'Websites',
    'portfolio.filter.stores': 'Stores',
    'portfolio.filter.menus': 'Menus',
    'portfolio.item1.category': 'Digital Invitation',
    'portfolio.item2.category': 'Website',
    'portfolio.item3.category': 'Online Store',
    'portfolio.item4.category': 'Digital Menu',
    'process.label': 'Process',
    'process.title': 'How we work',
    'process.subtitle': 'A simple and transparent process.',
    'process.step1.title': 'Consultation',
    'process.step1.desc': 'You tell us your idea and together we define objectives, style and project scope.',
    'process.step2.title': 'Design',
    'process.step2.desc': 'We create the visual proposal with your feedback until we achieve the perfect design.',
    'process.step3.title': 'Development',
    'process.step3.desc': 'We develop your project with modern technology, animations and responsiveness.',
    'process.step4.title': 'Launch',
    'process.step4.desc': 'We deliver your project ready to share with the world. Support included.',
    'testimonials.label': 'Testimonials',
    'testimonials.title': 'What our clients say',
    'testimonials.1.quote': 'Auria created our wedding invitation and it was magical. All guests were enchanted by the animation and design.',
    'testimonials.1.service': 'Digital Invitation',
    'testimonials.2.quote': 'The website they designed for my restaurant increased our online reservations by 40%. Impeccable design.',
    'testimonials.2.service': 'Website',
    'testimonials.3.quote': 'Our online store has a design that competes with major brands. Total professionalism.',
    'testimonials.3.service': 'Online Store',
    'testimonials.4.quote': 'The QR digital menu was a hit at our bar. Customers love it and it\'s super easy to update.',
    'testimonials.4.service': 'QR Menu',
    'pricing.label': 'Pricing',
    'pricing.title': 'Plans & pricing',
    'pricing.subtitle': 'Estimated pricing. Each project is unique and adapts to your needs.',
    'pricing.essential': 'Essential',
    'pricing.professional': 'Professional',
    'pricing.popular': 'Most popular',
    'pricing.period.project': 'per project',
    'pricing.cta': 'Choose plan',
    'pricing.essential.f1': 'Custom digital invitation',
    'pricing.essential.f2': 'Responsive design',
    'pricing.essential.f3': 'Basic animations',
    'pricing.essential.f4': 'Shareable link',
    'pricing.essential.f5': '1 design revision',
    'pricing.professional.f1': 'Full interactive website',
    'pricing.professional.f2': 'Premium responsive design',
    'pricing.professional.f3': 'Advanced animations',
    'pricing.professional.f4': 'SEO optimized',
    'pricing.professional.f5': 'Contact form',
    'pricing.professional.f6': '3 design revisions',
    'pricing.professional.f7': '30-day support',
    'pricing.premium.f1': 'Complete digital solution',
    'pricing.premium.f2': 'Exclusive custom design',
    'pricing.premium.f3': 'Integrated e-commerce',
    'pricing.premium.f4': 'Admin panel',
    'pricing.premium.f5': 'Payment gateway',
    'pricing.premium.f6': 'Unlimited revisions',
    'pricing.premium.f7': '90-day support',
    'pricing.custom.title': 'Need something custom?',
    'pricing.custom.desc': 'Tell us your idea and we\'ll create a personalized quote.',
    'pricing.custom.cta': 'Request quote',
    'contact.label': 'Contact',
    'contact.title': 'Let\'s start your project',
    'contact.subtitle': 'Tell us your idea and we\'ll bring it to life.',
    'contact.name': 'Name',
    'contact.service.label': 'Service',
    'contact.service.select': 'Select a service',
    'contact.service.invitation': 'Digital Invitation',
    'contact.service.website': 'Website',
    'contact.service.store': 'Online Store',
    'contact.service.menu': 'QR Digital Menu',
    'contact.service.card': 'Digital Card',
    'contact.service.other': 'Other',
    'contact.message': 'Message',
    'contact.send': 'Send message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    'contact.success': 'Message sent successfully! We\'ll be in touch soon.',
    'footer.copyright': '© 2026 Auria. All rights reserved.',
    'modal.features.title': 'Key features:',
    'modal.cta': 'Request similar project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
  }
};

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNavigation();
  initScrollReveal();
  initPortfolioFilter();
  initProjectModal();
  initTestimonialsCarousel();
  initContactForm();
});

// ============================================
// Internationalization
// ============================================

let currentLang = localStorage.getItem('auria-lang') || 'es';

function initI18n() {
  if (currentLang !== 'es') {
    applyTranslations(currentLang);
  }
}

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  currentLang = lang;
  localStorage.setItem('auria-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'OPTION') {
        el.textContent = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
}

function toggleLanguage() {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  applyTranslations(newLang);
}

// ============================================
// Navigation
// ============================================

function initNavigation() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const langToggle = document.getElementById('langToggle');

  // Scroll detection
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 60) {
          nav.classList.add('nav--scrolled');
        } else {
          nav.classList.remove('nav--scrolled');
        }
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('nav--open');
      document.body.style.overflow = nav.classList.contains('nav--open') ? 'hidden' : '';
    });
  }

  // Nav link clicks
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      // Close mobile menu
      nav.classList.remove('nav--open');
      document.body.style.overflow = '';
    });
  });

  // Language toggle
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('nav--open') && !nav.contains(e.target)) {
      nav.classList.remove('nav--open');
      document.body.style.overflow = '';
    }
  });
}

// Active link tracking
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav__link[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

// ============================================
// Scroll Reveal Animations
// ============================================

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ============================================
// Portfolio Filtering
// ============================================

function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio__filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');
  const grid = document.getElementById('portfolioGrid');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // Update grid layout for visible items
      if (grid) {
        const visible = grid.querySelectorAll('.portfolio-card:not(.hidden)');
        if (visible.length === 1) {
          grid.style.gridTemplateColumns = '1fr';
        } else {
          grid.style.gridTemplateColumns = '';
        }
      }
    });
  });
}

// ============================================
// Project Details Modal
// ============================================

const projectsData = {
  1: {
    serviceValue: 'invitation',
    img: 'assets/portfolio-invitacion.jpg',
    es: {
      category: 'Invitación Digital',
      title: 'Boda Sofia & Marco',
      desc: 'Invitación digital interactiva con confirmación de asistencia en tiempo real (RSVP), contador regresivo al gran día, ubicación navegable en Google Maps, código de vestimenta y reproducción de música de fondo personalizada.',
      tags: ['Confirmación RSVP', 'Google Maps', 'Cuenta Regresiva', 'Música de Fondo', 'Dress Code']
    },
    en: {
      category: 'Digital Invitation',
      title: 'Sofia & Marco Wedding',
      desc: 'Interactive digital invitation with real-time RSVP confirmation, countdown timer to the big day, navigable Google Maps location integration, dress code specs and custom background audio playback.',
      tags: ['Online RSVP', 'Google Maps', 'Countdown Timer', 'Background Audio', 'Dress Code']
    }
  },
  2: {
    serviceValue: 'website',
    img: 'assets/portfolio-restaurante.jpg',
    es: {
      category: 'Sitio Web',
      title: 'La Terrazza Restaurant',
      desc: 'Sitio web gastronómico de alta gama diseñado para destacar la experiencia culinaria. Incluye sistema de reservas integradas en línea, carta digital interactiva en alta resolución y sección de eventos privados.',
      tags: ['Reservas Online', 'Carta HD', 'Diseño Elegante', 'SEO Optimizado', 'Multidioma']
    },
    en: {
      category: 'Website',
      title: 'La Terrazza Restaurant',
      desc: 'High-end gastronomy website designed to highlight the culinary experience. Features integrated online booking system, interactive high-resolution digital menu and private events section.',
      tags: ['Online Booking', 'HD Menu', 'Elegant Design', 'SEO Optimized', 'Multi-language']
    }
  },
  3: {
    serviceValue: 'store',
    img: 'assets/portfolio-tienda.jpg',
    es: {
      category: 'Tienda Online',
      title: 'Velvet Fashion Store',
      desc: 'Plataforma e-commerce moderna para marca de indumentaria urbana. Cuenta con catálogo filtrable por talle y color, pasarela de pagos integrados y experiencia de checkout fluida en dispositivos móviles.',
      tags: ['Pasarela de Pagos', 'Filtros Avanzados', 'Carrito Dinámico', 'Gestión de Stock', 'Mobile First']
    },
    en: {
      category: 'Online Store',
      title: 'Velvet Fashion Store',
      desc: 'Modern e-commerce platform for urban fashion brand. Includes size and color filterable catalog, integrated payment gateway and seamless mobile checkout experience.',
      tags: ['Payment Gateway', 'Advanced Filters', 'Dynamic Cart', 'Stock Management', 'Mobile First']
    }
  },
  4: {
    serviceValue: 'menu',
    img: 'assets/portfolio-menu.jpg',
    es: {
      category: 'Menú Digital QR',
      title: 'Café Madera',
      desc: 'Menú digital interactivo mediante código QR para cafetería y bar de especialidad. Carga instantánea sin descargar aplicaciones, actualización de precios 24/7 y recomendaciones de maridaje.',
      tags: ['Acceso QR Instantáneo', 'Actualización 24/7', 'Sugerencias de Maridaje', 'Sin Descargar App', 'Multilingüe']
    },
    en: {
      category: 'Digital Menu',
      title: 'Café Madera',
      desc: 'Interactive QR code digital menu for specialty coffee shop & bar. Ultra-fast loading without app downloads, 24/7 price updates and food/coffee pairing suggestions.',
      tags: ['Instant QR Access', '24/7 Price Admin', 'Pairing Suggestions', 'No App Needed', 'Multilingual']
    }
  }
};

function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  const ctaBtn = document.getElementById('modalCta');
  const cards = document.querySelectorAll('.portfolio-card');

  if (!modal || !cards.length) return;

  let activeProjectId = null;

  function populateModal(id) {
    const data = projectsData[id];
    if (!data) return;

    activeProjectId = id;
    const langData = data[currentLang] || data['es'];

    const modalImg = document.getElementById('modalImg');
    if (modalImg) {
      modalImg.src = data.img;
      modalImg.alt = langData.title;
    }

    const modalCat = document.getElementById('modalCategory');
    if (modalCat) modalCat.textContent = langData.category;

    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) modalTitle.textContent = langData.title;

    const modalDesc = document.getElementById('modalDesc');
    if (modalDesc) modalDesc.textContent = langData.desc;

    // Tags
    const tagsContainer = document.getElementById('modalTags');
    if (tagsContainer) {
      tagsContainer.innerHTML = langData.tags.map(tag => `<li class="modal__tag">${tag}</li>`).join('');
    }
  }

  function openModal(id) {
    populateModal(id);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Open modal on card click
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openModal(id);
    });
  });

  // Close handlers
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // CTA click: scroll to contact and auto-select service
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      const currentId = activeProjectId;
      closeModal();

      if (currentId && projectsData[currentId]) {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
          serviceSelect.value = projectsData[currentId].serviceValue;
        }
      }

      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        const top = contactSection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  }

  // Update modal content on language switch if open
  const origApplyTranslations = window.applyTranslations;
  window.applyTranslations = function(lang) {
    if (typeof origApplyTranslations === 'function') {
      origApplyTranslations(lang);
    }
    if (modal.classList.contains('open') && activeProjectId) {
      populateModal(activeProjectId);
    }
  };
}

// ============================================
// Testimonials Carousel
// ============================================

function initTestimonialsCarousel() {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.querySelectorAll('.testimonials__dot');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');

  if (!track || !dots.length) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;
  let current = 0;
  let autoplayTimer = null;

  function goTo(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    current = index;

    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  // Button events
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });

  // Dot events
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetAutoplay(); });
  });

  // Autoplay
  function startAutoplay() {
    autoplayTimer = setInterval(next, 6000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  // Pause on hover
  const carousel = track.closest('.testimonials__container');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    carousel.addEventListener('mouseleave', startAutoplay);
  }

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
      resetAutoplay();
    }
  }, { passive: true });

  startAutoplay();
}

// ============================================
// Contact Form
// ============================================

function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.form__btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span style="opacity:0.5">...</span>';
    btn.disabled = true;

    // Simulate submission
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;

      if (successMsg) {
        successMsg.classList.add('visible');
        setTimeout(() => successMsg.classList.remove('visible'), 4000);
      }

      form.reset();
    }, 1200);
  });
}
