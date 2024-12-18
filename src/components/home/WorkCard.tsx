import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { IconBadge } from '../ui/IconBadge';

interface WorkCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color: 'blue' | 'green' | 'purple';
}

export function WorkCard({ title, description, icon, to, color }: WorkCardProps) {
  return (
    <Link to={to}>
      <Card hover>
        <IconBadge 
          icon={icon} 
          color={color} 
          className="mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </Card>
    </Link>
  );
}