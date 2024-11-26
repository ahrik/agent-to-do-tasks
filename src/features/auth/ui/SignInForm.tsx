import { useForm } from 'react-hook-form';
import { useI18n } from '@shared/i18n';
import { RHFInput } from '@shared/RHF-controls/RHFInput';
import { FormProvider } from '@shared/RHF-controls/RHFProvider';
import { Flex, Typography } from 'antd';
import { Button } from '@/shared/ui/Button';
import { useSignIn } from '../model/useSignIn';

type FormFields = {
  email: string;
  password: string;
};

type Props = {
  className?: string;
};

export function SignInForm({ className }: Props) {
  const { t } = useI18n();

  const methods = useForm<FormFields>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = methods;

  const { signIn, isLoading, error } = useSignIn();

  const handleSubmitSignIn = (formData: FormFields) => {
    signIn(formData);
  };

  const inProgress = isLoading || isSubmitting;

  return (
    <FormProvider<FormFields> methods={methods} onSubmit={handleSubmitSignIn} className={className}>
      <RHFInput
        label="Email"
        name="email"
        type="email"
        placeholder="example@ex.com"
        disabled={inProgress}
        size="large"
      />
      <RHFInput
        label={t('password-label')}
        name="password"
        type="password"
        placeholder="****"
        disabled={inProgress}
        size="large"
      />
      <Flex justify="center">
        <Button color="primary" variant="solid" htmlType="submit" loading={inProgress} size="large">
          {t('enter')}
        </Button>
      </Flex>
      {error && (
        <Flex justify="center">
          <Typography.Text type="danger">{error}</Typography.Text>
        </Flex>
      )}
    </FormProvider>
  );
}
