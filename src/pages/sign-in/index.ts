import { lazy } from 'react';

export const SignInPageLazy = lazy(() =>
  import('./ui/sign-in.page').then(({ SignInPage }) => ({ default: SignInPage }))
);
