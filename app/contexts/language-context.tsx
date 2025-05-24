"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import textsFr from "../../lang/data-texts-fr";
import textsEn from "../../lang/data-texts-en";

type Language = "fr" | "en";

const LanguageContext = createContext({
  language: "en" as Language,
  toggleLanguage: () => {},
  texts: textsFr,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const texts = language === "fr" ? textsFr : textsEn;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts: texts }}>
      {children}
    </LanguageContext.Provider>
  );
};
