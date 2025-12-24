
import React from 'react';
import { SERVICES } from '../constants';
import { openWhatsApp } from '../services/whatsapp';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Providing a wide range of specialized and general dental treatments to keep your smile healthy and beautiful.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 transition-all group-hover:bg-blue-600 group-hover:scale-150 duration-500"></div>
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500 relative z-10">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-blue-50 transition-colors duration-500 relative z-10">
                  {service.description}
                </p>
                <div className="mt-8 pt-8 border-t border-gray-50">
                  <button
                    onClick={() => openWhatsApp('', '', `I am interested in ${service.title}.`)}
                    className="text-blue-600 font-bold flex items-center group-hover:text-white transition-colors duration-500"
                  >
                    Get Consultation <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 text-center shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 text-lg mb-10">
              Every smile is unique. If you have a specific concern or need a specialized treatment not listed here, feel free to reach out for a consultation.
            </p>
            <button
              onClick={() => openWhatsApp()}
              className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-blue-700 transition-all active:scale-95"
            >
              Book Appointment on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
