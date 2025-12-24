
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
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/dental-hero/1920/1080"
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced Dental Care <br />
              <span className="text-blue-400">For Your Entire Family</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-200">
              Welcome to {CLINIC_NAME}. We provide high-quality dental treatments in a sterile and comfortable environment. Save your smile with Jhelum's most trusted dentist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openWhatsApp()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95"
              >
                Book Appointment
              </button>
              <button
                onClick={() => openWhatsApp()}
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center"
              >
                <span className="mr-2">💬</span> WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive dental solutions to address all your oral health needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to="/services" className="text-blue-600 font-semibold flex items-center hover:underline">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Jhelum Trusts Dr. Talha</h2>
              <p className="text-gray-600 mb-8">
                With years of experience and a patient-first approach, we ensure that every visit is comfortable and effective.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Sterile Environment", desc: "100% sterilized instruments and hygienic clinic standards.", icon: "🛡️" },
                  { title: "Modern Technology", desc: "Digital X-rays and advanced tools for accurate diagnosis.", icon: "🔬" },
                  { title: "Expert Care", desc: "Dr. Talha specializes in complex dental procedures with high success rates.", icon: "👨‍⚕️" },
                  { title: "Painless Treatment", desc: "We prioritize your comfort with painless numbing and gentle techniques.", icon: "☁️" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/dental-tech/800/800"
                alt="Dental Clinic"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">5.0</p>
                <p className="text-sm font-medium opacity-80 mb-2">Google Rating</p>
                <div className="flex text-yellow-400">
                  {"★★★★★".split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Experiences</h2>
            <p className="text-gray-600">See what our patients say about their visits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-all">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.date}</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 text-blue-100 opacity-20">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56928 13 6.017 13H5.017V21H6.017Z" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-blue-600 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Visit Today</h2>
          <p className="text-blue-100 mb-12 text-lg">
            Ready for a healthier smile? Fill out the quick form below and we will get back to you immediately via WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="03XX-XXXXXXX"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-8 text-left">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
              <textarea
                rows={3}
                placeholder="What service are you looking for?"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center shadow-lg active:scale-95"
            >
              <span className="mr-2">💬</span> Send on WhatsApp
            </button>
            <p className="mt-4 text-xs text-gray-400">
              *By clicking, you will be redirected to WhatsApp to confirm your appointment.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
