import { forwardRef } from 'react';
import { Spinner } from 'src/components/Spinner';

import { ButtonProps } from './Button.types';
import { getButtonClasses } from './Button.utils';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, loading, variant = 'primary', ...rest }, forwardedRef) => {
    const buttonClasses = getButtonClasses({ variant, className });

    return (
      <button className={buttonClasses} {...rest} ref={forwardedRef}>
        {loading ? <Spinner /> : children}
      </button>
    );
  },
);
