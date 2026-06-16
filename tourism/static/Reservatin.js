const translations = {
  ar: {
    pageTitle: "احجز رحلتك",
    title: "احجز رحلتك إلى الفيوم",
    subtitle: "املأ بياناتك لتجربة حجز مريحة",
    step1: "1- بيانات الزائر",
    step2: "2- تحديد نوع الحجز",
    step3: "3- طريقة الدفع",
    addTraveler: "+ إضافة مسافر آخر",
    hotelTitle: "حجز فندق",
    tripTitle: "حجز رحلة",
    bankTransfer: "تحويل بنكي",
    receiverData: "بيانات المحول له",
    senderData: "بيانات المحول",
    visaText: "بطاقة فيزا",
    submitBtn: "تأكيد الحجز الآن",
    nav1: "الصفحة الرئيسية",
    nav2: "المطاعم",
    nav3: "المعالم",
    nav4: "الفنادق",
    nav5: "الحجوزات",
    nav6: "الإرشادات",
    nav7: "من نحن",
    nav8: "تواصل معنا",
    placeholders: {
      fName: "الاسم الأول",
      lName: "الاسم الأخير",
      nationality: "الجنسية",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      hotelPersons: "عدد الأشخاص",
      hotelStart: "تاريخ البداية",
      hotelEnd: "تاريخ النهاية",
      tripPersons: "عدد الأشخاص",
      tripStart: "تاريخ البداية",
      tripEnd: "تاريخ النهاية",
      bankName: "اسم البنك",
      accountName: "اسم صاحب الحساب",
      accountNumber: "رقم الحساب",
      iban: "IBAN",
      swift: "SWIFT",
      currency: "العملة",
      senderName: "اسم المحول",
      reference: "رقم المرجع",
      receipt: "رفع الإيصال",
      cardName: "اسم حامل البطاقة",
      cardNumber: "رقم البطاقة",
      expiry: "تاريخ الانتهاء",
      cvv: "CVV",
      country: "دولة الإصدار"
    }
  },

  en: {
    pageTitle: "Book Your Trip",
    title: "Book Your Trip to Fayoum",
    subtitle: "Fill your data easily",
    step1: "1- Visitor Info",
    step2: "2- Booking Type",
    step3: "3- Payment Method",
    addTraveler: "+ Add Traveler",
    hotelTitle: "Hotel Booking",
    tripTitle: "Trip Booking",
    bankTransfer: "Bank Transfer",
    receiverData: "Receiver Info",
    senderData: "Sender Info",
    visaText: "Visa Card",
    submitBtn: "Confirm Booking",
    nav1: "Home",
    nav2: "Restaurants",
    nav3: "Attractions",
    nav4: "Hotels",
    nav5: "Bookings",
    nav6: "Guidelines",
    nav7: "About Us",
    nav8: "Contact Us",
    placeholders: {
      fName: "First Name",
      lName: "Last Name",
      nationality: "Nationality",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hotelPersons: "Number of People",
      hotelStart: "Start Date",
      hotelEnd: "End Date",
      tripPersons: "Number of People",
      tripStart: "Start Date",
      tripEnd: "End Date",
      bankName: "Bank Name",
      accountName: "Account Holder",
      accountNumber: "Account Number",
      iban: "IBAN",
      swift: "SWIFT",
      currency: "Currency",
      senderName: "Sender Name",
      reference: "Reference",
      receipt: "Upload Receipt",
      cardName: "Card Name",
      cardNumber: "Card Number",
      expiry: "Expiry Date",
      cvv: "CVV",
      country: "Country"
    }
  }
};

/* =========================
   LANGUAGE FUNCTION
========================= */
function changeLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.body.style.direction = (lang === "ar") ? "rtl" : "ltr";

  Object.keys(translations[lang]).forEach(key => {
    if (key !== "placeholders") {
      const el = document.getElementById(key);
      if (el) el.innerText = translations[lang][key];
    }
  });

  Object.keys(translations[lang].placeholders).forEach(id => {
    const input = document.getElementById(id);
    if (input) input.placeholder = translations[lang].placeholders[id];
  });

  document.querySelectorAll('.lang button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
  });
}

/* =========================
   ADD TRAVELERS
========================= */
let travelerCount = 1;
const maxTravelers = 5;

const addBtn = document.getElementById("addTraveler");
const container = document.getElementById("travelersContainer");
const baseForm = document.querySelector(".grid");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (travelerCount >= maxTravelers) {
    alert("لا يمكنك إضافة أكثر من 5 مسافرين");
    return;
  }

  travelerCount++;
  const clone = baseForm.cloneNode(true);
  clone.querySelectorAll("input").forEach(input => input.value = "");

  const title = document.createElement("h4");
  title.textContent = `مسافر إضافي ${travelerCount}`;
  title.style.margin = "10px 0";
  title.style.color = "#2e7d32";

  const wrapper = document.createElement("div");
  wrapper.className = "extra-traveler";
  wrapper.appendChild(title);
  wrapper.appendChild(clone);

  container.appendChild(wrapper);
});

/* =========================
   PREFILL FROM HOME PAGE
========================= */
function loadFromSession() {
  const date   = sessionStorage.getItem('visitDate');
  const people = sessionStorage.getItem('peopleCount');
  const place  = sessionStorage.getItem('selectedPlace');

  if (date || people || place) {

    // حط البيانات في فورم الرحلة
    if (date   && document.getElementById('tripStart'))
      document.getElementById('tripStart').value = date;

    if (people && document.getElementById('tripPersons'))
      document.getElementById('tripPersons').value = people;

    // ظهر البانر
    const banner = document.getElementById('prefilledBanner');
    if (banner) {
      banner.style.display = 'block';
      if (place)  document.getElementById('bannerPlace').innerText  = place;
      if (date)   document.getElementById('bannerDate').innerText   = date;
      if (people) document.getElementById('bannerPeople').innerText = people;
    }

    // امسح بعد ما اتحطت
    sessionStorage.removeItem('visitDaشte');
    sessionStorage.removeItem('peopleCount');
    sessionStorage.removeItem('selectedPlace');
  }
}

/* =========================
   INIT ON LOAD
========================= */
window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "ar";
  changeLang(savedLang);
  loadFromSession();
};