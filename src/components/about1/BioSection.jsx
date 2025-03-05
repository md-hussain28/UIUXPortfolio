import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BioSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]); // Parallax effect

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div style={{ y }} className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/300" // Replace with real photo
              alt="UI/UX Designer"
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-white/80">
              I’m a passionate UI/UX designer with a knack for turning complex
              problems into simple, beautiful solutions. With 5+ years in the
              game, I’ve worked on everything from sleek apps to immersive web
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
