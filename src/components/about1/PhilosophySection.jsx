import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PhilosophySection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]); // Parallax for background

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover opacity-20"
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.blockquote
          className="text-2xl md:text-4xl font-light italic max-w-3xl mx-auto text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          "Design isn’t just about aesthetics—it’s about solving problems with
          style."
        </motion.blockquote>
        <motion.p
          className="mt-4 text-lg text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          - Me, probably
        </motion.p>
      </div>
    </section>
  );
};

export default PhilosophySection;
