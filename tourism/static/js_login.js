const content = {
  ar: {
    title: "اكتشف الفيوم",
    email: "البريد الإلكتروني",
    password: "كلمة السر",
    remember: "تذكرني",
    forgot: "هل نسيت كلمة السر؟",
    login: "تسجيل الدخول",
    signupText: "ليس لديك حساب؟",
    signupLink: "إنشاء حساب جديد"
  },
  en: {
    title: "Discover Fayoum",
    email: "Email Address",
    password: "Password",
    remember: "Remember me",
    forgot: "Forgot your password?",
    login: "Login",
    signupText: "Don't have an account?",
    signupLink: "Create a new account"
  }
};

function changeLang(lang) {
  document.getElementById("title").innerText = content[lang].title;

  document.getElementById("email").placeholder = content[lang].email;
  document.getElementById("password").placeholder = content[lang].password;

  document.getElementById("remember").innerText = content[lang].remember;
  document.getElementById("forgot").innerText = content[lang].forgot;

  document.getElementById("loginBtn").innerText = content[lang].login;

  document.getElementById("signupText").childNodes[0].nodeValue =
    content[lang].signupText + " ";

  document.getElementById("signupLink").innerText = content[lang].signupLink;

  // تغيير الاتجاه
  document.body.dir = (lang === "ar") ? "rtl" : "ltr";

  // تغيير لغة الصفحة
  document.documentElement.lang = lang;
}
