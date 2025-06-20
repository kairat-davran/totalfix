import React from "react";
import {
  Phone,
  Mail
} from "lucide-react";
import { FaYoutube, FaInstagram, FaThumbtack } from 'react-icons/fa';

const services = [
  'Gate Installation',
  'Fence Repair & Replacement',
  'Foundation Repair',
  'Crack Restoration',
  'Concrete Lifting',
  'French Drain System',
];

export const Footer = () => {
  
  return (
    <footer className="bg-black text-white mt-20 pt-10 pb-0 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm pb-10">

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Locations</h3>
            <p>📍 Bothell Office</p>
            <p>19128 112th Ave NE <br />Bothell, WA 98011</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-1">
              {services.map((service, idx) => (
                <li key={idx} className="hover:text-red-400 transition cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-1">
              <li>Mon-Fri: 9:00 AM - 6:00 PM</li>
              <li>Sat-Sun: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          {/* Contact + Certifications */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="mb-3"><Phone className="inline w-4 h-4 mr-1" />
              <a href="tel:12066718938" className="hover:underline text-white-800">
                (206) 671-8938
              </a>
            </p>
            <p><Mail className="inline w-4 h-4 mr-1" />
              <a href="mailto:info@totalfixwa.com" className="hover:underline text-white-800">
                info@totalfixwa.com
              </a>
            </p>
            <div className="flex flex-col items-center mt-6">
              <h4 className="font-semibold mb-2">Certifications</h4>
              <img src={`${import.meta.env.BASE_URL}/images/thumbtack.png`} alt="Thumbtack Certified" className="w-12" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 pb-4 text-center text-gray-400 text-xs">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-4 text-white">
            <p className="mb-3 sm:mb-0">
              &copy; {new Date().getFullYear()} TotalFix Contractors LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <h4 className="font-semibold text-sm whitespace-nowrap">Follow Us</h4>
              <div className="flex gap-4 text-lg">
                <a
                  href="https://www.instagram.com/totalfixwa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com/@TotalFixWA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.thumbtack.com/wa/bellevue/handyman/totalfix-contractors-llc/service/542147258598039559?utm_medium=web&utm_source=txt&surface=sp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400"
                >
                  <img src={`${import.meta.env.BASE_URL}/images/thumbtackLogo.png`} alt="Thumbtack Logo" className="w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}