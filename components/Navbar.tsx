
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CLINIC_NAME } from '../constants';
import { openWhatsApp } from '../services/whatsapp';

interface NavbarProps {
  onOpenAi: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 text-2xl font-bold mr-2">🦷</span>
              <span className="font-bold text-xl text-gray-800 hidden sm:block">Dr. Talha Dental</span>
              <span className="font-bold text-xl text-gray-800 sm:hidden">Dr. Talha</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-500'
                } px-1 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={onOpenAi}
              className="flex items-center space-x-2 text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-all border border-blue-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>AI Assistant</span>
            </button>

            <button
              onClick={() => openWhatsApp()}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button onClick={onOpenAi} className="p-2 text-blue-600 bg-blue-50 rounded-lg font-bold text-xs uppercase tracking-wider">AI Help</button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                } block px-3 py-4 rounded-md text-base font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-3 space-y-3">
              <button
                onClick={() => { setIsOpen(false); onOpenAi(); }}
                className="w-full bg-blue-50 text-blue-600 px-4 py-3 rounded-md font-bold text-center"
              >
                Chat with AI Assistant
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openWhatsApp();
                }}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-bold hover:bg-blue-700 transition-all text-center"
              >
                Book on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
