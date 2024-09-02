import clsx from 'clsx';

import { TextFieldErrorProps } from './TextFieldError.types';

export const TextFieldError = ({ className, colorClass = 'text-red-500', ...rest }: TextFieldErrorProps) => (
  <span className={clsx(className, 'font-sans text-sm font-light', colorClass)} {...rest} />
);
