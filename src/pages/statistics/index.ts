import { lazy } from 'react';

export const StatisticsPageLazy = lazy(() =>
  import('./ui/Statistics.page').then(({ StatisticsPage }) => ({ default: StatisticsPage }))
);
