import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from './NavigationItems';
import { NavLink } from '../ui/NavLink';

interface NavMenuProps {
  className?: string;
}

export function NavMenu({ className = '' }: NavMenuProps) {
  return (
    <nav className={className}>
      <ul className="flex items-center space-x-6 lg:space-x-8">
        {navigationItems.map(({ id, label, path }) => (
          <li key={id}>
            <Link
              to={path}
              className="relative group text-gray-200 hover:text-amber-400 transition-colors duration-300"
            >
              <span className="relative z-10">{label}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </li>
        ))}
        
        
      </ul>
    </nav>
  );
}