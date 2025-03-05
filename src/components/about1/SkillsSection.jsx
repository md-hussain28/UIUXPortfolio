import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "UI Design", icon: "🎨" },
  { name: "UX Research", icon: "🔍" },
  { name: "Prototyping", icon: "🖌️" },
  { name: "Interaction Design", icon: "✨" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-4xl mb-2 block">{skill.icon}</span>
              <p className="text-white/90">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
