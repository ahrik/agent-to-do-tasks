import { Locale, Translations } from './types';

export const translations: Record<Locale, () => Promise<Translations>> = {
  en: () => import('@public/locales/en.json').then(module => module.default as Translations),
  ru: () => import('@public/locales/ru.json').then(module => module.default as Translations),
};
