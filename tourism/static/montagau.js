/* =========================================
   JS - قرية تونس (فندق) | Fayoum Eco Tours
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
      نظام الترجمة (Language System)
  ============================== */
  const translations = {
    ar: {
      nav1: "الصفحة الرئيسية", nav2: "المطاعم", nav3: "المعالم", nav4: "الفنادق",
      nav5: "الحجوزات", nav6: "الإرشادات", nav7: "من نحن", nav8: "تواصل معنا",
      hotelName: "قرية تونس",
      labelLocation: "الموقع",
      valLocation: "قرية تونس - الفيوم",
      labelStars: "النجوم",
      labelRating: "التقييم",
      labelPrice: "السعر",
      valPrice: "من 1200 جنيه / ليلة",
      roomsTitle: "صور الغرف",
      receptionTitle: "صور الريسبشن",
      restaurantTitle: "صور المطعم",
      poolTitle: "صور حمام السباحة",
      bookingText: "احجز إقامتك الآن واستمتع بتجربة لا تُنسى",
      bookingBtn: "احجز الآن",
      footer: "جميع الحقوق محفوظة - Fayoum Eco Tours © 2026"
    },
    en: {
      nav1: "Home", nav2: "Restaurants", nav3: "Attractions", nav4: "Hotels",
      nav5: "Bookings", nav6: "Guidelines", nav7: "About Us", nav8: "Contact Us",
      hotelName: "Tunis Village",
      labelLocation: "Location",
      valLocation: "Tunis Village - Fayoum",
      labelStars: "Stars",
      labelRating: "Rating",
      labelPrice: "Price",
      valPrice: "From EGP 1200 / night",
      roomsTitle: "Room Photos",
      receptionTitle: "Reception Photos",
      restaurantTitle: "Restaurant Photos",
      poolTitle: "Swimming Pool Photos",
      bookingText: "Book your stay now and enjoy an unforgettable experience",
      bookingBtn: "Book Now",
      footer: "All Rights Reserved - Fayoum Eco Tours © 2026"
    }
  };

  window.changeLang = function (lang) {
    const t = translations[lang];
    if (!t) return;

    // تحديث اتجاه الصفحة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // تحديث الهيدر (Navbar)
    for (let i = 1; i <= 8; i++) {
      const el = document.getElementById(`nav${i}`);
      if (el) el.innerText = t[`nav${i}`];
    }

    // تحديث معلومات الفندق
    setText('hotel-name',     t.hotelName);
    setText('label-location', t.labelLocation);
    setText('val-location',   t.valLocation);
    setText('label-stars',    t.labelStars);
    setText('label-rating',   t.labelRating);
    setText('label-price',    t.labelPrice);
    setText('val-price',      t.valPrice);

    // تحديث عناوين الأقسام
    setText('rooms-title',      t.roomsTitle);
    setText('reception-title',  t.receptionTitle);
    setText('restaurant-title', t.restaurantTitle);
    setText('pool-title',       t.poolTitle);

    // تحديث قسم الحجز
    setText('booking-text', t.bookingText);
    setText('booking-btn',  t.bookingBtn);

    // تحديث الفوتر
    setText('footer-text', t.footer);
  };

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

});