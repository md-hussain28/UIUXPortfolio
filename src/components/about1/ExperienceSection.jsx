import React from "react";
import { motion } from "framer-motion";

const experiences = [
  { year: "2020 - Present", role: "Senior UI/UX Designer", company: "Tech Co" },
  { year: "2018 - 2020", role: "UI Designer", company: "Design Studio" },
];

const ExperienceSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 flex justify-between items-center w-full"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : ""}`}>
                {index % 2 === 0 && (
                  <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-white/70">{exp.company}</p>
                  </div>
                )}
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full" />
              </div>
              <div className={`w-5/12 ${index % 2 !== 0 ? "text-left" : ""}`}>
                {index % 2 !== 0 ? (
                  <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-white/70">{exp.company}</p>
                  </div>
                ) : (
                  <p className="text-white/60">{exp.year}</p>
                )}
                {index % 2 === 0 && <p className="text-white/60">{exp.year}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
