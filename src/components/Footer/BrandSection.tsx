import React from 'react';
import { AppStoreButtons } from '../ui/AppStoreButtons';
import logo from '../../assets/log.png';  // Correct path to import the image

export function BrandSection() {
  return (
    <div>
      {/* Logo Image */}
      <div className="flex items-center mb-6">
        <img 
          src={logo}  // Using the imported image
          alt="Lumeth Logo" 
          className="h-16 w-16"  // Adjusted size for better visibility
        />
        <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
          Lumeth
        </span>
      </div>
      
      {/* Tagline */}
      <p className="text-gray-400 mb-6">
        Revolutionizing the beauty service industry with AI-powered solutions.
      </p>
      
      {/* App Store Buttons */}
      <AppStoreButtons variant="dark" appType="customer" />
    </div>
  );
}
