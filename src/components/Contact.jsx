import React from "react";
import { PhoneCall, Mail } from "lucide-react";

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
            <a href="tel:12066718938" className="hover:underline text-gray-800">
              (206) 671-8938
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-red-600" />
            <a href="mailto:info@totalfixwa.com" className="hover:underline text-gray-800">
              info@totalfixwa.com
            </a>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">📍</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=19128+112th+Ave+NE,+Bothell,+WA+98011"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-800"
            >
              19128 112th Ave NE<br />
              Bothell, WA 98011
            </a>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <form
        action="https://formspree.io/f/xldnwgbv"
        method="POST"
        className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-5"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(206) 555-0123"
            className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Tell us how we can help you. Briefly describe your problem or question."
            className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500"
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
  );
};