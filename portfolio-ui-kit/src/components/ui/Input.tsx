import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder?: string;
  error?: string;
  helpText?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder = '',
  error,
  helpText,
  disabled = false,
  className = '',
  ...props
}) => {
  const describedBy = [];
  if (error) describedBy.push(`${id}-error`);
  if (helpText) describedBy.push(`${id}-help`);

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        aria-describedby={describedBy.join(' ') || undefined}
        aria-invalid={!!error}
        disabled={disabled}
        className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed ${
          error
            ? 'border-error focus:ring-error'
            : 'border-gray-300 focus:ring-primary'
        } ${className}`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-error">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-muted">
          {helpText}
        </p>
      )}
    </div>
  );
};

export default Input;
