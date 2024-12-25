import { Outlet } from 'react-router-dom';
import classnamesBind from 'classnames/bind';
import { Header } from './Header/Header';

import styles from './protectedLayout.module.scss';

// Типизация для CSS-модулей
// type Styles = typeof styles;

// Настройка `classnames/bind`
// const cn: (...args: Parameters<typeof classnamesBind>) => keyof Styles = classnamesBind.bind(styles);

const cn = classnamesBind.bind(styles);

export function ProtectedLayout() {
  console.log(styles.protectedLayout__header);

  return (
    <div className={cn('protectedLayout')}>
      <div className={cn('protectedLayout__header')}>
        <Header />
      </div>

      <div className={cn('protectedLayout__content')}>
        <Outlet />
      </div>
    </div>
  );
}
