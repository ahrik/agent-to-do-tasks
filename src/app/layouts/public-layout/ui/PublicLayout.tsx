import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { Logo } from '@/app/layouts/Logo';

import styles from './publicLayout.module.scss';

export function PublicLayout() {
  console.log(styles);

  return (
    <div className={clsx(styles.publicLayout)}>
      <main className={clsx(styles.publicLayoutContent)}>
        <header className={clsx(styles.publicLayoutLogo)}>
          <Logo />
        </header>

        <section className={clsx(styles.publicLayoutChildren)}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
