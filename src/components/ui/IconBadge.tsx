import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/styles';

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple';
}

export function IconBadge({ 
  icon: Icon, 
  className,
  size = 'md',
  color = 'blue'
}: IconBadgeProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <div className={cn(
      'flex items-center justify-center rounded-lg',
      sizeClasses[size],
      colorClasses[color],
      className
    )}>
      <Icon className="h-6 w-6" />
    </div>
  );
}