import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import styles from './app-layout.module.scss';

console.log(styles);

export function AppLayout() {
  return (
    <div className={clsx(styles.appLayout)}>
      <Outlet />
    </div>
  );
}
