const weekButtons = document.querySelectorAll('nav.weeks button');
  const weekPanels = document.querySelectorAll('.week-panel');
  weekButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      weekButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      weekPanels.forEach(p => p.classList.remove('active'));
      document.getElementById('week-' + btn.dataset.week).classList.add('active');
    });
  });
  document.querySelectorAll('.week-panel').forEach(panel => {
    const dayButtons = panel.querySelectorAll('nav.days button');
    const dayPanels = panel.querySelectorAll('.day-panel');
    dayButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dayButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        dayPanels.forEach(p => p.classList.remove('active'));
        panel.querySelector('.day-panel[data-day="' + btn.dataset.day + '"]').classList.add('active');
      });
    });
  });

  const themeBtn = document.getElementById('theme-toggle');
  const themeMeta = document.getElementById('theme-color-meta');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeBtn.textContent = isLight ? '🌙' : '☀️';
    themeMeta.setAttribute('content', isLight ? '#F4EFE6' : '#0f1225');
  });

  const langBtn = document.getElementById('lang-toggle');
  const translatable = document.querySelectorAll('[data-fr]');
  translatable.forEach(el => { el.dataset.en = el.textContent; });
  let currentLang = 'en';
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    translatable.forEach(el => {
      el.textContent = currentLang === 'fr' ? el.dataset.fr : el.dataset.en;
    });
    document.documentElement.lang = currentLang;
    langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
  });
