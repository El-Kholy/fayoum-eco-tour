function changeLang(lang) {
  localStorage.setItem("lang", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar]").forEach(function (el) {
    el.textContent = el.getAttribute("data-" + lang);
  });
}

window.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "ar";
  changeLang(savedLang);
});