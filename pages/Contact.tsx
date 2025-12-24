
import React, { useState } from 'react';
import { CLINIC_NAME, ADDRESS, WHATSAPP_NUMBER, BUSINESS_LINK } from '../constants';
import { openWhatsApp } from '../services/whatsapp';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(formData.name, formData.phone, formData.message);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Have questions or want to schedule a visit? Our team is here to help you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Clinic Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-4 rounded-2xl mr-6 text-2xl">📍</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Our Location</h3>
                      <p className="text-gray-600 mt-1">{ADDRESS}</p>
                      <a 
                        href={BUSINESS_LINK} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold text-sm mt-3 inline-block hover:underline"
                      >
                        Get Directions on Google Maps
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-4 rounded-2xl mr-6 text-2xl">💬</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">WhatsApp / Call</h3>
                      <p className="text-gray-600 mt-1">{WHATSAPP_NUMBER}</p>
                      <button 
                        onClick={() => openWhatsApp()}
                        className="text-green-600 font-semibold text-sm mt-3 inline-block hover:underline"
                      >
                        Chat with us now
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 p-4 rounded-2xl mr-6 text-2xl">⏰</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Business Hours</h3>
                      <div className="text-gray-600 mt-1 space-y-1">
                        <p className="flex justify-between w-48"><span>Mon - Sat:</span> <span>11 AM - 9 PM</span></p>
                        <p className="flex justify-between w-48 text-gray-400"><span>Sunday:</span> <span>Closed</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Updated Google Map Embed */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-96 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2640722938004!2d73.71445137556357!3d32.944036775432046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f91041703ea8f%3A0xb9bf58afcd4e8e05!2sDr.%20Talha%20Dental%20Clinic%20-%20Jhelum!5e0!3m2!1sen!2s!4v1766486388729!5m2!1sen!2s"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Talha Dental Clinic Location"
                ></iframe>
                <div className="absolute inset-0 bg-blue-600/5 pointer-events-none transition-colors group-hover:bg-transparent"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="03XX-XXXXXXX"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject / Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg active:scale-95"
                >
                  <span className="mr-2">📨</span> Send on WhatsApp
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 30 minutes during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
