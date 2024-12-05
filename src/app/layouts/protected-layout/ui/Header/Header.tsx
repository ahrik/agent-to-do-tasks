import { SignOutButton } from '@features/auth';
import clsx from 'clsx';
import { Logo } from '@/app/layouts/Logo';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={clsx(styles.header__wrapper)}>
      <header className={clsx(styles.header)}>
        <div className={clsx(styles.header__logo)}>
          <Logo />
        </div>

        <div className={clsx(styles.header__nav)}>Nav</div>

        <div className={clsx(styles.header__actions)}>
          <SignOutButton />
        </div>
      </header>
    </div>
  );
};
