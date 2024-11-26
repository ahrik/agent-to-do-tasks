import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { Logo } from '@/app/layouts/Logo';

import styles from './publicLayout.module.scss';

export function PublicLayout() {
  return (
    <div className={clsx(styles.publicLayout)}>
      <main className={clsx(styles.publicLayout__content)}>
        <header className={clsx(styles.publicLayout__logo)}>
          <Logo />
        </header>

        <section className={clsx(styles.publicLayout__children)}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
