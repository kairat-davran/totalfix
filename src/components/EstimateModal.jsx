import React from "react";

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
      <div className="fixed inset-0 z-50 overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 relative my-10">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">
              Request Your Free Estimate
            </h3>
            <form
              action="https://formspree.io/f/meoklqgv"
              method="POST"
              encType="multipart/form-data"
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
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100"
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
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100"
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
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                  placeholder="(206) 555‑0123"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="address">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                  placeholder="1234 Main St, Seattle, WA"
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
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                  placeholder="Tell us about your fence or foundation project..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="image">
                  Upload Image (optional)
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100"
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
      </div>
    </>
  );
};