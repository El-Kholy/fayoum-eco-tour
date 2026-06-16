// === FAYOUM ECO TOUR - Contact Us script.js ===

document.addEventListener("DOMContentLoaded", function () {

    const translations = {
        ar: {
            dir: "rtl",
            lang: "ar",
            nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
            nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
            heroTitle: "تواصل معنا",
            heroSub: "نحن هنا لمساعدتك",
            infoTitle: "معلومات التواصل",
            location: "الفيوم - مصر",
            formTitle: "أرسل لنا رسالة",
            inputName: "الاسم",
            inputEmail: "البريد الإلكتروني",
            inputSubject: "الموضوع",
            inputMsg: "رسالتك",
            submitBtn: "إرسال الرسالة"
        },
        en: {
            dir: "ltr",
            lang: "en",
            nav1: "Home", nav2: "Restaurants", nav3: "Landmarks", nav4: "Hotels",
            nav5: "Reservations", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
            heroTitle: "Contact Us",
            heroSub: "We are here to help you",
            infoTitle: "Contact Information",
            location: "Fayoum - Egypt",
            formTitle: "Send Us a Message",
            inputName: "Name",
            inputEmail: "Email Address",
            inputSubject: "Subject",
            inputMsg: "Your Message",
            submitBtn: "Send Message"
        }
    };

    window.changeLang = function (lang) {
        localStorage.setItem("selectedLang", lang);
        applyLang(lang);
    };

    function applyLang(lang) {
        const t = translations[lang];
        if (!t) return;

        document.documentElement.lang = t.lang;
        document.documentElement.dir = t.dir;

        Object.keys(t).forEach(function (key) {
            const el = document.getElementById(key);
            if (el) el.textContent = t[key];
        });

        document.getElementById("inputName").placeholder    = t.inputName;
        document.getElementById("inputEmail").placeholder   = t.inputEmail;
        document.getElementById("inputSubject").placeholder = t.inputSubject;
        document.getElementById("inputMsg").placeholder     = t.inputMsg;
    }

    const savedLang = localStorage.getItem("selectedLang") || "ar";
    applyLang(savedLang);

});