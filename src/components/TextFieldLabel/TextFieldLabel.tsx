import clsx from 'clsx';

import { TextFieldLabelProps } from './TextFieldLabel.types';

export const TextFieldLabel = ({ disabled, required, className, ...props }: TextFieldLabelProps) => (
  <label
    className={clsx(
      'mb-1 block font-sans text-sm font-medium',
      disabled ? 'text-slate-400 dark:text-slate-600' : 'text-slate-900 dark:text-slate-300',
      required && "after:ml-0.5 after:content-['*']",
      required && {
        'after:text-sky-500 dark:after:text-sky-300': !disabled,
        'after:text-slate-400': disabled,
      },
      className,
    )}
    {...props}
  />
);
