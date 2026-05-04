/* ============================================
   AJ FITNESS — critical.js
   Dynamic Navbar + Navigation Logic
   Loads FIRST on every page
   ============================================ */

(function () {
  'use strict';

  /* ── CONFIG ── */
  const WHATSAPP_PHONE = '917905791668';
  const NAV_LINKS = [
    { label: 'Home',     href: 'index.html' },
    { label: 'About',    href: 'about.html' },
    { label: 'Programs', href: 'programs.html' },
    { label: 'Trainers', href: 'trainers.html' },
    { label: 'Contact',  href: 'contact.html' }
  ];

  /* ── NAVBAR HTML ── */
  function getNavbarHTML() {
    const linksHTML = NAV_LINKS.map(link =>
      `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.label}</a></li>`
    ).join('');

    return `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom" id="navbarMain">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
          <img src="assets/images/BrandLogo.webp" alt="AJ Fitness — Strength • Progress • Power">
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" id="offcanvasNav">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" style="font-family:var(--font-heading);letter-spacing:2px;">AJ FITNESS</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav ms-auto align-items-lg-center">
              ${linksHTML}
              <li class="nav-item ms-lg-3">
                <a class="btn btn-nav" href="contact.html">Join Now <span class="iconify" data-icon="mdi:arrow-right"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>`;
  }

  /* ── INJECT NAVBAR ── */
  function injectNavbar() {
    const header = document.getElementById('mainNavbar');
    if (!header) return;
    header.innerHTML = getNavbarHTML();
    setActiveLink();
    initNavbarScroll();
    initOffcanvasClose();
  }

  /* ── ACTIVE LINK DETECTION ── */
  function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#navbarMain .nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  }


  /* ── NAVBAR SCROLL EFFECT (Transparent → Dark) ── */
  function initNavbarScroll() {
    const navbar = document.getElementById('navbarMain');
    if (!navbar) return;

    function handleScroll() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on init
  }

  /* ── OFFCANVAS AUTO-CLOSE ON LINK CLICK ── */
  function initOffcanvasClose() {
    const offcanvasEl = document.getElementById('offcanvasNav');
    if (!offcanvasEl) return;

    document.querySelectorAll('#offcanvasNav .nav-link').forEach(link => {
      link.addEventListener('click', function () {
        const instance = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (instance) instance.hide();
      });
    });
  }

  /* ── SMOOTH SCROLL FOR ANCHOR LINKS ── */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ── INIT ── */
  document.addEventListener('DOMContentLoaded', function () {
    injectNavbar();
    initSmoothScroll();
  });

})();
