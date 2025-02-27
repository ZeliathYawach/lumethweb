import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';
import { Mail, MapPin, Building, Phone } from 'lucide-react';

export function Contact() {
  return (
    <PageLayout title="Contact Us">
      <div className="max-w-4xl mx-auto">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300">
            <Mail className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <a 
              href="mailto:lumethpvrt@gmail.com"
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              lumethpvrt@gmail.com
            </a>
          </div>
          
          <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300">
            <Building className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Legal Entity</h3>
            <p className="text-gray-300">VANTEXID PRIVATE LIMITED</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-gradient-to-r from-amber-400/10 to-purple-600/10 rounded-2xl p-8 border border-amber-400/20 mb-12">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Our Address</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-amber-400 mb-2">Registered & Operational Address</h4>
                  <p className="text-gray-300">
                    Peroor House, Thonnackad P.O.,<br />
                    Chengannur, Kerala,<br />
                    PIN: 689511
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-purple-900/30 rounded-xl p-8 border border-purple-500/20">
          <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
                placeholder="Your message"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-12">
          <p className="text-gray-300">
            Thank you for choosing LUMETH. Let's redefine beauty together.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}