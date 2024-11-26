import { Locale, Translations } from './types';

export const translations: Record<Locale, () => Promise<Translations>> = {
  en: () => import('@public/locales/en.json').then(n => n.default),
  ru: () => import('@public/locales/ru.json').then(n => n.default),
};
