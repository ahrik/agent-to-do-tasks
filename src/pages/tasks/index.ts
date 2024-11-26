import { lazy } from 'react';

export const TasksPageLazy = lazy(() => import('./ui/Tasks.page').then(({ TasksPage }) => ({ default: TasksPage })));
