// components/about/ExperienceTimeline.jsx
import { motion } from "framer-motion";
import { experiences } from "../../assets/about.js";
import { fadeIn, slideIn } from "../animations/animation.js";

const ExperienceTimeline = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          My Journey
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/50 to-transparent" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={slideIn(index % 2 === 0 ? "left" : "right")}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Year Bubble */}
              <div className="w-1/2 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-br from-${exp.color}-500/20 to-${exp.color}-700/20 
                             backdrop-blur-sm flex items-center justify-center border border-${exp.color}-500/30`}
                >
                  <span className="text-white font-bold">{exp.year}</span>
                </motion.div>
              </div>

              {/* Content Card */}
              <div className="w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-2">{exp.company}</p>
                  <p className="text-white/80">{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceTimeline;
