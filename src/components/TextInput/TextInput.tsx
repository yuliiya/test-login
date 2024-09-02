import clsx from 'clsx';
import { forwardRef } from 'react';

import { TextInputProps } from './TextInput.types';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          'block w-full shadow-sm ring-1 ring-inset rounded-md border-0 py-1.5 sm:leading-6',
          variant === 'default' &&
            'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm',
          variant === 'error' &&
            'text-red-600 ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm',
          className,
        )}
        {...props}
      />
    );
  },
);
