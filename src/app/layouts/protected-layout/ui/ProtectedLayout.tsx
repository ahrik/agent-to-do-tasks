import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { Header } from '@/app/layouts/protected-layout/ui/Header/Header';

import styles from './protectedLayout.module.scss';

export function ProtectedLayout() {
  return (
    <div className={clsx(styles.protectedLayout)}>
      <div className={clsx(styles.protectedLayout__header)}>
        <Header />
      </div>

      <div className={clsx(styles.protectedLayout__content)}>
        <Outlet />
      </div>
    </div>
  );
}
