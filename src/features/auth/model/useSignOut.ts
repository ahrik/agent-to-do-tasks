import { useState } from 'react';
import { useSession } from '@entities/session';
import { api } from '@shared/api';
import { useI18n } from '@shared/i18n';

export function useSignOut() {
  const { t } = useI18n();
  const removeSession = useSession(({ removeSession }) => removeSession);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signOut = async () => {
    setIsLoading(true);

    await api
      .signOut()
      .catch((error: Error | unknown) => {
        console.error(error);
        setError(t('something-wrong'));
      })
      .finally(() => {
        setIsLoading(false);
      });

    return removeSession();
  };

  return {
    error,
    isLoading,
    signOut,
  };
}
