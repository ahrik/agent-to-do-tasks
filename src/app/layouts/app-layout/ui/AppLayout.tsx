import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import styles from './appLayout.module.scss';

export function AppLayout() {
  console.dir(styles.appLayoutHasNav);

  return (
    <div className={clsx(styles.appLayout, styles.appLayoutHasNav)}>
      <Outlet />
    </div>
  );
}
