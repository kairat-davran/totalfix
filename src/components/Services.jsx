import React from "react";
import {
  Wrench,
} from "lucide-react";

const services = [
  'Fence Installation',
  'Wood Fence Repair & Replacement',
  'Foundation Repair',
  'Crack Restoration',
  'Concrete Lifting',
  'Crawlspace Encapsulation',
];

export const Services = () => {
  
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
          >
            <div className="flex justify-center mb-4">
              <Wrench className="text-red-600 w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">{service}</h3>
            <p className="text-sm text-gray-600">
              We ensure quality, durability, and fair pricing on all {service.toLowerCase()} jobs.
            </p>
          </div>
        ))}
      </div>
    </>)
}