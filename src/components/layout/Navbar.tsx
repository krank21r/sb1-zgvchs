import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/')}`}
          >
            Home
          </Link>
          <Link
            to="/rsp-works"
            className={`px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/rsp-works')}`}
          >
            RSP Works
          </Link>
          <Link
            to="/irsp"
            className={`px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/irsp')}`}
          >
            IRSP
          </Link>
          <Link
            to="/add-works"
            className={`px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive('/add-works')}`}
          >
            Add Works
          </Link>
        </div>
      </div>
    </nav>
  );
}