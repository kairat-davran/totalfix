import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 shadow sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}/logo_light.png`}
            alt="TotalFix Logo"
            className="w-10 h-10 rounded-full object-contain border border-white"
          />
          <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap">
            TotalFix <span className="hidden lg:inline">Contractors LLC</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-10 text-[15px] text-white tracking-wide">
          {[
            { href: "#services", label: "Services" },
            { href: "#works", label: "Projects" },
            { href: "#about", label: "About" },
            { href: "#testimonials", label: "Reviews" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-extrabold transition-colors duration-200 hover:text-red-400"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-400 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="sm:hidden px-4 pt-4 pb-2 bg-black space-y-2 text-sm font-semibold">
          <a href="#services" className="block font-bold hover:text-red-400 transition">
            Services
          </a>
          <a href="#works" className="block font-bold hover:text-red-400 transition">
            Works
          </a>
          <a href="#about" className="block font-bold hover:text-red-400 transition">
            About
          </a>
          <a href="#testimonials" className="block font-bold hover:text-red-400 transition">
            Reviews
          </a>
          <a href="#contact" className="block font-bold hover:text-red-400 transition">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};