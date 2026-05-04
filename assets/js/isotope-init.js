/* ============================================
   AJ FITNESS — Isotope Filter Initialization
   ============================================ */

function initIsotope() {
  const grid = document.getElementById('programsGrid');
  if (!grid) return;

  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.dataset.filter;
      const items = grid.querySelectorAll('.program-grid-item');

      items.forEach(item => {
        if (filter === '*' || item.dataset.category === filter) {
          item.style.display = '';
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(initIsotope, 500);
});
