import React from 'react';
import { SERVICES } from '../constants';
import { openWhatsApp } from '../services/whatsapp';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Treatments</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">From preventive care to advanced surgery, we provide a full spectrum of dental services.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all">
                <div className="text-5xl mb-6">{s.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-600 mb-8">{s.description}</p>
                <button 
                  onClick={() => openWhatsApp('', '', `I'm interested in ${s.title}`)} 
                  className="text-blue-600 font-bold"
                >
                  Book Consultation →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;