/* ============================================
   AJ FITNESS — CMS Renderer (JSON-driven)
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  const programsContainer = document.getElementById('programsSlider');
  const programsGrid = document.getElementById('programsGrid');

  // Render Programs Slider (Home Page)
  if (programsContainer) {
    fetch('data/programs.json')
      .then(res => res.json())
      .then(programs => {
        programsContainer.innerHTML = programs.map(p => `
          <div class="swiper-slide">
            <div class="program-card" id="${p.id}">
              <div class="program-card-img">
                <img src="${p.image}" alt="${p.name}" loading="lazy" width="400" height="220">
                <div class="program-icon">
                  <span class="iconify" data-icon="${p.icon}"></span>
                </div>
              </div>
              <div class="program-card-body">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
              </div>
            </div>
          </div>
        `).join('');

        // Init Swiper after rendering
        if (typeof initProgramsSwiper === 'function') {
          initProgramsSwiper();
        }

        // Init WhatsApp links
        if (typeof initWhatsAppLinks === 'function') {
          initWhatsAppLinks();
        }
      })
      .catch(err => console.error('Error loading programs:', err));
  }

  // Render Programs Grid (Programs Page with Isotope)
  if (programsGrid) {
    fetch('data/programs.json')
      .then(res => res.json())
      .then(programs => {
        programsGrid.innerHTML = programs.map(p => `
          <div class="col-lg-4 col-md-6 program-grid-item" data-category="${p.category}">
            <div class="program-card" id="${p.id}">
              <div class="program-card-img">
                <img src="${p.image}" alt="${p.name}" loading="lazy" width="400" height="220">
                <div class="program-icon">
                  <span class="iconify" data-icon="${p.icon}"></span>
                </div>
              </div>
              <div class="program-card-body">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <div class="d-flex justify-content-between align-items-center mt-2">
                  <span class="text-muted" style="font-size:0.8rem;">
                    <span class="iconify" data-icon="mdi:clock-outline"></span> ${p.duration} • ${p.level}
                  </span>
                </div>
                <a href="#" class="btn-primary-custom mt-3 w-100 justify-content-center enquiry-btn" data-program="${p.name}" style="font-size:0.8rem;padding:10px 20px;">
                  Enquiry Now <span class="iconify" data-icon="mdi:whatsapp"></span>
                </a>
              </div>
            </div>
          </div>
        `).join('');

        // Init Isotope after rendering
        if (typeof initIsotope === 'function') {
          setTimeout(initIsotope, 100);
        }

        // Init WhatsApp links
        if (typeof initWhatsAppLinks === 'function') {
          initWhatsAppLinks();
        }
      })
      .catch(err => console.error('Error loading programs:', err));
  }

  // Render Trainers (Trainers Page)
  const trainersGrid = document.getElementById('trainersGrid');
  if (trainersGrid) {
    fetch('data/trainers.json')
      .then(res => res.json())
      .then(trainers => {
        trainersGrid.innerHTML = trainers.map(t => `
          <div class="col-lg-3 col-md-6" data-aos="fade-up">
            <div class="trainer-card">
              <div class="trainer-img">
                <img src="${t.image}" alt="${t.name}" loading="lazy" width="400" height="320">
                <div class="trainer-overlay">
                  <div class="trainer-social">
                    <a href="${t.social.instagram}"><span class="iconify" data-icon="mdi:instagram"></span></a>
                    <a href="${t.social.twitter}"><span class="iconify" data-icon="mdi:twitter"></span></a>
                    <a href="${t.social.linkedin}"><span class="iconify" data-icon="mdi:linkedin"></span></a>
                  </div>
                </div>
              </div>
              <div class="trainer-info">
                <h3>${t.name}</h3>
                <p class="trainer-role">${t.role}</p>
                <p class="trainer-specialty">${t.specialty}</p>
              </div>
            </div>
          </div>
        `).join('');
      })
      .catch(err => console.error('Error loading trainers:', err));
  }
});
