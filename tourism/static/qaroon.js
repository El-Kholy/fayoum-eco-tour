/* =========================================
   JS - بحيرة قارون | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
     1. الترجمة
     ============================== */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
      nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
      title: "بحيرة قارون",
      subtitle: "لوحة زرقاء خالدة في قلب الصحراء",
      bestTime: "أفضل وقت", distance: "المسافة", entry: "الدخول", rating: "التقييم",
      aboutTitle: "عن المكان",
      aboutText: 'تعد بحيرة قارون واحدة من أقدم البحيرات الطبيعية في العالم وبقايا بحيرة "موريس" القديمة التي كانت تغطي المنخفض قديماً. تتميز بتنوع بيئي فريد وتعتبر ملاذاً للطيور المهاجرة في فصل الشتاء، مما يجعلها وجهة مثالية لمحبي الطبيعة والهدوء. توفر البحيرة تجربة إستجمام رائعة مع الاستمتاع بوجبات السمك الطازجة على ضفافها العريقة التي شهدت حضارات متعاقبة.',
      galleryTitle: "معرض الصور",
      ratingMsgDefault: "اختر عدد النجوم",
      submitBtn: "إرسال التقييم",
      commentPlaceholder: "شارك تجربتك مع الآخرين...",
      footer: "جميع الحقوق محفوظة - Fayoum Eco Tours © 2026",
      mapTitle: "موقعنا على الخريطة",
      mapBtn: "افتح في خرائط جوجل",
      bookTitle: "احجز زيارتك الآن",
      bookSub: "تجربة طبيعية لا تُنسى على شواطئ بحيرة قارون",
      bookFeatures: ["جولة مع مرشد متخصص", "مشاهدة الطيور المهاجرة", "تصوير في أجمل المواقع"],
      bookBtn: "احجز الآن",
      bookArrow: "fa-solid fa-arrow-left"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Attractions", nav4: "Hotels",
      nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
      title: "Lake Qarun",
      subtitle: "An eternal blue canvas in the heart of the desert",
      bestTime: "Best Time", distance: "Distance", entry: "Entry", rating: "Rating",
      aboutTitle: "About the Place",
      aboutText: 'Lake Qarun is one of the oldest natural lakes in the world, a remnant of the ancient Lake Moeris that once covered the depression. It features a unique ecosystem and serves as a refuge for migratory birds in winter, making it an ideal destination for nature lovers. The lake offers a wonderful retreat with the chance to enjoy fresh fish meals on its historic shores that witnessed successive civilizations.',
      galleryTitle: "Gallery",
      ratingMsgDefault: "Select stars count",
      submitBtn: "Submit Rating",
      commentPlaceholder: "Share your experience with others...",
      footer: "All Rights Reserved - Fayoum Eco Tours © 2026",
      mapTitle: "Find Us on the Map",
      mapBtn: "Open in Google Maps",
      bookTitle: "Book Your Visit Now",
      bookSub: "An unforgettable natural experience on the shores of Lake Qarun",
      bookFeatures: ["Guided tour with a specialist", "Watch migratory birds", "Photography at the finest spots"],
      bookBtn: "Book Now",
      bookArrow: "fa-solid fa-arrow-right"
    }
  };

  const tabsData = {
    'tab-time': {
      ar: {
        title: '<i class="fa-solid fa-sun"></i> أفضل وقت للزيارة',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>أكتوبر – مارس:</strong> طقس معتدل مثالي للتجوال على الشاطئ ومشاهدة الطيور المهاجرة',
          '<i class="fa-solid fa-circle-check"></i> <strong>الصباح الباكر (7 – 10 ص):</strong> هدوء البحيرة وانعكاس الضوء الذهبي على المياه',
          '<i class="fa-solid fa-circle-check"></i> <strong>وقت الغروب:</strong> مشهد خلاب وألوان برتقالية تنعكس على سطح البحيرة',
          '<i class="fa-solid fa-circle-check"></i> <strong>نوفمبر – فبراير:</strong> أفضل موسم لمشاهدة الطيور المهاجرة النادرة',
          '<i class="fa-solid fa-triangle-exclamation"></i> تجنّب يونيو – أغسطس بسبب الحرارة الشديدة وشُح الظل'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-sun"></i> Best Time to Visit',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>October – March:</strong> Mild weather, ideal for strolling by the shore and birdwatching',
          '<i class="fa-solid fa-circle-check"></i> <strong>Early morning (7–10 AM):</strong> Calm lake surface with golden light reflections on the water',
          '<i class="fa-solid fa-circle-check"></i> <strong>Sunset time:</strong> Spectacular view with orange hues reflecting on the lake surface',
          '<i class="fa-solid fa-circle-check"></i> <strong>November – February:</strong> Best season for spotting rare migratory birds',
          '<i class="fa-solid fa-triangle-exclamation"></i> Avoid June – August due to intense heat and lack of shade'
        ]
      }
    },
    'tab-distance': {
      ar: {
        title: '<i class="fa-solid fa-route"></i> المسافة من مطار القاهرة',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> المطار ← بحيرة قارون: <strong>~110 كم</strong>',
          '<i class="fa-solid fa-car"></i> بالسيارة: ~<strong>1.5 ساعة</strong> عبر طريق الفيوم الصحراوي',
          '<i class="fa-solid fa-bus"></i> بالأتوبيس: ~<strong>2 ساعة</strong> من محطة الجيزة ثم سرفيس',
          '<i class="fa-solid fa-location-dot"></i> الموقع: شمال غرب محافظة الفيوم، جنوب شرق الصحراء الغربية'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-route"></i> Distance from Cairo Airport',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> Airport → Lake Qarun: <strong>~110 km</strong>',
          '<i class="fa-solid fa-car"></i> By car: ~<strong>1.5 hours</strong> via the Fayoum desert road',
          '<i class="fa-solid fa-bus"></i> By bus: ~<strong>2 hours</strong> from Giza station then minibus',
          '<i class="fa-solid fa-location-dot"></i> Location: Northwest of Fayoum Governorate, southeast of the Western Desert'
        ]
      }
    },
    'tab-entry': {
      ar: {
        title: '<i class="fa-solid fa-door-open"></i> تذاكر الدخول',
        items: [
          '<i class="fa-solid fa-tag"></i> الدخول للشاطئ العام: <strong>مجاني</strong>',
          '<i class="fa-solid fa-tag"></i> المناطق السياحية والمنتجعات: <strong>تتفاوت حسب المكان</strong>',
          '<i class="fa-solid fa-fish"></i> رسوم الصيد: <strong>تُحدد موسمياً</strong>',
          '<i class="fa-solid fa-circle-check"></i> <strong>مسموح:</strong> التصوير، التخييم، ركوب القوارب، الصيد بتصريح',
          '<i class="fa-solid fa-ban"></i> <strong>ممنوع:</strong> الصيد بدون تصريح، رمي القمامة، الصيد الجائر',
          '<i class="fa-solid fa-clock"></i> مفتوح على مدار الساعة (24/7)'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-door-open"></i> Entry Tickets',
        items: [
          '<i class="fa-solid fa-tag"></i> Public beach entry: <strong>Free</strong>',
          '<i class="fa-solid fa-tag"></i> Tourist areas & resorts: <strong>Varies by location</strong>',
          '<i class="fa-solid fa-fish"></i> Fishing fees: <strong>Determined seasonally</strong>',
          '<i class="fa-solid fa-circle-check"></i> <strong>Allowed:</strong> Photography, camping, boat rides, fishing with permit',
          '<i class="fa-solid fa-ban"></i> <strong>Prohibited:</strong> Fishing without permit, littering, overfishing',
          '<i class="fa-solid fa-clock"></i> Open around the clock (24/7)'
        ]
      }
    },
    'tab-rating': {
      ar: { title: '<i class="fa-solid fa-star"></i> قيّم بحيرة قارون' },
      en: { title: '<i class="fa-solid fa-star"></i> Rate Lake Qarun' }
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
    document.querySelector('.place-title').textContent   = t.title;
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