/* ============================================
   AJ FITNESS — Swiper Initialization
   ============================================ */

function initProgramsSwiper() {
  new Swiper('.programs-swiper', {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.programs-swiper .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.programs-next',
      prevEl: '.programs-prev'
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    }
  });
}

// Fallback: init if Swiper loads before CMS
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    const swiperEl = document.querySelector('.programs-swiper');
    if (swiperEl && !swiperEl.swiper && swiperEl.querySelector('.swiper-slide')) {
      initProgramsSwiper();
    }
  }, 1500);
});
