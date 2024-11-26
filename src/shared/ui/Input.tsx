import { forwardRef, PropsWithChildren } from 'react';
import { Input as AntdInput, InputProps as AntdInputProps, InputRef } from 'antd';

export type InputProps = AntdInputProps & PropsWithChildren;

export const Input = forwardRef<InputRef, InputProps>(({ children, ...restProps }: InputProps, ref) => {
  return (
    <AntdInput ref={ref} {...restProps}>
      {children}
    </AntdInput>
  );
});
