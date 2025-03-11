import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectsSection = () => {
  const containerRef = useRef(null);

  // Parallax scroll effects
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Sample Figma project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce App Redesign",
      description:
        "A modern redesign of an e-commerce app focusing on user experience and accessibility.",
      image: "https://via.placeholder.com/600x400", // Replace with actual Figma project image
      link: "https://www.figma.com",
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      description:
        "A sleek and intuitive travel booking platform with seamless navigation.",
      image: "https://via.placeholder.com/600x400", // Replace with actual Figma project image
      link: "https://www.figma.com",
    },
    {
      id: 3,
      title: "Fitness Tracker Dashboard",
      description:
        "A dashboard design for tracking fitness progress with interactive charts.",
      image: "https://via.placeholder.com/600x400", // Replace with actual Figma project image
      link: "https://www.figma.com",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] py-20"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-pink-600/20 rounded-full blur-[120px] mix-blend-multiply"
      />

      {/* Section Title */}
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-12"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Projects
          </span>
        </motion.h2>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Glass Effect Card */}
              <div className="relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 hover:bg-white/20 transition-colors duration-300"
                  >
                    View on Figma
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm"
      >
        Scroll down to explore more
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
