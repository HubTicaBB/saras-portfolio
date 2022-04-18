import i18n from '../i18n/config';
import { LocalizedProp } from '../types/artworks';

export const localized = (prop: LocalizedProp) =>
  i18n.language === 'rs' ? prop.rs : prop.en;
