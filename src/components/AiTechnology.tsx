import React from 'react';
import bgImage from "./bg.jpg";
import { MessageSquare, Wand2, Sparkles, Brain, Utensils, Calculator, Star, Scissors, Shirt, HeartPulse, Smile } from 'lucide-react';

export function AiTechnology() {
  return (
    <section id="aibeauty" className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
           src={bgImage}
          alt="AI Beauty Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-purple-900/70 to-black/90" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              Advanced AI Beauty Technology
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Experience our suite of AI-powered tools designed to revolutionize your beauty journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="flex items-start space-x-4">
              <MessageSquare className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">LUMIA AI</h3>
                <p className="text-gray-400">Your personal AI beauty consultant. Get expert guidance on beauty, skincare, and fitness through intelligent chat conversations.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="flex items-start space-x-4">
              <Wand2 className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">STYLL AI</h3>
                <p className="text-gray-400">Virtual try-on technology that lets you visualize how you'd look in any garment. Upload your photo and desired clothing to see the magic.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="flex items-start space-x-4">
              <Sparkles className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">FACE ENHANCE</h3>
                <p className="text-gray-400">Advanced image enhancement technology that processes your photos to present your best look, highlighting your natural beauty.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Brain className="w-6 h-6 text-amber-400 mr-2" />
              AI-Powered Beauty Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <Utensils className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Diet Planning</h4>
                  <p className="text-sm text-gray-400">Personalized nutrition plans for beauty from within</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Calculator className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Calorie Counter</h4>
                  <p className="text-sm text-gray-400">Track your nutrition with AI precision</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Product Reviews</h4>
                  <p className="text-sm text-gray-400">AI-analyzed beauty product recommendations</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Scissors className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Hair Styling</h4>
                  <p className="text-sm text-gray-400">Virtual hairstyle and color suggestions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Smile className="w-6 h-6 text-amber-400 mr-2" />
              Personalized Wellness
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <Shirt className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Clothing Style</h4>
                  <p className="text-sm text-gray-400">Fashion recommendations tailored to you</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <HeartPulse className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Exercise Plans</h4>
                  <p className="text-sm text-gray-400">Custom fitness routines for your goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Brain className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Mental Wellness</h4>
                  <p className="text-sm text-gray-400">AI therapy and mental health support</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MessageSquare className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-white">Beauty Reasoning</h4>
                  <p className="text-sm text-gray-400">Understand the science behind recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-amber-400/10 to-purple-600/10 rounded-2xl border border-amber-400/20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Brain className="w-8 h-8 text-amber-400" />
            <h3 className="text-xl font-semibold text-white">Powered by Advanced AI</h3>
          </div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Our AI technologies use state-of-the-art machine learning models to provide personalized beauty recommendations, realistic virtual try-ons, and advanced image enhancements tailored specifically to you.
          </p>
        </div>
      </div>
    </section>
  );
}