// === FAYOUM ECO TOUR - Guidelines script.js ===

document.addEventListener,"DOMContentLoaded", function () {

  /* =========================================
     نظام الترجمة (Language System)
     ========================================= */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
      nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
      heroTitle: "إرشادات وتعليمات الموقع",
      heroSub1: "نصائح لرحلة آمنة ومستدامة في الفيوم",
      heroSub2: "عشان رحلتك للفيوم تكون ذكرى ما تنتيش<br />جمعنالك أهم النصائح والإرشادات اللي هتساعدك<br />فتستمتع بكل لحظة بأمان",
      mainTitleText: "إرشادات استخدام الموقع \"Fayoum Eco Tour\"",
      btnSettingsText: "تخصيص العرض",
      card1Title: "صفحة الحجز",
      card1Desc: "خطوات بسيطة تفصلك عن رحلتك، تأكد من إدخال بياناتك بدقة لتصلك تذكرة الحجز عبر البريد الإلكتروني.",
      card2Title: "الصفحة الرئيسية",
      card2Desc: "مرحباً بك في الفيوم! ابدأ رحلتك بالبحث عن وجهتك المفضلة استخدم شريط البحث السريع للوصول.",
      card3Title: "صفحة الفنادق والمطاعم",
      card3Desc: "أختر مكان إقامتك بعناية؛ نوفر لك قائمة بأفضل الفنادق والبيوت الريفية (Lodges) في الفيوم",
      card4Title: "صفحة إنشاء حساب",
      card4Desc: "أنشئ حسابك الآن لتحفظ معالمك المفضلة وتتابع حجوزاتك القادمة تفعيل الحساب يمنحك الأولوية في الحصول على عروض.",
      card5Title: "صفحة التواصل (اتصل بنا)",
      card5Desc: "هل تريك اسفسار نحن هنا للمساعدة عبر الشات المباشر أو أرقام الطوارئ الموضحة.",
      card6Title: "صفحة المعالم السياحية",
      card6Desc: "اكتشف كنوز الفيوم من محميات طبيعية وآثار، إضغط على اي معلم لمعرفة مواعيد الزيارة، أسعار التذاكر وأفضل وقت للتصوير.",
      card7Title: "صفحة الملف الشخصي",
      card7Desc: "للحالات الطارئة، استخدم أيقونة الواتساب للرد السريع من فريق الدعم",
      emergencyTitle: "أرقام الطوارئ:",
      touristPolice: "شرطة السياحة",
      ambulance: "الإسعاف",
      footerCopyright: "© 2026 Fayoum Eco Tours - جميع الحقوق محفوظة"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Landmarks", nav4: "Hotels",
      nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
      heroTitle: "Website Guidelines & Instructions",
      heroSub1: "Tips for a safe and sustainable trip in Fayoum",
      heroSub2: "To make your trip to Fayoum an unforgettable memory,<br />we have collected the most important tips and guidelines<br />to help you enjoy every moment safely.",
      mainTitleText: "Fayoum Eco Tour Website Usage Guidelines",
      btnSettingsText: "Customize View",
      card1Title: "Booking Page",
      card1Desc: "Simple steps separate you from your trip. Ensure data accuracy to receive your ticket via email.",
      card2Title: "Home Page",
      card2Desc: "Welcome to Fayoum! Start your journey by searching for your favorite destination using the quick search bar.",
      card3Title: "Hotels & Restaurants",
      card3Desc: "Choose your accommodation carefully; we provide a list of the best hotels and rural lodges in Fayoum.",
      card4Title: "Create Account",
      card4Desc: "Create your account now to save your favorite landmarks and track upcoming bookings. Activation gives priority for offers.",
      card5Title: "Contact Us Page",
      card5Desc: "Do you have an inquiry? We are here to help via live chat or the emergency numbers shown.",
      card6Title: "Landmarks Page",
      card6Desc: "Discover Fayoum's treasures of nature reserves and monuments. Click any landmark for visit times, ticket prices, and photo times.",
      card7Title: "Profile Page",
      card7Desc: "For emergencies, use the WhatsApp icon for a quick response from our support team.",
      emergencyTitle: "Emergency Numbers:",
      touristPolice: "Tourist Police",
      ambulance: "Ambulance",
      footerCopyright: "© 2026 Fayoum Eco Tours - All Rights Reserved"
    }
  };

  // وظيفة تغيير اللغة
  window.changeLang = function (lang) {
    localStorage.setItem("selectedLang", lang);
    applyLang(lang);
  };

  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;

    // تحديث اتجاه الصفحة واللغة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // تحديث كافة النصوص بناءً على الـ Key الموجود في الـ translations
    Object.keys(t).forEach(key => {
      const el = document.getElementById(key);
      if (el) {
        // استخدام innerHTML للفقرة التي تحتوي على <br>
        if (key === "heroSub2") el.innerHTML = t[key];
        else el.textContent = t[key];
      }
    });
  }

  // عند تشغيل الصفحة: التحقق من اللغة المحفوظة أو استخدام العربية كافتراضية
  const savedLang = localStorage.getItem("selectedLang") || "ar";
  applyLang(savedLang);

  /* =========================================
     التفاعلات القديمة (UI Interactions)
     ========================================= */

  // --- 1. زر الإعدادات ---
  const btnSettings = document.getElementById("btnSettings");
  if (btnSettings) {
    btnSettings.addEventListener("click", function () {
      alert("قريباً: خيارات لتخصيص عرض الإرشادات (حجم الخط، الألوان).");
    });
  }

  // --- 2. ضغط على الكارت: يضيف ظل تمييزي مؤقت ---
  const cards = document.querySelectorAll(".card");
  cards.forEach,function (card) {
    card.addEventListener("click", function () {
      cards.forEach(function (c) {
        c.style.outline = "none";
      });
      card.style.outline = "2px solid #2d5a27";
      setTimeout(function () {
        card.style.outline = "none";
      }, 1500);
    });
  }
}






document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        ar: {
            nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
            nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
            heroTitle: "إرشادات وتعليمات الموقع",
            heroSub1: "نصائح لرحلة آمنة ومستدامة في الفيوم",
            heroSub2: "عشان رحلتك للفيوم تكون ذكرى ما تنتيش<br />جمعنالك أهم النصائح والإرشادات اللي هتساعدك<br />فتستمتع بكل لحظة بأمان",
            mainTitleText: "إرشادات استخدام الموقع \"Fayoum Eco Tour\"",
            btnSettingsText: "تخصيص العرض",
            emergencyTitle: "أرقام الطوارئ:",
            touristPolice: "شرطة السياحة",
            ambulance: "الإسعاف",
            footerCopyright: "© 2026 Fayoum Eco Tours - جميع الحقوق محفوظة",
            // كروت الإرشادات
            card1Title: "صفحة الحجز", card1Desc: "خطوات بسيطة تفصلك عن رحلتك...",
            card2Title: "الصفحة الرئيسية", card2Desc: "مرحباً بك في الفيوم! ابدأ رحلتك بالبحث...",
            // ضيفي باقي الكروت هنا بنفس النمط
        },
        en: {
            nav1: "Home", nav2: "Restaurants", nav3: "Landmarks", nav4: "Hotels",
            nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
            heroTitle: "Website Guidelines",
            heroSub1: "Tips for a safe trip in Fayoum",
            heroSub2: "To make your trip to Fayoum an unforgettable memory,<br />we collected the best tips to help you enjoy safely.",
            mainTitleText: "Fayoum Eco Tour Usage Guidelines",
            btnSettingsText: "Customize View",
            emergencyTitle: "Emergency Numbers:",
            touristPolice: "Tourist Police",
            ambulance: "Ambulance",
            footerCopyright: "© 2026 Fayoum Eco Tours - All Rights Reserved",
            card1Title: "Booking Page", card1Desc: "Simple steps separate you from your trip...",
            card2Title: "Home Page", card2Desc: "Welcome to Fayoum! Start your journey by searching...",
        }
    };

    window.changeLang = function (lang) {
        localStorage.setItem("selectedLang", lang);
        applyLang(lang);
    };

    function applyLang(lang) {
        const t = translations[lang];
        if (!t) return;

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // تحديث كل عنصر له ID مطابق في قائمة الترجمة
        Object.keys(t).forEach(key => {
            const el = document.getElementById(key);
            if (el) {
                if (key === "heroSub2") el.innerHTML = t[key];
                else el.textContent = t[key];
            }
        });
    }

    const savedLang = localStorage.getItem("selectedLang") || "ar";
    applyLang(savedLang);
});















document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        ar: {
            // القائمة العلوية
            nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
            nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
            
            // قسم الهيرو
            heroTitle: "إرشادات وتعليمات الموقع",
            heroSub1: "نصائح لرحلة آمنة ومستدامة في الفيوم",
            heroSub2: "عشان رحلتك للفيوم تكون ذكرى ما تنتيش<br />جمعنالك أهم النصائح والإرشادات اللي هتساعدك<br />فتستمتع بكل لحظة بأمان",
            
            // العنوان الرئيسي والزر
            mainTitleText: "إرشادات استخدام الموقع \"Fayoum Eco Tour\"",
            btnSettingsText: "تخصيص العرض",

            // الكروت (هنا الجزء اللي كان ناقص)
            card1Title: "صفحة الحجز",
            card1Desc: "خطوات بسيطة تفصلك عن رحلتك، تأكد من إدخال بياناتك بدقة لتصلك تذكرة الحجز عبر البريد الإلكتروني.",
            card2Title: "الصفحة الرئيسية",
            card2Desc: "مرحباً بك في الفيوم! ابدأ رحلتك بالبحث عن وجهتك المفضلة استخدم شريط البحث السريع للوصول.",
            card3Title: "صفحة الفنادق والمطاعم",
            card3Desc: "أختر مكان إقامتك بعناية؛ نوفر لك قائمة بأفضل الفنادق والبيوت الريفية (Lodges) في الفيوم",
            card4Title: "صفحة إنشاء حساب",
            card4Desc: "أنشئ حسابك الآن لتحفظ معالمك المفضلة وتتابع حجوزاتك القادمة تفعيل الحساب يمنحك الأولوية في الحصول على عروض.",
            card5Title: "صفحة التواصل (اتصل بنا)",
            card5Desc: "هل لديك استفسار؟ نحن هنا للمساعدة عبر الشات المباشر أو أرقام الطوارئ الموضحة.",
            card6Title: "صفحة المعالم السياحية",
            card6Desc: "اكتشف كنوز الفيوم من محميات طبيعية وآثار، إضغط على أي معلم لمعرفة مواعيد الزيارة وأسعار التذاكر.",
            card7Title: "صفحة الملف الشخصي",
            card7Desc: "للحالات الطارئة، استخدم أيقونة الواتساب للرد السريع من فريق الدعم",

            // الفوتر
            emergencyTitle: "أرقام الطوارئ:",
            touristPolice: "شرطة السياحة",
            ambulance: "الإسعاف",
            footerCopyright: "© 2026 Fayoum Eco Tours - جميع الحقوق محفوظة"
        },
        en: {
            nav1: "Home", nav2: "Restaurants", nav3: "Landmarks", nav4: "Hotels",
            nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
            
            heroTitle: "Website Guidelines",
            heroSub1: "Tips for a safe trip in Fayoum",
            heroSub2: "To make your trip to Fayoum an unforgettable memory,<br />we collected the best tips to help you enjoy safely.",
            
            mainTitleText: "Fayoum Eco Tour Usage Guidelines",
            btnSettingsText: "Customize View",

            card1Title: "Booking Page",
            card1Desc: "Simple steps separate you from your trip. Ensure data accuracy to receive your ticket via email.",
            card2Title: "Home Page",
            card2Desc: "Welcome to Fayoum! Start your journey by searching for your favorite destination using the search bar.",
            card3Title: "Hotels & Restaurants",
            card3Desc: "Choose your stay carefully; we provide a list of the best hotels and lodges in Fayoum.",
            card4Title: "Create Account",
            card4Desc: "Create your account now to save favorite landmarks and track bookings. Activation gives you priority.",
            card5Title: "Contact Us",
            card5Desc: "Have a question? We're here to help via live chat or the emergency numbers shown.",
            card6Title: "Landmarks Page",
            card6Desc: "Discover Fayoum's treasures. Click any landmark for visit times, prices, and photo tips.",
            card7Title: "Profile Page",
            card7Desc: "For emergency cases, use the WhatsApp icon for a quick response from our team.",

            emergencyTitle: "Emergency Numbers:",
            touristPolice: "Tourist Police",
            ambulance: "Ambulance",
            footerCopyright: "© 2026 Fayoum Eco Tours - All Rights Reserved"
        }
    };

    window.changeLang = function (lang) {
        localStorage.setItem("selectedLang", lang);
        applyLang(lang);
    };

    function applyLang(lang) {
        const t = translations[lang];
        if (!t) return;

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        Object.keys(t).forEach(key => {
            const el = document.getElementById(key);
            if (el) {
                if (key === "heroSub2") el.innerHTML = t[key];
                else el.textContent = t[key];
            }
        });
    }

    const savedLang = localStorage.getItem("selectedLang") || "ar";
    applyLang(savedLang);
});