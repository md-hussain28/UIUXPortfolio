// components/about/SkillsGrid.jsx
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const skills = [
  { name: "UI Design", icon: "🎨", level: 90 },
  { name: "UX Research", icon: "🔍", level: 85 },
  { name: "Prototyping", icon: "⚡", level: 88 },
  { name: "Animation", icon: "✨", level: 82 },
  // Add more skills
];

const SkillsGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <GlassCard key={index}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 text-center"
              >
                <span className="text-4xl mb-4 block">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-purple-400 to-blue-400"
                  />
                </div>
              </motion.div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;
