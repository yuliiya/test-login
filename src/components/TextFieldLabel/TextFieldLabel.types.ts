import { ComponentPropsWithoutRef } from 'react';

export interface TextFieldLabelProps extends ComponentPropsWithoutRef<'label'> {
  disabled?: boolean;
  required?: boolean;
}
