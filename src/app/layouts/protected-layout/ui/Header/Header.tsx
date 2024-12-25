import { SignOutButton } from '@features/auth';
import clsx from 'clsx';
import { Logo } from '@/app/layouts/Logo';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={clsx(styles.headerWrapper)}>
      <header className={clsx(styles.header)}>
        <div className={clsx(styles.headerLogo)}>
          <Logo />
        </div>

        <div className={clsx(styles.headerNav)}>Nav</div>

        <div className={clsx(styles.headerActions)}>
          <SignOutButton />
        </div>
      </header>
    </div>
  );
};
