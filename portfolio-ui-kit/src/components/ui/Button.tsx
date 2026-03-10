import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-primary dark:hover:bg-primary/90',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 dark:bg-secondary dark:hover:bg-secondary/90',
    danger: 'bg-red-500 text-white hover:bg-red-600 dark:bg-error dark:hover:bg-error/90',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700',
  };
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  return (
    <button className={classes} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;