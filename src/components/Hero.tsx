import React from 'react';
import { Sparkles, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-lg">
            <Award className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-medium text-gray-700">Award-Winning Luxury Salon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Beauty,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600"> Perfected</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience premium beauty services in our luxurious salon. From cutting-edge hair styling to rejuvenating spa treatments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#booking"
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200"
            >
              View Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">5000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <Sparkles className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">Premium Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}