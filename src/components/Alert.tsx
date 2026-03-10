import React from 'react';

interface AlertProps {
  variant?: 'info' | 'success' | 'error' | 'warning';
  children?: React.ReactNode;
}

const variantClasses: Record<string, string> = {
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900',
  success: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900',
  error: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900',
};

export default function Alert({ variant = 'info', children }: AlertProps) {
  return (
    <div className={`p-4 rounded-lg ${variantClasses[variant]}`}>{children}</div>
  );
}
