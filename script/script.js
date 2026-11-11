/* =====================================================
   داده‌ها (فعلاً ثابت هستند؛ بعداً با fetch از بک‌اند جایگزین کن)
   مثال: const programs = await fetch('/api/programs').then(r => r.json());
===================================================== */
const programs = [
  { id: 'p1', title: 'حجم‌دهی ۱۲ هفته‌ای', cat: 'mass', level: 'متوسط', weeks: 12, days: 5, price: 590000, oldPrice: 790000, icon: '💪', desc: 'برنامه ۵ روزه پوش/پول/لگ با تمرکز بر افزایش حجم عضلات و پیشرفت تدریجی وزنه.' },
  { id: 'p2', title: 'چربی‌سوزی و فیتنس', cat: 'cut', level: 'مبتدی', weeks: 8, days: 4, price: 390000, oldPrice: 0, icon: '🔥', desc: 'ترکیب تمرینات مقاومتی و هوازی برای کاهش چربی با حفظ عضله.' },
  { id: 'p3', title: 'قدرتی پیشرفته 5×5', cat: 'strength', level: 'پیشرفته', weeks: 10, days: 4, price: 650000, oldPrice: 850000, icon: '🏋️', desc: 'افزایش قدرت در حرکات پایه اسکوات، ددلیفت و پرس با پروگرس هفتگی.' },
  { id: 'p4', title: 'شروع از صفر؛ ویژه مبتدی', cat: 'beginner', level: 'مبتدی', weeks: 6, days: 3, price: 250000, oldPrice: 0, icon: '🌱', desc: 'آموزش اصول اولیه و فرم صحیح حرکات با برنامه ۳ روزه فول‌بادی.' },
  { id: 'p5', title: 'تمرین در خانه بدون وسیله', cat: 'home', level: 'مبتدی', weeks: 8, days: 4, price: 290000, oldPrice: 390000, icon: '🏠', desc: 'برنامه کامل با وزن بدن و کش مقاومتی؛ مناسب کسانی که به باشگاه دسترسی ندارند.' },
  { id: 'p6', title: 'تقسیم بدن ۶ روزه PPL', cat: 'mass', level: 'پیشرفته', weeks: 12, days: 6, price: 690000, oldPrice: 0, icon: '⚡', desc: 'برنامه حرفه‌ای با حجم تمرین بالا برای ورزشکاران با سابقه.' },
  { id: 'p7', title: 'خشک‌کردن ۶ هفته‌ای', cat: 'cut', level: 'متوسط', weeks: 6, days: 5, price: 450000, oldPrice: 550000, icon: '🎯', desc: 'برنامه تمرینی و هوازی شدت بالا برای رسیدن به بدن تعریف‌شده.' },
  { id: 'p8', title: 'قدرت و تحرک خانگی', cat: 'home', level: 'متوسط', weeks: 6, days: 4, price: 320000, oldPrice: 0, icon: '🤸', desc: 'تمرینات کالیستنیکس برای قدرت، انعطاف و کنترل بدن.' },
  { id: 'p9', title: 'پاورلیفتینگ مقدماتی', cat: 'strength', level: 'متوسط', weeks: 8, days: 4, price: 520000, oldPrice: 0, icon: '🦾', desc: 'آمادگی برای مسابقات با تمرکز بر اسکوات، بنچ و ددلیفت.' }
];

const exercises = [
  { name: 'پرس سینه دمبل', m: 'chest', mName: 'سینه', level: 'متوسط', sets: '۴×۱۰', icon: '🏋️', desc: 'حرکت پایه برای توسعه عضله سینه و پشت‌بازو.', steps: ['روی نیمکت صاف دراز بکشید و دمبل‌ها را کنار سینه نگه دارید.', 'دمبل‌ها را با بازدم به بالا هل دهید.', 'با کنترل و دم، به حالت اولیه برگردید.'] },
  { name: 'پرس بالا سینه', m: 'chest', mName: 'سینه', level: 'متوسط', sets: '۳×۱۲', icon: '📐', desc: 'تمرکز بر بخش بالایی عضله سینه.', steps: ['نیمکت را روی زاویه ۳۰ تا ۴۵ درجه تنظیم کنید.', 'هالتر را تا میانه سینه پایین بیاورید.', 'با قدرت به بالا فشار دهید.'] },
  { name: 'شنا سوئدی', m: 'chest', mName: 'سینه', level: 'مبتدی', sets: '۳×۱۵', icon: '🤲', desc: 'حرکت با وزن بدن که برای هر جایی مناسب است.', steps: ['دست‌ها را کمی بازتر از شانه روی زمین بگذارید.', 'بدن را صاف نگه دارید و پایین بیایید.', 'با فشار به حالت اول بازگردید.'] },
  { name: 'بارفیکس', m: 'back', mName: 'پشت', level: 'پیشرفته', sets: '۴×۸', icon: '🧗', desc: 'بهترین حرکت برای پهنای پشت و قدرت کشش.', steps: ['میله را با دست‌های باز و کف رو به جلو بگیرید.', 'سینه را به سمت میله بالا بکشید.', 'با کنترل پایین بیایید.'] },
  { name: 'روئینگ هالتر', m: 'back', mName: 'پشت', level: 'متوسط', sets: '۴×۱۰', icon: '🚣', desc: 'تقویت ضخامت پشت و عضلات میانی.', steps: ['با زانوی کمی خم و کمر صاف خم شوید.', 'هالتر را به سمت شکم بکشید.', 'تیغه‌های کتف را در بالا فشار دهید.'] },
  { name: 'ددلیفت', m: 'back', mName: 'پشت', level: 'پیشرفته', sets: '۴×۶', icon: '⛓️', desc: 'حرکت ترکیبی برای قدرت کل بدن.', steps: ['پاها را به اندازه عرض لگن باز کنید.', 'هالتر را نزدیک ساق نگه دارید و با کمر صاف بلند کنید.', 'در بالا کامل بایستید و با کنترل پایین بیاورید.'] },
  { name: 'اسکوات', m: 'legs', mName: 'پا', level: 'متوسط', sets: '۴×۱۰', icon: '🦵', desc: 'پادشاه حرکات پا؛ رشد چهارسر و باسن.', steps: ['هالتر را روی کتف قرار دهید و پاها را به عرض شانه باز کنید.', 'تا موازی شدن ران با زمین پایین بروید.', 'از پاشنه فشار داده و بایستید.'] },
  { name: 'لانج', m: 'legs', mName: 'پا', level: 'مبتدی', sets: '۳×۱۲', icon: '🚶', desc: 'تقویت پا و تعادل با فشار کمتر روی کمر.', steps: ['یک قدم بزرگ به جلو بردارید.', 'زانوی عقب را تا نزدیک زمین پایین ببرید.', 'با پای جلو به حالت اول برگردید.'] },
  { name: 'پرس پا', m: 'legs', mName: 'پا', level: 'مبتدی', sets: '۴×۱۲', icon: '🦿', desc: 'حرکت ماشینی ایمن برای حجم پا.', steps: ['پشت را به صندلی بچسبانید.', 'وزنه را تا زاویه ۹۰ درجه پایین بیاورید.', 'بدون قفل‌کردن زانو هل دهید.'] },
  { name: 'پرس سرشانه', m: 'shoulder', mName: 'سرشانه', level: 'متوسط', sets: '۴×۱۰', icon: '🔝', desc: 'ساخت شانه‌های پهن و قوی.', steps: ['دمبل‌ها را کنار گوش‌ها نگه دارید.', 'به بالای سر هل دهید.', 'آرام پایین بیاورید.'] },
  { name: 'نشر از جانب', m: 'shoulder', mName: 'سرشانه', level: 'مبتدی', sets: '۳×۱۵', icon: '🦅', desc: 'ایزوله سرشانه میانی برای پهنای بیشتر.', steps: ['دمبل سبک در دو دست بگیرید.', 'دست‌ها را تا راستای شانه بالا ببرید.', 'با کنترل پایین بیاورید.'] },
  { name: 'جلو بازو هالتر', m: 'arms', mName: 'بازو', level: 'مبتدی', sets: '۳×۱۲', icon: '💪', desc: 'حرکت کلاسیک برای حجم جلو بازو.', steps: ['هالتر را با کف دست رو به بالا بگیرید.', 'آرنج‌ها را ثابت نگه دارید و بالا بیاورید.', 'آرام پایین بیایید.'] },
  { name: 'پشت بازو سیم‌کش', m: 'arms', mName: 'بازو', level: 'مبتدی', sets: '۴×۱۵', icon: '🔗', desc: 'ایزوله پشت‌بازو با کشش ثابت.', steps: ['دسته را از بالا بگیرید و آرنج را به پهلو بچسبانید.', 'ساعد را کامل پایین بکشید.', 'با کنترل برگردید.'] },
  { name: 'پلانک', m: 'core', mName: 'شکم', level: 'مبتدی', sets: '۳×۶۰ث', icon: '🧘', desc: 'تقویت عضلات مرکزی بدن و پایداری.', steps: ['روی آرنج‌ها و پنجه پا قرار بگیرید.', 'بدن را در یک خط صاف نگه دارید.', 'نفس منظم بکشید و حالت را حفظ کنید.'] },
  { name: 'کرانچ معکوس', m: 'core', mName: 'شکم', level: 'متوسط', sets: '۳×۱۵', icon: '🌀', desc: 'تمرکز بر شکم پایین.', steps: ['به پشت دراز بکشید و زانوها را خم کنید.', 'لگن را از زمین بلند کنید.', 'آهسته پایین بیاورید.'] },
  { name: 'بالا بردن پا آویزان', m: 'core', mName: 'شکم', level: 'پیشرفته', sets: '۳×۱۲', icon: '🪝', desc: 'حرکت پیشرفته برای شکم و فلکسور.', steps: ['از میله آویزان شوید.', 'پاها را تا راستای افقی بالا بیاورید.', 'بدون تاب‌خوردن پایین بیایید.'] }
];

const trainers = [
  { name: 'امیر رضایی', role: 'مربی بدنسازی', exp: 12, students: 850, letter: 'ا' },
  { name: 'نیلوفر کاظمی', role: 'تغذیه و چربی‌سوزی', exp: 8, students: 620, letter: 'ن' },
  { name: 'پویا صالحی', role: 'قدرتی و پاورلیفتینگ', exp: 10, students: 540, letter: 'پ' },
  { name: 'مهسا عباسی', role: 'فیتنس و تمرین خانگی', exp: 6, students: 710, letter: 'م' }
];

const plans = [
  { id: 'pl1', name: 'ماهانه', price: 249000, per: 'برای ۱ ماه', desc: 'مناسب شروع و آشنایی', features: ['دسترسی به همه حرکات', '۱ برنامه تمرینی', 'پشتیبانی ایمیلی'], icon: '📅' },
  { id: 'pl2', name: 'سه‌ماهه', price: 599000, per: 'برای ۳ ماه', desc: 'محبوب‌ترین انتخاب', features: ['دسترسی به همه حرکات', '۳ برنامه تمرینی', 'پشتیبانی مربی', 'پیگیری پیشرفت'], icon: '⭐', featured: true },
  { id: 'pl3', name: 'ویژه سالانه', price: 1990000, per: 'برای ۱۲ ماه', desc: 'بیشترین صرفه‌جویی', features: ['برنامه‌های نامحدود', 'مشاوره اختصاصی مربی', 'برنامه غذایی', 'اولویت پشتیبانی'], icon: '👑' }
];

const catNames = { mass: 'حجم', cut: 'چربی‌سوزی', strength: 'قدرتی', beginner: 'مبتدی', home: 'خانگی' };

/* ===================== ابزارها ===================== */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const fmt = n => n.toLocaleString('fa-IR') + ' تومان';
const num = n => n.toLocaleString('fa-IR');

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ===================== رندر برنامه‌ها ===================== */
function renderPrograms(cat = 'all') {
  const list = cat === 'all' ? programs : programs.filter(p => p.cat === cat);
  $('#programGrid').innerHTML = list.map(p => {
    const off = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    return `
    <article class="glass program reveal in">
      <div class="p-cover">
        <span class="lvl">${p.level}</span>
        ${off ? `<span class="off">${num(off)}٪ تخفیف</span>` : ''}
        ${p.icon}
      </div>
      <div class="p-body">
        <h3>${p.title}</h3>
        <div class="p-meta"><span>📆 ${num(p.weeks)} هفته</span><span>🗓️ ${num(p.days)} روز در هفته</span><span>🏷️ ${catNames[p.cat]}</span></div>
        <p>${p.desc}</p>
        <div class="p-foot">
          <div class="price"><b>${fmt(p.price)}</b>${p.oldPrice ? `<small>${num(p.oldPrice)}</small>` : ''}</div>
          <div class="p-actions">
            <button class="btn btn-ghost btn-sm" data-detail="${p.id}">جزئیات</button>
            <button class="btn btn-primary btn-sm" data-add="${p.id}">خرید</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join('');
}

/* ===================== حرکات: پیش‌نمایش صفحه اصلی ===================== */
// ایندکس حرکاتی که در صفحه اصلی نشان داده می‌شوند (سینه، پشت، پا، سرشانه)
const previewIdx = [0, 3, 6, 9];

function renderExPreview() {
  $('#exGrid').innerHTML = previewIdx.map(i => {
    const e = exercises[i];
    return `
    <article class="glass exercise" data-ex="${i}">
      <div class="e-ico">${e.icon}</div>
      <h4>${e.name}</h4>
      <div class="sub">${e.mName}</div>
      <div class="meta"><span>${e.level}</span><span>${e.sets}</span></div>
    </article>`;
  }).join('');
}

/* ===================== حرکات: صفحه تمام‌صفحه ===================== */
const lvClass = { 'مبتدی': 'lv1', 'متوسط': 'lv2', 'پیشرفته': 'lv3' };
const arrowLeft = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';

let exMuscle = 'all', exQuery = '';
function renderExercises(animate = true) {
  const list = exercises.filter(e =>
    (exMuscle === 'all' || e.m === exMuscle) &&
    (!exQuery || e.name.includes(exQuery) || e.mName.includes(exQuery))
  );
  const grid = $('#exFullGrid');
  grid.classList.toggle('noanim', !animate);
  grid.innerHTML = list.map((e, n) => {
    const i = exercises.indexOf(e);
    return `
    <article class="xcard" data-ex="${i}" style="--d:${Math.min(n, 12)}">
      <span class="xn">${i + 1 < 10 ? '۰' : ''}${num(i + 1)}</span>
      <div class="xtop"><div class="xi">${e.icon}</div><span class="xm">${e.mName}</span></div>
      <h4>${e.name}</h4>
      <p>${e.desc}</p>
      <div class="xfoot">
        <span class="xlv ${lvClass[e.level]}"><i></i>${e.level}</span>
        <span class="xset">${e.sets}</span>
        <span class="xgo">${arrowLeft}</span>
      </div>
    </article>`;
  }).join('');
  $('#exEmpty').classList.toggle('hidden', list.length > 0);
  $('#exCount').textContent = num(list.length) + ' حرکت';
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

/* ===================== مربیان و تعرفه ===================== */
$('#trainerGrid').innerHTML = trainers.map(t => `
  <article class="glass trainer reveal">
    <div class="t-photo">${t.letter}</div>
    <h4>${t.name}</h4>
    <div class="role">${t.role}</div>
    <div class="info"><span>🎖️ ${num(t.exp)} سال سابقه</span><span>👥 ${num(t.students)} شاگرد</span></div>
  </article>`).join('');

$('#planGrid').innerHTML = plans.map(p => `
  <article class="glass plan reveal ${p.featured ? 'featured' : ''}">
    ${p.featured ? '<span class="ribbon">پیشنهاد ویژه</span>' : ''}
    <h3>${p.name}</h3>
    <div class="amount">${num(p.price)} <small>تومان</small></div>
    <div class="desc">${p.per} · ${p.desc}</div>
    <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <button class="btn ${p.featured ? 'btn-primary' : 'btn-ghost'} w100" data-plan="${p.id}">انتخاب اشتراک</button>
  </article>`).join('');

/* ===================== سبد خرید ===================== */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('gf_cart')) || []; } catch (e) { cart = []; }

function saveCart() { try { localStorage.setItem('gf_cart', JSON.stringify(cart)); } catch (e) {} }

function renderCart() {
  $$('.cart-badge').forEach(b => { b.textContent = num(cart.length); b.classList.toggle('hidden', !cart.length); });
  const body = $('#cartItems');
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty"><span>🛒</span>سبد خرید شما خالی است</div>`;
  } else {
    body.innerHTML = cart.map(i => `
      <div class="cart-item">
        <div class="ci-ico">${i.icon}</div>
        <div class="ci-info"><b>${i.title}</b><small>${fmt(i.price)}</small></div>
        <button class="ci-del" data-del="${i.id}" aria-label="حذف">🗑</button>
      </div>`).join('');
  }
  $('#cartTotal').textContent = fmt(cart.reduce((s, i) => s + i.price, 0));
}

function addToCart(item) {
  if (cart.some(i => i.id === item.id)) return toast('این مورد قبلاً در سبد خرید است');
  cart.push({ id: item.id, title: item.title, price: item.price, icon: item.icon });
  saveCart(); renderCart();
  toast('✅ به سبد خرید اضافه شد');
}

function openDrawer(open) {
  $('#drawer').classList.toggle('open', open);
  $('#overlay').classList.toggle('show', open);
  $('#drawer').setAttribute('aria-hidden', String(!open));
}

/* ===================== مودال ===================== */
function openModal(html) {
  $('#modalContent').innerHTML = html;
  $('#modal').classList.add('show');
  $('#modal').setAttribute('aria-hidden', 'false');
}
function closeModal() {
  $('#modal').classList.remove('show');
  $('#modal').setAttribute('aria-hidden', 'true');
}

/* ===================== رویدادها ===================== */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-add],[data-detail],[data-ex],[data-del],[data-plan]');
  if (!t) return;

  if (t.dataset.add) {
    addToCart(programs.find(p => p.id === t.dataset.add));
  } else if (t.dataset.plan) {
    const p = plans.find(x => x.id === t.dataset.plan);
    addToCart({ id: p.id, title: 'اشتراک ' + p.name, price: p.price, icon: p.icon });
    openDrawer(true);
  } else if (t.dataset.del) {
    cart = cart.filter(i => i.id !== t.dataset.del);
    saveCart(); renderCart();
  } else if (t.dataset.detail) {
    const p = programs.find(x => x.id === t.dataset.detail);
    openModal(`
      <div class="m-ico">${p.icon}</div>
      <h3>${p.title}</h3>
      <div class="m-tags"><span>${p.level}</span><span>${num(p.weeks)} هفته</span><span>${num(p.days)} روز در هفته</span><span>${catNames[p.cat]}</span></div>
      <p>${p.desc}</p>
      <ol class="m-steps"><li>دریافت فایل PDF برنامه بعد از پرداخت</li><li>آموزش تصویری همه حرکات</li><li>پشتیبانی مربی در طول دوره</li></ol>
      <button class="btn btn-primary w100" data-add="${p.id}">افزودن به سبد · ${fmt(p.price)}</button>`);
  } else if (t.dataset.ex) {
    const x = exercises[+t.dataset.ex];
    openModal(`
      <div class="m-ico">${x.icon}</div>
      <h3>${x.name}</h3>
      <div class="m-tags"><span>${x.mName}</span><span>${x.level}</span><span>پیشنهاد: ${x.sets}</span></div>
      <p>${x.desc}</p>
      <ol class="m-steps">${x.steps.map(s => `<li>${s}</li>`).join('')}</ol>`);
  }
});

$('#cartBtn').addEventListener('click', () => openDrawer(true));
$('#closeCart').addEventListener('click', () => openDrawer(false));
$('#overlay').addEventListener('click', () => openDrawer(false));
$('#closeModal').addEventListener('click', closeModal);
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });

/* Escape: اول مودال، بعد سبد، بعد صفحه حرکات، بعد منوی موبایل */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if ($('#modal').classList.contains('show')) return closeModal();
  if ($('#drawer').classList.contains('open')) return openDrawer(false);
  if (exPage.classList.contains('open')) return closeExPage();
  toggleMenu(false);
});

$('#checkoutBtn').addEventListener('click', () => {
  if (!cart.length) return toast('سبد خرید خالی است');
  toast('درگاه پرداخت بعد از اتصال بک‌اند فعال می‌شود');
});

$('#programChips').addEventListener('click', e => {
  const c = e.target.closest('.chip'); if (!c) return;
  $$('#programChips .chip').forEach(x => x.classList.remove('active'));
  c.classList.add('active');
  renderPrograms(c.dataset.cat);
});

/* ===== صفحه تمام‌صفحه حرکات ===== */
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
  toast('📩 نمونه برنامه برای شما ارسال می‌شود');
});

/* ===== منوی کشویی موبایل ===== */
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
$('#dockCart').addEventListener('click', () => openDrawer(true));

/* ===== منوی دسکتاپ: قرص کشویی که دنبال موس می‌رود ===== */
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

/* ===== نوار پایین موبایل ===== */
const dockItems = $$('.dock-i[data-sec]');
const dockPill = $('#dockPill');
const dockMap = { home: 'home', features: 'home', programs: 'programs', exercises: 'exercises', trainers: 'exercises', pricing: 'pricing', reviews: 'pricing', faq: 'pricing' };
function moveDock(el) {
  if (!el || !el.offsetWidth) { dockPill.style.opacity = 0; return; }
  dockPill.style.opacity = 1;
  dockPill.style.left = el.offsetLeft + 'px';
  dockPill.style.width = el.offsetWidth + 'px';
}

/* ===== بخش فعال در اسکرول ===== */
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

/* ===== درخشش کارت‌ها دنبال موس ===== */
let pmFrame = 0, pmEv = null;
document.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  pmEv = e;
  if (pmFrame) return;
  pmFrame = requestAnimationFrame(() => {
    pmFrame = 0;
    const c = pmEv.target.closest('.feature,.program,.exercise,.xcard,.trainer,.plan,.review,.main-card');
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (pmEv.clientX - r.left) + 'px');
    c.style.setProperty('--my', (pmEv.clientY - r.top) + 'px');
  });
}, { passive: true });

/* ظاهر شدن با اسکرول */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: .12 });
function observeReveals() { $$('.reveal:not(.in)').forEach(el => io.observe(el)); }

/* شمارنده آمار */
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

/* شروع */
renderPrograms();
renderExPreview();
renderExercises();
fillChipCounts();
renderCart();
observeReveals();
onScroll();
