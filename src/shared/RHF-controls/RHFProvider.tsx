import { ComponentPropsWithRef } from 'react';
import { FieldValues, FormProvider as ReactHookFormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Form } from 'antd';

export type FormProviderProps<T extends FieldValues> = Omit<ComponentPropsWithRef<'form'>, 'onSubmit'> & {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  fullWidth?: boolean;
};

export const FormProvider = <T extends FieldValues>(props: FormProviderProps<T>) => {
  const { methods, onSubmit, onChange, children } = props;
  const { handleSubmit } = methods;

  return (
    <ReactHookFormProvider {...methods}>
      <Form onFinish={handleSubmit(onSubmit)} onChange={onChange}>
        {children}
      </Form>
    </ReactHookFormProvider>
  );
};
