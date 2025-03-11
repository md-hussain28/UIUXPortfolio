import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Mobile App UI Kit",
    image: "https://source.unsplash.com/500x300/?mobile,app",
    link: "#",
  },
  {
    title: "Web Dashboard Redesign",
    image: "https://source.unsplash.com/500x300/?dashboard,ui",
    link: "#",
  },
  {
    title: "E-commerce UX Study",
    image: "https://source.unsplash.com/500x300/?ecommerce,design",
    link: "#",
  },
];

export default function ProjectSection() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] py-20 px-6 md:px-16">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-purple-500/30 rounded-full blur-[100px] mix-blend-multiply" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500/30 rounded-full blur-[100px] mix-blend-multiply" />

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-center text-white mb-16"
      >
        Featured Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="relative group overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-md cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 object-cover"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white p-6 text-center"
      >
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <motion.a
          href={project.link}
          className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full text-white text-lg"
          whileHover={{ scale: 1.1 }}
        >
          View Project
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
