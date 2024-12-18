import React from 'react';
import { Train } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Train className="h-8 w-8" />
            <span className="font-bold text-xl">SCR Carriage Workshop LGD</span>
          </Link>
        </div>
      </div>
    </header>
  );
}