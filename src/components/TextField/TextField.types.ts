import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  label?: ReactNode;
  error?: ReactNode;
  required?: boolean;
}
