import { motion } from "framer-motion";

const timelineData = [
  { year: "2022-Present", role: "Senior UI Designer", company: "Tech Corp" },
  { year: "2020-2022", role: "UX Researcher", company: "Design Studio" },
  { year: "2018-2020", role: "Junior Designer", company: "Startup Hub" },
];

const TimelineItem = ({ year, role, company, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 border-l-2 border-white/20 pb-8"
  >
    {!isLast && (
      <div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-purple-400" />
    )}
    <h3 className="text-2xl font-bold text-white mb-2">{year}</h3>
    <p className="text-white/70">{role}</p>
    <p className="text-purple-400">{company}</p>
  </motion.div>
);

const ExperienceTimeline = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="max-w-2xl mx-auto">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.year}
            {...item}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
