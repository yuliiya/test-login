import { ComponentPropsWithoutRef } from 'react';

export type TextInputVariant = 'default' | 'error';

export interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
  variant?: TextInputVariant;
}
