/* ============================================
   AJ FITNESS — WhatsApp Integration
   ============================================ */

function initWhatsAppLinks() {
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.enquiry-btn');
    if (!btn) return;
    e.preventDefault();
    const programName = btn.dataset.program || 'General Inquiry';
    const message = encodeURIComponent(`Hello, I want enquiry for ${programName}`);
    const phone = '917905791668'; // Replace with actual number

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'https://api.whatsapp.com' : 'https://web.whatsapp.com';
    window.open(`${baseUrl}/send?phone=${phone}&text=${message}`, '_blank');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initWhatsAppLinks();

  // WhatsApp floating button
  document.querySelectorAll('.btn-whatsapp[data-program]').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const name = this.dataset.program || 'General Inquiry';
      const msg = encodeURIComponent(`Hello, I want enquiry for ${name}`);
      const phone = '917905791668';
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const base = isMobile ? 'https://api.whatsapp.com' : 'https://web.whatsapp.com';
      window.open(`${base}/send?phone=${phone}&text=${msg}`, '_blank');
    });
  });
});
