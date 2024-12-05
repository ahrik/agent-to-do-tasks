import { useI18n } from '@shared/i18n';
import { Button } from '@shared/ui/Button';
import { useSignOut } from '../model/useSignOut';

export function SignOutButton({ className }: { className?: string }) {
  const { signOut, isLoading } = useSignOut();
  const { t } = useI18n();

  const handleClick = () => {
    signOut();
  };

  return (
    <Button loading={isLoading} className={className} onClick={handleClick}>
      {t('sign-out')}
    </Button>
  );
}
