import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Shield, Users } from 'lucide-react';
import { AppStoreButtons } from './ui/AppStoreButtons';

export function Hero() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            AI-Powered Beauty Platform
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
            Transform Your Beauty Experience with Smart Recommendations
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover and book services at premier salons, luxury spas, professional tattoo parlors, and beauty centers. Get personalized AI recommendations tailored to your style and preferences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <Users className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Beauty Professionals</h3>
              <p className="text-gray-400 text-sm">Connect with verified experts in salons, spas, and beauty centers</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <Star className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">AI Recommendations</h3>
              <p className="text-gray-400 text-sm">Get personalized service suggestions based on your preferences</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <Shield className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Verified Services</h3>
              <p className="text-gray-400 text-sm">Book with confidence at vetted salons and beauty centers</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/get-started"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link 
                to="/business"
                className="w-full sm:w-auto border border-amber-400 text-amber-400 px-6 sm:px-8 py-3 rounded-full hover:bg-amber-400/10 transition-colors text-center"
              >
                For Beauty Professionals
              </Link>
            </div>
            <AppStoreButtons variant="dark" className="flex-wrap justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}