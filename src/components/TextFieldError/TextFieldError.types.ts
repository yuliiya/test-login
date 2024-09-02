import { ComponentPropsWithoutRef } from 'react';

export type TextFieldErrorProps = ComponentPropsWithoutRef<'span'> & {
  colorClass?: string;
};
