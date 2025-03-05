import React from "react";
import BioSection from "../components/about1/BioSection";
import SkillsSection from "../components/about1/SkillsSection";
import ExperienceSection from "../components/about1/ExperienceSection";
import PhilosophySection from "../components/about1/PhilosophySection";
import ContactSection from "../components/about1/ContactSection";

const About1 = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Reusing your CustomCursor */}
      <BioSection />
      <SkillsSection />
      <ExperienceSection />
      <PhilosophySection />
      <ContactSection />
    </main>
  );
};

export default About1;
