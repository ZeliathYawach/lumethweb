import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';
import { Crown, Star, Shield, Users, Sparkles, Gift, Brain, Wand2, Shirt, MessageSquare } from 'lucide-react';

export function AboutUs() {
  return (
    <PageLayout title="About Us">
      <div className="prose prose-invert max-w-none">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-12 w-12 text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Welcome to LUMETH
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Your premier destination for AI-powered beauty services and personalized wellness solutions. We connect you with trusted beauty service providers and offer cutting-edge AI technology for your beauty journey.
          </p>
        </section>

        {/* What is Lumeth Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-400/10 to-purple-600/10 rounded-2xl p-8 border border-amber-400/20">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              What is Lumeth?
            </h2>
            <p className="text-gray-300 mb-6">
              Lumeth is a revolutionary AI-powered beauty platform that combines cutting-edge artificial intelligence with beauty expertise to provide personalized recommendations, virtual try-on experiences, and beauty service bookings—all in one seamless application.
            </p>
            <p className="text-gray-300 mb-6">
              Our mission is to transform how people approach beauty and wellness by making expert advice and personalized recommendations accessible to everyone through the power of AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20 flex flex-col items-center text-center">
                <Brain className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-sm text-gray-300">Advanced machine learning algorithms that understand your unique beauty needs</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20 flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Personalized</h3>
                <p className="text-sm text-gray-300">Tailored recommendations based on your individual features and preferences</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20 flex flex-col items-center text-center">
                <Shield className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Trusted</h3>
                <p className="text-sm text-gray-300">Verified beauty professionals and science-backed recommendations</p>
              </div>
            </div>
          </div>
        </section>

        {/* LUMETH Meaning Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-400/10 to-purple-600/10 rounded-2xl p-8 border border-amber-400/20">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              The Meaning of LUMETH
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
                <span className="text-3xl font-bold text-amber-400">L</span>
                <p className="mt-2 text-gray-300">is for <span className="text-white font-semibold">look</span>, the way you look at life.</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
                <span className="text-3xl font-bold text-amber-400">U</span>
                <p className="mt-2 text-gray-300">is for <span className="text-white font-semibold">useful</span>, always to others.</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
                <span className="text-3xl font-bold text-amber-400">M</span>
                <p className="mt-2 text-gray-300">is for <span className="text-white font-semibold">mystery</span>, the part of you that cannot be explained.</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
                <span className="text-3xl font-bold text-amber-400">E</span>
                <p className="mt-2 text-gray-300">is for <span className="text-white font-semibold">expert</span>, in your chosen career.</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
                <span className="text-3xl font-bold text-amber-400">T</span>
                <p className="mt-2 text-gray-300">is for <span className="text-white font-semibold">tough</span>, for you are not easily broken.</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
                <span className="text-3xl font-bold text-amber-400">H</span>
                <p className="mt-2 text-gray-300">is for <span className="text-white font-semibold">hero</span>, as you appear to many.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="mb-16">
          <div className="bg-purple-900/30 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              Our Journey
            </h2>
            <p className="text-gray-300">
              Founded by VANTEXID PRIVATE LIMITED, LUMETH was born out of a vision to revolutionize the beauty industry by providing a seamless and personalized experience for our customers. With a deep commitment to quality, authenticity, and customer satisfaction, we strive to be your go-to destination for all your beauty needs.
            </p>
          </div>
        </section>

        {/* Our AI-Powered Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Our AI-Powered Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-900/30 p-8 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 text-amber-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">LUMIA AI</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Your personal AI beauty consultant providing expert guidance on:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Personalized skincare advice and routines</li>
                <li>Custom diet planning for beauty from within</li>
                <li>AI-powered calorie counting</li>
                <li>Product recommendations and reviews</li>
                <li>Mental wellness support</li>
              </ul>
            </div>
            
            <div className="bg-purple-900/30 p-8 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-4">
                <Wand2 className="w-8 h-8 text-amber-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">STYLL AI</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Revolutionary virtual try-on technology:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Upload clothing images or photos of others wearing items</li>
                <li>Upload your own photo</li>
                <li>See yourself virtually wearing the clothing</li>
                <li>Realistic visualization before purchasing</li>
                <li>Try different styles and colors instantly</li>
              </ul>
            </div>
            
            <div className="bg-purple-900/30 p-8 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-amber-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">FACE ENHANCE</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Advanced image enhancement technology:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Process your photos to present your best look</li>
                <li>Highlight your natural beauty</li>
                <li>Subtle enhancements that maintain authenticity</li>
                <li>Perfect for social media and professional profiles</li>
              </ul>
            </div>
            
            <div className="bg-purple-900/30 p-8 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-4">
                <Scissors className="w-8 h-8 text-amber-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">Beauty Services</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Connect with top beauty professionals:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>AI-matched salon and spa recommendations</li>
                <li>Seamless booking system</li>
                <li>Verified service providers</li>
                <li>Personalized service suggestions</li>
                <li>Real-time availability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <Star className="h-8 w-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Dynamic Booking</h3>
              <p className="text-gray-300">Find the most convenient time slot for your beauty appointments.</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <Users className="h-8 w-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Personalized Service</h3>
              <p className="text-gray-300">Choose your preferred service provider for a tailored experience.</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <Gift className="h-8 w-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Exclusive Offers</h3>
              <p className="text-gray-300">Discover special deals from local beauty service providers.</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <Shield className="h-8 w-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Genuine Reviews</h3>
              <p className="text-gray-300">Trust in verified reviews and ratings from real customers.</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <Brain className="h-8 w-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Integration</h3>
              <p className="text-gray-300">Experience cutting-edge AI technology enhancing your beauty journey.</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <Shirt className="h-8 w-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Virtual Try-On</h3>
              <p className="text-gray-300">See how clothing and hairstyles look on you before making decisions.</p>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-400/10 to-purple-600/10 rounded-2xl p-8 border border-amber-400/20">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              Our Commitment
            </h2>
            <p className="text-gray-300">
              At LUMETH, we believe that everyone deserves to feel beautiful and confident. We're dedicated to providing a safe, reliable, and inclusive platform where beauty enthusiasts can explore, connect, and indulge in the best that the beauty industry has to offer. Our AI technology is designed to enhance your natural beauty and provide personalized recommendations that truly work for you.
            </p>
          </div>
        </section>

        {/* Legal Information */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Legal Information
          </h2>
          <div className="space-y-6">
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">Binding Contract</h3>
              <p className="text-gray-300">
                By initiating a transaction through Lumeth, you enter into a legally binding contract with us for the provision of services as outlined in the App.
              </p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">Governing Law</h3>
              <p className="text-gray-300">
                These Terms shall be governed by the laws of India. Any disputes shall be exclusively resolved by the courts in Chengannur, Kerala.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Get Started
          </h2>
          <p className="text-gray-300 mb-8">
            Join the LUMETH community today and embark on a journey to discover your perfect beauty experience. Whether you're looking for personalized AI recommendations, virtual try-on experiences, or connecting with beauty professionals, LUMETH is here to make your beauty dreams a reality.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}