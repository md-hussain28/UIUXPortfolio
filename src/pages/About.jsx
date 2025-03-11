// src/pages/AboutPage.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import React from "react";

const AboutIntro = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid md:grid-cols-2 gap-12 items-center px-4 md:px-24"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-purple-500/20 blur-3xl" />
        <img
          src="/avatar.jpg"
          alt="Designer Avatar"
          className="relative z-10 w-full h-[600px] object-cover rounded-3xl border-2 border-white/10"
        />
      </motion.div>

      <div className="space-y-6">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="inline-block bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
        >
          <span className="text-sm text-purple-400">About Me</span>
        </motion.div>

        <h2 className="text-4xl font-bold text-white">
          Turning Vision Into Digital Reality
        </h2>

        <p className="text-white/80 leading-relaxed">
          With a passion for creating beautiful and functional digital
          experiences, I bridge the gap between design and technology. My design
          philosophy revolves around user-centered solutions that not only look
          stunning but solve real problems.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          {["Figma", "Photoshop", "Canva"].map((tool) => (
            <motion.div
              key={tool}
              whileHover={{ y: -5 }}
              className="p-4 bg-white/5 rounded-xl backdrop-blur-sm text-center"
            >
              <span className="text-white/90">{tool}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// GlassCard Component
const GlassCard = ({ children, className }) => (
  <div
    className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg ${className}`}
  >
    {children}
  </div>
);

// AboutHero Component
const AboutHero = () => {
  const words = ["CREATIVE", "INNOVATIVE", "USER-FOCUSED"];
  const [currentWord, setCurrentWord] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative  min-h-[50vh] flex items-center justify-center"
    >
      <motion.h1
        key={words[currentWord]}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute  text-[20vw] font-bold text-white/5 tracking-tighter"
        style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}
      >
        {words[currentWord]}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">
          Hello, I’m <span className="text-purple-400">Zeba Afreen</span>
        </h1>
        <p className="text-xl text-white/70 mt-4 max-w-xl mx-auto">
          Crafting intuitive and delightful digital experiences.
        </p>
      </motion.div>
    </motion.section>
  );
};

// SkillsSection Component
const SkillsSection = () => {
  const skills = [
    "UI Design",
    "UX Research",
    "Prototyping",
    "Figma",
    "Wireframing",
    "Interaction Design",
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white cursor-pointer"
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// ExperienceSection Component
const ExperienceSection = () => {
  const experiences = [
    {
      date: "2021 - Present",
      title: "Senior UI/UX Designer",
      company: "DesignCo",
      description:
        "Led a team to design user-friendly web and mobile applications.",
    },
    {
      date: "2019 - 2021",
      title: "UI Designer",
      company: "TechStartup",
      description: "Created wireframes and prototypes for innovative products.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Experience
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20" />
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } mb-16`}
          >
            <GlassCard className="w-5/12">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
              <p className="mt-4 text-sm text-gray-500">{exp.date}</p>
            </GlassCard>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 bg-purple-400 rounded-full" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// PhilosophySection Component
const PhilosophySection = () => {
  const principles = [
    {
      icon: "🎨",
      title: "User-Centered",
      description: "Designs that prioritize user needs and experiences.",
    },
    {
      icon: "💡",
      title: "Innovative",
      description: "Pushing boundaries with creative solutions.",
    },
    {
      icon: "⚡",
      title: "Intuitive",
      description: "Seamless interactions that feel natural.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Design Philosophy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <GlassCard>
              <div className="text-4xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-gray-300">{principle.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Main AboutPage Component
const About = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ target: containerRef });
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden"
    >
      {/* Parallax Background Layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <AboutHero />
        <AboutIntro />
        <SkillsSection />
        <ExperienceSection />
        <PhilosophySection />
      </div>
    </div>
  );
};

export default About;
