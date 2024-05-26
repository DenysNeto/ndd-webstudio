import i18n from "i18next";
import { initReactI18next } from "react-i18next";
console.log("HERE");

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my app!",
        // Add more English translations here
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue dans mon application!",
        // Add more French translations here
      },
    },
  },
});

export default i18n;
