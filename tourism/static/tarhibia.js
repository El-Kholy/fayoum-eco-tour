function changeLang(lang) {

    // العناصر اللي عندها ترجمة كاملة
    const fullElements = document.querySelectorAll("[data-ar][data-en]");

    fullElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // لو فيه عناصر داخلها أجزاء (زي paragraph)
    const spanElements = document.querySelectorAll("span[data-ar][data-en]");

    spanElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // تغيير اللغة في HTML فقط
    document.documentElement.lang = lang;

    // تغيير الاتجاه بدون ما نكسر CSS
    if (lang === "en") {
        document.body.setAttribute("dir", "ltr");
    } else {
        document.body.setAttribute("dir", "rtl");
    }
}
