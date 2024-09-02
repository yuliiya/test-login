import { TextFieldError } from 'src/components/TextFieldError/TextFieldError.tsx';
import { passwordValidationRules } from 'src/utils/passwordValidation.ts';

import { PasswordValidationListProps } from './PasswordValidationList.types';

export function PasswordValidationList({ title, getStyle }: PasswordValidationListProps) {
  return (
    <div className="flex flex-col mt-1">
      <p className="mt-1 mb-1 block font-sans text-sm font-medium">{title}</p>
      {Object.entries(passwordValidationRules).map(([rule, text], index) => (
        <TextFieldError colorClass={getStyle(rule)} key={rule}>
          {`${index + 1}. ${text}`}
        </TextFieldError>
      ))}
    </div>
  );
}
