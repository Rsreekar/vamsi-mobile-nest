import React, { createContext, useContext, useState } from 'react';
import en from '../i18n/en.json';
import te from '../i18n/te.json';
import hi from '../i18n/hi.json';

const translations = { en, te, hi };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const t = (path, fallback = '') => {
    if (!path || typeof path !== 'string') return fallback || '';
    const keys = path.split('.');
    let current = translations[lang] || translations.en;
    
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English
        let fallbackCurrent = translations.en;
        for (const fKey of keys) {
          if (fallbackCurrent && fallbackCurrent[fKey] !== undefined) {
            fallbackCurrent = fallbackCurrent[fKey];
          } else {
            return fallback || path;
          }
        }
        current = fallbackCurrent;
        break;
      }
    }

    if (typeof current === 'object' && current !== null) {
      return fallback || path;
    }

    return current !== undefined && current !== null ? String(current) : (fallback || path);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
