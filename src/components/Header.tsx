import React, { useState } from 'react';
import { Menu, X, Scissors, Phone, MapPin, User } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-amber-400 to-yellow-600 p-2 rounded-full">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">#SalonName</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">Home</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">Services</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">About</a>
              <a href="#booking" className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Book Now
              </a>
            </nav>

            {/* Auth & Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600 mr-4">
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4" />
                  <span>(+91)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>Location</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {/* <button
                  onClick={() => openAuthModal('login')}
                  className="text-gray-700 hover:text-amber-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-amber-50"
                >
                  Sign In
                </button> */}
                <button
                  onClick={() => openAuthModal('register')}
                  className="bg-white border border-amber-500 text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-200"
                >
                  <User className="h-4 w-4 inline mr-2" />
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">Home</a>
                <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">Services</a>
                <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">About</a>
                <a href="#booking" className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-yellow-700 transition-all duration-200 shadow-lg text-center">
                  Book Now
                </a>
                <div className="flex space-x-2 pt-2">
                  <button
                    onClick={() => openAuthModal('login')}
                    className="flex-1 text-gray-700 hover:text-amber-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-amber-50 text-center"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => openAuthModal('register')}
                    className="flex-1 bg-white border border-amber-500 text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-200 text-center"
                  >
                    Sign Up
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}