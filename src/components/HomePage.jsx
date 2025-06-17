import React, { useState } from "react";
import { Carousel } from "./Carousel";
import { EstimateModal } from "./EstimateModal";
import HeroPanorama from "./HeroPanorama";
import { Contact } from "./Contact";
import { Services } from "./Services";
import { Footer } from "./Footer";
import { About } from "./About";
import { Header } from "./Header";
import { Testimonials } from "./Testimonials";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 scroll-smooth">
      {/* --- Header --- */}
      <Header />

      {/* --- Panorama / Hero --- */}
      <section className="relative h-[85vh] overflow-hidden text-white text-center flex items-center justify-center">
        <HeroPanorama onEstimateClick={() => setModalOpen(true)} />
      </section>

      {/* --- Services --- */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <Services />
      </section>

      {/* --- Carousel Section --- */}
      <section id="works" className="py-16 px-4 max-w-6xl mx-auto">
        <Carousel />
      </section>

      {/* --- About --- */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <About />
      </section>

      {/* --- Testimonials --- */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* --- Contact --- */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <Contact />
      </section>

      {/* --- Footer --- */}
      <Footer />

      {/* --- Modal Mount Point --- */}
      <EstimateModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default HomePage;