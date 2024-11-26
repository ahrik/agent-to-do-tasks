import { PropsWithChildren } from 'react';
import { I18nProvider } from '@shared/i18n';
import { AntProvider } from '@shared/lib/antd';
import { ComposeChildren } from '@shared/lib/react';
import { ToastProvider } from '@shared/lib/toasts';

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ComposeChildren>
      <AntProvider />
      <I18nProvider defaultLanguage="ru" />
      <ToastProvider />
      {children}
    </ComposeChildren>
  );
}
