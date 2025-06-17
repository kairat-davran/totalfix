import React from "react";
import {
  Phone,
  Mail
} from "lucide-react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const services = [
  'Fence Installation',
  'Wood Fence Repair & Replacement',
  'Foundation Repair',
  'Crack Restoration',
  'Concrete Lifting',
  'Crawlspace Encapsulation',
];

export const Footer = () => {
  
  return (
    <footer className="bg-black text-white mt-20 pt-10 pb-0 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm pb-10">

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Locations</h3>
            <p>📍 Seattle Office</p>
            <p>1546 NW 56th Street Unit 526<br />Seattle, WA 98107</p>
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
              <li className="hover:text-red-400 transition cursor-pointer">Retaining Wall Repair</li>
              <li className="hover:text-red-400 transition cursor-pointer">Waterproofing</li>
              <li className="hover:text-red-400 transition cursor-pointer">Seismic Retrofitting</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-1">
              <li>Mon–Fri: 9:00 AM – 5:00 PM</li>
              <li>Saturday: 9:00 AM – 2:00 PM</li>
              <li className="text-red-400">Sunday: Closed</li>
            </ul>
          </div>

          {/* Contact + Certifications */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p><Phone className="inline w-4 h-4 mr-1" /> (206) 752‑2991</p>
            <p><Mail className="inline w-4 h-4 mr-1" /> service@totalfixcontractors.com</p>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Certifications</h4>
              {/* <img src="/images/bbb-logo.png" alt="BBB Certified" className="w-24" /> */}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 pb-4 text-center text-gray-400 text-xs">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-4 text-white">
            <p className="mb-3 sm:mb-0">
              &copy; {new Date().getFullYear()} TotalFix Contractors LLC. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <h4 className="font-semibold mb-2 text-sm text-center sm:text-right">Follow Us</h4>
              <div className="flex gap-4 text-lg justify-center sm:justify-end">
                <a href="#" className="hover:text-red-400"><FaFacebookF /></a>
                <a href="#" className="hover:text-red-400"><FaYoutube /></a>
                <a href="#" className="hover:text-red-400"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}