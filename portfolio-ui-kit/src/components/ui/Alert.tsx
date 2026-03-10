import React, { useState } from 'react';

type Variant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: Variant;
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const variantStyles: Record<Variant, string> = {
  info: 'bg-blue-100 text-blue-800 border-blue-200',
  success: 'bg-green-100 text-green-800 border-green-200',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  error: 'bg-red-100 text-red-800 border-red-200',
};

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
}) => {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
    onDismiss && onDismiss();
  };

  if (!visible) return null;

  return (
    <div
      role="alert"
      className={`${variantStyles[variant]} border p-4 rounded-lg flex items-start justify-between`}
    >
      <div className="flex-1">
        {title && <strong className="block font-semibold mb-1">{title}</strong>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          className="ml-4 text-current hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
