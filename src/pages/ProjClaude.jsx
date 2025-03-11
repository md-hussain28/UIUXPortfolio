import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ProjectsSection = () => {
  // Array of projects to showcase
  const projects = [
    {
      id: 1,
      title: "Mindful App Redesign",
      category: "Mobile UI/UX",
      description:
        "A complete overhaul of a meditation app focusing on intuitive navigation and calming visual hierarchy.",
      image: "/api/placeholder/600/400",
      color: "from-blue-400 to-purple-500",
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      category: "Web Application",
      description:
        "Data visualization dashboard with real-time analytics and customizable widgets for e-commerce platforms.",
      image: "/api/placeholder/600/400",
      color: "from-pink-400 to-orange-500",
    },
    {
      id: 3,
      title: "Smart Home Interface",
      category: "IoT Design",
      description:
        "Unified control system for connected home devices with focus on accessibility and simplified interactions.",
      image: "/api/placeholder/600/400",
      color: "from-green-400 to-teal-500",
    },
  ];

  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  // Track mouse position for hover effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current?.getBoundingClientRect() || {};

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating shapes component for background
  const FloatingShapes = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-md"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              rotate: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  // Project card component
  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    // Calculate delay for staggered animations
    const delay = 0.1 * index;

    // 3D tilt effect on hover
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTilt = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    return (
      <motion.div
        ref={cardRef}
        className="relative h-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          resetTilt();
        }}
        onMouseMove={handleMouseMove}
        onClick={() => setActiveProject(project)}
      >
        <div
          className={`
          relative overflow-hidden rounded-2xl h-full
          bg-white/5 backdrop-blur-sm border border-white/10
          transition-all duration-300
          ${
            hovered
              ? "scale-[1.02] shadow-lg shadow-purple-500/20"
              : "scale-100"
          }
        `}
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`}
            ></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Project Info */}
          <div className="p-6 relative z-10">
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/10 text-white/80 mb-3">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-white/60">{project.description}</p>

            {/* View Project Button */}
            <motion.div
              className="mt-4 inline-flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              animate={{ x: hovered ? 5 : 0 }}
            >
              View Project
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          </div>

          {/* Hover effect corner gradient */}
          <motion.div
            className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-3xl bg-gradient-to-tl ${project.color} blur-lg opacity-0`}
            animate={{ opacity: hovered ? 0.3 : 0 }}
          />
        </div>
      </motion.div>
    );
  };

  // Project detail modal component
  const ProjectModal = () => {
    if (!activeProject) return null;

    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-[#121212] rounded-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
            onClick={() => setActiveProject(null)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Project header image */}
          <div className="relative h-64 md:h-80">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeProject.color} opacity-50`}
            ></div>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>

            {/* Project title overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8">
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/10 text-white/80 mb-3">
                {activeProject.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {activeProject.title}
              </h2>
            </div>
          </div>

          {/* Project content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Project Overview
                </h3>
                <p className="text-white/70 mb-6">
                  {activeProject.description} This project involved extensive
                  user research, wireframing, prototyping, and user testing to
                  ensure an intuitive and engaging experience.
                </p>

                {/* Process bullets */}
                <h3 className="text-xl font-bold text-white mb-4">
                  Design Process
                </h3>
                <ul className="space-y-3 text-white/70">
                  {[
                    "Research & Discovery",
                    "Wireframing",
                    "Visual Design",
                    "Prototyping",
                    "User Testing",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className={`inline-block w-6 h-6 rounded-full bg-gradient-to-r ${activeProject.color} mr-3 flex-shrink-0 mt-0.5`}
                      ></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Figma embed placeholder */}
              <div className="bg-black/30 rounded-xl overflow-hidden border border-white/10 h-72 md:h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 opacity-50">
                    <svg
                      viewBox="0 0 38 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 28.5C19 25.9804 20.0116 23.5641 21.818 21.7574C23.6244 19.9508 26.0406 18.9389 28.5601 18.9389C31.0796 18.9389 33.4957 19.9508 35.3021 21.7574C37.1085 23.5641 38.1201 25.9804 38.1201 28.5C38.1201 31.0196 37.1085 33.4359 35.3021 35.2426C33.4957 37.0492 31.0796 38.0611 28.5601 38.0611C26.0406 38.0611 23.6244 37.0492 21.818 35.2426C20.0116 33.4359 19 31.0196 19 28.5V28.5Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 47.5611C0 45.0415 1.01158 42.6252 2.81799 40.8185C4.62441 39.0119 7.04055 38 9.56005 38H19.0001V47.5611C19.0001 50.0807 17.9885 52.497 16.1821 54.3037C14.3756 56.1103 11.9595 57.1222 9.44005 57.1222C6.92054 57.1222 4.5044 56.1103 2.69799 54.3037C0.891571 52.497 0 50.0807 0 47.5611V47.5611Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.0001 0V19.0611H28.5601C31.0796 19.0611 33.4957 18.0492 35.3021 16.2426C37.1085 14.4359 38.1201 12.0196 38.1201 9.5C38.1201 6.98044 37.1085 4.56412 35.3021 2.75744C33.4957 0.950764 31.0796 0 28.5601 0H19.0001Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 9.5C0 12.0196 1.01158 14.4359 2.81799 16.2426C4.62441 18.0492 7.04055 19.0611 9.56005 19.0611H19.0001V0H9.56005C7.04055 0 4.62441 0.950764 2.81799 2.75744C1.01158 4.56412 0 6.98044 0 9.5V9.5Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 28.5C0 31.0196 1.01158 33.4359 2.81799 35.2426C4.62441 37.0492 7.04055 38.0611 9.56005 38.0611H19.0001V19H9.56005C7.04055 19 4.62441 19.9508 2.81799 21.7574C1.01158 23.5641 0 25.9804 0 28.5V28.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">
                    Figma Prototype
                  </h4>
                  <p className="text-white/50 text-sm">
                    Interactive prototype available for review
                  </p>
                  <button
                    className={`
                    mt-4 px-4 py-2 rounded-full text-sm font-medium
                    bg-gradient-to-r ${activeProject.color} text-white
                    hover:shadow-lg transition-all duration-300
                  `}
                  >
                    View Prototype
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-[#0A0A0A]"
      style={{ opacity }}
    >
      {/* Floating shapes background */}
      <FloatingShapes />

      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-pink-600/10 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      {/* Section heading */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div style={{ y: y1 }} className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-white/90 text-sm backdrop-blur-sm border border-white/10">
              Selected Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Recent Projects
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Explore my latest UI/UX designs showcasing intuitive interfaces,
            thoughtful interactions, and meaningful user experiences.
          </p>
        </motion.div>
      </div>

      {/* Projects grid */}
      <div ref={containerRef} className="container mx-auto px-4">
        <motion.div
          style={{ scale }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View more projects button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-colors relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                clipPath: "circle(0% at 50% 50%)",
              }}
              whileHover={{
                clipPath: "circle(100% at 50% 50%)",
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for project details */}
      <AnimatePresence>{activeProject && <ProjectModal />}</AnimatePresence>
    </motion.section>
  );
};

export default ProjectsSection;
