/* =========================================
   JS - متحف كوم أوشيم | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
      1. نظام الترجمة والاتجاه الكامل
  ============================== */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم",
      nav4: "الفنادق", nav5: "الحجوزات", nav6: "الإرشادات",
      nav7: "من نحن", nav8: "تواصل معنا",
      title: "متحف كوم أوشيم",
      subtitle: "يضم كنوزاً أثرية نادرة من 'بورتريهات الفيوم'",
      bestTime: "أفضل وقت", distance: "المسافة", entry: "الدخول", rating: "التقييم",
      aboutTitle: "عن المكان", galleryTitle: "معرض الصور",
      aboutText: "يقع عند مدخل مدينة كرانيس الأثرية، ويعتبر حارس تراث الفيوم عبر العصور الفرعونية، اليونانية، الرومانية، والقبطية. يضم المتحف مجموعة نادرة من 'بورتريهات الفيوم' الشهيرة عالمياً.",
      ratingMsgDefault: "اختر عدد النجوم",
      ratingSuccess: "شكراً! تم إرسال تقييمك",
      ratingError: "يرجى اختيار تقييم أولاً!"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Attractions",
      nav4: "Hotels", nav5: "Bookings", nav6: "Guides",
      nav7: "About Us", nav8: "Contact Us",
      title: "Kom Aushim Museum",
      subtitle: "Housing rare archaeological treasures of 'Fayoum Portraits'",
      bestTime: "Best Time", distance: "Distance", entry: "Entry", rating: "Rating",
      aboutTitle: "About the Place", galleryTitle: "Gallery",
      aboutText: "Located at the entrance of Karanis, it guards Fayoum's heritage through Pharaonic, Greek, Roman, and Coptic eras. The museum houses a rare collection of world-famous 'Fayoum Portraits'.",
      ratingMsgDefault: "Select stars count",
      ratingSuccess: "Thank you! Your rating has been sent",
      ratingError: "Please select a rating first!"
    }
  };

  // بيانات التابز الكاملة بالعربي والإنجليزي
  const tabsData = {
    'tab-time': {
      ar: {
        title: '<i class="fa-solid fa-sun"></i> أفضل وقت للزيارة',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>9 صباحاً – 12 ظهراً:</strong> أفضل وقت لتجنب الازدحام والحرارة',
          '<i class="fa-solid fa-circle-check"></i> <strong>أكتوبر – مارس:</strong> طقس معتدل مثالي للزيارة',
          '<i class="fa-solid fa-circle-check"></i> <strong>أيام الأسبوع:</strong> أهدأ من عطلات نهاية الأسبوع',
          '<i class="fa-solid fa-triangle-exclamation"></i> تجنّب يونيو – أغسطس بسبب الحرارة الشديدة'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-sun"></i> Best Time to Visit',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>9 AM – 12 PM:</strong> Best time to avoid crowds and heat',
          '<i class="fa-solid fa-circle-check"></i> <strong>October – March:</strong> Mild weather, ideal for visiting',
          '<i class="fa-solid fa-circle-check"></i> <strong>Weekdays:</strong> Quieter than weekends',
          '<i class="fa-solid fa-triangle-exclamation"></i> Avoid June – August due to intense heat'
        ]
      }
    },
    'tab-distance': {
      ar: {
        title: '<i class="fa-solid fa-route"></i> المسافة من مطار القاهرة',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> المطار ← متحف كوم أوشيم: <strong>~100 كم</strong>',
          '<i class="fa-solid fa-car"></i> بالسيارة: ~<strong>1.5 ساعة</strong> عبر طريق الفيوم الصحراوي',
          '<i class="fa-solid fa-bus"></i> بالأتوبيس: ~<strong>2 ساعة</strong> من محطة الجيزة ثم سرفيس',
          '<i class="fa-solid fa-location-dot"></i> الموقع: منطقة كرانيس (كوم أوشيم)، الفيوم'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-route"></i> Distance from Cairo Airport',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> Airport → Kom Aushim Museum: <strong>~100 km</strong>',
          '<i class="fa-solid fa-car"></i> By car: ~<strong>1.5 hours</strong> via the Fayoum desert road',
          '<i class="fa-solid fa-bus"></i> By bus: ~<strong>2 hours</strong> from Giza station then minibus',
          '<i class="fa-solid fa-location-dot"></i> Location: Karanis area (Kom Aushim), Fayoum'
        ]
      }
    },
    'tab-entry': {
      ar: {
        title: '<i class="fa-solid fa-door-open"></i> تذاكر الدخول',
        items: [
          '<i class="fa-solid fa-tag"></i> المصريون: <strong>20 جنيه</strong> | الأجانب: <strong>100 جنيه</strong>',
          '<i class="fa-solid fa-graduation-cap"></i> الطلاب: خصم <strong>50%</strong>',
          '<i class="fa-solid fa-child"></i> أقل من 6 سنوات: <strong>مجاناً</strong>',
          '<i class="fa-solid fa-circle-check"></i> <strong>مسموح:</strong> التصوير الشخصي، المياه',
          '<i class="fa-solid fa-ban"></i> <strong>ممنوع:</strong> الفلاش، لمس المقتنيات، الأكل داخل القاعات',
          '<i class="fa-solid fa-clock"></i> مواعيد الفتح: 9 ص – 4 م يوميًا'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-door-open"></i> Entry Tickets',
        items: [
          '<i class="fa-solid fa-tag"></i> Egyptians: <strong>EGP 20</strong> | Foreigners: <strong>EGP 100</strong>',
          '<i class="fa-solid fa-graduation-cap"></i> Students: <strong>50%</strong> discount',
          '<i class="fa-solid fa-child"></i> Under 6 years: <strong>Free</strong>',
          '<i class="fa-solid fa-circle-check"></i> <strong>Allowed:</strong> Personal photography, water',
          '<i class="fa-solid fa-ban"></i> <strong>Prohibited:</strong> Flash, touching exhibits, eating inside halls',
          '<i class="fa-solid fa-clock"></i> Opening hours: 9 AM – 4 PM daily'
        ]
      }
    },
    'tab-rating': {
      ar: {
        title: '<i class="fa-solid fa-star"></i> قيّم متحف كوم أوشيم',
        placeholder: 'شارك تجربتك مع الآخرين...',
        btn: 'إرسال التقييم'
      },
      en: {
        title: '<i class="fa-solid fa-star"></i> Rate Kom Aushim Museum',
        placeholder: 'Share your experience with others...',
        btn: 'Submit Rating'
      }
    }
  };

  window.changeLang = function (lang) {
    const t = translations[lang];
    if (!t) return;

    // تحديث النصوص (Navbar)
    for (let i = 1; i <= 8; i++) {
      const el = document.getElementById(`nav${i}`);
      if (el) el.innerText = t[`nav${i}`];
    }

    // تحديث محتوى الصفحة
    document.querySelector(".place-title").innerText = t.title;
    document.querySelector(".place-subtitle").innerText = t.subtitle;
    document.querySelectorAll(".section-title")[0].innerText = t.aboutTitle;
    document.querySelectorAll(".section-title")[1].innerText = t.galleryTitle;
    document.querySelector(".about-card p").innerText = t.aboutText;

    // تحديث التبويبات (Tabs Labels)
    document.querySelector("#tab-time .tab-label").innerText = t.bestTime;
    document.querySelector("#tab-distance .tab-label").innerText = t.distance;
    document.querySelector("#tab-entry .tab-label").innerText = t.entry;
    document.querySelector("#tab-rating .tab-label").innerText = t.rating;
    document.getElementById('rating-msg').textContent = t.ratingMsgDefault;

    // تحديث بيانات البوب أب الكاملة
    updateTabsContent(lang);

    // تحديث textarea
    const commentTextarea = document.getElementById('rating-comment');
    if (commentTextarea) {
      commentTextarea.placeholder = lang === 'en'
        ? 'Share your experience with others...'
        : 'شارك تجربتك مع الآخرين...';
      commentTextarea.dir = lang === 'en' ? 'ltr' : 'rtl';
    }

    // تحديث زر الإرسال
    const submitBtn = document.getElementById('submit-rating');
    if (submitBtn) submitBtn.textContent = tabsData['tab-rating'][lang].btn;

    // تحديث الفوتر
    const footerEl = document.querySelector('.footer p');
    if (footerEl) footerEl.innerText = lang === 'en'
      ? 'All Rights Reserved - Fayoum Eco Tours © 2026'
      : 'جميع الحقوق محفوظة - Fayoum Eco Tours © 2026';


      const bookMapTexts = {
  ar: {
    bookTitle: 'احجز زيارتك الآن',
    bookSub:   'رحلة عبر الزمن في قلب متحف كوم أوشيم',
    features:  ['جولة مع مرشد سياحي متخصص', 'استكشاف المقتنيات الأثرية النادرة', 'تجربة لا تُنسى في قلب التاريخ'],
    bookBtn:   'احجز الآن',
    arrow:     'fa-solid fa-arrow-left',
    mapTitle:  'موقعنا على الخريطة',
    mapBtn:    'افتح في خرائط جوجل'
  },
  en: {
    bookTitle: 'Book Your Visit Now',
    bookSub:   'A journey through time at Kom Oshim Museum',
    features:  ['Guided tour with a specialist', 'Explore rare archaeological artifacts', 'An unforgettable historical experience'],
    bookBtn:   'Book Now',
    arrow:     'fa-solid fa-arrow-right',
    mapTitle:  'Find Us on the Map',
    mapBtn:    'Open in Google Maps'
  }
};

const bmt = bookMapTexts[lang];
if (bmt) {
  const el = (id) => document.getElementById(id);
  if (el('bookTitle'))      el('bookTitle').textContent      = bmt.bookTitle;
  if (el('bookSub'))        el('bookSub').textContent        = bmt.bookSub;
  if (el('bookBtnText'))    el('bookBtnText').textContent    = bmt.bookBtn;
  if (el('bookArrow'))      el('bookArrow').className        = bmt.arrow;
  if (el('mapTitle'))       el('mapTitle').textContent       = bmt.mapTitle;
  if (el('mapOpenBtnText')) el('mapOpenBtnText').textContent = bmt.mapBtn;
  document.querySelectorAll('#bookFeatures li span').forEach((span, i) => {
    if (bmt.features[i]) span.textContent = bmt.features[i];
  });
}
    // القوة الخارقة: قلب الصفحة كلها (Mirror)
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' ? 'rtl' : 'ltr');

    // تصفير السلايدر عند النقل عشان ميهنجش
    current = 0;
    goTo(0);
  };

  function updateTabsContent(lang) {
    // الأتابز الثلاث (وقت، مسافة، دخول)
    ['tab-time', 'tab-distance', 'tab-entry'].forEach(id => {
      const tab = document.getElementById(id);
      if (!tab) return;
      const data = tabsData[id][lang];
      tab.querySelector('.tab-popup h3').innerHTML = data.title;
      const ul = tab.querySelector('.tab-popup ul');
      if (ul) ul.innerHTML = data.items.map(item => `<li>${item}</li>`).join('');
    });

    // تاب التقييم
    const ratingTab = document.getElementById('tab-rating');
    if (ratingTab) {
      const data = tabsData['tab-rating'][lang];
      ratingTab.querySelector('.tab-popup h3').innerHTML = data.title;
    }
  }

  /* ==============================
      2. السلايدر الذكي (الاتجاهين)
  ============================== */
  const track = document.getElementById('sliderTrack');
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let current = 0;
  const total = slides.length;
  let autoPlay;

  // إنشاء النقاط
  if (dotsContainer && dotsContainer.innerHTML === "") {
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
    // التحريك دايماً بالسالب لأننا مثبتين الـ Wrapper كـ LTR في الـ CSS
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  }

  nextBtn.addEventListener('click', () => {
    if (document.documentElement.dir === 'rtl') goTo(current - 1);
    else goTo(current + 1);
    resetAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    if (document.documentElement.dir === 'rtl') goTo(current + 1);
    else goTo(current - 1);
    resetAutoPlay();
  });

  function startAutoPlay() {
    autoPlay = setInterval(() => {
      if (document.documentElement.dir === 'rtl') goTo(current - 1);
      else goTo(current + 1);
    }, 3500);
  }

  function resetAutoPlay() { clearInterval(autoPlay); startAutoPlay(); }
  startAutoPlay();

  // Pause on hover
  if (track) {
    track.addEventListener('mouseenter', () => clearInterval(autoPlay));
    track.addEventListener('mouseleave', () => startAutoPlay());
  }

  // Touch / swipe support
  let touchStartX = 0;
  if (track) {
    track.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
    });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        diff > 0 ? goTo(current + 1) : goTo(current - 1);
        resetAutoPlay();
      }
    });
  }

  /* ==============================
      3. التبويبات والتقييم (Tabs & Rating)
  ============================== */
  const tabCards = document.querySelectorAll('.tab-card');
  tabCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const popup = card.querySelector('.tab-popup');
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

  document.querySelectorAll('.tab-popup').forEach(popup => {
    popup.addEventListener('click', e => e.stopPropagation());
  });

  // النجوم
  const stars = document.querySelectorAll('.star');
  const ratingMsg = document.getElementById('rating-msg');
  const submitBtn = document.getElementById('submit-rating');

  const ratingLabels = {
    ar: ['', 'سيء', 'مقبول', 'جيد', 'جيد جداً', 'ممتاز'],
    en: ['', 'Bad', 'Fair', 'Good', 'Very Good', 'Excellent']
  };

  let selectedRating = 0;

  function getCurrentLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'ar';
  }

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const val = parseInt(star.dataset.val);
      highlightStars(val);
      ratingMsg.textContent = ratingLabels[getCurrentLang()][val];
      ratingMsg.style.color = '#888';
    });

    star.addEventListener('mouseleave', () => {
      highlightStars(selectedRating);
      ratingMsg.textContent = selectedRating
        ? ratingLabels[getCurrentLang()][selectedRating]
        : (getCurrentLang() === 'en' ? 'Select stars count' : 'اختر عدد النجوم');
    });

    star.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedRating = parseInt(star.dataset.val);
      highlightStars(selectedRating);
      ratingMsg.textContent = ratingLabels[getCurrentLang()][selectedRating];
      ratingMsg.style.color = '#1a7a5e';
    });
  });

  function highlightStars(count) {
    stars.forEach(s => s.classList.toggle('selected', parseInt(s.dataset.val) <= count));
  }

  submitBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const lang = getCurrentLang();
    if (!selectedRating) {
      ratingMsg.textContent = translations[lang].ratingError;
      ratingMsg.style.color = '#e74c3c';
      return;
    }
    ratingMsg.textContent = lang === 'en'
      ? `Thank you! Your rating (${ratingLabels['en'][selectedRating]}) has been sent.`
      : `شكراً! تم إرسال تقييمك (${ratingLabels['ar'][selectedRating]})`;
    ratingMsg.style.color = '#1a7a5e';
    document.getElementById('rating-comment').value = '';
    selectedRating = 0;
    highlightStars(0);
  });

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