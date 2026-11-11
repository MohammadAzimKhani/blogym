/* =====================================================
   DATA (static for now; replace with fetch from your backend later)
   e.g. const programs = await fetch('/api/programs').then(r => r.json());
===================================================== */
const programs = [
  { id: 'p1', title: '12-Week Muscle Builder', cat: 'mass', level: 'Intermediate', weeks: 12, days: 5, icon: '💪', desc: 'A 5-day push/pull/legs split focused on building muscle size with steady weight progression.' },
  { id: 'p2', title: 'Fat Loss & Fitness', cat: 'cut', level: 'Beginner', weeks: 8, days: 4, icon: '🔥', desc: 'A mix of resistance and cardio training to lose fat while keeping your muscle.' },
  { id: 'p3', title: 'Advanced Strength 5×5', cat: 'strength', level: 'Advanced', weeks: 10, days: 4, icon: '🏋️', desc: 'Build strength in the big lifts — squat, deadlift and press — with weekly progression.' },
  { id: 'p4', title: 'Start From Zero: Beginner', cat: 'beginner', level: 'Beginner', weeks: 6, days: 3, icon: '🌱', desc: 'Learn the basics and proper form with a 3-day full-body routine.' },
  { id: 'p5', title: 'Home Workout, No Equipment', cat: 'home', level: 'Beginner', weeks: 8, days: 4, icon: '🏠', desc: 'A complete body-weight and resistance-band plan for anyone without gym access.' },
  { id: 'p6', title: '6-Day PPL Split', cat: 'mass', level: 'Advanced', weeks: 12, days: 6, icon: '⚡', desc: 'A high-volume professional plan for athletes with training experience.' },
  { id: 'p7', title: '6-Week Cutting Plan', cat: 'cut', level: 'Intermediate', weeks: 6, days: 5, icon: '🎯', desc: 'High-intensity training and cardio to get you lean and defined.' },
  { id: 'p8', title: 'Home Strength & Mobility', cat: 'home', level: 'Intermediate', weeks: 6, days: 4, icon: '🤸', desc: 'Calisthenics for strength, flexibility and body control.' },
  { id: 'p9', title: 'Intro to Powerlifting', cat: 'strength', level: 'Intermediate', weeks: 8, days: 4, icon: '🦾', desc: 'Get meet-ready with a focus on squat, bench and deadlift.' }
];
const exercises = [
  { name: 'Dumbbell Bench Press', m: 'chest', mName: 'Chest', level: 'Intermediate', sets: '4×10', icon: '🏋️', desc: 'A foundational move for building the chest and triceps.', steps: ['Lie on a flat bench and hold the dumbbells beside your chest.', 'Press the dumbbells up as you exhale.', 'Lower them back under control as you inhale.'] },
  { name: 'Incline Press', m: 'chest', mName: 'Chest', level: 'Intermediate', sets: '3×12', icon: '📐', desc: 'Targets the upper part of the chest.', steps: ['Set the bench to a 30–45° angle.', 'Lower the bar to the middle of your chest.', 'Press it back up with power.'] },
  { name: 'Push-Up', m: 'chest', mName: 'Chest', level: 'Beginner', sets: '3×15', icon: '🤲', desc: 'A body-weight move you can do anywhere.', steps: ['Place your hands slightly wider than your shoulders.', 'Keep your body straight and lower down.', 'Push back up to the start.'] },
  { name: 'Pull-Up', m: 'back', mName: 'Back', level: 'Advanced', sets: '4×8', icon: '🧗', desc: 'The best move for back width and pulling strength.', steps: ['Grip the bar wide with palms facing forward.', 'Pull your chest up toward the bar.', 'Lower yourself under control.'] },
  { name: 'Barbell Row', m: 'back', mName: 'Back', level: 'Intermediate', sets: '4×10', icon: '🚣', desc: 'Builds back thickness and the mid-back muscles.', steps: ['Hinge forward with soft knees and a flat back.', 'Pull the bar toward your stomach.', 'Squeeze your shoulder blades together at the top.'] },
  { name: 'Deadlift', m: 'back', mName: 'Back', level: 'Advanced', sets: '4×6', icon: '⛓️', desc: 'A compound lift for full-body strength.', steps: ['Set your feet about hip-width apart.', 'Keep the bar close to your shins and lift with a flat back.', 'Stand tall at the top and lower under control.'] },
  { name: 'Squat', m: 'legs', mName: 'Legs', level: 'Intermediate', sets: '4×10', icon: '🦵', desc: 'The king of leg exercises — builds quads and glutes.', steps: ['Rest the bar on your upper back with feet shoulder-width apart.', 'Squat down until your thighs are parallel to the floor.', 'Drive through your heels to stand up.'] },
  { name: 'Lunge', m: 'legs', mName: 'Legs', level: 'Beginner', sets: '3×12', icon: '🚶', desc: 'Builds leg strength and balance with less load on your lower back.', steps: ['Take a big step forward.', 'Lower your back knee close to the floor.', 'Push through the front leg to return to the start.'] },
  { name: 'Leg Press', m: 'legs', mName: 'Legs', level: 'Beginner', sets: '4×12', icon: '🦿', desc: 'A safe machine move for building leg size.', steps: ['Press your back firmly against the seat.', 'Lower the platform until your knees reach 90°.', 'Press up without locking your knees.'] },
  { name: 'Shoulder Press', m: 'shoulder', mName: 'Shoulders', level: 'Intermediate', sets: '4×10', icon: '🔝', desc: 'Builds wide, strong shoulders.', steps: ['Hold the dumbbells beside your ears.', 'Press them overhead.', 'Lower slowly back down.'] },
  { name: 'Lateral Raise', m: 'shoulder', mName: 'Shoulders', level: 'Beginner', sets: '3×15', icon: '🦅', desc: 'Isolates the side delts for extra width.', steps: ['Hold a light dumbbell in each hand.', 'Raise your arms out to shoulder height.', 'Lower them under control.'] },
  { name: 'Barbell Curl', m: 'arms', mName: 'Arms', level: 'Beginner', sets: '3×12', icon: '💪', desc: 'The classic move for biceps size.', steps: ['Hold the bar with palms facing up.', 'Keep your elbows still and curl the bar up.', 'Lower it slowly.'] },
  { name: 'Cable Triceps Pushdown', m: 'arms', mName: 'Arms', level: 'Beginner', sets: '4×15', icon: '🔗', desc: 'Isolates the triceps with constant tension.', steps: ['Grip the handle from above and pin your elbows to your sides.', 'Push down until your arms are fully extended.', 'Return under control.'] },
  { name: 'Plank', m: 'core', mName: 'Core', level: 'Beginner', sets: '3×60s', icon: '🧘', desc: 'Strengthens your core and builds stability.', steps: ['Get onto your forearms and toes.', 'Keep your body in one straight line.', 'Breathe steadily and hold the position.'] },
  { name: 'Reverse Crunch', m: 'core', mName: 'Core', level: 'Intermediate', sets: '3×15', icon: '🌀', desc: 'Focuses on the lower abs.', steps: ['Lie on your back with knees bent.', 'Curl your hips up off the floor.', 'Lower slowly.'] },
  { name: 'Hanging Leg Raise', m: 'core', mName: 'Core', level: 'Advanced', sets: '3×12', icon: '🪝', desc: 'An advanced move for the abs and hip flexors.', steps: ['Hang from a bar.', 'Raise your legs until they are level with your hips.', 'Lower without swinging.'] }
];

const trainers = [
  { name: 'Amir Rezaei', role: 'Bodybuilding coach', exp: 12, students: 850, letter: 'A' },
  { name: 'Niloofar Kazemi', role: 'Nutrition & fat loss', exp: 8, students: 620, letter: 'N' },
  { name: 'Pouya Salehi', role: 'Strength & powerlifting', exp: 10, students: 540, letter: 'P' },
  { name: 'Mahsa Abbasi', role: 'Fitness & home training', exp: 6, students: 710, letter: 'M' }
];

const catNames = { mass: 'Muscle gain', cut: 'Fat loss', strength: 'Strength', beginner: 'Beginner', home: 'Home' };

/* =====================================================
   EXERCISE IMAGES & GIFs (added move by move)
   img = still photo for the card (light, loads with the page)
   gif = animated demo (downloads only when the card is clicked)
   Use full direct links (ending in .jpg / .png / .webp / .gif).
   If an exercise has no img, its emoji is shown instead.
===================================================== */
const exMedia = {
  'Dumbbell Bench Press': { img: 'https://example.com/dumbbell-bench-press.jpg', gif: 'https://example.com/dumbbell-bench-press.gif' },
  'Incline Press':        { img: 'https://example.com/incline-press.jpg' },   // for a gif add: gif: 'https://...'
  'Push-Up':              { img: 'https://example.com/push-up.jpg' }          // for a gif add: gif: 'https://...'
};
exercises.forEach(e => Object.assign(e, exMedia[e.name] || {}));

const exImg = e => `<img class="ex-img" src="${e.img}" alt="${e.name}" width="600" height="450" loading="lazy" decoding="async" referrerpolicy="no-referrer">`;
const playBadge = '<span class="xplay"><svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>GIF</span>';

// If an image fails to load, show a dumbbell icon instead
document.addEventListener('error', ev => {
  const t = ev.target;
  if (t.tagName === 'IMG' && t.classList.contains('ex-img')) {
    const box = t.closest('.xph, .e-ph, .m-media');
    if (box) box.classList.add('noimg');
  }
}, true);

/* ===================== Helpers ===================== */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const num = n => n.toLocaleString('en-US');

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ===================== Programs ===================== */
function renderPrograms(cat = 'all') {
  const list = cat === 'all' ? programs : programs.filter(p => p.cat === cat);
  $('#programGrid').innerHTML = list.map(p => `
    <article class="glass program reveal in">
      <div class="p-cover">
        <span class="lvl">${p.level}</span>
        ${p.icon}
      </div>
      <div class="p-body">
        <h3>${p.title}</h3>
        <div class="p-meta"><span>📆 ${num(p.weeks)} weeks</span><span>🗓️ ${num(p.days)} days/week</span><span>🏷️ ${catNames[p.cat]}</span></div>
        <p>${p.desc}</p>
        <div class="p-foot">
          <button class="btn btn-ghost btn-sm" data-detail="${p.id}">View details</button>
        </div>
      </div>
    </article>`).join('');
}

/* ===================== Exercises: homepage preview ===================== */
// Indexes of the exercises shown on the homepage (chest, back, legs, shoulders)
const previewIdx = [0, 3, 6, 9];

function renderExPreview() {
  $('#exGrid').innerHTML = previewIdx.map(i => {
    const e = exercises[i];
    return `
    <article class="glass exercise" data-ex="${i}">
      ${e.img ? `<div class="e-ph">${exImg(e)}${e.gif ? playBadge : ''}</div>` : `<div class="e-ico">${e.icon}</div>`}
      <h4>${e.name}</h4>
      <div class="sub">${e.mName}</div>
      <div class="meta"><span>${e.level}</span><span>${e.sets}</span></div>
    </article>`;
  }).join('');
}

/* ===================== Exercises: fullscreen library ===================== */
const lvClass = { 'Beginner': 'lv1', 'Intermediate': 'lv2', 'Advanced': 'lv3' };
const arrowRight = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

let exMuscle = 'all', exQuery = '';
function renderExercises(animate = true) {
  const q = exQuery.toLowerCase();
  const list = exercises.filter(e =>
    (exMuscle === 'all' || e.m === exMuscle) &&
    (!q || e.name.toLowerCase().includes(q) || e.mName.toLowerCase().includes(q))
  );
  const grid = $('#exFullGrid');
  grid.classList.toggle('noanim', !animate);
  grid.innerHTML = list.map((e, n) => {
    const i = exercises.indexOf(e);
    return `
    <article class="xcard${e.img ? ' has-ph' : ''}" data-ex="${i}" style="--d:${Math.min(n, 12)}">
      ${e.img
        ? `<div class="xph">${exImg(e)}<span class="xm">${e.mName}</span>${e.gif ? playBadge : ''}</div>`
        : `<span class="xn">${i + 1 < 10 ? '0' : ''}${i + 1}</span>
      <div class="xtop"><div class="xi">${e.icon}</div><span class="xm">${e.mName}</span></div>`}
      <h4>${e.name}</h4>
      <p>${e.desc}</p>
      <div class="xfoot">
        <span class="xlv ${lvClass[e.level]}"><i></i>${e.level}</span>
        <span class="xset">${e.sets}</span>
        <span class="xgo">${arrowRight}</span>
      </div>
    </article>`;
  }).join('');
  $('#exEmpty').classList.toggle('hidden', list.length > 0);
  $('#exCount').textContent = num(list.length) + (list.length === 1 ? ' exercise' : ' exercises');
}

function fillChipCounts() {
  $$('#exChips .chip').forEach(c => {
    const m = c.dataset.m;
    const n = m === 'all' ? exercises.length : exercises.filter(e => e.m === m).length;
    const em = $('em', c);
    if (em) em.textContent = num(n);
  });
}

const exPage = $('#exPage');
function openExPage(focusSearch = false) {
  renderExercises(true);
  exPage.scrollTop = 0;
  exPage.classList.add('open');
  exPage.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
  if (!(history.state && history.state.ex)) history.pushState({ ex: 1 }, '');
  if (focusSearch) setTimeout(() => $('#exSearch').focus(), 450);
}
function closeExPage(fromPop = false) {
  exPage.classList.remove('open');
  exPage.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lock');
  if (!fromPop && history.state && history.state.ex) history.back();
}
window.addEventListener('popstate', () => {
  if (exPage.classList.contains('open')) closeExPage(true);
});

/* ===================== Coaches ===================== */
$('#trainerGrid').innerHTML = trainers.map(t => `
  <article class="glass trainer reveal">
    <div class="t-photo">${t.letter}</div>
    <h4>${t.name}</h4>
    <div class="role">${t.role}</div>
    <div class="info"><span>🎖️ ${num(t.exp)} years experience</span><span>👥 ${num(t.students)} athletes</span></div>
  </article>`).join('');

/* ===================== Modal ===================== */
let gifLoader = null;
function cancelGif() {
  if (gifLoader) { gifLoader.onload = gifLoader.onerror = null; gifLoader.src = ''; gifLoader = null; }
}
// The GIF is only downloaded here, and only after a click
function loadGif(src, name) {
  cancelGif();
  const box = $('#mMedia'), gif = $('#mGif');
  if (!box || !gif) return;
  box.classList.add('loading');
  gifLoader = new Image();
  gifLoader.referrerPolicy = 'no-referrer';
  gifLoader.onload = () => { gif.alt = name; gif.src = src; box.classList.remove('loading'); box.classList.add('ready'); };
  gifLoader.onerror = () => box.classList.remove('loading');
  gifLoader.src = src;
}

function openModal(html) {
  cancelGif();
  $('#modalContent').innerHTML = html;
  $('#modal').classList.add('show');
  $('#modal').setAttribute('aria-hidden', 'false');
}
function closeModal() {
  cancelGif();
  $('#modal').classList.remove('show');
  $('#modal').setAttribute('aria-hidden', 'true');
  // Clear the content (and the GIF) so memory is freed
  setTimeout(() => { if (!$('#modal').classList.contains('show')) $('#modalContent').innerHTML = ''; }, 450);
}

/* ===================== Events ===================== */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-detail],[data-ex],[data-goto]');
  if (!t) return;

  if (t.dataset.goto) {
    closeModal();
    const target = $(t.dataset.goto);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  } else if (t.dataset.detail) {
    const p = programs.find(x => x.id === t.dataset.detail);
    openModal(`
      <div class="m-ico">${p.icon}</div>
      <h3>${p.title}</h3>
      <div class="m-tags"><span>${p.level}</span><span>${num(p.weeks)} weeks</span><span>${num(p.days)} days/week</span><span>${catNames[p.cat]}</span></div>
      <p>${p.desc}</p>
      <ol class="m-steps"><li>A weekly split with sets, reps and rest times</li><li>Illustrated guides for every exercise</li><li>Progression tips from week to week</li></ol>
      <button class="btn btn-primary w100" data-goto="#exercises">Browse exercises</button>`);
  } else if (t.dataset.ex) {
    const x = exercises[+t.dataset.ex];
    openModal(`
      ${x.img ? `<div class="m-media" id="mMedia"><img class="ex-img m-poster" src="${x.img}" alt="" referrerpolicy="no-referrer"><img class="m-gif" id="mGif" alt="" referrerpolicy="no-referrer"><span class="m-spin"></span></div>` : `<div class="m-ico">${x.icon}</div>`}
      <h3>${x.name}</h3>
      <div class="m-tags"><span>${x.mName}</span><span>${x.level}</span><span>Suggested: ${x.sets}</span></div>
      <p>${x.desc}</p>
      <ol class="m-steps">${x.steps.map(s => `<li>${s}</li>`).join('')}</ol>`);
    if (x.img && x.gif) loadGif(x.gif, x.name);
  }
});

$('#closeModal').addEventListener('click', closeModal);
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });

/* Escape: modal first, then the exercise library, then the mobile menu */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if ($('#modal').classList.contains('show')) return closeModal();
  if (exPage.classList.contains('open')) return closeExPage();
  toggleMenu(false);
});

$('#programChips').addEventListener('click', e => {
  const c = e.target.closest('.chip'); if (!c) return;
  $$('#programChips .chip').forEach(x => x.classList.remove('active'));
  c.classList.add('active');
  renderPrograms(c.dataset.cat);
});

/* ===== Exercise library page ===== */
$('#exOpenSearch').addEventListener('click', () => openExPage(true));
$('#exMore').addEventListener('click', () => openExPage(false));
$('#exBack').addEventListener('click', () => closeExPage());

$('#exChips').addEventListener('click', e => {
  const c = e.target.closest('.chip'); if (!c) return;
  $$('#exChips .chip').forEach(x => x.classList.remove('active'));
  c.classList.add('active');
  exMuscle = c.dataset.m;
  renderExercises(true);
});

$('#exSearch').addEventListener('input', e => { exQuery = e.target.value.trim(); renderExercises(false); });
$('#exClear').addEventListener('click', () => {
  $('#exSearch').value = ''; exQuery = '';
  renderExercises(false);
  $('#exSearch').focus();
});

$('#newsletter').addEventListener('submit', e => {
  e.preventDefault(); e.target.reset();
  toast('📩 Thanks! You\u2019re on the list.');
});

/* ===== Mobile drawer menu ===== */
const mMenu = $('#mMenu'), mOverlay = $('#mOverlay');
function toggleMenu(open) {
  mMenu.classList.toggle('open', open);
  mOverlay.classList.toggle('show', open);
  mMenu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('lock', open);
}
$('#menuBtn').addEventListener('click', () => toggleMenu(true));
$('#mmClose').addEventListener('click', () => toggleMenu(false));
mOverlay.addEventListener('click', () => toggleMenu(false));
$$('#mMenu a[href^="#"]').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

/* ===== Desktop menu: sliding pill that follows the mouse ===== */
const pill = $('#navPill');
const linkEls = $$('#navLinks a');
let activeLink = null;
function movePill(el) {
  if (!el || !el.offsetWidth) { pill.style.opacity = 0; return; }
  const ul = $('#navLinks').getBoundingClientRect();
  const r = el.getBoundingClientRect();
  pill.style.opacity = 1;
  pill.style.left = (r.left - ul.left) + 'px';
  pill.style.width = r.width + 'px';
}
linkEls.forEach(a => {
  a.addEventListener('mouseenter', () => movePill(a));
  a.addEventListener('focus', () => movePill(a));
});
$('#navLinks').addEventListener('mouseleave', () => movePill(activeLink));

/* ===== Mobile bottom dock ===== */
const dockItems = $$('.dock-i[data-sec]');
const dockPill = $('#dockPill');
const dockMap = { home: 'home', features: 'home', programs: 'programs', exercises: 'exercises', trainers: 'trainers', reviews: 'trainers', faq: 'trainers' };
function moveDock(el) {
  if (!el || !el.offsetWidth) { dockPill.style.opacity = 0; return; }
  dockPill.style.opacity = 1;
  dockPill.style.left = el.offsetLeft + 'px';
  dockPill.style.width = el.offsetWidth + 'px';
}

/* ===== Active section on scroll ===== */
const sections = $$('main section[id]');
let curId = '';
function setActive(id) {
  activeLink = linkEls.find(a => a.getAttribute('href') === '#' + id) || null;
  linkEls.forEach(a => a.classList.toggle('active', a === activeLink));
  movePill(activeLink);
  $$('#mMenu .mm-links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
  const d = dockItems.find(i => i.dataset.sec === dockMap[id]);
  dockItems.forEach(i => i.classList.toggle('active', i === d));
  moveDock(d);
}
let tops = [], maxScroll = 1, ticking = false;
function calcTops() {
  tops = sections.map(s => s.offsetTop);
  maxScroll = document.documentElement.scrollHeight - innerHeight;
}
function onScroll() {
  const y = scrollY;
  $('#header').classList.toggle('scrolled', y > 30);
  $('#scrollBar').style.transform = `scaleX(${maxScroll > 0 ? Math.min(y / maxScroll, 1) : 0})`;
  let cur = 'home';
  sections.forEach((s, i) => { if (y >= tops[i] - 220) cur = s.id; });
  if (cur !== curId) { curId = cur; setActive(cur); }
}
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { onScroll(); ticking = false; });
}, { passive: true });
new ResizeObserver(() => { calcTops(); onScroll(); }).observe(document.body);
calcTops();
window.addEventListener('resize', () => setActive(curId || 'home'));
window.addEventListener('load', () => { curId = ''; onScroll(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => setActive(curId || 'home'));

/* ===== Card glow that follows the mouse ===== */
let pmFrame = 0, pmEv = null;
document.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  pmEv = e;
  if (pmFrame) return;
  pmFrame = requestAnimationFrame(() => {
    pmFrame = 0;
    const c = pmEv.target.closest('.feature,.program,.exercise,.xcard,.trainer,.review,.main-card');
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (pmEv.clientX - r.left) + 'px');
    c.style.setProperty('--my', (pmEv.clientY - r.top) + 'px');
  });
}, { passive: true });

/* Reveal on scroll */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: .12 });
function observeReveals() { $$('.reveal:not(.in)').forEach(el => io.observe(el)); }

/* Stats counter */
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count, dur = 1600, start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = num(Math.floor(end * (1 - Math.pow(1 - p, 3)))) + (p === 1 ? '+' : '');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: .6 });
$$('[data-count]').forEach(el => counterIO.observe(el));

/* Init */
renderPrograms();
renderExPreview();
renderExercises();
fillChipCounts();
observeReveals();
onScroll();
