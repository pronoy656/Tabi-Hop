import React from 'react';

const Card = ({ className = '', children, ...props }) => {
  const baseClasses = 'border-2 rounded-3xl';
  const combinedClasses = `${baseClasses} ${className}`.trim();
  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

export function CardContent({ className = '', children, ...props }) {
  const baseClasses = '';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

// Optional: CardHeader component
export function CardHeader({ className = '', children, ...props }) {
  const baseClasses = 'px-6 py-4 border-b border-gray-200';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = '', children, ...props }) {
  const baseClasses = 'text-lg font-semibold leading-none tracking-tight';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <h3 className={combinedClasses} {...props}>
      {children}
    </h3>
  );
}

// Optional: CardFooter component
export function CardFooter({ className = '', children, ...props }) {
  const baseClasses = 'px-6 py-4 border-t border-gray-200';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

export default Card;
