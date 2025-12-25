import React from 'react';
import { ADDRESS, WHATSAPP_NUMBER, BUSINESS_LINK } from '../constants';
import { openWhatsApp } from '../services/whatsapp';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Located in the heart of Jhelum. Visit us or reach out online.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Clinic Address</h3>
                <p className="text-gray-600">{ADDRESS}</p>
                <a href={BUSINESS_LINK} target="_blank" rel="noreferrer" className="text-blue-600 font-bold block mt-4">Open Google Maps →</a>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
                <p className="text-gray-600">Mon - Sat: 11:00 AM - 9:00 PM</p>
                <p className="text-red-500 font-bold">Sunday: Closed</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border">
                <h3 className="text-xl font-bold mb-4">WhatsApp Contact</h3>
                <p className="text-gray-600">{WHATSAPP_NUMBER}</p>
                <button onClick={() => openWhatsApp()} className="bg-green-500 text-white px-6 py-2 rounded-xl mt-4 font-bold">Start Chat</button>
              </div>
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2640722938004!2d73.71445137556357!3d32.944036775432046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f91041703ea8f%3A0xb9bf58afcd4e8e05!2sDr.%20Talha%20Dental%20Clinic%20-%20Jhelum!5e0!3m2!1sen!2s!4v1766486388729!5m2!1sen!2s"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;