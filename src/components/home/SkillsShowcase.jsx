import { motion } from "framer-motion";

const SkillsShowcase = () => {
  const skills = [
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Prototyping",
    "Design Systems",
    "Visual Design",
    "User Research",
    "Wireframing",
  ];

  return (
    <motion.div
      className="flex flex-wrap gap-3 max-w-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10
                     hover:border-purple-500/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SkillsShowcase;
