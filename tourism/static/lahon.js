/* =========================================
   JS - هرم اللاهون | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
     1. الترجمة
     ============================== */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
      nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
      title: "هرم اللاهون", subtitle: "تحفة الملك سنوسرت الثاني",
      bestTime: "أفضل وقت", distance: "المسافة", entry: "الدخول", rating: "التقييم",
      aboutTitle: "عن المكان",
      aboutText: "بناه الملك سنوسرت الثاني من الطوب اللبن فوق ربوة صخرية طبيعية بارتفاع 12 متراً، مما منحه تصميماً فريداً ومختلفاً. يتميز الهرم بمدخله السري الذي يقع في الجهة الجنوبية بعكس المعتاد، وذلك لتضليل اللصوص وحماية المقبرة الملكية. يمكن للزوار اليوم استكشاف الممرات الداخلية والوصول إلى حجرة الدفن المبطنة بالجرانيت الوردي ببراعة هندسية مدهشة.",
      galleryTitle: "معرض الصور",
      ratingMsgDefault: "اختر عدد النجوم",
      submitBtn: "إرسال التقييم",
      commentPlaceholder: "اكتب تعليقك هنا...",
      footer: "جميع الحقوق محفوظة - Fayoum Eco Tours © 2026",
      mapTitle: "موقعنا على الخريطة",
      mapBtn: "افتح في خرائط جوجل",
      bookTitle: "احجز زيارتك الآن",
      bookSub: "استكشف أسرار هرم سنوسرت الثاني الفريد",
      bookFeatures: ["جولة مع مرشد متخصص", "استكشاف الممرات الداخلية", "زيارة حجرة الدفن الملكية"],
      bookBtn: "احجز الآن",
      bookArrow: "fa-solid fa-arrow-left"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Attractions", nav4: "Hotels",
      nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
      title: "Lahun Pyramid", subtitle: "Masterpiece of King Senusret II",
      bestTime: "Best Time", distance: "Distance", entry: "Entry", rating: "Rating",
      aboutTitle: "About the Place",
      aboutText: "Built by King Senusret II from mud bricks on a natural rocky elevation 12 meters high, giving it a unique and distinctive design. The pyramid features a secret entrance on the south side contrary to the norm, to mislead thieves and protect the royal tomb. Visitors today can explore the internal passages and reach the burial chamber lined with pink granite with amazing engineering skill.",
      galleryTitle: "Photo Gallery",
      ratingMsgDefault: "Select stars count",
      submitBtn: "Submit Rating",
      commentPlaceholder: "Write your comment here...",
      footer: "All Rights Reserved - Fayoum Eco Tours © 2026",
      mapTitle: "Find Us on the Map",
      mapBtn: "Open in Google Maps",
      bookTitle: "Book Your Visit Now",
      bookSub: "Explore the secrets of King Senusret II's unique pyramid",
      bookFeatures: ["Guided tour with a specialist", "Explore internal passages", "Visit the royal burial chamber"],
      bookBtn: "Book Now",
      bookArrow: "fa-solid fa-arrow-right"
    }
  };

  const tabsData = {
    'tab-time': {
      ar: {
        title: '<i class="fa-solid fa-sun"></i> أفضل وقت للزيارة',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>أكتوبر – مارس:</strong> الطقس معتدل ومثالي للزيارة',
          '<i class="fa-solid fa-circle-check"></i> <strong>الصباح الباكر (8 – 11 ص):</strong> أقل ازدحامًا وأجمل إضاءة',
          '<i class="fa-solid fa-triangle-exclamation"></i> تجنب أشهر يونيو – أغسطس بسبب الحرارة الشديدة'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-sun"></i> Best Time to Visit',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>October – March:</strong> Moderate weather ideal for visiting',
          '<i class="fa-solid fa-circle-check"></i> <strong>Early Morning (8 – 11 AM):</strong> Less crowded and best lighting',
          '<i class="fa-solid fa-triangle-exclamation"></i> Avoid June – August due to extreme heat'
        ]
      }
    },
    'tab-distance': {
      ar: {
        title: '<i class="fa-solid fa-route"></i> المسافة من مطار القاهرة',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> المطار → هرم اللاهون: <strong>~100 كم</strong>',
          '<i class="fa-solid fa-car"></i> بالسيارة: ~<strong>1.5 ساعة</strong> عبر طريق الفيوم الصحراوي',
          '<i class="fa-solid fa-bus"></i> بالأتوبيس: ~<strong>2 ساعة</strong> من محطة الجيزة'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-route"></i> Distance from Cairo Airport',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> Airport → Lahun Pyramid: <strong>~100 km</strong>',
          '<i class="fa-solid fa-car"></i> By Car: ~<strong>1.5 hours</strong> via Fayoum Desert Road',
          '<i class="fa-solid fa-bus"></i> By Bus: ~<strong>2 hours</strong> from Giza Station'
        ]
      }
    },
    'tab-entry': {
      ar: {
        title: '<i class="fa-solid fa-door-open"></i> تذاكر الدخول',
        items: [
          '<i class="fa-solid fa-tag"></i> المصريون: <strong>30 جنيه</strong> | الأجانب: <strong>150 جنيه</strong>',
          '<i class="fa-solid fa-circle-check"></i> مسموح: الكاميرات، الأطفال، المياه',
          '<i class="fa-solid fa-ban"></i> ممنوع: التصوير بفلاش داخل الممرات، التدخين، الأكل',
          '<i class="fa-solid fa-clock"></i> مواعيد الفتح: 8 ص – 4 م يوميًا'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-door-open"></i> Entry Tickets',
        items: [
          '<i class="fa-solid fa-tag"></i> Egyptians: <strong>30 EGP</strong> | Foreigners: <strong>150 EGP</strong>',
          '<i class="fa-solid fa-circle-check"></i> Allowed: Cameras, children, water',
          '<i class="fa-solid fa-ban"></i> Prohibited: Flash photography inside passages, smoking, food',
          '<i class="fa-solid fa-clock"></i> Opening Hours: 8 AM – 4 PM daily'
        ]
      }
    },
    'tab-rating': {
      ar: { title: '<i class="fa-solid fa-star"></i> قيّم هرم اللاهون' },
      en: { title: '<i class="fa-solid fa-star"></i> Rate Lahun Pyramid' }
    }
  };

  window.changeLang = function (lang) {
    const t = translations[lang];
    if (!t) return;

    for (let i = 1; i <= 8; i++) {
      const el = document.getElementById(`nav${i}`);
      if (el) el.textContent = t[`nav${i}`];
    }

    document.querySelector('.place-title').textContent   = t.title;
    document.querySelector('.place-subtitle').textContent = t.subtitle;

    document.querySelector('#tab-time .tab-label').textContent     = t.bestTime;
    document.querySelector('#tab-distance .tab-label').textContent = t.distance;
    document.querySelector('#tab-entry .tab-label').textContent    = t.entry;
    document.querySelector('#tab-rating .tab-label').textContent   = t.rating;

    document.getElementById('aboutTitle').textContent = t.aboutTitle;
    document.getElementById('aboutText').textContent  = t.aboutText;

    const galleryTitle = document.getElementById('galleryTitle');
    if (galleryTitle) galleryTitle.textContent = t.galleryTitle;

    document.getElementById('rating-msg').textContent    = t.ratingMsgDefault;
    document.getElementById('submit-rating').textContent = t.submitBtn;
    const comment = document.getElementById('rating-comment');
    if (comment) { comment.placeholder = t.commentPlaceholder; comment.dir = lang === 'en' ? 'ltr' : 'rtl'; }

    const footerEl = document.getElementById('footerText');
    if (footerEl) footerEl.textContent = t.footer;

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

    updateTabsContent(lang);

    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'en' ? 'ltr' : 'rtl';

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
    en: ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent']
  };

  let selectedRating = 0;
  const getLang = () => document.documentElement.lang === 'en' ? 'en' : 'ar';

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      highlightStars(parseInt(star.dataset.val));
      ratingMsg.textContent = ratingLabels[getLang()][parseInt(star.dataset.val)];
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