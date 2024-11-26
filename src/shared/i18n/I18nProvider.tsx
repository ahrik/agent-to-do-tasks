import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { translations } from './translations';
import { I18nContextProps, Locale, Translations } from './types';

export const I18nContext = createContext<I18nContextProps | null>(null);

type Props = PropsWithChildren & {
  defaultLanguage: Locale;
};

export const I18nProvider = ({ children, defaultLanguage = 'en' }: Props) => {
  const [language, setLanguage] = useState<Locale>(defaultLanguage);
  const [currentTranslations, setCurrentTranslations] = useState<Translations>({});

  useEffect(() => {
    translations[language]().then(setCurrentTranslations).catch(console.error);
  }, [language]);

  const changeLanguage = (lang: Locale) => setLanguage(lang);

  const t = (key: string) => currentTranslations[key] || key;

  return <I18nContext.Provider value={{ t, changeLanguage, language }}>{children}</I18nContext.Provider>;
};
