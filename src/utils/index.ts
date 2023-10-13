import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';
import { useCallback, useState } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useToggle = (initialState: boolean = false) => {
  const [checked, setChecked] = useState(initialState);

  const handleChange = useCallback(() => {
    setChecked((prevChecked) => !prevChecked);
  }, []);

  return {
    checked,
    handleChange,
  };
};
