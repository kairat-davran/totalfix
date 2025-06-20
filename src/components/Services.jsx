import React from "react";
import {
  DoorOpen,
  Ruler,
  Hammer,
  Layers,
  MoveHorizontal,
  Droplet
} from "lucide-react";

const services = [
  {
    title: 'Gate Installation',
    icon: DoorOpen,
    description: 'We install high-quality gates that are secure, durable, and match your property’s design.',
  },
  {
    title: 'Fence Repair & Replacement',
    icon: Ruler,
    description: 'We provide expert repairs and replacements for all types of wood fences at competitive rates.',
  },
  {
    title: 'Foundation Repair',
    icon: Hammer,
    description: 'We deliver reliable foundation repair with long-lasting results and transparent pricing.',
  },
  {
    title: 'Crack Restoration',
    icon: Layers,
    description: 'We restore structural cracks with proven methods to protect your home from water and damage.',
  },
  {
    title: 'Concrete Lifting',
    icon: MoveHorizontal,
    description: 'We raise and level sunken concrete surfaces with safe, efficient, and affordable techniques.',
  },
  {
    title: 'French Drain System',
    icon: Droplet,
    description: 'We install effective drainage systems to prevent water damage and protect your foundation.',
  },
];

export const Services = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center my-8">Our Core Services</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
            >
              <div className="flex justify-center mb-4">
                <Icon className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};