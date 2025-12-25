import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CLINIC_NAME } from '../constants';
import { openWhatsApp } from '../services/whatsapp';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(formData.name, formData.phone, formData.message);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20 md:pt-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 clip-path-hero hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-ping"></span>
                Top Rated Clinic in Jhelum
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Modern Dentistry <br />
                <span className="text-blue-600">Perfected with Care</span>
              </h1>
              <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Welcome to <strong>{CLINIC_NAME}</strong>. We provide world-class dental expertise using advanced diagnostic tools and painless treatment techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => openWhatsApp()} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-200 active:scale-95">
                  Book Free Consult
                </button>
                <button onClick={() => openWhatsApp()} className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-blue-50 active:scale-95 flex items-center justify-center">
                  <span className="mr-2">💬</span> WhatsApp Now
                </button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] animate-float">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-[100px] opacity-20"></div>
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Modern Dental" className="relative z-10 w-full rounded-[40px] shadow-2xl border-8 border-white transform rotate-3" />
                <div className="absolute -top-6 -right-6 glass-effect p-4 rounded-2xl shadow-lg z-20 animate-bounce">
                  <span className="text-3xl">🛡️</span>
                  <p className="text-xs font-bold text-gray-800">100% Sterile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-gray-50 p-10 rounded-[32px] border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-8">{service.description}</p>
                <Link to="/services" className="text-blue-600 font-bold">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Schedule Your Visit</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[40px] text-gray-900 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" required placeholder="Your Name" className="w-full p-4 bg-gray-50 rounded-2xl border outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="tel" required placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-2xl border outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <textarea placeholder="Tell us about your concern..." className="w-full p-4 bg-gray-50 rounded-2xl border outline-none mb-6" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
            <button type="submit" className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold text-xl shadow-lg">Confirm via WhatsApp</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;