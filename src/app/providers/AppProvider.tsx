import { PropsWithChildren } from 'react';
import { ComposeChildren } from '@shared/lib/react';

export function AppProvider({ children }: PropsWithChildren) {
  return <ComposeChildren>{children}</ComposeChildren>;
}
