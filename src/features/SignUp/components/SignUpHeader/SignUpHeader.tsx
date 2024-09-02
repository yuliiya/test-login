/// <reference types="vite-plugin-svgr/client" />
import Logo from 'src/assets/notebook.svg?react';

export const SignUpHeader = () => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6">
      <h2 className="mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create new account</h2>
      <Logo className="text-center m-auto" />
    </div>
  );
};
