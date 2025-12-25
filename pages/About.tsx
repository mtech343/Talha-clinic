import React from 'react';
import { CLINIC_NAME, ADDRESS } from '../constants';
import { openWhatsApp } from '../services/whatsapp';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience Excellence in Jhelum</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dr. Talha Dental Clinic is the premier destination for oral healthcare in Jhelum. We merge compassionate care with state-of-the-art technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="Clinic" className="rounded-3xl shadow-2xl" />
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded by Dr. Talha Liaquat, our clinic prides itself on offering the most comfortable dental treatments in Jada, Jhelum. From pediatric care to complex root canals and implants, we handle it all with precision.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-blue-50 p-6 rounded-2xl text-center">
                  <p className="text-3xl font-bold text-blue-600">5+</p>
                  <p className="text-sm font-bold text-gray-500 uppercase">Years</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl text-center">
                  <p className="text-3xl font-bold text-blue-600">2.5k+</p>
                  <p className="text-sm font-bold text-gray-500 uppercase">Patients</p>
                </div>
              </div>
              <button onClick={() => openWhatsApp()} className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg">Chat with Dr. Talha</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;