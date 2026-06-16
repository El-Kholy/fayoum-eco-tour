document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ar: {
            nav1: "الصفحة الرئيسية", nav4: "الفنادق",nav2:"المطاعم",nav3:"المعالم",nav5:"الحجوزات",nav6:"الإرشادات",nav7:"من نحن",nav8:"تواصل معنا",
            hotelName: "فندق القوات المسلحة",
            labelLocation: "الموقع",
            valLocation: "شكشوك - الفيوم",
            labelStars: "النجوم",
            labelPrice: "السعر",
            valPrice: "من 2500 جنيه / ليلة",
            roomsTitle: "صور الغرف ",
            poolTitle: "حمام السباحة والحدائق",
            bookingText: "استمتع بإطلالة مباشرة على بحيرة قارون",
            bookingBtn: "احجز الآن",
            footer: "جميع الحقوق محفوظة - Fayoum Eco Tours © 2026",
            receptionTitle: "صور الريسبشن",
            restaurantTitle: "صور المطعم",
            poolTitle: "صور حمام السباحة",
            
        },
        en: {
            nav1: "Home", nav4: "Hotels",nav2:"Restaurants",nav3:"Attractions",nav5:"Bookings",nav6:"Guides",nav7:"About Us",nav8:"Contact Us",
            hotelName: "Armed Forces Hotel",
            labelLocation: "Location",
            valLocation: "Shakshouk - Fayoum",
            labelStars: "Stars",
            labelPrice: "Price",
            valPrice: "From 2500 EGP / Night",
            roomsTitle: "Rooms & Suites",
            poolTitle: "Pool & Gardens",
            bookingText: "Enjoy a direct view of Lake Qarun",
            bookingBtn: "Book Now",
            footer: "All Rights Reserved - Fayoum Eco Tours © 2026",
            receptionTitle: "Reception Photos",
            restaurantTitle: "Restaurant Photos",
            poolTitle: "Pool Photos",
        }
    };

   window.changeLang = function(lang) {

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[lang];

    // Navbar
    for (let i = 1; i <= 8; i++) {
    const nav = document.getElementById(`nav${i}`);
    if (nav) nav.textContent = t[`nav${i}`];
    }

    // Hotel Info
    document.getElementById('hotel-name').textContent = t.hotelName;

    document.getElementById('label-location').textContent = t.labelLocation;
    document.getElementById('val-location').textContent = t.valLocation;

    document.getElementById('label-stars').textContent = t.labelStars;

    document.getElementById('label-price').textContent = t.labelPrice;
    document.getElementById('val-price').textContent = t.valPrice;

    // Sections
    document.getElementById('rooms-title').textContent = t.roomsTitle;

    // Booking
    document.getElementById('booking-text').textContent = t.bookingText;
    document.getElementById('booking-btn').textContent = t.bookingBtn;

    // Footer
    document.getElementById('footer-text').textContent = t.footer;
    document.getElementById('reception-title').textContent = t.receptionTitle;
    document.getElementById('restaurant-title').textContent = t.restaurantTitle;
    document.getElementById('pool-title').textContent = t.poolTitle;
};
});