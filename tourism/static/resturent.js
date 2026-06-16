/* =========================================
   JS - نظام الترجمة الشامل | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  const translations = {
    ar: {
      // الهيدر
      nav1: "الصفحة الرئيسية",
      nav2: "المطاعم",
      nav3: "المعالم",
      nav4: "الفنادق",
      nav5: "الحجوزات",
      nav6: "الإرشادات",
      nav7: "من نحن",
      nav8: "تواصل معنا",
      // Hero
      heroTitle: "دليلك لأفضل مطاعم الفيوم...<br>تجربة لاتنسى في قلب الطبيعة",
      heroBtn: "أبرز مطاعم الفيوم",
      sectionTitle: "أبرز مطاعم الفيوم",
      // Card 1
      r1name: "Al-Issawi",
      r1sub: "(كبابجي صبري العيسوي)",
      r1loc: "منطقة الحديقة - قسم الفيوم",
      r1desc: "مطعم مميز في المشويات والكباب والطرب",
      r1btn: "تواصل",
      // Card 2
      r2name: "Alkhedaiwy Restaurant",
      r2sub: "(مطعم الخداوي)",
      r2loc: "شارع بطل السلام - قسم الفيوم",
      r2desc: "أشهر مطاعم الفيوم في الفراخ والوجبات السريعة",
      r2btn: "تواصل",
      // Card 3
      r3name: "مطعم ومدرسة طبخ إيبس",
      r3sub: "",
      r3loc: "قرية تونس - الفيوم",
      r3desc: "وجهة فريدة تجمع بين الطعام والتعلم الطهي",
      r3btn: "تواصل",
      // Card 4
      r4name: "Ozzi Restaurant",
      r4sub: "(مطعم أوزي)",
      r4loc: "شارع الخليفة المأمون - الفيوم",
      r4desc: "مشهور بالمشويات والأكل الشرقي",
      r4btn: "تواصل",
      // Card 5
      r5name: "Kazozmix",
      r5sub: "(كازوزا ميكس)",
      r5loc: "شارع الفاروق عمر - أمام البنك التجاري",
      r5desc: "مطعم عصري يقدم ساندوتشات ووجبات سريعة",
      r5btn: "تواصل",
      // Card 6
      r6name: "Blue Donkey",
      r6sub: "(مطعم بلو دونكي)",
      r6loc: "قرية تونس - داخل فندق لازيب إن",
      r6desc: "مطعم راقي بإطلالة جميلة",
      r6btn: "تواصل",
    },

    en: {
      // Header
      nav1: "Home",
      nav2: "Restaurants",
      nav3: "Landmarks",
      nav4: "Hotels",
      nav5: "Bookings",
      nav6: "Guidelines",
      nav7: "About Us",
      nav8: "Contact Us",
      // Hero
      heroTitle: "Your Guide to the Best Restaurants in Fayoum...<br>An unforgettable experience in the heart of nature",
      heroBtn: "Top Fayoum Restaurants",
      sectionTitle: "Top Fayoum Restaurants",
      // Card 1
      r1name: "Al-Issawi",
      r1sub: "(Sabry Al-Issawi Grill)",
      r1loc: "Al-Hadiqah Area - Fayoum",
      r1desc: "A standout restaurant for grills, kebab, and great vibes",
      r1btn: "Contact",
      // Card 2
      r2name: "Alkhedaiwy Restaurant",
      r2sub: "(Al-Khedaiwy Restaurant)",
      r2loc: "Batal Al-Salam St. - Fayoum",
      r2desc: "Fayoum's most famous spot for chicken and fast food",
      r2btn: "Contact",
      // Card 3
      r3name: "Ibis Restaurant & Cooking School",
      r3sub: "",
      r3loc: "Tunis Village - Fayoum",
      r3desc: "A unique destination combining dining with culinary education",
      r3btn: "Contact",
      // Card 4
      r4name: "Ozzi Restaurant",
      r4sub: "(Ozzi Restaurant)",
      r4loc: "Al-Khalifa Al-Ma'mun St. - Fayoum",
      r4desc: "Famous for grills and traditional oriental cuisine",
      r4btn: "Contact",
      // Card 5
      r5name: "Kazozmix",
      r5sub: "(Kazoza Mix)",
      r5loc: "Al-Farouq Omar St. - Opposite Commercial Bank",
      r5desc: "A modern restaurant serving sandwiches and fast food",
      r5btn: "Contact",
      // Card 6
      r6name: "Blue Donkey",
      r6sub: "(Blue Donkey Restaurant)",
      r6loc: "Tunis Village - Inside Lazib Inn Hotel",
      r6desc: "An upscale restaurant with a beautiful view",
      r6btn: "Contact",
    }
  };

  // وظيفة تغيير اللغة - متاحة globally
  window.changeLang = function(lang) {
    localStorage.setItem("selectedLang", lang);
    applyLang(lang);
  };

  function applyLang(lang) {
    const t = translations[lang];

    // 1. تحديث اتجاه الصفحة واللغة
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // 2. تحديث كل النصوص
    Object.keys(t).forEach(key => {
      const el = document.getElementById(key);
      if (!el) return;

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (key === 'heroTitle') {
        // heroTitle يحتوي على <br> فنستخدم innerHTML
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });
  }

  // تطبيق اللغة المحفوظة عند تحميل الصفحة
  const savedLang = localStorage.getItem("selectedLang") || "ar";
  applyLang(savedLang);

});