
import React from 'react';
import { CLINIC_NAME, ADDRESS } from '../constants';
import { openWhatsApp } from '../services/whatsapp';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Clinic</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dr. Talha Dental Clinic is Jhelum's premier destination for high-quality oral healthcare. We combine expertise with compassion to give you the best dental experience possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://picsum.photos/seed/dr-talha/800/1000"
                alt="Clinic Interior"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Patient-Centric Dental Excellence</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to provide accessible and professional dental services to the community of Jhelum, our clinic has grown into a trusted name for families across the district.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under the leadership of Dr. Talha, we prioritize patient safety above all. We use hospital-grade sterilization protocols and the latest diagnostic imaging technology to ensure every treatment is precise and effective.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <p className="text-3xl font-bold text-blue-600 mb-1">5+</p>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <p className="text-3xl font-bold text-blue-600 mb-1">2k+</p>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Happy Patients</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To enhance the life quality of our patients through superior oral health and aesthetics, fostering a community that smiles with confidence.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openWhatsApp()}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all active:scale-95"
                >
                  Contact on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Integrity", desc: "Honest diagnosis and transparent pricing for every patient.", icon: "💎" },
              { title: "Excellence", desc: "Constant learning and adoption of world-class dental techniques.", icon: "⭐" },
              { title: "Care", desc: "Treating every patient with the same kindness we'd show our own family.", icon: "❤️" }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
