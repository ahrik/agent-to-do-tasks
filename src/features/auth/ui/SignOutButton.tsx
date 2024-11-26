import { Button } from '@shared/ui/Button';
import { useSignOut } from '../model/useSignOut';

export function SignOutButton({ className }: { className?: string }) {
  const { signOut, isLoading } = useSignOut();

  const handleClick = () => {
    signOut();
  };

  return (
    <Button loading={isLoading} className={className} onClick={handleClick}>
      Выход
    </Button>
  );
}
