import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavMenu } from './navigation/NavMenu';
import { MobileMenu } from './ui/MobileMenu';
import logo from '../assets/log.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="fixed w-full z-50"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-sm rounded-full border border-amber-400/10 shadow-lg shadow-purple-500/5">
          <div className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-center">
              <Link 
                to="/" 
                className="flex items-center"
                aria-label="Lumeth home"
              >
                <img 
                  src={logo}
                  alt="Lumeth Logo" 
                  className="h-[60px] w-[60px] object-contain"
                  loading="eager"
                />
                <span className="ml-1 text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
                  Lumeth
                </span>
              </Link>
            </div>
            
            <NavMenu className="hidden md:block" />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-amber-400 transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </header>
  );
}