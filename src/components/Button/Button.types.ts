import { ComponentPropsWithoutRef } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'error';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  loading?: boolean;
  variant?: ButtonVariant;
}
