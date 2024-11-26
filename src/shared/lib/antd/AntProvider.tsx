import { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import { theme } from './theme/theme';

export function AntProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider csp={{ nonce: 'taskly-' }} theme={theme}>
      {children}
    </ConfigProvider>
  );
}
