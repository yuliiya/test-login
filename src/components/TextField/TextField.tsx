import clsx from 'clsx';
import { forwardRef } from 'react';
import { PasswordTextInput } from 'src/components/PasswordTextInput';
import { TextFieldError } from 'src/components/TextFieldError';
import { TextFieldLabel } from 'src/components/TextFieldLabel';
import type { TextInputVariant } from 'src/components/TextInput';
import { TextInput } from 'src/components/TextInput';

import { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, children, className, disabled, required, label, error, type, ...rest }, ref) => {
    const variant: TextInputVariant = error ? 'error' : 'default';

    const inputProps = { ...rest, id, ref, disabled, variant };

    return (
      <div className={clsx('block', className)}>
        <TextFieldLabel disabled={disabled} required={required} htmlFor={id} aria-invalid={error ? 'true' : 'false'}>
          {label}
        </TextFieldLabel>

        {type === 'password' ? <PasswordTextInput {...inputProps} /> : <TextInput {...inputProps} type={type} />}

        {error && <TextFieldError role="alert">{error}</TextFieldError>}
        {children}
      </div>
    );
  },
);
