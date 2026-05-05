/* ============================================
   AJ FITNESS — script.js
   Footer Injection + FAB + Preloader + Cursor + UI
   ============================================ */

(function () {
  'use strict';

  /* ══════════════════════════════════════════
     CONFIG
     ══════════════════════════════════════════ */
  const WHATSAPP_PHONE = '917905791668';
  const WHATSAPP_MESSAGE = 'Hello, I am interested in AJ Fitness. Please share more details.';

  const SITE_INFO = {
    phone: '+91 79057 91668',
    phoneHref: 'tel:+917905791668',
    email: 'info@ajfitness.com',
    emailHref: 'mailto:info@ajfitness.com',
    address: '1st Floor, Indu Suzuki Pushp Hub, Old Chhani Rd, opp. L&T Health Care, Chistiya Nagar, Chhani Jakatnaka, Vadodara, Gujarat 390002',
    addressHref: 'https://maps.google.com/?q=AJ+Fitness+Vadodara',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14760.96025075036!2d73.16024202012265!3d22.34456263378423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9562c56aad3%3A0xb5ba37f40b28c84c!2sAJ%20fitness!5e0!3m2!1sen!2sin!4v1777878475057!5m2!1sen!2sin',
    social: {
      facebook: '#',
      instagram: '#',
      youtube: '#'
    }
  };

  /* ══════════════════════════════════════════
     1. DYNAMIC FOOTER
     ══════════════════════════════════════════ */
  function getFooterHTML() {
    const year = new Date().getFullYear();
    return `
    <footer class="footer">
      <div class="container">
        <div class="row g-4">
          <!-- Brand -->
          <div class="col-lg-3 col-md-6">
            <div class="footer-brand">
              <div class="footer-brand-logo">
                <img src="assets/images/BrandLogo.webp" alt="AJ Fitness — Strength • Progress • Power">
              </div> 
              <p>AJ Fitness is dedicated to helping you build strength, make progress, and unleash your true power.</p>
              <div class="footer-social">
                <a href="${SITE_INFO.social.facebook}" aria-label="Facebook"><span class="iconify" data-icon="mdi:facebook"></span></a>
                <a href="${SITE_INFO.social.instagram}" aria-label="Instagram"><span class="iconify" data-icon="mdi:instagram"></span></a>
                <a href="${SITE_INFO.social.youtube}" aria-label="YouTube"><span class="iconify" data-icon="mdi:youtube"></span></a>
              </div>
            </div>
          </div>
          <!-- Quick Links -->
          <div class="col-lg-2 col-md-6 QuickLinks">
            <h5>Quick Links</h5>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="programs.html">Programs</a></li>
              <li><a href="trainers.html">Trainers</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="timetable.html">Full Schedule</a></li>
            </ul>
          </div>
          <!-- Contact Info -->
          <div class="col-lg-4 col-md-6 contactLinks">
            <h5>Contact Us</h5>
            <ul class="footer-contact">
              <li><a href="${SITE_INFO.phoneHref}"><span class="iconify" data-icon="mdi:phone"></span> ${SITE_INFO.phone}</a></li>
              <li><a href="${SITE_INFO.emailHref}"><span class="iconify" data-icon="mdi:email"></span> ${SITE_INFO.email}</a></li>
              <li><a href="${SITE_INFO.addressHref}" target="_blank"><span class="iconify" data-icon="mdi:map-marker"></span> ${SITE_INFO.address}</a></li>
            </ul>
          </div>
          <!-- Location Map -->
          <div class="col-lg-3 col-md-6">
            <h5>Location</h5>
            <div class="footMapFrame">
              <iframe src="${SITE_INFO.mapEmbed}" width="100%" height="auto" style="
            border:0; filter: grayscale(1) invert(1) contrast(0.94) opacity(0.68);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <!-- Footer Bottom -->
        <div class="footer-bottom justify-content-center">
          <p>&copy; <span id="year">${year}</span> All Rights Reserved by AJ Fitness. Designed by <a href="https://shriiitrackingsolution.in/" target="_blank">Sriii Tracking Solution</a></p>
        </div>
      </div>
    </footer>`;
  }

  function injectFooter() {
    const footerEl = document.getElementById('footer');
    if (!footerEl) return;
    footerEl.innerHTML = getFooterHTML();
  }

  /* ══════════════════════════════════════════
     2. FLOATING ACTION BUTTONS (FAB)
     ══════════════════════════════════════════ */
  function getFABHTML() {
    return `
    <div class="fab-container" id="fabContainer">
      <!-- WhatsApp FAB -->
      <a href="https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}"
         class="fab-btn fab-whatsapp" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" id="fabWhatsApp">
        <span class="iconify" data-icon="mdi:whatsapp" data-width="26"></span>
      </a>
      <!-- Back to Top FAB -->
      <button class="fab-btn fab-top" id="fabBackToTop" aria-label="Back to top">
        <span class="iconify" data-icon="mdi:chevron-up" data-width="24"></span>
      </button>
    </div>`;
  }

  function injectFAB() {
    // Remove old back-to-top if exists
    const oldBTT = document.getElementById('backToTop');
    if (oldBTT) oldBTT.remove();

    document.body.insertAdjacentHTML('beforeend', getFABHTML());

    const backToTopBtn = document.getElementById('fabBackToTop');
    if (!backToTopBtn) return;

    // Show/hide back-to-top based on scroll
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ══════════════════════════════════════════
     3. PRELOADER
     ══════════════════════════════════════════ */
  function injectPreloader() {
    // Only inject if not already in the DOM
    if (document.getElementById('preloader')) return;

    const html = `
    <div id="preloader">
      <div class="loader-content">
        <div class="shriii-loader"></div>
        <div class="loader-text">AJ FITNESS</div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin', html);
  }

  function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.classList.add('loaded');
        // Remove from DOM after fade-out animation
        setTimeout(function () {
          preloader.remove();
        }, 600);
      }, 400);
    });
  }

  /* ══════════════════════════════════════════
     4. CUSTOM CURSOR (Desktop Only)
     ══════════════════════════════════════════ */
  function initCustomCursor() {
    // Skip on mobile/touch devices
    if (window.innerWidth <= 991 || 'ontouchstart' in window) return;

    // Inject cursor elements if not present
    if (!document.getElementById('cursorDot')) {
      document.body.insertAdjacentHTML('beforeend', `
        <div class="cursor-dot" id="cursorDot"></div>
        <div class="cursor-outline" id="cursorOutline"></div>
      `);
    }

    const dot = document.getElementById('cursorDot');
    const outline = document.getElementById('cursorOutline');
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    // Smooth follow for outline
    function animateOutline() {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      outline.style.left = outlineX + 'px';
      outline.style.top = outlineY + 'px';
      requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Expand cursor on hover over interactive elements
    const hoverSelector = 'a, button, .btn-primary-custom, .btn-outline-custom, .btn-nav, .program-card, .trainer-card, .feature-item, .stat-card, .filter-btn, .nav-link, .fab-btn';

    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(hoverSelector)) {
        outline.classList.add('hover');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest(hoverSelector)) {
        outline.classList.remove('hover');
      }
    });
  }

  /* ══════════════════════════════════════════
     5. AOS INITIALIZATION
     ══════════════════════════════════════════ */
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-out-cubic',
        offset: 50
      });
    }
  }

  /* ══════════════════════════════════════════
     6. DEBOUNCED RESIZE HANDLER
     ══════════════════════════════════════════ */
  function debounce(fn, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  function initResizeHandler() {
    const handleResize = debounce(function () {
      // Refresh AOS on resize
      if (typeof AOS !== 'undefined') AOS.refresh();
      // Hide cursor on mobile after resize
      const dot = document.getElementById('cursorDot');
      const outline = document.getElementById('cursorOutline');
      if (window.innerWidth <= 991) {
        if (dot) dot.style.display = 'none';
        if (outline) outline.style.display = 'none';
      } else {
        if (dot) dot.style.display = '';
        if (outline) outline.style.display = '';
      }
    }, 250);

    window.addEventListener('resize', handleResize, { passive: true });
  }

  /* ══════════════════════════════════════════
     INITIALIZATION
     ══════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    injectPreloader();
    initPreloader();
    injectFooter();
    injectFAB();
    initCustomCursor();
    initResizeHandler();

    // AOS needs to wait for images/fonts
    window.addEventListener('load', function () {
      initAOS();
    });
  });

  // Expose WHATSAPP_PHONE globally for whatsapp-form.js
  window.AJ_CONFIG = {
    WHATSAPP_PHONE: WHATSAPP_PHONE,
    SITE_INFO: SITE_INFO
  };

})();
