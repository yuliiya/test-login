import { Button } from 'src/components/Button';
import { Modal } from 'src/components/Modal';
import { TextField } from 'src/components/TextField';
import { SignUpHeader } from 'src/features/SignUp/components/SignUpHeader';
import { MIN_PASSWORD_LENGTH, validatePassword } from 'src/utils/passwordValidation.ts';
import { emailPattern } from 'src/utils/regExpPatterns.ts';

import { PasswordValidationList } from './components/PasswordValidationList';
import { useSignUp } from './hooks/useSignUp';
import { signUpFormConfig } from './SignUp.utils';

const required = 'The field is required';

export const SignUp = () => {
  const {
    open,
    errors,
    register,
    onSubmit,
    isValid,
    formData,
    errorsList,
    handleSubmit,
    isSubmitting,
    handleCloseModal,
    matchPasswordError,
    getRuleStatusStyle,
  } = useSignUp();

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <SignUpHeader />
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...signUpFormConfig['email']}
          {...register('email', {
            required,
            pattern: {
              value: emailPattern,
              message: 'Please enter a valid email address',
            },
          })}
          error={errors.email?.message}
        />

        <TextField
          {...signUpFormConfig['password']}
          {...register('password', {
            required,
            validate: validatePassword,
            minLength: MIN_PASSWORD_LENGTH,
          })}
          error={errors.password?.message || errorsList.length > 0}
        >
          <PasswordValidationList title="Password must contain:" getStyle={getRuleStatusStyle} />
        </TextField>

        <TextField
          {...signUpFormConfig['confirmPassword']}
          {...register('confirmPassword', {
            required,
          })}
          error={errors.confirmPassword?.message || matchPasswordError}
        />

        <Button
          type="submit"
          loading={isSubmitting}
          className="flex w-full justify-center"
          disabled={isSubmitting || !isValid}
        >
          Submit
        </Button>
      </form>
      <Modal open={open} onClose={handleCloseModal} title="Welcome to our app!">
        <p className="text-sm font-sans">
          <span className="text-sm font-semibold mr-3">Your email:</span>
          {formData?.email}
        </p>
        <p className="text-sm font-sans">
          <span className="text-sm font-semibold mr-3">Your password:</span> {formData?.password}
        </p>
      </Modal>
    </div>
  );
};
