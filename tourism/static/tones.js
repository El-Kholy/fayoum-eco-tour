/* =========================================
   JS - قرية تونس | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
      1. نظام الترجمة (Language System)
      ============================== */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
      nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
      title: "قرية تونس", subtitle: "مدرسة الخزف المفتوحة، وواحة المبدعين في قلب الريف المصري",
      label1: "أفضل وقت", label2: "المسافة", label3: "الدخول",
      tabTitle1: "أفضل وقت للزيارة", time1: "10 صباحاً – 4 مساءً: الورش مفتوحة", time2: "أكتوبر – أبريل: طقس ممتاز",
      tabTitle2: "المسافة من المطار", dist1: "المطار ← تونس: ~130 كم",
      tabTitle3: "تذاكر الدخول", entry1: "دخول القرية: مجاناً", entry2: "دروس الفخار: من 100 جنيه",
      aboutTitle: "عن المكان", aboutText: "واحة الفن والجمال التي أسستها السويسرية \"إيفيلين بوريه\"، حيث تحولت من قرية ريفية بسيطة إلى مركز عالمي لصناعة الخزف والفخار. تتميز القرية ببيوتها المبنية من الطين على الطراز المعماري البيئي الفريد، وتوفر إطلالة ساحرة على بحيرة قارون وسط مساحات خضراء شاسعة. تُعد المقصد الأول لمحبي الهدوء، الفنون اليدوية، وتجربة الحياة الريفية الأصيلة بمذاق عصري وجذاب.",
      galleryTitle: "معرض الصور", footer: "جميع الحقوق محفوظة - Fayoum Eco Tours © 2026",
      bestTime: "أفضل وقت", distance: "المسافة", entry: "الدخول", rating: "التقييم",
      ratingMsgDefault: "اختر عدد النجوم",
      ratingSuccess: "شكراً! تم إرسال تقييمك",
      ratingError: "يرجى اختيار تقييم أولاً!"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Attractions", nav4: "Hotels",
      nav5: "Bookings", nav6: "Guides", nav7: "About Us", nav8: "Contact Us",
      title: "Tunis Village", subtitle: "The pottery open school and artists' oasis in the heart of rural Egypt",
      label1: "Best Time", label2: "Distance", label3: "Entry",
      tabTitle1: "Best Time to Visit", time1: "10 AM – 4 PM: Workshops are open", time2: "October – April: Perfect weather",
      tabTitle2: "Distance from Airport", dist1: "Airport → Tunis Village: ~130 km",
      tabTitle3: "Entry Tickets", entry1: "Village Entry: Free", entry2: "Pottery Classes: from EGP 100",
      aboutTitle: "About the Place", aboutText: "An oasis of art and beauty founded by Swiss artist Evelyne Porret, which transformed from a simple rural village into a world-renowned center for pottery and ceramics. The village is distinguished by its mud-brick houses built in a unique eco-architectural style, offering a stunning view of Lake Qarun amidst vast green spaces. It is the top destination for those seeking tranquility, handicrafts, and an authentic rural experience with a modern and attractive touch.",
      galleryTitle: "Gallery", footer: "All Rights Reserved - Fayoum Eco Tours © 2026",
      bestTime: "Best Time", distance: "Distance", entry: "Entry", rating: "Rating",
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
          '<i class="fa-solid fa-circle-check"></i> <strong>10 صباحاً – 4 مساءً:</strong> ورش الخزف تكون مفتوحة وحيوية',
          '<i class="fa-solid fa-circle-check"></i> <strong>أكتوبر – أبريل:</strong> الطقس المعتدل مثالي للتجوال بين أزقة القرية',
          '<i class="fa-solid fa-circle-check"></i> <strong>الغروب على بحيرة قارون:</strong> مشهد لا يُنسى من شرفات القرية',
          '<i class="fa-solid fa-circle-check"></i> <strong>عطلة نهاية الأسبوع:</strong> تجد معظم الفنانين والحرفيين في ورشهم',
          '<i class="fa-solid fa-triangle-exclamation"></i> تجنّب أيام الجمعة — معظم الورش تكون مغلقة'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-sun"></i> Best Time to Visit',
        items: [
          '<i class="fa-solid fa-circle-check"></i> <strong>10 AM – 4 PM:</strong> Pottery workshops are open and lively',
          '<i class="fa-solid fa-circle-check"></i> <strong>October – April:</strong> Mild weather, ideal for wandering through the village alleys',
          '<i class="fa-solid fa-circle-check"></i> <strong>Sunset over Lake Qarun:</strong> Unforgettable view from the village terraces',
          '<i class="fa-solid fa-circle-check"></i> <strong>Weekends:</strong> Most artists and craftsmen are in their workshops',
          '<i class="fa-solid fa-triangle-exclamation"></i> Avoid Fridays — most workshops are closed'
        ]
      }
    },
    'tab-distance': {
      ar: {
        title: '<i class="fa-solid fa-route"></i> المسافة من مطار القاهرة',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> المطار ← قرية تونس: <strong>~130 كم</strong>',
          '<i class="fa-solid fa-car"></i> بالسيارة: ~<strong>1.5 ساعة</strong> عبر طريق الفيوم الصحراوي',
          '<i class="fa-solid fa-bus"></i> بالأتوبيس: ~<strong>2.5 ساعة</strong> من محطة الجيزة ثم سرفيس',
          '<i class="fa-solid fa-location-dot"></i> الموقع: على ضفة بحيرة قارون، غرب الفيوم'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-route"></i> Distance from Cairo Airport',
        items: [
          '<i class="fa-solid fa-plane-arrival"></i> Airport → Tunis Village: <strong>~130 km</strong>',
          '<i class="fa-solid fa-car"></i> By car: ~<strong>1.5 hours</strong> via the Fayoum desert road',
          '<i class="fa-solid fa-bus"></i> By bus: ~<strong>2.5 hours</strong> from Giza station then minibus',
          '<i class="fa-solid fa-location-dot"></i> Location: On the shore of Lake Qarun, west of Fayoum'
        ]
      }
    },
    'tab-entry': {
      ar: {
        title: '<i class="fa-solid fa-door-open"></i> تذاكر الدخول',
        items: [
          '<i class="fa-solid fa-tag"></i> دخول القرية: <strong>مجاناً</strong>',
          '<i class="fa-solid fa-tag"></i> ورش الخزف التفاعلية: <strong>تختلف حسب الورشة</strong>',
          '<i class="fa-solid fa-tag"></i> دروس الفخار: تبدأ من <strong>100 جنيه</strong>',
          '<i class="fa-solid fa-circle-check"></i> <strong>مسموح:</strong> التصوير، زيارة الورش، شراء المنتجات اليدوية، الجلوس في المقاهي',
          '<i class="fa-solid fa-ban"></i> <strong>ممنوع:</strong> التصوير التجاري داخل الورش بدون إذن، إزعاج الفنانين أثناء العمل',
          '<i class="fa-solid fa-clock"></i> مواعيد الورش: 10 صباحاً – 6 مساءً (السبت – الخميس)'
        ]
      },
      en: {
        title: '<i class="fa-solid fa-door-open"></i> Entry Tickets',
        items: [
          '<i class="fa-solid fa-tag"></i> Village Entry: <strong>Free</strong>',
          '<i class="fa-solid fa-tag"></i> Interactive pottery workshops: <strong>Varies by workshop</strong>',
          '<i class="fa-solid fa-tag"></i> Pottery classes: starting from <strong>EGP 100</strong>',
          '<i class="fa-solid fa-circle-check"></i> <strong>Allowed:</strong> Photography, visiting workshops, buying handmade products, sitting in cafes',
          '<i class="fa-solid fa-ban"></i> <strong>Prohibited:</strong> Commercial photography inside workshops without permission, disturbing artists while working',
          '<i class="fa-solid fa-clock"></i> Workshop hours: 10 AM – 6 PM (Saturday – Thursday)'
        ]
      }
    },
    'tab-rating': {
      ar: {
        title: '<i class="fa-solid fa-star"></i> قيّم قرية تونس',
        placeholder: 'شارك تجربتك مع الآخرين...',
        btn: 'إرسال التقييم'
      },
      en: {
        title: '<i class="fa-solid fa-star"></i> Rate Tunis Village',
        placeholder: 'Share your experience with others...',
        btn: 'Submit Rating'
      }
    }
  };

  window.changeLang = function (lang) {
    const t = translations[lang];
    if (!t) return;

    // تحديث الهيدر
    for (let i = 1; i <= 8; i++) {
      const el = document.getElementById(`nav${i}`);
      if (el) el.innerText = t[`nav${i}`];
    }

    // تحديث النصوص الأساسية
    document.querySelector(".place-title").innerText = t.title;
    document.querySelector(".place-subtitle").innerText = t.subtitle;
    document.querySelectorAll(".section-title")[0].innerText = t.aboutTitle;
    document.querySelectorAll(".section-title")[1].innerText = t.galleryTitle;
    document.querySelector(".about-card p").innerText = t.aboutText;

    // تحديث أسماء التبويبات
    document.querySelector("#tab-time .tab-label").innerText = t.bestTime;
    document.querySelector("#tab-distance .tab-label").innerText = t.distance;
    document.querySelector("#tab-entry .tab-label").innerText = t.entry;
    document.querySelector("#tab-rating .tab-label").innerText = t.rating;
    document.getElementById('rating-msg').textContent = t.ratingMsgDefault;

    // تحديث بيانات البوب أب الكاملة
    updateTabsContent(lang);

    // تغيير الاتجاه
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // تحديث textarea
    const commentTextarea = document.getElementById('rating-comment');
    if (commentTextarea) {
      commentTextarea.placeholder = lang === 'en'
        ? 'Share your experience with others...'
        : 'شارك تجربتك مع الآخرين...';
      commentTextarea.dir = lang === 'en' ? 'ltr' : 'rtl';
    }

    // تحديث الفوتر
    const footerEl = document.querySelector('.footer p');
    if (footerEl) footerEl.innerText = t.footer;




    /* =============================================
   أضف هذا الكود داخل دالة changeLang()
   بعد سطر: if (footerEl) footerEl.innerText = t.footer;
   ============================================= */

    // ── Book & Map Section ─────────────────────
    const bookTexts = {
      ar: {
        title:    'احجز زيارتك الآن',
        sub:      'تجربة لا تُنسى في قلب قرية تونس',
        features: [
          'جولة مع مرشد سياحي متخصص',
          'ورشة فخار تفاعلية',
          'إطلالة ساحرة على بحيرة قارون'
        ],
        btn:       'احجز الآن',
        mapTitle:  'موقعنا على الخريطة',
        mapBtn:    'افتح في خرائط جوجل'
      },
      en: {
        title:    'Book Your Visit Now',
        sub:      'An unforgettable experience in the heart of Tunis Village',
        features: [
          'Guided tour with a specialist',
          'Interactive pottery workshop',
          'Stunning view of Lake Qarun'
        ],
        btn:       'Book Now',
        mapTitle:  'Find Us on the Map',
        mapBtn:    'Open in Google Maps'
      }
    };

    const bt = bookTexts[lang];
    if (bt) {
      const bookTitle = document.getElementById('bookTitle');
      const bookSub   = document.getElementById('bookSub');
      const bookFeats = document.getElementById('bookFeatures');
      const bookBtn   = document.getElementById('bookBtnText');
      const mapTitle  = document.getElementById('mapTitle');
      const mapBtn    = document.getElementById('mapOpenBtnText');

      if (bookTitle) bookTitle.textContent = bt.title;
      if (bookSub)   bookSub.textContent   = bt.sub;
      if (bookFeats) {
        const icons = bookFeats.querySelectorAll('li i');
        const spans = bookFeats.querySelectorAll('li span');
        spans.forEach((span, i) => {
          if (bt.features[i]) span.textContent = bt.features[i];
        });
      }
      if (bookBtn)  bookBtn.textContent  = bt.btn;
      if (mapTitle) mapTitle.textContent = bt.mapTitle;
      if (mapBtn)   mapBtn.textContent   = bt.mapBtn;

      // flip arrow direction
      const bookBtnEl = document.getElementById('bookBtn');
      if (bookBtnEl) {
        const icon = bookBtnEl.querySelector('i');
        if (icon) {
          icon.className = lang === 'en'
            ? 'fa-solid fa-arrow-right'
            : 'fa-solid fa-arrow-left';
        }
      }
    }
    // ──────────────────────────────────────────

    // تصفير السلايدر عند تغيير اللغة
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
      const submitBtn = document.getElementById('submit-rating');
      if (submitBtn) submitBtn.textContent = data.btn;
    }
  }

  /* ==============================
      2. السلايدر (Slider Logic)
      ============================== */
  const track = document.getElementById('sliderTrack');
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let current = 0;
  const total = slides.length;
  let autoPlay;

  // إنشاء النقاط (مرة واحدة فقط)
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
    // دايمًا translateX سالب — يشتغل صح في العربي والإنجليزي
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  }

  function resetSlider() {
    current = 0;
    track.style.transform = `translateX(0)`;
    updateDots();
  }

  // أزرار التحكم (Next & Prev)
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (document.documentElement.dir === 'rtl') goTo(current - 1);
      else goTo(current + 1);
      resetAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (document.documentElement.dir === 'rtl') goTo(current + 1);
      else goTo(current - 1);
      resetAutoPlay();
    });
  }

  function startAutoPlay() {
    autoPlay = setInterval(() => {
      if (document.documentElement.dir === 'rtl') goTo(current - 1);
      else goTo(current + 1);
    }, 4000);
  }

  function resetAutoPlay() { clearInterval(autoPlay); startAutoPlay(); }

  if (track) {
    startAutoPlay();
    track.addEventListener('mouseenter', () => clearInterval(autoPlay));
    track.addEventListener('mouseleave', startAutoPlay);
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

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!selectedRating) {
        ratingMsg.textContent = getCurrentLang() === 'en'
          ? 'Please select a rating first!'
          : 'يرجى اختيار تقييم أولاً!';
        ratingMsg.style.color = '#e74c3c';
        return;
      }
      ratingMsg.textContent = getCurrentLang() === 'en'
        ? `Thank you! Your rating (${ratingLabels['en'][selectedRating]}) has been sent.`
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