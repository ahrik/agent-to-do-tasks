export type Translations = Record<string, string>;
export type Locale = 'en' | 'ru';

export type I18nContextProps = {
  t: (key: string) => string;
  changeLanguage: (lang: Locale) => void;
  language: Locale;
};
