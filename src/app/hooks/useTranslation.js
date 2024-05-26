// hooks/useTranslation.js

import { useState } from "react";
import en from "../../app/assets/data/translations/en";
import fr from "../../app/assets/data/translations/fr";

const translations = { en, fr };

const useTranslation = () => {
  const [language, setLanguage] = useState("en");

  const t = (key, params = {}) => {
    const translation = translations[language][key] || key;
    return Object.entries(params).reduce(
      (result, [paramKey, paramValue]) =>
        result.replace(new RegExp(`{{${paramKey}}}`, "g"), paramValue),
      translation
    );
  };

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  return { t, changeLanguage };
};

export default useTranslation;
