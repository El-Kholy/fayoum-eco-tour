let currentLang = "ar";

const translations = {
  ar: {
    logo: "فيوم إيت تور",
    heroText: "اختار إقامتك المثالية.. لأن راحتك مش رفاهية ،<br>دي أولوية",
    heroBtn: "أبرز فنادق الفيوم",
    sectionTitle: "أبرز فنادق الفيوم"
  },
  en: {
    logo: "Fayoum Eat Tour",
    heroText: "Choose your ideal stay.. Because your comfort is not a luxury,<br>It's a priority",
    heroBtn: "Featured Fayoum Hotels",
    sectionTitle: "Featured Hotels in Fayoum"
  }
};

function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.getElementById("logo-text").textContent = translations[currentLang].logo;
  document.getElementById("hero-text").innerHTML = translations[currentLang].heroText;
  document.getElementById("hero-btn").textContent = translations[currentLang].heroBtn;
  document.getElementById("section-title").textContent = translations[currentLang].sectionTitle;
}

window.onload = () => {
  if (localStorage.getItem("language") === "en") {
    currentLang = "en";
    toggleLanguage();
  }
};




document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ar: {
            nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
            nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
            "hero-text": "اختار إقامتك المثالية.. لأن راحتك مش رفاهية ،<br>دي أولوية",
            "hero-btn": "أبرز فنادق الفيوم",
            "section-title": "أبرز فنادق الفيوم",
            h1_name: "فندق الأهرام",
            h1_desc: "فندق اهرامات تونس يتميز بمسبح خارجي وحديقة ومنطقة شاطئ خاص.",
            h1_loc: "قرية تونس - الفيوم",
            h2_name: "فندق القوات المسلحة",
            h2_desc: "سماء زرقاء ومياه هادئه وإقامة فاخرة بنادي وفندق ضباط القوات المسلحة.",
            h2_loc: "منطقة البحيرة - الفيوم",
            h3_name: " منتجع",
            h3_desc: "منتجع في قلب الفيوم، فطار فلاحي على الأصول وطبيعة هادية.",
            h3_loc: "منتجع  - الفيوم",
            bookBtn: "المزيد من التفاصيل",
            "footer-text": "© 2026 Fayoum Eco Tours - جميع الحقوق محفوظة"
        },
        en: {
            nav1: "Home", nav2: "Restaurants", nav3: "Landmarks", nav4: "Hotels",
            nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
            "hero-text": "Choose your ideal stay.. Because your comfort is not a luxury,<br>It's a priority",
            "hero-btn": "Top Fayoum Hotels",
            "section-title": "Top Hotels in Fayoum",
            h1_name: "Al Ahram Hotel",
            h1_desc: "Tunis Pyramids Hotel features an outdoor pool, garden, and private beach area.",
            h1_loc: "Tunis Village - Fayoum",
            h2_name: "Armed Forces Hotel",
            h2_desc: "Blue sky, calm waters, and luxury stay at the Armed Forces Officers Club.",
            h2_loc: "Lake Area - Fayoum",
            h3_name: "Tunis Village",
            h3_desc: "Tunis Village in the heart of Fayoum, authentic rural breakfast and calm nature.",
            h3_loc: "Tunis Village - Fayoum",
            bookBtn: "More Details",
            "footer-text": "© 2026 Fayoum Eco Tours - All Rights Reserved"
        }
    };

    window.changeLang = function(lang) {
        localStorage.setItem("selectedLang", lang);
        applyLang(lang);
    };

    function applyLang(lang) {
        const t = translations[lang];
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // تغيير النصوص بناءً على الـ ID
        Object.keys(t).forEach(key => {
            const el = document.getElementById(key);
            if (el) {
                if (key === "hero-text") el.innerHTML = t[key];
                else el.textContent = t[key];
            }
        });

        // تغيير كل أزرار الحجز مرة واحدة باستخدام Class
        document.querySelectorAll('.bookBtn').forEach(btn => {
            btn.textContent = t.bookBtn;
        });
    }

    const savedLang = localStorage.getItem("selectedLang") || "ar";
    applyLang(savedLang);
});



function applyLang(lang) {
    const t = translations[lang];
    
    // تغيير الاتجاه واللغة في الصفحة كلها
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // تحديث أي عنصر له ID موجود في قائمة الترجمة
    Object.keys(t).forEach(key => {
        const el = document.getElementById(key);
        if (el) {
            // لو النص فيه علامة <br> أو تنسيق HTML
            if (key === "hero-text" || key.includes("desc")) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // تحديث أزرار "احجز الآن" لو ليها كلاس مشترك
    document.querySelectorAll('.bookBtn').forEach(btn => {
        btn.textContent = t.bookBtn;
    });
}
// Footer
const footer = document.getElementById("footer-text");
if (footer) footer.textContent = t.footer;







