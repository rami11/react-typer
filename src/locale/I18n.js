import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        reset: "Reset",
        errors: "Errors",
        accuracy: "Accuracy",
        speed: "Speed",
      },
    },
    fr: {
      translation: {
        reset: "Réinitialiser",
        errors: "Erreurs",
        accuracy: "Précision",
        speed: "Vitesse",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
