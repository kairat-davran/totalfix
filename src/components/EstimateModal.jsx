import React, { useState } from "react";

const Backdrop = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
    onClick={onClose}
  />
);

export const EstimateModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <h3 className="text-2xl font-bold mb-4 text-center">
            Request Your Free Estimate
          </h3>
          {/* NOTE: replace the Formspree action URL below with your own */}
          <form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full border rounded-lg px-3 py-2"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border rounded-lg px-3 py-2"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="(206) 555‑0123"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Tell us about your fence or foundation project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow-lg"
            >
              Send Estimate Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
};