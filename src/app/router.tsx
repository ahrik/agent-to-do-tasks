import { createBrowserRouter } from 'react-router-dom';
import { ForbiddenPage } from '@pages/ForbiddenPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { SignInPageLazy } from '@pages/sign-in';
import { StatisticsPageLazy } from '@pages/statistics';
import { TasksPageLazy } from '@pages/tasks';
import { ROUTERS } from '@shared/constants';
import { AppLoader } from '@/app/loaders/AppLoader';
import { AppLayout } from './layouts/app-layout';
import { ProtectedLayout } from './layouts/protected-layout';
import { PublicLayout } from './layouts/public-layout';
import { AppProvider } from './providers/AppProvider';

export const router = createBrowserRouter([
  {
    element: (
      <AppLoader>
        <AppProvider>
          <AppLayout />
        </AppProvider>
      </AppLoader>
    ),
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: ROUTERS.ROOT,
            element: <StatisticsPageLazy />,
          },
          {
            path: ROUTERS.TASKS,
            element: <TasksPageLazy />,
          },
        ],
      },
      {
        element: <PublicLayout />,
        children: [
          {
            path: ROUTERS.SIGN_IN,
            element: <SignInPageLazy />,
          },
        ],
      },
    ],
  },
  { path: ROUTERS.FORBIDDEN, element: <ForbiddenPage /> },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
