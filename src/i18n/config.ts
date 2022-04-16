import content from './rs/content.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {
  rs: { content },
} as const;

i18n.use(initReactI18next).init({
  lng: 'rs',
  ns: ['content'],
  interpolation: {
    escapeValue: false,
  },
  resources,
});
