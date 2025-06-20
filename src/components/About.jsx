import React from "react";
import {
  ShieldCheck,
} from "lucide-react";

export const About = () => {

  return (
    <>
      <h2 className="text-3xl font-bold my-6">Why TotalFix?</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        At <strong>TotalFix Contractors LLC</strong>, we specialize in <span className="text-red-600">gate installation, fence repair and replacement, foundation repair, concrete work, drainage systems, and crack restoration</span>. With over <strong>5 years of hands‑on experience</strong>, our team delivers reliable service and long-lasting results you can count on.
        <br />
        <br />We're <strong>licensed, insured, background-checked, and affordable</strong>. Our goal isn’t quick fixes — it’s your long-term peace of mind. Every job is handled with care, honesty, and professional craftsmanship.
      </p>
      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-2 text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
          <ShieldCheck className="w-4 h-4" /> Trusted by homeowners across Greater Seattle
        </div>
      </div>
    </>
  )
}