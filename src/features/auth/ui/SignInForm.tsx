import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useI18n } from '@shared/i18n';
import { RHFInput } from '@shared/RHF-controls/RHFInput';
import { FormProvider } from '@shared/RHF-controls/RHFProvider';
import { Flex, Typography } from 'antd';
import { z } from 'zod';
import { Button } from '@/shared/ui/Button';
import { SingInFormFieldsSchema } from '../model/schema';
import { useSignIn } from '../model/useSignIn';

type FormFields = z.infer<typeof SingInFormFieldsSchema>;

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
    resolver: zodResolver(SingInFormFieldsSchema),
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
        <Flex justify="center" style={{ marginTop: '24px' }}>
          <Typography.Text type="danger">{error}</Typography.Text>
        </Flex>
      )}
    </FormProvider>
  );
}
