/* ============================================
   AJ FITNESS — Timetable Renderer
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  const timetableContent = document.getElementById('timetableContent');
  const timetableTabs = document.querySelectorAll('#timetableTabs .nav-link, #timetableTabsFull .nav-link');

  if (!timetableContent) return;

  let timetableData = null;

  function renderDay(day) {
    const classes = timetableData[day];
    if (!classes) {
      timetableContent.innerHTML = '<p class="text-center text-muted mt-4">No classes scheduled.</p>';
      return;
    }
    timetableContent.innerHTML = classes.map(c => `
      <div class="timetable-card">
        <span class="tt-time">${c.time}</span>
        <span class="tt-class">${c.class}</span>
        <span class="tt-trainer">${c.trainer}</span>
      </div>
    `).join('');
  }

  // Fetch timetable data
  fetch('data/timetable.json')
    .then(res => res.json())
    .then(data => {
      timetableData = data;
      renderDay('monday');
    })
    .catch(err => console.error('Error loading timetable:', err));

  // Tab click handlers
  timetableTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      timetableTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const day = this.dataset.day;
      if (timetableData) renderDay(day);
    });
  });
});
