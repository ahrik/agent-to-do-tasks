import { SignInForm } from '@features/auth';
import clsx from 'clsx';

import styles from './signInPage.module.scss';

export function SignInPage() {
  return (
    <div className={clsx(styles.signInPage)}>
      <SignInForm />
    </div>
  );
}
