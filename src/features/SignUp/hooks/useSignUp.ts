import { useState } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { ISignUpForm } from 'src/features/SignUp';
import { useToggle } from 'src/hooks';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function useSignUp() {
  const {
    reset,
    control,
    getValues,
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
  } = useForm<ISignUpForm>({ mode: 'onChange', criteriaMode: 'all' });

  const [open, toggleModal] = useToggle();
  const [formData, setFormData] = useState<ISignUpForm | undefined>();

  const passwordErrorsTypes = errors.password?.types;
  const errorsList = passwordErrorsTypes ? Object.keys(passwordErrorsTypes) : [];

  const password = useWatch({ control, name: 'password' });
  const confirmPassword = useWatch({ control, name: 'confirmPassword' });

  const matchPasswordError =
    password !== confirmPassword && getValues('confirmPassword') && getValues('password')
      ? 'Passwords do not match'
      : undefined;

  const getRuleStatusStyle = (rule: string) => {
    if (!password) return 'text-slate-500';
    return errorsList.includes(rule) ? 'text-red-600' : 'text-green-600';
  };

  const onSubmit: SubmitHandler<ISignUpForm> = async (data) => {
    await sleep(2000);
    toggleModal();
    reset();
    setFormData(data);
  };

  const handleCloseModal = () => {
    setFormData(undefined);
    toggleModal();
  };

  return {
    open,
    errors,
    register,
    onSubmit,
    formData,
    errorsList,
    handleSubmit,
    isSubmitting,
    handleCloseModal,
    matchPasswordError,
    getRuleStatusStyle,
    isValid: isValid && !matchPasswordError,
  };
}
