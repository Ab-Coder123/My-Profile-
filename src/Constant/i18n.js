import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Main_Page: "Main Page",
        Portfoilo: "Portfolio",
        Contact: "Contact",
      },
    },
    ar: {
      translation: {
        Main_Page: "الصفحة الرئيسية",
        Portfoilo: "الأعمال",
        Contact: "تواصل معنا",
      },
    },
  },
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
