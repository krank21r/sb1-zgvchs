import React from 'react';
import { cn } from '../../utils/styles';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-lg p-6",
        hover && "transition-transform hover:scale-105 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}