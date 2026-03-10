import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
}

const Card: React.FC<CardProps> = ({ title, children, image, imageAlt, footer, variant = 'elevated' }) => {
  const baseClasses = 'p-4 rounded-xl shadow-md transition-shadow duration-300';
  const variantClasses = {
    elevated: 'bg-white hover:shadow-lg dark:bg-gray-800 dark:text-gray-100',
    outlined: 'border border-gray-300 bg-white hover:shadow dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100',
    filled: 'bg-gray-800 text-white hover:shadow-lg dark:bg-gray-700 dark:text-gray-100',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {image && <img src={image} alt={imageAlt} className="w-full h-48 object-cover rounded-t-lg" />}
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <div className="mt-2">{children}</div>
      {footer && <div className="mt-4 border-t pt-2">{footer}</div>}
    </div>
  );
};

export default Card;