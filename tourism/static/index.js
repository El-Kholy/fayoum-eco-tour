const content = {
  ar: {
    nav: ["الصفحة الرئيسية","المطاعم","المعالم",
          "الفنادق","احجز الآن","الإرشادات","من نحن","تواصل معنا"],
    bookBtn: "احجز الآن",
    searchBtn: "بحث",
    heroTitle: "اكتشف جمال الفيوم",
    heroDesc: "رحلة تنبض بالطبيعة، التاريخ والمغامرة"
  },
  en: {
    nav: ["Home","Restaurants","Attractions",
          "Hotels","Book Now","Guidelines","About Us","Contact Us"],
    bookBtn: "Book Now",
    searchBtn: "Search",
    heroTitle: "Discover the Beauty of Fayoum",
    heroDesc: "A journey full of nature, history and adventure"
  }
};

let currentLang = localStorage.getItem('lang') || 'ar';

function changeLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const t = content[lang];
  const isAr = lang === 'ar';

  // direction
  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
  document.body.dir             = isAr ? 'rtl' : 'ltr';

  // nav links
  for (let i = 1; i <= 8; i++) {
    const el = document.getElementById('nav' + i);
    if (el) el.textContent = t.nav[i - 1];
  }

  // زرار الحجز في الـ navbar
  const bookBtn = document.querySelector('.book-btn');
  if (bookBtn) bookBtn.textContent = t.bookBtn;

  // search button — بيحتفظ بالأيقونة
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.firstChild.textContent = t.searchBtn + ' ';
  }

  // كل عنصر عنده data-ar و data-en
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = isAr
      ? el.getAttribute('data-ar')
      : (el.getAttribute('data-en') || el.getAttribute('data-ar'));
  });

  // تمييز زرار اللغة النشط
  document.querySelectorAll('.lang button').forEach(btn => {
    const isActive = btn.textContent.trim().toLowerCase() === lang;
    btn.style.fontWeight = isActive ? '700' : '400';
    btn.style.color = isActive
      ? 'var(--color-text-primary)'
      : 'var(--color-text-secondary)';
  });
}

// تطبيق اللغة المحفوظة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  changeLang(currentLang);
});

// دالة البحث
function goToPlace() {
  const select = document.getElementById('placeFilter');
  const date   = document.getElementById('visitDate');
  const people = document.getElementById('peopleCount');

  if (!select || !select.value) {
    alert(currentLang === 'ar'
      ? 'من فضلك اختر المكان أولاً'
      : 'Please select a destination first');
    return;
  }
  if (!date || !date.value) {
    alert(currentLang === 'ar'
      ? 'من فضلك اختر تاريخ الزيارة'
      : 'Please select a visit date');
    return;
  }
  if (!people || !people.value || people.value < 1) {
    alert(currentLang === 'ar'
      ? 'من فضلك أدخل عدد الأشخاص'
      : 'Please enter number of guests');
    return;
  }

  sessionStorage.setItem('visitDate',    date.value);
  sessionStorage.setItem('peopleCount',  people.value);
  sessionStorage.setItem('selectedPlace',
    select.options[select.selectedIndex].text);
}
  window.location.href = place;

function goToPlace() {
    const select = document.getElementById("placeFilter");
    const url = select.value;

    if (url) {
        window.location.href = url;
    }
}
