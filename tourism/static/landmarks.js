// =============================================
//   الرئيسية معالم.js — Fayoum Eco Tours
// =============================================

const translations = {
  ar: {
    dir: "rtl",
    lang: "ar",
    navLinks: [
      "الصفحة الرئيسية",
      "المطاعم",
      "المعالم",
      "الفنادق",
      "الحجوزات",
      "الإرشادات",
      "من نحن",
      "تواصل معنا",
    ],
    heroTitle: "معالم ليست مجرد أماكن... بل تجارب تُخلَّد في الذاكرة",
    heroSub: "في كل زاوية من الفيوم سرٌّ يتظر من يكتشفه",
    sectionTitle: "أبرز الوجهات السياحية",
    bookBtn: "المزيد من التفاصيل",
    footer: "©2026 Fayoum Eco Tours — جميع الحقوق محفوظة",
    cards: [
      { title: "بحيرة قارون", desc: "لوحة زرقاء خالدة في قلب الصحراء حيث تلتقي المراقة بهدوء الطبيعة" },
      { title: "قرية تونس", desc: "اكتشف سحر الفن الريفي وصناعة الفخار اليدوي" },
      { title: "هرم اللاهون", desc: "الهندسة المصرية القديمة تتجلى في مدخل الهرم الفريد" },
      { title: "وادي الريان", desc: "الشلالات والبحيرات الساحرة في حضن المحمية الطبيعية" },
      { title: "وادي الحيتان", desc: "رحلة إلى أعماق المحيط القديم لاستكشاف أسرار تطور الحياة" },
      { title: "جبل المدورة", desc: "إطلالة تخطف الأنفاس من فوق أجمل التكوينات الصخرية" },
      { title: "مدينة ماضي", desc: "المدينة المفقودة التي تجمع بين آثار الدولة الوسطى واليونانية" },
      { title: "هرم هوارة", desc: "لغز المتاهة القديم ورمز لعظمة الدولة الوسطى في قلب الفيوم" },
      { title: "معبد كرانيس", desc: "أطلال المدينة الرومانية العتيقة التي تروي تفاصيل الحياة اليومية" },
      { title: "متحف كوم أوشيم", desc: "نافذة على تاريخ الفيوم تضم كنوزاً تحكي قصص الحضارات" },
      { title: "المعبد الشمالي", desc: "صمود الحجر في وجه الزمن وشاهد على أسرار الحضارات العتيقة" },
      { title: "المعبد الجنوبي", desc: "تلتقي ترابيل الماضي بعظمة البناء في قلب المعبد الجنوبي" },
     { title: " السواقي", desc: "حيث يجري الماء فيحكي قصص الأجداد وسط أرض الفراعنة" },
     { title: " البحيرة المسحورة", desc: "انعكاسات الماء الهادئ تروي أسرار حضارة عريقة" },


    ],
  },

  en: {
    dir: "ltr",
    lang: "en",
    navLinks: [
      "Home",
      "Restaurants",
      "Landmarks",
      "Hotels",
      "Reservations",
      "Guidelines",
      "About Us",
      "Contact Us",
    ],
    heroTitle: "Landmarks are not just places... they are experiences etched in memory",
    heroSub: "In every corner of Fayoum, a secret waits to be discovered",
    sectionTitle: "Top Tourist Destinations",
    bookBtn: "More details",
    footer: "©2026 Fayoum Eco Tours — All Rights Reserved",
    cards: [
      { title: "Lake Qarun", desc: "An eternal blue canvas in the heart of the desert where serenity meets the tranquility of nature" },
      { title: "Tunis Village", desc: "Discover the charm of rural art and handcrafted pottery making" },
      { title: "Lahun Pyramid", desc: "Ancient Egyptian engineering revealed through the pyramid's unique entrance" },
      { title: "Wadi El Rayan", desc: "Enchanting waterfalls and lakes nestled within a natural protected reserve" },
      { title: "Wadi Al-Hitan", desc: "A journey into the depths of an ancient ocean to explore the secrets of life's evolution" },
      { title: "Gebel El Medawara", desc: "A breathtaking panorama atop the most stunning rock formations" },
      { title: "Medinet Madi", desc: "The lost city that unites the ruins of the Middle Kingdom and Greco-Roman eras" },
      { title: "Hawara Pyramid", desc: "The ancient labyrinth mystery and a symbol of Middle Kingdom greatness in the heart of Fayoum" },
      { title: "Karanis Temple", desc: "Ruins of the ancient Roman city that narrate the details of everyday life" },
      { title: "Kom Oshim Museum", desc: "A window into Fayoum's history housing treasures that tell the stories of civilizations" },
      { title: "Northern Temple", desc: "Stone standing firm against time, bearing witness to the secrets of ancient civilizations" },
      { title: "Southern Temple", desc: "Where the layers of the past meet the grandeur of architecture at the heart of the Southern Temple" },
      { title: "The Waterwheels", desc: "Where water flows telling the stories of ancestors amidst the land of the Pharaohs" },
      { title: "The Magic Lake", desc: "The calm water reflections narrate the secrets of an ancient civilization" },
    ],
  },
};

let currentLang = "ar";

// تطبيق الترجمة
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.setAttribute("dir", t.dir);
  document.documentElement.setAttribute("lang", t.lang);

  // Navbar
  const navItems = document.querySelectorAll(".nav-links li a");
  navItems.forEach((a, i) => {
    if (t.navLinks[i]) a.textContent = t.navLinks[i];
  });

  // Hero
  const heroTitle = document.querySelector(".hero-text h1");
  const heroSub = document.querySelector(".hero-text p");
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  if (heroSub) heroSub.textContent = t.heroSub;

  // Section
  const section = document.querySelector(".section-header h2");
  if (section) section.textContent = t.sectionTitle;

  // Cards
  document.querySelectorAll(".card").forEach((card, i) => {
    const data = t.cards[i];
    if (!data) return;

    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    const btn = card.querySelector(".btn");

    if (h3) h3.textContent = data.title;
    if (p) p.textContent = data.desc;
    if (btn) btn.textContent = t.bookBtn;
  });

  // Footer
  const footer = document.querySelector("footer p");
  if (footer) footer.textContent = t.footer;

  currentLang = lang;
}

// تغيير اللغة
function changeLang(lang) {
  applyTranslations(lang);
}

// تشغيل أول مرة
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.textContent.trim().toLowerCase();
      changeLang(lang);
    });
  });

  applyTranslations("ar");
});