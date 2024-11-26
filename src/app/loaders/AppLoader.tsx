import { ReactNode, useEffect, useState } from 'react';
import { Spinner } from '@shared/ui/Spinner';
import { useSession } from '@/entities/session';
import { useAppInterceptor } from '../app-interceptor';

export function AppLoader({ children }: { children?: ReactNode }) {
  const loadSession = useSession(s => s.loadSession);
  const [isLoading, setIsLoading] = useState(true);

  useAppInterceptor();

  useEffect(() => {
    setIsLoading(true);

    Promise.all([loadSession()])
      .finally(() => {
        setIsLoading(false);
      })
      .catch(() => {});
  }, [loadSession]);

  return (
    <>
      {isLoading && <Spinner />}
      {isLoading ? null : children}
    </>
  );
}
