import React from 'react';
import { Wrench, ShieldCheck, PhoneCall, Mail } from 'lucide-react'; // Optional icons

const services = [
  'Fence Installation',
  'Wood Fence Repair & Replacement',
  'Foundation Repair',
  'Crack Restoration',
  'Concrete Lifting',
  'Crawlspace Encapsulation',
];

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-4 shadow">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            <img
              src="/logo_light.png"
              alt="TotalFix Logo"
              className="w-10 h-10 rounded-full object-contain border border-white"
            />
            <h1 className="text-2xl font-bold tracking-tight">
              TotalFix Contractors LLC
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm font-semibold">
            <a href="#services" className="hover:text-red-400 transition">Services</a>
            <a href="#about" className="hover:text-red-400 transition">About</a>
            <a href="#contact" className="hover:text-red-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white text-center py-28 px-6 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-foundation.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Affordable, Licensed, Trusted</h2>
          <p className="text-lg sm:text-xl mb-6">Expert fence & foundation solutions at below-market rates</p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold shadow-lg">
            Request Your Estimate
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
              <div className="flex justify-center mb-4">
                <Wrench className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service}</h3>
              <p className="text-sm text-gray-600">We ensure quality, durability, and fair pricing on all {service.toLowerCase()} jobs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why TotalFix?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At <strong>TotalFix Contractors LLC</strong>, we specialize in <span className="text-red-600">fence installation, wood fence repair and replacement, and foundation repair</span>. With over <strong>5 years of hands-on experience</strong>, our team delivers unmatched service and lasting results.
          <br /><br />
          We're <strong>licensed, background-checked, and affordable</strong>. Our goal isn't quick fixes — it's your long-term satisfaction. Every project is handled with care and professional integrity.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            Trusted by homeowners
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Have questions or need a quote? We're here to help!
        </p>
        <div className="text-left text-gray-700 text-lg space-y-2">
          <p className="flex items-center"><PhoneCall className="w-5 h-5 text-red-600 mr-2" /> (206) 752-2991</p>
          <p className="flex items-center"><Mail className="w-5 h-5 text-red-600 mr-2" /> service@totalfixcontractors.com</p>
          <p className="flex items-center">📍 1546 NW 56th Street Unit 526, Seattle, WA 98107</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} TotalFix Contractors LLC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;