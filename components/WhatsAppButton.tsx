
import React from 'react';
import { openWhatsApp } from '../services/whatsapp';

const WhatsAppButton: React.FC = () => {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl whatsapp-pulse hover:scale-110 transition-transform active:scale-90 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.996-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.125 1.419 4.767 1.42 5.454 0 9.893-4.438 9.895-9.892.001-2.64-1.03-5.122-2.903-6.994s-4.353-2.906-6.993-2.907c-5.456 0-9.893 4.439-9.895 9.894-.001 1.761.477 3.42 1.436 4.898l-1.011 3.693 3.794-.992zm11.722-6.79c-.301-.15-1.782-.88-2.057-.981-.275-.1-.475-.15-.674.15-.2.3-.774.981-.949 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.488-.891-.795-1.492-1.778-1.667-2.078-.175-.3-.019-.462.13-.611.135-.133.301-.35.451-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.674-1.626-.924-2.226-.243-.585-.491-.506-.674-.515-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 0.375-.275.3-1.05 1.026-1.05 2.501 0 1.475 1.075 2.899 1.225 3.099.15.2 2.115 3.229 5.125 4.529.715.31 1.274.495 1.71.635.717.227 1.369.195 1.885.118.575-.085 1.782-.729 2.032-1.432.25-.702.25-1.303.175-1.432-.075-.125-.275-.2-.575-.35z" />
      </svg>
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        Need help? Chat now
      </span>
    </button>
  );
};

export default WhatsAppButton;
