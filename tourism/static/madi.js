/* =========================================
   JS - مدينة ماضي | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
     1. الترجمة
     ============================== */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم",
      nav4: "الفنادق", nav5: "الحجوزات", nav6: "الإرشادات",
      nav7: "من نحن", nav8: "تواصل معنا",
      title: "مدينة ماضي",
      subtitle: "تضم المعبد الوحيد المتبقي من الدولة الوسطى",
      bestTime: "أفضل وقت", distance: "المسافة", entry: "الدخول", rating: "التقييم",
      aboutTitle: "عن المكان", galleryTitle: "معرض الصور",
      aboutText: "موقع أثري يجمع بين عراقة الدولة الوسطى واللمسات اليونانية الرومانية، حيث تضم المعبد الوحيد المتبقي من عصر الأسرة الـ12. تتميز المدينة بطريق الكباش الفريد الذي يربط بين معابدها.",
      ratingMsgDefault: "اختر عدد النجوم",
      ratingSuccess: "شكراً! تم إرسال تقييمك",
      ratingError: "يرجى اختيار تقييم أولاً!",
      mapTitle: "موقع مدينة ماضي على الخريطة",
      mapBtn: "افتح في خرائط جوجل",
      bookTitle: "احجز زيارتك لمدينة ماضي",
      bookSub: "اكتشف تاريخ الدولة الوسطى وأحد أقدم المعابد الأثرية في الفيوم",
      bookFeatures: ["جولة داخل الموقع الأثري", "شرح تاريخي للمعابد", "تصوير في أجواء أثرية هادئة"],
      bookBtn: "احجز الآن",
      bookArrow: "fa-solid fa-arrow-left",
      submitBtn: "إرسال التقييم",
      commentPlaceholder: "شارك تجربتك مع الآخرين...",
      footer: "جميع الحقوق محفوظة - Fayoum Eco Tours © 2026"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Attractions",
      nav4: "Hotels", nav5: "Bookings", nav6: "Guides",
      nav7: "About Us", nav8: "Contact Us",
      title: "Madinat Madi",
      subtitle: "The only surviving temple from the Middle Kingdom",
      bestTime: "Best Time", distance: "Distance", entry: "Entry", rating: "Rating",
      aboutTitle: "About the Place", galleryTitle: "Gallery",
      aboutText: "An archaeological site combining Middle Kingdom heritage with Greco-Roman influences. It contains the only remaining temple from the 12th Dynasty. The city features a unique ceremonial road connecting its temples.",
      ratingMsgDefault: "Select stars count",
      ratingSuccess: "Thank you! Your rating has been sent",
      ratingError: "Please select a rating first!",
      mapTitle: "Madinat Madi on the Map",
      mapBtn: "Open in Google Maps",
      bookTitle: "Book Your Visit to Madinat Madi",
      bookSub: "Discover the history of the Middle Kingdom and one of Fayoum's oldest temples",
      bookFeatures: ["Guided tour inside the site", "Historical explanation of the temples", "Photography in peaceful ancient surroundings"],
      bookBtn: "Book Now",
      bookArrow: "fa-solid fa-arrow-right",
      submitBtn: "Submit Rating",
      commentPlaceholder: "Share your experience with others...",
      footer: "All Rights Reserved - Fayoum Eco Tours © 2026"
    }
  };

  const tabsData = {
    'tab-time': {
      ar: {
        title: '<i class="fa-solid fa-sun"></i> أفضل وقت للزيارة',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>8 صباحاً – 11 صباحاً:</strong> هدوء تام وإضاءة ذهبية على الأطلال',
          '<i class="fa-solid fa-circle-check"></i> <strong>نوفمبر – مارس:</strong> طقس بارد ومعتدل مثالي للتجوال في الموقع المفتوح',
          '<i class="fa-solid fa-circle-check"></i> <strong>أيام الأسبوع:</strong> أقل ازدحاماً من عطلات نهاية الأسبوع',
          '<i class="fa-solid fa-triangle-exclamation"></i> تجنّب فصل الصيف بسبب الحرارة الشديدة في الموقع المكشوف'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-sun"></i> Best Time to Visit',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>8 AM – 11 AM:</strong> Complete calm and golden lighting on the ruins',
          '<i class="fa-solid fa-circle-check"></i> <strong>November – March:</strong> Cool and mild weather ideal for exploring the open site',
          '<i class="fa-solid fa-circle-check"></i> <strong>Weekdays:</strong> Less crowded than weekends',
          '<i class="fa-solid fa-triangle-exclamation"></i> Avoid summer due to extreme heat at the open site'
        ]
      }
    },
    'tab-distance': {
      ar: {
        title: '<i class="fa-solid fa-route"></i> المسافة من مطار القاهرة',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> المطار ← مدينة ماضي: <strong>~130 كم</strong>',
          '<i class="fa-solid fa-car"></i> بالسيارة: ~<strong>1.5 ساعة</strong> عبر طريق الفيوم الصحراوي',
          '<i class="fa-solid fa-bus"></i> بالأتوبيس: ~<strong>2.5 ساعة</strong> من محطة الجيزة ثم سرفيس',
          '<i class="fa-solid fa-location-dot"></i> الموقع: جنوب شرق الفيوم، بالقرب من قرية ماضي'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-route"></i> Distance from Cairo Airport',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> Airport → Madinat Madi: <strong>~130 km</strong>',
          '<i class="fa-solid fa-car"></i> By Car: ~<strong>1.5 hours</strong> via Fayoum Desert Road',
          '<i class="fa-solid fa-bus"></i> By Bus: ~<strong>2.5 hours</strong> from Giza Station then shuttle',
          '<i class="fa-solid fa-location-dot"></i> Location: Southeast Fayoum, near Madi Village'
        ]
      }
    },
    'tab-entry': {
      ar: {
        title: '<i class="fa-solid fa-door-open"></i> تذاكر الدخول',
        items: [
          '<i class="fa-solid fa-tag"></i> المصريون: <strong>20 جنيه</strong>',
          '<i class="fa-solid fa-tag"></i> الأجانب: <strong>100 جنيه</strong>',
          '<i class="fa-solid fa-graduation-cap"></i> الطلاب: خصم 50%',
          '<i class="fa-solid fa-child"></i> أقل من 6 سنوات: مجاناً',
          '<i class="fa-solid fa-circle-check"></i> <strong>مسموح:</strong> التصوير الشخصي، زجاجة ماء، قبعة وواقي شمس',
          '<i class="fa-solid fa-ban"></i> <strong>ممنوع:</strong> لمس الحجارة الأثرية، الطائرات المسيّرة، الحيوانات الأليفة',
          '<i class="fa-solid fa-clock"></i> مواعيد الفتح: من شروق الشمس حتى الغروب'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-door-open"></i> Entry Tickets',
        items: [
          '<i class="fa-solid fa-tag"></i> Egyptians: <strong>20 EGP</strong>',
          '<i class="fa-solid fa-tag"></i> Foreigners: <strong>100 EGP</strong>',
          '<i class="fa-solid fa-graduation-cap"></i> Students: 50% discount',
          '<i class="fa-solid fa-child"></i> Under 6 years: Free',
          '<i class="fa-solid fa-circle-check"></i> <strong>Allowed:</strong> Personal photography, water bottle, hat & sunscreen',
          '<i class="fa-solid fa-ban"></i> <strong>Prohibited:</strong> Touching artifacts, drones, pets',
          '<i class="fa-solid fa-clock"></i> Opening Hours: Sunrise to Sunset'
        ]
      }
    },
    'tab-rating': {
      ar: { title: '<i class="fa-solid fa-star"></i> قيّم مدينة ماضي' },
      en: { title: '<i class="fa-solid fa-star"></i> Rate Madinat Madi' }
    }
  };

  const ratingLabels = {
    ar: ['', 'سيء', 'مقبول', 'جيد', 'جيد جداً', 'ممتاز'],
    en: ['', 'Bad', 'Fair', 'Good', 'Very Good', 'Excellent']
  };

  const getLang = () => document.documentElement.lang === 'en' ? 'en' : 'ar';

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

  window.changeLang = function (lang) {
    const t = translations[lang];
    if (!t) return;

    // navbar
    for (let i = 1; i <= 8; i++) {
      const el = document.getElementById(`nav${i}`);
      if (el) el.textContent = t[`nav${i}`];
    }

    // hero
    document.querySelector('.place-title').textContent    = t.title;
    document.querySelector('.place-subtitle').textContent = t.subtitle;

    // about & gallery titles
    document.querySelectorAll('.section-title')[0].textContent = t.aboutTitle;
    document.querySelectorAll('.section-title')[1].textContent = t.galleryTitle;
    document.querySelector('.about-card p').textContent        = t.aboutText;

    // tabs labels
    document.querySelector('#tab-time .tab-label').textContent     = t.bestTime;
    document.querySelector('#tab-distance .tab-label').textContent = t.distance;
    document.querySelector('#tab-entry .tab-label').textContent    = t.entry;
    document.querySelector('#tab-rating .tab-label').textContent   = t.rating;

    // rating
    document.getElementById('rating-msg').textContent = t.ratingMsgDefault;
    const submitBtn = document.getElementById('submit-rating');
    if (submitBtn) submitBtn.textContent = t.submitBtn;
    const comment = document.getElementById('rating-comment');
    if (comment) { comment.placeholder = t.commentPlaceholder; comment.dir = lang === 'en' ? 'ltr' : 'rtl'; }

    // footer
    const footerEl = document.getElementById('footerText');
    if (footerEl) footerEl.textContent = t.footer;

    // ✅ الخريطة والحجز
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

  if (dotsContainer && dotsContainer.innerHTML === '') {
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => { goTo(i); resetAutoPlay(); });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => {
    document.documentElement.dir === 'rtl' ? goTo(current - 1) : goTo(current + 1);
    resetAutoPlay();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    document.documentElement.dir === 'rtl' ? goTo(current + 1) : goTo(current - 1);
    resetAutoPlay();
  });

  function startAutoPlay() {
    autoPlay = setInterval(() => {
      document.documentElement.dir === 'rtl' ? goTo(current - 1) : goTo(current + 1);
    }, 4000);
  }

  function resetAutoPlay() { clearInterval(autoPlay); startAutoPlay(); }

  if (track) {
    startAutoPlay();
    track.addEventListener('mouseenter', () => clearInterval(autoPlay));
    track.addEventListener('mouseleave', startAutoPlay);
  }

  let touchStartX = 0;
  if (track) {
    track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { diff > 0 ? goTo(current + 1) : goTo(current - 1); resetAutoPlay(); }
    });
  }

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

  let selectedRating = 0;

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
        ratingMsg.textContent = translations[getLang()].ratingError;
        ratingMsg.style.color = '#e74c3c';
        return;
      }
      ratingMsg.textContent = translations[getLang()].ratingSuccess;
      ratingMsg.style.color = '#1a7a5e';
      const comment = document.getElementById('rating-comment');
      if (comment) comment.value = '';
      selectedRating = 0;
      highlightStars(0);
    });
  }

});

/* ==============================
   Chat Functions
   ============================== */
function toggleChat() {
  const box = document.getElementById('ai-chat-box');
  box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
}

function handleKey(e) {
  if (e.key === 'Enter') sendMessage();
}

async function sendMessage() {
  const input    = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const text     = input.value.trim();
  if (!text) return;

  messages.innerHTML += `<div class="msg-user">${text}</div>`;
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
  messages.innerHTML += `<div class="msg-ai" id="loading">جاري التفكير...</div>`;

  try {
    const res  = await fetch('http://localhost:3000/chat', {
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