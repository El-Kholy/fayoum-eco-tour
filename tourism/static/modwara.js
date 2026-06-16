/* =========================================
   JS - جبل المدورة | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
     1. الترجمة
     ============================== */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
      nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
      title: "جبل المدورة", subtitle: "صخرة دائرية منحوتة بفعل الزمن",
      bestTime: "أفضل وقت", distance: "المسافة", entry: "الدخول", rating: "التقييم",
      aboutTitle: "عن المكان",
      aboutText: "هضبة عالية ذات تكوين جيولوجي فريد على شكل دائرة، تقع بالقرب من البحيرة السحرية في محمية وادي الريان. يتميز الجبل بسهولة تسلقه، حيث يوفر من قمته إطلالة بانورامية لا تُنسى تجمع بين الصحراء والمياه في مشهد سينمائي يُعد المفضل لهواة التصوير الفوتوغرافي، خاصة في وقت الغروب حيث تتلون الصخور والرمال بألوان دافئة مذهلة.",
      galleryTitle: "معرض الصور",
      ratingMsgDefault: "اختر عدد النجوم",
      submitBtn: "إرسال التقييم",
      commentPlaceholder: "شارك تجربتك مع الآخرين...",
      footer: "جميع الحقوق محفوظة - Fayoum Eco Tours © 2026",
      mapTitle: "موقعنا على الخريطة",
      mapBtn: "افتح في خرائط جوجل",
      bookTitle: "احجز زيارتك الآن",
      bookSub: "تجربة لا تُنسى فوق قمة جبل المدورة",
      bookFeatures: ["جولة مع مرشد متخصص", "تسلق مع إطلالة بانورامية", "مشهد غروب لا يُنسى"],
      bookBtn: "احجز الآن",
      bookArrow: "fa-solid fa-arrow-left"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Attractions", nav4: "Hotels",
      nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
      title: "Gebel El Medawara", subtitle: "A circular rock sculpted by time",
      bestTime: "Best Time", distance: "Distance", entry: "Entry", rating: "Rating",
      aboutTitle: "About the Place",
      aboutText: "A high plateau with a unique circular geological formation, located near the magical lake in Wadi El Rayan Nature Reserve. The mountain is easy to climb and offers an unforgettable panoramic view combining desert and water in a cinematic scene — a favorite for photographers, especially at sunset when the rocks and sand are bathed in stunning warm colors.",
      galleryTitle: "Gallery",
      ratingMsgDefault: "Select stars count",
      submitBtn: "Submit Rating",
      commentPlaceholder: "Share your experience with others...",
      footer: "All Rights Reserved - Fayoum Eco Tours © 2026",
      mapTitle: "Find Us on the Map",
      mapBtn: "Open in Google Maps",
      bookTitle: "Book Your Visit Now",
      bookSub: "An unforgettable experience atop Gebel El Medawara",
      bookFeatures: ["Guided tour with a specialist", "Climb with panoramic view", "Unforgettable sunset scene"],
      bookBtn: "Book Now",
      bookArrow: "fa-solid fa-arrow-right"
    }
  };

  const tabsData = {
    'tab-time': {
      ar: {
        title: '<i class="fa-solid fa-sun"></i> أفضل وقت للزيارة',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>أكتوبر – مارس:</strong> طقس معتدل ومثالي للتسلق',
          '<i class="fa-solid fa-circle-check"></i> <strong>قبيل الغروب (3 – 6 م):</strong> أجمل إضاءة وألوان للتصوير',
          '<i class="fa-solid fa-circle-check"></i> <strong>الصباح الباكر:</strong> هواء نقي وهدوء تام',
          '<i class="fa-solid fa-triangle-exclamation"></i> تجنب يونيو – أغسطس بسبب الحرارة الشديدة'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-sun"></i> Best Time to Visit',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>October – March:</strong> Mild weather, ideal for climbing',
          '<i class="fa-solid fa-circle-check"></i> <strong>Before sunset (3 – 6 PM):</strong> Best lighting and colors for photography',
          '<i class="fa-solid fa-circle-check"></i> <strong>Early morning:</strong> Fresh air and complete tranquility',
          '<i class="fa-solid fa-triangle-exclamation"></i> Avoid June – August due to extreme heat'
        ]
      }
    },
    'tab-distance': {
      ar: {
        title: '<i class="fa-solid fa-route"></i> المسافة من مطار القاهرة',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> المطار ← جبل المدورة: <strong>~120 كم</strong>',
          '<i class="fa-solid fa-car"></i> بالسيارة: ~<strong>1.5 – 2 ساعة</strong> عبر طريق الفيوم الصحراوي',
          '<i class="fa-solid fa-bus"></i> بالأتوبيس: ~<strong>2.5 ساعة</strong> من محطة الجيزة ثم سرفيس',
          '<i class="fa-solid fa-location-dot"></i> الموقع: محمية وادي الريان، الفيوم'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-route"></i> Distance from Cairo Airport',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> Airport → Gebel El Medawara: <strong>~120 km</strong>',
          '<i class="fa-solid fa-car"></i> By car: ~<strong>1.5 – 2 hours</strong> via the Fayoum desert road',
          '<i class="fa-solid fa-bus"></i> By bus: ~<strong>2.5 hours</strong> from Giza station then minibus',
          '<i class="fa-solid fa-location-dot"></i> Location: Wadi El Rayan Nature Reserve, Fayoum'
        ]
      }
    },
    'tab-entry': {
      ar: {
        title: '<i class="fa-solid fa-door-open"></i> تذاكر الدخول',
        items: [
          '<i class="fa-solid fa-tag"></i> دخول المحمية: <strong>5 جنيه</strong> للمصريين | <strong>25 جنيه</strong> للأجانب',
          '<i class="fa-solid fa-car"></i> رسوم السيارة: <strong>5 جنيه</strong> إضافية',
          '<i class="fa-solid fa-circle-check"></i> <strong>مسموح:</strong> الكاميرات، التصوير، المياه والوجبات الخفيفة',
          '<i class="fa-solid fa-ban"></i> <strong>ممنوع:</strong> إشعال النار، التخييم بدون تصريح، رمي القمامة',
          '<i class="fa-solid fa-clock"></i> مواعيد الفتح: من شروق الشمس حتى الغروب'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-door-open"></i> Entry Tickets',
        items: [
          '<i class="fa-solid fa-tag"></i> Reserve entry: <strong>EGP 5</strong> Egyptians | <strong>EGP 25</strong> Foreigners',
          '<i class="fa-solid fa-car"></i> Car fee: <strong>EGP 5</strong> additional',
          '<i class="fa-solid fa-circle-check"></i> <strong>Allowed:</strong> Cameras, photography, water and light snacks',
          '<i class="fa-solid fa-ban"></i> <strong>Prohibited:</strong> Lighting fires, camping without permit, littering',
          '<i class="fa-solid fa-clock"></i> Opening hours: Sunrise to sunset'
        ]
      }
    },
    'tab-rating': {
      ar: { title: '<i class="fa-solid fa-star"></i> قيّم جبل المدورة' },
      en: { title: '<i class="fa-solid fa-star"></i> Rate Gebel El Medawara' }
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
    const placeTitle = document.querySelector('.place-title');
    const placeSub   = document.querySelector('.place-subtitle');
    if (placeTitle) placeTitle.textContent = t.title;
    if (placeSub)   placeSub.textContent   = t.subtitle;

    // tabs labels
    document.querySelector('#tab-time .tab-label').textContent     = t.bestTime;
    document.querySelector('#tab-distance .tab-label').textContent = t.distance;
    document.querySelector('#tab-entry .tab-label').textContent    = t.entry;
    document.querySelector('#tab-rating .tab-label').textContent   = t.rating;

    // about
    const aboutTitleEl = document.querySelector('.about-card .section-title');
    const aboutText    = document.querySelector('.about-card p');
    if (aboutTitleEl) aboutTitleEl.textContent = t.aboutTitle;
    if (aboutText)    aboutText.textContent    = t.aboutText;

    // gallery title
    const galleryTitle = document.getElementById('galleryTitle');
    if (galleryTitle) galleryTitle.textContent = t.galleryTitle;

    // rating
    const ratingMsg = document.getElementById('rating-msg');
    if (ratingMsg) ratingMsg.textContent = t.ratingMsgDefault;
    const submitBtn = document.getElementById('submit-rating');
    if (submitBtn) submitBtn.textContent = t.submitBtn;
    const comment = document.getElementById('rating-comment');
    if (comment) {
      comment.placeholder = t.commentPlaceholder;
      comment.dir = lang === 'en' ? 'ltr' : 'rtl';
    }

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

    const featureSpans = document.querySelectorAll('#bookFeatures li span');
    featureSpans.forEach((span, i) => {
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
    if (ratingTab) {
      ratingTab.querySelector('.tab-popup h3').innerHTML = tabsData['tab-rating'][lang].title;
    }
  }

  /* ==============================
     2. السلايدر
     ============================== */
  const track   = document.getElementById('sliderTrack');
  const slides  = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

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

  // swipe
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

  // النجوم
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
      ratingMsg.textContent  = ratingLabels[getLang()][selectedRating];
      ratingMsg.style.color  = '#1a7a5e';
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