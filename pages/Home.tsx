
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
            {/* Left Content */}
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
                Welcome to <strong>{CLINIC_NAME}</strong>. We bring you world-class dental expertise using advanced 3D diagnostic tools and painless treatment techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => openWhatsApp()}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-200 active:scale-95"
                >
                  Book Free Consult
                </button>
                <button
                  onClick={() => openWhatsApp()}
                  className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-blue-50 active:scale-95 flex items-center justify-center"
                >
                  <span className="mr-2">💬</span> WhatsApp Now
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Patient" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">2,500+ Happy Patients</p>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Styled Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] animate-float">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-[100px] opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                  alt="Modern Dental Care 3D Look"
                  className="relative z-10 w-full rounded-[40px] shadow-2xl border-8 border-white transform rotate-3"
                />
                {/* Floating Badges */}
                <div className="absolute -top-6 -right-6 glass-effect p-4 rounded-2xl shadow-lg z-20 animate-bounce">
                  <span className="text-3xl">🛡️</span>
                  <p className="text-xs font-bold text-gray-800">100% Sterile</p>
                </div>
                <div className="absolute -bottom-10 -left-6 glass-effect p-4 rounded-2xl shadow-lg z-20">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">👨‍⚕️</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Dr. Talha</p>
                      <p className="text-[10px] text-gray-500">Sr. Dentist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Premium Services</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Combining artistry with science to provide comprehensive dental solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 p-10 rounded-[32px] border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-blue-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  Details <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95"
            >
              Explore All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                alt="Clinic Standards"
                className="relative rounded-[40px] shadow-2xl z-10"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">Setting New Standards <br/><span className="text-blue-600">in Dental Excellence</span></h2>
              <div className="space-y-8">
                {[
                  { title: "Sterile Protocol", desc: "Hospital-grade sterilization of all tools and treatment rooms.", icon: "🛡️" },
                  { title: "Pain-Free Technology", desc: "State-of-the-art sedation and gentle numbing techniques.", icon: "☁️" },
                  { title: "Expert Diagnosis", desc: "High-definition intraoral cameras and digital X-rays.", icon: "🔬" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 text-3xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Real Patient Stories</h2>
            <p className="text-gray-600 text-lg">Trust is built on every successful smile.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[32px] relative shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="flex text-yellow-400 mb-6 space-x-1">
                  {[...Array(t.rating)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                </div>
                <p className="text-gray-700 italic text-lg mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold mr-4 shadow-lg shadow-blue-200">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-24 bg-blue-600 text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Experience Better Dentistry</h2>
          <p className="text-blue-100 mb-12 text-lg max-w-2xl mx-auto">
            Ready to transform your smile? Schedule your visit in seconds. Our team will contact you on WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmed Ali"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="0336-XXXXXXX"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-10 text-left">
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Primary Dental Concern</label>
              <textarea
                rows={3}
                placeholder="Briefly describe your issue (e.g., Toothache, Braces, Cleaning)"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-extrabold text-xl hover:bg-[#20bd5a] transition-all flex items-center justify-center shadow-xl shadow-green-100 active:scale-95"
            >
              <span className="mr-3 text-2xl">💬</span> Book via WhatsApp
            </button>
            <p className="mt-6 text-sm text-gray-400">
              *Instant booking confirmed by our specialist within 30 minutes.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
