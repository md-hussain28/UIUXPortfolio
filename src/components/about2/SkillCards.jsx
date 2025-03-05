import { motion } from "framer-motion";

const skills = [
  { name: "UI Design", level: "95%", color: "from-purple-400 to-pink-400" },
  { name: "UX Research", level: "90%", color: "from-blue-400 to-cyan-400" },
  { name: "Prototyping", level: "85%", color: "from-green-400 to-teal-400" },
];

const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-container p-6 rounded-2xl backdrop-blur-lg border border-white/10"
  >
    <div className="flex justify-between mb-4">
      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      <span className="text-white/70">{skill.level}</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        initial={{ width: 0 }}
        whileInView={{ width: skill.level }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

const SkillCards = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillCards;
