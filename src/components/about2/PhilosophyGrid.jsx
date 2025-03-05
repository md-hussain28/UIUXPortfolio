import { motion } from "framer-motion";

const philosophies = [
  {
    title: "User First",
    content: "Design decisions rooted in user needs and behaviors",
  },
  {
    title: "Pixel Perfect",
    content: "Attention to detail in every interface element",
  },
  {
    title: "Data Driven",
    content: "Combining analytics with creative intuition",
  },
];

const PhilosophyGrid = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
        Philosophy
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {philosophies.map((philosophy, index) => (
          <motion.div
            key={philosophy.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 animate-pulse opacity-30" />
            <h3 className="text-2xl font-bold mb-4 text-white">
              {philosophy.title}
            </h3>
            <p className="text-white/70">{philosophy.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhilosophyGrid;
