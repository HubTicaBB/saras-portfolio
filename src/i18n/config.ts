import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import contentRS from './locale/rs/content.json';
import contentEN from './locale/en/content.json';

export const resources = {
  rs: { content: contentRS },
  en: { content: contentEN },
} as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
