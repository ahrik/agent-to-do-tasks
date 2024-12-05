import { useContext } from 'react';
import { I18nContext } from './I18nProvider';
import { I18nContextProps } from './types';

export const useI18n = (): I18nContextProps => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context;
};
