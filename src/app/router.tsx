import { createBrowserRouter, redirect } from 'react-router-dom';
import { ForbiddenPage } from '@pages/ForbiddenPage.tsx';
import { SignInPage } from '@pages/sign-in';
import { TasksPage } from '@pages/tasks';
import { ROUTERS } from '@shared/constants/routes';
import { AppLayout } from './layouts/app-layout';
import { ProtectedLayout } from './layouts/protected-layout';
import { PublicLayout } from './layouts/public-layout';
import { AntProvider } from './providers/ant-provider';
import { AppProvider } from './providers/AppProvider';

export const router = createBrowserRouter([
  {
    element: (
      <AntProvider>
        <AppProvider>
          <AppLayout />
        </AppProvider>
      </AntProvider>
    ),
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: ROUTERS.TASKS,
            element: <TasksPage />,
          },
        ],
      },
      {
        element: <PublicLayout />,
        children: [
          {
            path: ROUTERS.SIGN_IN,
            element: <SignInPage />,
          },
        ],
      },
    ],
  },
  { path: ROUTERS.FORBIDDEN, element: <ForbiddenPage /> },
  {
    path: '*',
    loader: () => redirect(ROUTERS.ROOT),
  },
]);
