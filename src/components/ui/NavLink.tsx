import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ to, children, className = '', onClick }: NavLinkProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if the link is to a section on the home page
    if (to.startsWith('/#')) {
      const sectionId = to.substring(2); // Remove the /# prefix
      const element = document.getElementById(sectionId);
      
      // If we're already on the home page, just scroll to the section
      if (window.location.pathname === '/') {
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL without full navigation
          window.history.pushState(null, '', to);
        }
      } else {
        // If we're on another page, navigate to home with the hash
        navigate(to);
      }
    } else {
      // For other links, just navigate normally
      navigate(to);
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`relative group ${className}`}
    >
      <span className="relative z-10 text-gray-200 hover:text-amber-400 transition-colors duration-300">
        {children}
      </span>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  );
}