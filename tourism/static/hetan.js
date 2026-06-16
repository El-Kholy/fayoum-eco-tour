/* =========================================
   JS - وادي الحيتان | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
     1. الترجمة
     ============================== */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
      nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
      title: "وادي الحيتان",
      subtitle: "متحف مفتوح تحت السماء",
      bestTime: "أفضل وقت", distance: "المسافة", entry: "الدخول", rating: "التقييم",
      aboutTitle: "عن المكان",
      aboutText: "يُعتبر متحفاً جيولوجياً مفتوحاً يحكي قصة تطور الكائنات البحرية عبر ملايين السنين. يضم هياكل عظمية متحجرة كاملة لحيتان بدائية كانت تمتلك أرجلاً، مما يُثبت انتقالها من كائنات برية إلى مائية. تتيح المحمية مسارات مجهزة للمشي لاستكشاف الحفريات، وتضم متحفاً معمارياً صديقاً للبيئة يعرض أسرار تغير المناخ عبر العصور.",
      galleryTitle: "معرض الصور",
      ratingMsgDefault: "اختر عدد النجوم",
      submitBtn: "إرسال التقييم",
      commentPlaceholder: "شارك تجربتك مع الآخرين...",
      footer: "جميع الحقوق محفوظة - Fayoum Eco Tours © 2026",
      mapTitle: "موقعنا على الخريطة",
      mapBtn: "افتح في خرائط جوجل",
      bookTitle: "احجز زيارتك الآن",
      bookSub: "تجربة استثنائية بين حفريات الحيتان البدائية",
      bookFeatures: ["جولة مع مرشد متخصص", "استكشاف الهياكل العظمية المتحجرة", "تصوير في أجمل المواقع"],
      bookBtn: "احجز الآن",
      bookArrow: "fa-solid fa-arrow-left"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Attractions", nav4: "Hotels",
      nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
      title: "Wadi El-Hitan",
      subtitle: "An Open-Air Museum Under the Sky",
      bestTime: "Best Time", distance: "Distance", entry: "Entry", rating: "Rating",
      aboutTitle: "About the Place",
      aboutText: "Considered an open geological museum telling the story of marine life evolution over millions of years. Contains complete fossilized skeletons of primitive whales that had legs, proving their transition from land to sea creatures. The reserve offers equipped walking paths to explore fossils, and includes an eco-friendly architectural museum displaying climate change secrets through ages.",
      galleryTitle: "Photo Gallery",
      ratingMsgDefault: "Select stars count",
      submitBtn: "Submit Rating",
      commentPlaceholder: "Share your experience with others...",
      footer: "All Rights Reserved - Fayoum Eco Tours © 2026",
      mapTitle: "Find Us on the Map",
      mapBtn: "Open in Google Maps",
      bookTitle: "Book Your Visit Now",
      bookSub: "An exceptional experience among primitive whale fossils",
      bookFeatures: ["Guided tour with a specialist", "Explore fossilized skeletons", "Photography at the finest spots"],
      bookBtn: "Book Now",
      bookArrow: "fa-solid fa-arrow-right"
    }
  };

  const tabsData = {
    'tab-time': {
      ar: {
        title: '<i class="fa-solid fa-sun"></i> أفضل وقت للزيارة',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>7 صباحاً – 10 صباحاً:</strong> الجو المنعش مثالي للمشي بين الحفريات',
          '<i class="fa-solid fa-circle-check"></i> <strong>أكتوبر – مارس:</strong> طقس معتدل يناسب التجوال في الموقع المفتوح',
          '<i class="fa-solid fa-circle-check"></i> <strong>الغروب:</strong> إضاءة ذهبية تمنح الهياكل العظمية مشهداً استثنائياً',
          '<i class="fa-solid fa-triangle-exclamation"></i> تجنّب فصل الصيف — الموقع مكشوف تماماً بدون ظل'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-sun"></i> Best Time to Visit',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>7 AM – 10 AM:</strong> Fresh weather ideal for walking among fossils',
          '<i class="fa-solid fa-circle-check"></i> <strong>October – March:</strong> Moderate weather suitable for open-site exploration',
          '<i class="fa-solid fa-circle-check"></i> <strong>Sunset:</strong> Golden lighting gives the skeletons an exceptional view',
          '<i class="fa-solid fa-triangle-exclamation"></i> Avoid summer — the site is completely exposed with no shade'
        ]
      }
    },
    'tab-distance': {
      ar: {
        title: '<i class="fa-solid fa-route"></i> المسافة من مطار القاهرة',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> المطار ← وادي الحيتان: <strong>~180 كم</strong>',
          '<i class="fa-solid fa-car"></i> بالسيارة: ~<strong>2.5 ساعة</strong> عبر طريق الفيوم الصحراوي',
          '<i class="fa-solid fa-bus"></i> بالأتوبيس: ~<strong>3 ساعات</strong> من محطة الجيزة ثم سرفيس',
          '<i class="fa-solid fa-location-dot"></i> الموقع: محمية وادي الريان، جنوب غرب الفيوم',
          '<i class="fa-solid fa-triangle-exclamation"></i> يُنصح باستخدام سيارة دفع رباعي للوصول للموقع'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-route"></i> Distance from Cairo Airport',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> Airport → Wadi El-Hitan: <strong>~180 km</strong>',
          '<i class="fa-solid fa-car"></i> By Car: ~<strong>2.5 hours</strong> via Fayoum Desert Road',
          '<i class="fa-solid fa-bus"></i> By Bus: ~<strong>3 hours</strong> from Giza Station then shuttle',
          '<i class="fa-solid fa-location-dot"></i> Location: Wadi El Rayan Reserve, Southwest Fayoum',
          '<i class="fa-solid fa-triangle-exclamation"></i> 4x4 vehicle recommended to reach the site'
        ]
      }
    },
    'tab-entry': {
      ar: {
        title: '<i class="fa-solid fa-door-open"></i> تذاكر الدخول',
        items: [
          '<i class="fa-solid fa-tag"></i> المصريون: <strong>30 جنيه</strong>',
          '<i class="fa-solid fa-tag"></i> الأجانب: <strong>150 جنيه</strong>',
          '<i class="fa-solid fa-graduation-cap"></i> الطلاب: خصم 50%',
          '<i class="fa-solid fa-child"></i> أقل من 6 سنوات: مجاناً',
          '<i class="fa-solid fa-circle-check"></i> <strong>مسموح:</strong> التصوير، المشي على المسارات المحددة، الماء والوجبات الخفيفة',
          '<i class="fa-solid fa-ban"></i> <strong>ممنوع:</strong> لمس الحفريات، الخروج عن المسارات، الطائرات المسيّرة، الحيوانات الأليفة',
          '<i class="fa-solid fa-clock"></i> مواعيد الفتح: 8 صباحاً – 4 مساءً'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-door-open"></i> Entry Tickets',
        items: [
          '<i class="fa-solid fa-tag"></i> Egyptians: <strong>30 EGP</strong>',
          '<i class="fa-solid fa-tag"></i> Foreigners: <strong>150 EGP</strong>',
          '<i class="fa-solid fa-graduation-cap"></i> Students: 50% discount',
          '<i class="fa-solid fa-child"></i> Under 6 years: Free',
          '<i class="fa-solid fa-circle-check"></i> <strong>Allowed:</strong> Photography, walking on designated paths, water & light snacks',
          '<i class="fa-solid fa-ban"></i> <strong>Prohibited:</strong> Touching fossils, leaving paths, drones, pets',
          '<i class="fa-solid fa-clock"></i> Opening Hours: 8 AM – 4 PM'
        ]
      }
    },
    'tab-rating': {
      ar: { title: '<i class="fa-solid fa-star"></i> قيّم وادي الحيتان' },
      en: { title: '<i class="fa-solid fa-star"></i> Rate Wadi El-Hitan' }
    }
  };

  window.changeLang = function (lang) {
    const t = translations[lang];
    if (!t) return;

    // nav
    for (let i = 1; i <= 8; i++) {
      const el = document.getElementById(`nav${i}`);
      if (el) el.textContent = t[`nav${i}`];
    }

    // hero
    document.querySelector('.place-title').textContent    = t.title;
    document.querySelector('.place-subtitle').textContent = t.subtitle;

    // tabs labels
    document.querySelector('#tab-time .tab-label').textContent     = t.bestTime;
    document.querySelector('#tab-distance .tab-label').textContent = t.distance;
    document.querySelector('#tab-entry .tab-label').textContent    = t.entry;
    document.querySelector('#tab-rating .tab-label').textContent   = t.rating;

    // about
    document.querySelector('.about-card .section-title').textContent = t.aboutTitle;
    document.querySelector('.about-card p').textContent              = t.aboutText;

    // gallery title
    const galleryTitle = document.getElementById('galleryTitle');
    if (galleryTitle) galleryTitle.textContent = t.galleryTitle;

    // rating
    document.getElementById('rating-msg').textContent = t.ratingMsgDefault;
    document.getElementById('submit-rating').textContent = t.submitBtn;
    const comment = document.getElementById('rating-comment');
    if (comment) { comment.placeholder = t.commentPlaceholder; comment.dir = lang === 'en' ? 'ltr' : 'rtl'; }

    // footer
    const footerEl = document.getElementById('footerText');
    if (footerEl) footerEl.textContent = t.footer;

    // book & map
    const el = (id) => document.getElementById(id);
    if (el('mapTitle'))       el('mapTitle').textContent       = t.mapTitle;
    if (el('mapOpenBtnText')) el('mapOpenBtnText').textContent = t.mapBtn;
    if (el('bookTitle'))      el('bookTitle').textContent      = t.bookTitle;
    if (el('bookSub'))        el('bookSub').textContent        = t.bookSub;
    if (el('bookBtnText'))    el('bookBtnText').textContent    = t.bookBtn;
    if (el('bookArrow'))      el('bookArrow').className        = t.bookArrow;

    document.querySelectorAll('#bookFeatures li span').forEach((span, i) => {
      if (t.bookFeatures[i]) span.textContent = t.bookFeatures[i];
    });

    // tabs content
    updateTabsContent(lang);

    // direction
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'en' ? 'ltr' : 'rtl';

    // reset slider
    current = 0;
    goTo(0);
  };

  function updateTabsContent(lang) {
    ['tab-time', 'tab-distance', 'tab-entry'].forEach(id => {
      const tab = document.getElementById(id);
      if (!tab) return;
      const data = tabsData[id][lang];
      tab.querySelector('.tab-popup h3').innerHTML = data.title;
      const ul = tab.querySelector('.tab-popup ul');
      if (ul) ul.innerHTML = data.items.map(item => `<li>${item}</li>`).join('');
    });
    const ratingTab = document.getElementById('tab-rating');
    if (ratingTab) ratingTab.querySelector('.tab-popup h3').innerHTML = tabsData['tab-rating'][lang].title;
  }

  /* ==============================
     2. السلايدر
     ============================== */
  const track         = document.getElementById('sliderTrack');
  const slides        = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn       = document.getElementById('prevBtn');
  const nextBtn       = document.getElementById('nextBtn');

  let current = 0;
  const total = slides.length;
  let autoPlay;

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { goTo(i); resetAutoPlay(); });
    dotsContainer.appendChild(dot);
  });

  function updateDots() {
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  }

  nextBtn.addEventListener('click', () => {
    document.documentElement.dir === 'rtl' ? goTo(current - 1) : goTo(current + 1);
    resetAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    document.documentElement.dir === 'rtl' ? goTo(current + 1) : goTo(current - 1);
    resetAutoPlay();
  });

  function startAutoPlay() {
    autoPlay = setInterval(() => {
      document.documentElement.dir === 'rtl' ? goTo(current - 1) : goTo(current + 1);
    }, 4000);
  }

  function resetAutoPlay() { clearInterval(autoPlay); startAutoPlay(); }

  startAutoPlay();
  track.addEventListener('mouseenter', () => clearInterval(autoPlay));
  track.addEventListener('mouseleave', startAutoPlay);

  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? goTo(current + 1) : goTo(current - 1); resetAutoPlay(); }
  });

  /* ==============================
     3. التبويبات والتقييم
     ============================== */
  const tabCards = document.querySelectorAll('.tab-card');
  tabCards.forEach(card => {
    card.addEventListener('click', e => {
      e.stopPropagation();
      const popup  = card.querySelector('.tab-popup');
      const isOpen = popup.classList.contains('open');
      document.querySelectorAll('.tab-popup').forEach(p => p.classList.remove('open'));
      tabCards.forEach(c => c.classList.remove('active'));
      if (!isOpen) { popup.classList.add('open'); card.classList.add('active'); }
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.tab-popup').forEach(p => p.classList.remove('open'));
    tabCards.forEach(c => c.classList.remove('active'));
  });

  document.querySelectorAll('.tab-popup').forEach(p => p.addEventListener('click', e => e.stopPropagation()));

  const stars     = document.querySelectorAll('.star');
  const ratingMsg = document.getElementById('rating-msg');
  const submitBtn = document.getElementById('submit-rating');

  const ratingLabels = {
    ar: ['', 'سيء', 'مقبول', 'جيد', 'جيد جداً', 'ممتاز'],
    en: ['', 'Bad', 'Fair', 'Good', 'Very Good', 'Excellent']
  };

  let selectedRating = 0;
  const getLang = () => document.documentElement.lang === 'en' ? 'en' : 'ar';

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const val = parseInt(star.dataset.val);
      highlightStars(val);
      ratingMsg.textContent = ratingLabels[getLang()][val];
    });
    star.addEventListener('mouseleave', () => {
      highlightStars(selectedRating);
      ratingMsg.textContent = selectedRating
        ? ratingLabels[getLang()][selectedRating]
        : translations[getLang()].ratingMsgDefault;
    });
    star.addEventListener('click', e => {
      e.stopPropagation();
      selectedRating = parseInt(star.dataset.val);
      highlightStars(selectedRating);
      ratingMsg.textContent = ratingLabels[getLang()][selectedRating];
      ratingMsg.style.color = '#1a7a5e';
    });
  });

  function highlightStars(count) {
    stars.forEach(s => s.classList.toggle('selected', parseInt(s.dataset.val) <= count));
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', e => {
      e.stopPropagation();
      if (!selectedRating) {
        ratingMsg.textContent = getLang() === 'en' ? 'Please select a rating first!' : 'يرجى اختيار تقييم أولاً!';
        ratingMsg.style.color = '#e74c3c';
        return;
      }
      ratingMsg.textContent = getLang() === 'en'
        ? `Thank you! Rating: ${ratingLabels['en'][selectedRating]}`
        : `شكراً! تم إرسال تقييمك (${ratingLabels['ar'][selectedRating]})`;
      ratingMsg.style.color = '#1a7a5e';
      document.getElementById('rating-comment').value = '';
      selectedRating = 0;
      highlightStars(0);
    });
  }

});








function toggleChat() {
  const box = document.getElementById('ai-chat-box');
  box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
}

function handleKey(e) {
  if (e.key === 'Enter') sendMessage();
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const text = input.value.trim();
  if (!text) return;

  messages.innerHTML += `<div class="msg-user">${text}</div>`;
  input.value = '';
  messages.scrollTop = messages.scrollHeight;

  messages.innerHTML += `<div class="msg-ai" id="loading">جاري التفكير...</div>`;

  try {
    const res = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });
    const data = await res.json();
    document.getElementById('loading').remove();
    messages.innerHTML += `<div class="msg-ai">${data.reply}</div>`;
  } catch (err) {
    document.getElementById('loading').innerText = 'حصل خطأ، حاولي تاني';
  }

  messages.scrollTop = messages.scrollHeight;
}