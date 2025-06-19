import React, { useEffect, useState } from "react";
import { Mail, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  `${import.meta.env.BASE_URL}images/hero-foundation.png`,
  `${import.meta.env.BASE_URL}images/hero-fence.png`,
  `${import.meta.env.BASE_URL}images/hero-basement.png`,
];

const HeroPanorama = ({ onEstimateClick }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
              key={currentImage}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
          >
              {/* Background Image */}
              <div
              className="absolute inset-0 bg-cover bg-center scale-110"
              style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
              />
              {/* Animated Black Overlay */}
              <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0.6 }}
              />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Static Overlay Content (No Motion) */}
      <div className="relative z-10 max-w-3xl px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          Affordable, Licensed, Trusted
        </h2>
        <p className="text-lg sm:text-xl mb-8 drop-shadow">
          Expert fence & foundation solutions at below‑market rates
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onEstimateClick}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold shadow-lg inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" /> Request Estimate
          </button>
          <a
            href="tel:+12067522991"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white font-semibold shadow-lg inline-flex items-center gap-2"
          >
            <PhoneCall className="w-5 h-5" /> Call Now
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroPanorama;