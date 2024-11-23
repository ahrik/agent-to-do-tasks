import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import styles from './public-layout.module.scss';

export function PublicLayout() {
  return (
    <div className={clsx(styles.publicLayout)}>
      <Outlet />
    </div>
  );
}
