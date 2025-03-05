// pages/About.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParallaxSection from "../components/about/ParallaxSection";
import SkillsGrid from "../components/about/SkillsGrid";
import ExperienceTimeline from "../components/about/ExperienceTimeline";
import PersonalityTraits from "../components/about/PersonalityTraits";
import AnimatedBackground from "../components/home/AnimatedBackground";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ParallaxSection />
        <SkillsGrid />
        <ExperienceTimeline />
        <PersonalityTraits />
      </div>
    </main>
  );
};

export default About;
