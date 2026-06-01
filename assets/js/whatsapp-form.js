/* ============================================
   AJ FITNESS — whatsapp-form.js
   Contact Form → WhatsApp Redirect
   ============================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* ── Collect Fields ── */
      const fields = form.querySelectorAll('input, select, textarea');
      const data = {};

      fields.forEach(function (field) {
        const placeholder = field.placeholder || '';
        const type = field.type || field.tagName.toLowerCase();

        if (type === 'text' || placeholder.toLowerCase().includes('name')) {
          data.name = field.value.trim();
        } else if (type === 'email' || placeholder.toLowerCase().includes('email')) {
          data.email = field.value.trim();
        } else if (type === 'tel' || placeholder.toLowerCase().includes('phone')) {
          data.phone = field.value.trim();
        } else if (field.tagName === 'SELECT') {
          data.service = field.value.trim();
        } else if (field.tagName === 'TEXTAREA') {
          data.message = field.value.trim();
        }
      });

      /* ── Validate ── */
      if (!data.name) {
        highlightField(form.querySelector('input[type="text"], input[placeholder*="Name"]'));
        return;
      }

      /* ── Format Message ── */
      let message = `*New Inquiry — AJ Fitness*\n\n`;
      message += `*Name:* ${data.name || 'N/A'}\n`;
      message += `*Phone:* ${data.phone || 'N/A'}\n`;
      message += `*Email:* ${data.email || 'N/A'}\n`;
      message += `*Service:* ${data.service || 'N/A'}\n`;
      message += `*Message:* ${data.message || 'N/A'}`;

      /* ── Get WhatsApp Config ── */
      const phone = (window.AJ_CONFIG && window.AJ_CONFIG.WHATSAPP_PHONE) || '918487042256';

      /* ── Device Detection ── */
      const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const baseUrl = isMobile
        ? 'https://api.whatsapp.com'
        : 'https://web.whatsapp.com';

      const whatsappURL = `${baseUrl}/send?phone=${phone}&text=${encodeURIComponent(message)}`;

      /* ── Open WhatsApp ── */
      window.open(whatsappURL, '_blank');

      /* ── Optional: reset form ── */
      form.reset();
    });

    /* ── Visual Validation Feedback ── */
    function highlightField(field) {
      if (!field) return;
      field.style.borderColor = 'var(--secondary)';
      field.focus();
      setTimeout(function () {
        field.style.borderColor = '';
      }, 2500);
    }
  });

})();
