import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import styles from './protectedLayout.module.scss';

export function ProtectedLayout() {
  return (
    <div className={clsx(styles.protectedLayout)}>
      <Outlet />
    </div>
  );
}
