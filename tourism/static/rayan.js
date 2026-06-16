/* =========================================
   JS - وادي الريان | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
     1. الترجمة
     ============================== */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
      nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
      title: "وادي الريان",
      subtitle: "واحة الشلالات المتدفقة والبحيرات الصناعية",
      bestTime: "أفضل وقت", distance: "المسافة", entry: "الدخول", rating: "التقييم",
      aboutTitle: "عن المكان",
      aboutText: "محمية طبيعية خلابة تضم شلالات طبيعية نادرة تربط بين بحيرتين متفاوتتين في الارتفاع وسط الصحراء الغربية. يشتهر الوادي بمناظره الساحرة التي تجمع بين زرقة المياه وكثبان الرمال الذهبية، مما يجعله المقصد الأول لممارسة التزحلق على الرمال. يمكن للزوار الاستمتاع بركوب الفلوكة التقليدية أو التخييم تحت النجوم في بيئة هادئة بعيدة عن صخب المدن.",
      galleryTitle: "معرض الصور",
      ratingMsgDefault: "اختر عدد النجوم",
      submitBtn: "إرسال التقييم",
      commentPlaceholder: "شارك تجربتك مع الآخرين...",
      footer: "جميع الحقوق محفوظة - Fayoum Eco Tours © 2026",
      mapTitle: "موقعنا على الخريطة",
      mapBtn: "افتح في خرائط جوجل",
      bookTitle: "احجز زيارتك الآن",
      bookSub: "تجربة لا تُنسى بين الشلالات والرمال الذهبية",
      bookFeatures: ["جولة مع مرشد متخصص", "ركوب الفلوكة والتزحلق على الرمال", "تصوير في أجمل المواقع"],
      bookBtn: "احجز الآن",
      bookArrow: "fa-solid fa-arrow-left"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Attractions", nav4: "Hotels",
      nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
      title: "Wadi El Rayan",
      subtitle: "An oasis of flowing waterfalls & artificial lakes",
      bestTime: "Best Time", distance: "Distance", entry: "Entry", rating: "Rating",
      aboutTitle: "About the Place",
      aboutText: "A stunning natural reserve featuring rare natural waterfalls connecting two lakes at different elevations in the heart of the Western Desert. The valley is famous for its enchanting scenery combining turquoise waters with golden sand dunes, making it the top destination for sandboarding. Visitors can enjoy traditional felucca rides or camping under the stars in a peaceful environment away from city noise.",
      galleryTitle: "Photo Gallery",
      ratingMsgDefault: "Select stars count",
      submitBtn: "Submit Rating",
      commentPlaceholder: "Share your experience with others...",
      footer: "All Rights Reserved - Fayoum Eco Tours © 2026",
      mapTitle: "Find Us on the Map",
      mapBtn: "Open in Google Maps",
      bookTitle: "Book Your Visit Now",
      bookSub: "An unforgettable experience between waterfalls and golden sands",
      bookFeatures: ["Guided tour with a specialist", "Felucca rides & sandboarding", "Photography at the finest spots"],
      bookBtn: "Book Now",
      bookArrow: "fa-solid fa-arrow-right"
    }
  };

  const tabsData = {
    'tab-time': {
      ar: {
        title: '<i class="fa-solid fa-sun"></i> أفضل وقت للزيارة',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>أكتوبر – مارس:</strong> طقس مثالي لركوب الفلوكة والتزحلق على الرمال',
          '<i class="fa-solid fa-circle-check"></i> <strong>الصباح الباكر:</strong> هدوء تام وإضاءة ساحرة على البحيرتين',
          '<i class="fa-solid fa-circle-check"></i> <strong>الغروب:</strong> مشهد خيالي لانعكاس الألوان على المياه',
          '<i class="fa-solid fa-moon"></i> <strong>الليل (للتخييم):</strong> سماء صافية ونجوم بديعة بعيدًا عن الضوضاء',
          '<i class="fa-solid fa-triangle-exclamation"></i> تجنب يونيو – أغسطس بسبب الحرارة الشديدة'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-sun"></i> Best Time to Visit',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>October – March:</strong> Ideal weather for felucca rides & sandboarding',
          '<i class="fa-solid fa-circle-check"></i> <strong>Early Morning:</strong> Complete serenity & magical lighting on the lakes',
          '<i class="fa-solid fa-circle-check"></i> <strong>Sunset:</strong> Spectacular view of colors reflecting on water',
          '<i class="fa-solid fa-moon"></i> <strong>Night (for camping):</strong> Clear sky & beautiful stars away from noise',
          '<i class="fa-solid fa-triangle-exclamation"></i> Avoid June – August due to extreme heat'
        ]
      }
    },
    'tab-distance': {
      ar: {
        title: '<i class="fa-solid fa-route"></i> المسافة من مطار القاهرة',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> المطار ← وادي الريان: <strong>~150 كم</strong>',
          '<i class="fa-solid fa-car"></i> بالسيارة: ~<strong>2 ساعة</strong> عبر طريق الفيوم الصحراوي',
          '<i class="fa-solid fa-bus"></i> بالأتوبيس: ~<strong>2.5 ساعة</strong> من محطة الجيزة ثم سرفيس للمحمية',
          '<i class="fa-solid fa-location-dot"></i> الموقع: محمية وادي الريان، جنوب غرب الفيوم'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-route"></i> Distance from Cairo Airport',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> Airport → Wadi El Rayan: <strong>~150 km</strong>',
          '<i class="fa-solid fa-car"></i> By Car: ~<strong>2 hours</strong> via Fayoum Desert Road',
          '<i class="fa-solid fa-bus"></i> By Bus: ~<strong>2.5 hours</strong> from Giza Station then shuttle to reserve',
          '<i class="fa-solid fa-location-dot"></i> Location: Wadi El Rayan Reserve, Southwest Fayoum'
        ]
      }
    },
    'tab-entry': {
      ar: {
        title: '<i class="fa-solid fa-door-open"></i> تذاكر الدخول',
        items: [
          '<i class="fa-solid fa-tag"></i> دخول المحمية: <strong>5 جنيه</strong> للمصريين | <strong>25 جنيه</strong> للأجانب',
          '<i class="fa-solid fa-car"></i> رسوم السيارة: <strong>5 جنيه</strong> إضافية',
          '<i class="fa-solid fa-circle-check"></i> <strong>مسموح:</strong> ركوب الفلوكة، التزحلق على الرمال، التصوير، التخييم (بتصريح)، الوجبات',
          '<i class="fa-solid fa-ban"></i> <strong>ممنوع:</strong> الصيد بدون تصريح، إشعال النار العشوائي، رمي القمامة، الضوضاء الليلية',
          '<i class="fa-solid fa-clock"></i> مواعيد الفتح: من شروق الشمس حتى الغروب'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-door-open"></i> Entry Tickets',
        items: [
          '<i class="fa-solid fa-tag"></i> Reserve Entry: <strong>5 EGP</strong> Egyptians | <strong>25 EGP</strong> Foreigners',
          '<i class="fa-solid fa-car"></i> Car Fee: <strong>5 EGP</strong> additional',
          '<i class="fa-solid fa-circle-check"></i> <strong>Allowed:</strong> Felucca rides, sandboarding, photography, camping (permit required), meals',
          '<i class="fa-solid fa-ban"></i> <strong>Prohibited:</strong> Fishing without permit, random fires, littering, night noise',
          '<i class="fa-solid fa-clock"></i> Opening Hours: Sunrise to Sunset'
        ]
      }
    },
    'tab-rating': {
      ar: { title: '<i class="fa-solid fa-star"></i> قيّم وادي الريان' },
      en: { title: '<i class="fa-solid fa-star"></i> Rate Wadi El Rayan' }
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

  box.style.display =
    box.style.display === 'flex'
      ? 'none'
      : 'flex';
}


function handleKey(e) {

  if (e.key === 'Enter') {

    sendMessage();

  }
}


async function sendMessage() {

  const input = document.getElementById('chat-input');

  const messages = document.getElementById('chat-messages');

  const text = input.value.trim();

  if (!text) return;


  // رسالة المستخدم
  messages.innerHTML += `
    <div class="msg-user">
      ${text}
    </div>
  `;

  input.value = '';

  messages.scrollTop = messages.scrollHeight;


  // رسالة التحميل
  const loadingId = 'loading-' + Date.now();

  messages.innerHTML += `
    <div class="msg-ai" id="${loadingId}">
      جاري التفكير...
    </div>
  `;

  try {

    const res = await fetch('/chat/', {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        message: text
      })

    });


    const data = await res.json();


    // حذف loading
    document.getElementById(loadingId).remove();


    // إظهار الرد
    messages.innerHTML += `
      <div class="msg-ai">
        ${data.reply}
      </div>
    `;

  } catch (err) {

    console.log(err);

    document.getElementById(loadingId).innerText =
      'حصل خطأ، حاولي تاني';

  }

  messages.scrollTop = messages.scrollHeight;
}