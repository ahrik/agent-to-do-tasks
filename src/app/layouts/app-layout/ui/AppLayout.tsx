import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import styles from './appLayout.module.scss';

export function AppLayout() {
  return (
    <div className={clsx(styles.appLayout)}>
      <Outlet />
    </div>
  );
}
