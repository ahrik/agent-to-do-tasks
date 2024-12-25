import LogoIcon from '@public/logo.svg?react';
import clsx from 'clsx';

import styles from './logo.module.scss';

type Props = {
  size?: 'small' | 'medium' | 'large';
  hideText?: boolean;
};

export const Logo = ({ hideText }: Props) => (
  <div className={clsx(styles.logo, hideText && styles.logoHidedText)}>
    <div className={clsx(styles.logoIcon)}>
      <LogoIcon />
    </div>
    {!hideText && <div className={clsx(styles.logoText)}>Taskly</div>}
  </div>
);
