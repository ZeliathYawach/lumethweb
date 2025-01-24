import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';
import { Crown, Star, Shield, Users, Sparkles, Gift, Brain } from 'lucide-react';

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
            Your premier destination for hassle-free beauty services and products. We connect you with trusted beauty service providers and offer curated beauty products—all in one convenient place.
          </p>
        </section>

        {/* Journey Section */}
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

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Beauty Services</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Top-notch barber shops</li>
                <li>Luxurious salons</li>
                <li>Cutting-edge derma clinics</li>
                <li>Creative tattoo parlours</li>
                <li>Relaxing spas</li>
                <li>Rejuvenating massage centres</li>
              </ul>
            </div>
            <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80"
                alt="Beauty Services"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300">
                Each service provider is carefully vetted and verified to ensure excellence and professionalism.
              </p>
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
              <Sparkles className="h-8 w-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Beauty Marketplace</h3>
              <p className="text-gray-300">Coming soon: Shop curated beauty products from top brands.</p>
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
              At LUMETH, we believe that everyone deserves to feel beautiful and confident. We're dedicated to providing a safe, reliable, and inclusive platform where beauty enthusiasts can explore, connect, and indulge in the best that the beauty industry has to offer.
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
            Join the LUMETH community today and embark on a journey to discover your perfect beauty experience. Whether you're looking for a quick trim, a relaxing spa day, or a complete makeover, LUMETH is here to make your beauty dreams a reality.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}