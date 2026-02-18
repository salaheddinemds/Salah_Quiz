import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = false }: CardProps) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-xl shadow-md
        ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
