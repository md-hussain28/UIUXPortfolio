// components/about/PersonalityTraits.jsx
import { motion } from "framer-motion";
import { personalityTraits } from "../../assets/about.js";
import { scaleIn } from "../animations/animation.js";
import GlassCard from "./GlassCard";

const PersonalityTraits = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={scaleIn}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          What Drives Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalityTraits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <div className="p-6 text-center">
                  {/* Icon with gradient background */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${trait.color} 
                                 flex items-center justify-center text-2xl`}
                    >
                      {trait.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {trait.trait}
                  </h3>
                  <p className="text-white/70">{trait.description}</p>

                  {/* Hover Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${trait.color} opacity-0 
                               rounded-2xl transition-opacity duration-300`}
                    whileHover={{ opacity: 0.1 }}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalityTraits;
