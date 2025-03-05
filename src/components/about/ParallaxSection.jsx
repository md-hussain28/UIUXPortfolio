// components/about/ParallaxSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y, opacity }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              My Journey
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Passionate UI/UX designer crafting digital experiences that merge
            aesthetics with functionality. Every pixel has a purpose, every
            interaction tells a story.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ParallaxSection;
