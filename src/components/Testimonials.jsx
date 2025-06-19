import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Nathan D.",
    role: "Foundation Repair",
    avatar: `${import.meta.env.BASE_URL}images/testimonials/user1.webp`,
    message:
      "I'm really impressed with the work TotalFix Contractors did on my foundation crack. They were fast, professional, and sealed it perfectly with carbon fiber reinforcement. Now I feel confident my foundation is secure. Highly recommended!",
  },
  {
    name: "Batina B.",
    role: "Structural Inspection",
    avatar: `${import.meta.env.BASE_URL}images/testimonials/user2.webp`,
    message:
      "I highly recommend TotalFix to anyone in need of foundation work. Their technician was incredibly knowledgeable, honest, and thorough. You can absolutely trust them to get the job done right the first time.",
  },
  {
    name: "Rui Z.",
    role: "Fence Installation",
    avatar: `${import.meta.env.BASE_URL}images/testimonials/user3.webp`,
    message:
      "TotalFix did an amazing job after two panels of my fence fell in a storm. They replaced everything exactly in the same style and the result was even better than expected. Great quality, competitive pricing!",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const swipeConfidenceThreshold = 100;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold my-10">What Our Clients Say</h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) next();
              else if (swipe > swipeConfidenceThreshold) prev();
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 p-6 rounded-lg shadow border border-gray-200 cursor-grab active:cursor-grabbing"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-400" />
              ))}
            </div>
            <p className="italic text-gray-700 mb-6">"{testimonials[index].message}"</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-14 h-14 rounded-full border border-gray-300 object-cover"
              />
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-800">{testimonials[index].name}</p>
                <p className="text-sm text-gray-500">{testimonials[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};