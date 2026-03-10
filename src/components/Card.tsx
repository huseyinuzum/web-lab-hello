import React from 'react';

interface CardProps {
  variant?: 'elevated' | 'flat';
  title?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export default function Card({
  variant = 'elevated',
  title,
  image,
  imageAlt,
  children,
}: CardProps) {
  let classes = 'rounded-lg overflow-hidden bg-white dark:bg-gray-800';
  if (variant === 'elevated') {
    classes += ' shadow-lg';
  }
  return (
    <div className={classes}>
      {image && <img src={image} alt={imageAlt} className="w-full h-48 object-cover" />}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>}
        <p className="text-gray-700 dark:text-gray-300">{children}</p>
      </div>
    </div>
  );
}
