'use client';

import { FaCartPlus } from 'react-icons/fa6';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      className='flex w-full gap-6 items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-700 rounded-md py-3 text-center text-md font-medium text-white bg-slate-900 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300'
    >
      <FaCartPlus size={18} />
      {label}
    </button>
  );
};

export default Button;
