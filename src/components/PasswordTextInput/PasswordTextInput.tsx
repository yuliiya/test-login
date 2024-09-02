/// <reference types="vite-plugin-svgr/client" />
import { forwardRef, useState } from 'react';
import Eye from 'src/assets/eye.svg?react';
import EyeSlash from 'src/assets/eyeSlash.svg?react';
import type { TextInputProps } from 'src/components/TextInput';
import { TextInput } from 'src/components/TextInput';

export const PasswordTextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prevState) => !prevState);

  return (
    <div className="relative">
      <TextInput {...props} ref={ref} type={isPasswordVisible ? 'text' : 'password'} />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? <EyeSlash /> : <Eye />}
      </button>
    </div>
  );
});
