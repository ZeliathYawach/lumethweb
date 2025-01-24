import React from 'react';
import { MessageSquare, Wand2, Replace, Brain } from 'lucide-react';
import { SplineBackground } from './ui/SplineBackground';

export function AiTechnology() {
  return (
    <section id="aibeauty" className="relative min-h-screen py-24 overflow-hidden">
      <SplineBackground 
        url="https://prod.spline.design/Pqv2Bt1ZkUUQxlKn/scene.splinecode"
      />
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
              <Replace className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">FACEFLICK AI</h3>
                <p className="text-gray-400">Advanced deepfake technology that lets you replace your face with any desired face, or have your face replace others. Perfect for visualizing different looks and styles.</p>
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
            Our AI technologies use state-of-the-art machine learning models to provide personalized beauty recommendations, realistic virtual try-ons, and advanced face replacement transformations.
          </p>
        </div>
      </div>
    </section>
  );
}