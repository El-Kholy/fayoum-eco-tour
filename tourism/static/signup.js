const content = {
  ar: {
    title: "حسابك هو أول خطوة\nنحو تجربة لا تُنسى في الفيوم",
    fname: "الاسم الأول",
    lname: "الاسم الأخير",
    email: "البريد الإلكتروني",
    password: "كلمة السر",
    confirm: "تأكيد كلمة السر",
    signup: "إنشاء حساب",
    divider: "أو",
    footer: "© 2026 Fayoum Eco Tours جميع الحقوق محفوظة"
  },
  en: {
    title: "Your account is the first step\nTowards an unforgettable experience in Fayoum",
    fname: "First Name",
    lname: "Last Name",
    email: "Email Address",
    password: "Password",
    confirm: "Confirm Password",
    signup: "Sign Up",
    divider: "OR",
    footer: "© 2026 Fayoum Eco Tours All rights reserved"
  }
};

function changeLang(lang) {
  document.getElementById("title").innerText = content[lang].title;

  document.getElementById("fname").placeholder = content[lang].fname;
  document.getElementById("lname").placeholder = content[lang].lname;
  document.getElementById("email").placeholder = content[lang].email;
  document.getElementById("password").placeholder = content[lang].password;
  document.getElementById("confirm").placeholder = content[lang].confirm;

  document.getElementById("signupBtn").innerText = content[lang].signup;
  document.getElementById("divider").innerText = content[lang].divider;
  document.getElementById("footer").innerText = content[lang].footer;

  // الاتجاه
  document.body.dir = (lang === "ar") ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}
