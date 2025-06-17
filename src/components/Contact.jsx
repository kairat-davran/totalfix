import React from "react";
import {
  PhoneCall,
  Mail,
} from "lucide-react";

export const Contact = () => {

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left: Info Block */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
        <p className="text-lg text-gray-700">
          Reach out to us for questions, quotes, or expert advice. We respond quickly and professionally.
        </p>

        <div className="space-y-4 text-gray-800 text-base">
          <div className="flex items-center gap-3">
            <PhoneCall className="w-5 h-5 text-red-600" />
            <span>(206) 752‑2991</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-red-600" />
            <span>service@totalfixcontractors.com</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">📍</span>
            <span>
              1546 NW 56th Street Unit 526<br />
              Seattle, WA 98107
            </span>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted! (This is a placeholder)");
        }}
        className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-5"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}