import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Shield, Users } from 'lucide-react';
import { AppStoreButtons } from './ui/AppStoreButtons';

export function Hero() {
  return (
    <section 
      id="hero"
      aria-label="Hero section"
      className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-b from-black to-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text"
            role="heading"
            aria-level="1"
          >
            AI-Powered Beauty Platform for Salons & Spas
          </h1>
          <h2 
            className="text-xl sm:text-2xl text-gray-300 mb-6"
            role="heading"
            aria-level="2"
          >
            Transform Your Beauty Experience with Smart AI Recommendations & Professional Services
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover and book services at premier salons, luxury spas, professional tattoo parlors, and beauty centers. Get personalized AI recommendations tailored to your style and preferences. <Link to="/about" className="text-amber-400 hover:text-amber-300 transition-colors">Learn more about our platform</Link>.
          </p>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            role="list"
            aria-label="Key features"
          >
            <Link 
              to="/business" 
              className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300"
              role="listitem"
            >
              <Users className="w-8 h-8 text-amber-400 mb-3 mx-auto" aria-hidden="true" />
              <h3 className="text-white font-semibold mb-2">Beauty Professionals</h3>
              <p className="text-gray-400 text-sm">Connect with verified experts in salons, spas, and beauty centers</p>
            </Link>
            <Link 
              to="/blog" 
              className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300"
              role="listitem"
            >
              <Star className="w-8 h-8 text-amber-400 mb-3 mx-auto" aria-hidden="true" />
              <h3 className="text-white font-semibold mb-2">AI Recommendations</h3>
              <p className="text-gray-400 text-sm">Get personalized service suggestions based on your preferences</p>
            </Link>
            <Link 
              to="/privacy-policy" 
              className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300"
              role="listitem"
            >
              <Shield className="w-8 h-8 text-amber-400 mb-3 mx-auto" aria-hidden="true" />
              <h3 className="text-white font-semibold mb-2">Verified Services</h3>
              <p className="text-gray-400 text-sm">Book with confidence at vetted salons and beauty centers</p>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/get-started"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
                role="button"
                aria-label="Get started with Lumeth"
              >
                <Sparkles className="w-5 h-5 mr-2" aria-hidden="true" />
                Get Started
              </Link>
              <Link 
                to="/business"
                className="w-full sm:w-auto border border-amber-400 text-amber-400 px-6 sm:px-8 py-3 rounded-full hover:bg-amber-400/10 transition-colors text-center"
                role="button"
                aria-label="Learn about Lumeth for beauty professionals"
              >
                For Beauty Professionals
              </Link>
            </div>
            <div className="space-y-2">
              <AppStoreButtons variant="dark" className="flex-wrap justify-center" />
              <p className="text-sm text-gray-400">
                Read our <Link to="/terms" className="text-amber-400 hover:text-amber-300 transition-colors">Terms</Link> and <Link to="/privacy-policy" className="text-amber-400 hover:text-amber-300 transition-colors">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}