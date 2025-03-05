import { motion } from "framer-motion";

const BioSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="container mx-auto px-4"
    >
      <div className="glass-container p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-white/10">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
          I'm a passionate UI/UX designer with a focus on creating meaningful
          digital experiences. My design philosophy revolves around
          user-centered solutions that balance aesthetics and functionality.
          With a background in both design and development, I bridge the gap
          between creative vision and technical implementation.
        </p>
      </div>
    </motion.section>
  );
};

export default BioSection;
