import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import FloatingShapes from "../components/about2/FloatingShapes";
import BioSection from "../components/about2/BioSection";
import ExperienceTimeline from "../components/about2/ExperienceTimeline";
import SkillCards from "../components/about2/SkillCards";
import PhilosophyGrid from "../components/about2/PhilosophyGrid";

const About2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      <FloatingShapes />

      {/* Parallax Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div style={{ y }} className="relative z-10 text-center">
          <h1 className="text-[10vw] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Creative Mind
            <span className="block text-2xl md:text-4xl text-white/70 mt-4">
              Designing Future Experiences
            </span>
          </h1>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div ref={ref} className="relative z-20 space-y-32 pb-32">
        <BioSection />
        <ExperienceTimeline />
        <SkillCards />
        <PhilosophyGrid />
      </div>
    </motion.main>
  );
};

export default About2;
