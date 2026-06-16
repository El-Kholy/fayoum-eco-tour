// =============================================
// profile.js
// =============================================

// فتح المودال
function openModal() {
    document.getElementById("editModal").style.display = "flex";
}

// غلق المودال
function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

// معاينة الصورة قبل الرفع
function previewAndSubmit(input) {

    if (input.files && input.files[0]) {

        const reader = new FileReader();

        reader.onload = function(e) {

            let preview = document.getElementById("preview-img");

            if (!preview) {

                preview = document.createElement("img");
                preview.id = "preview-img";
                preview.classList.add("profile-preview");

                document.querySelector(".circle-label").innerHTML = "";
                document.querySelector(".circle-label").appendChild(preview);
            }

            preview.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// الترجمة
const translations = {

    ar: {
        noBooking: "لا توجد حجوزات حالياً",
        footer: "© 2026 Fayoum Eco Tours - جميع الحقوق محفوظة",
    },

    en: {
        noBooking: "No bookings available",
        footer: "© 2026 Fayoum Eco Tours - All Rights Reserved",
    }

};

// تغيير اللغة
function changeLang(lang) {

    const html = document.documentElement;

    if (lang === "en") {

        html.lang = "en";
        html.dir = "ltr";

        document.getElementById("nav1").innerText = "Home";
        document.getElementById("nav2").innerText = "Restaurants";
        document.getElementById("nav3").innerText = "Landmarks";
        document.getElementById("nav4").innerText = "Hotels";
        document.getElementById("nav5").innerText = "Reservations";
        document.getElementById("nav6").innerText = "Guidelines";
        document.getElementById("nav7").innerText = "About Us";
        document.getElementById("nav8").innerText = "Contact Us";

        document.getElementById("logoutText").innerText = "Logout";

        document.getElementById("personalTitle").innerText = "Personal Information";
        document.getElementById("contactTitle").innerText = "Contact Information";
        document.getElementById("travelTitle").innerText = "Travel Information";

        document.getElementById("labelFullName").innerText = "Full Name";
        document.getElementById("labelNationality").innerText = "Nationality";
        document.getElementById("labelLanguage").innerText = "Preferred Language";
        document.getElementById("labelBirth").innerText = "Date of Birth";

        document.getElementById("labelEmail").innerText = "Email";
        document.getElementById("labelPhone").innerText = "Phone";
        document.getElementById("labelCountry").innerText = "Country";
        document.getElementById("labelCity").innerText = "City";

        document.getElementById("edit").querySelector("span").innerText = "Edit Profile";

        document.getElementById("modalTitle").innerText = "Edit Profile";

        // لا توجد حجوزات
        document.getElementById("noBooking").innerText =
            translations[lang].noBooking;

        // الفوتر
        document.getElementById("footer").innerText =
            translations[lang].footer;

    } else {

        html.lang = "ar";
        html.dir = "rtl";

        document.getElementById("nav1").innerText = "الصفحة الرئيسية";
        document.getElementById("nav2").innerText = "المطاعم";
        document.getElementById("nav3").innerText = "المعالم";
        document.getElementById("nav4").innerText = "الفنادق";
        document.getElementById("nav5").innerText = "الحجوزات";
        document.getElementById("nav6").innerText = "الإرشادات";
        document.getElementById("nav7").innerText = "من نحن";
        document.getElementById("nav8").innerText = "تواصل معنا";

        document.getElementById("logoutText").innerText = "خروج";

        document.getElementById("personalTitle").innerText = "معلومات شخصية";
        document.getElementById("contactTitle").innerText = "معلومات التواصل";
        document.getElementById("travelTitle").innerText = "معلومات السفر";

        document.getElementById("labelFullName").innerText = "الاسم بالكامل";
        document.getElementById("labelNationality").innerText = "الجنسية";
        document.getElementById("labelLanguage").innerText = "اللغة المفضلة";
        document.getElementById("labelBirth").innerText = "تاريخ الميلاد";

        document.getElementById("labelEmail").innerText = "البريد الإلكتروني";
        document.getElementById("labelPhone").innerText = "رقم الهاتف";
        document.getElementById("labelCountry").innerText = "البلد";
        document.getElementById("labelCity").innerText = "المدينة";

        document.getElementById("edit").querySelector("span").innerText =
            "تعديل الملف الشخصي";

        document.getElementById("modalTitle").innerText =
            "تعديل الملف الشخصي";

        // لا توجد حجوزات
        document.getElementById("noBooking").innerText =
            translations[lang].noBooking;

        // الفوتر
        document.getElementById("footer").innerText =
            translations[lang].footer;
    }
}
function previewAndSubmit(input) {

    if (input.files && input.files[0]) {

        const reader = new FileReader();

        reader.onload = function(e) {

            let preview = document.getElementById("preview-img");

            if (!preview) {

                preview = document.createElement("img");
                preview.id = "preview-img";
                preview.classList.add("profile-preview");

                const label = document.querySelector(".circle-label");
                label.innerHTML = "";
                label.appendChild(preview);
            }

            preview.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);

        // 🔥 ده المهم: submit تلقائي
        document.getElementById("profile-form").submit();
    }
}

// غلق المودال عند الضغط خارج الصندوق
window.onclick = function(event) {

    const modal = document.getElementById("editModal");

    if (event.target === modal) {
        closeModal();
    }
};