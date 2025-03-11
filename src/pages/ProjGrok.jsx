import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const ProjectCard = ({ title, description, image, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * (index % 2 === 0 ? 1 : -1), 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -5 : 5, 0]
  );
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={cardRef}
      style={{ y: springY, rotate }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full max-w-md mx-auto perspective-1000"
    >
      <motion.div
        className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10
                  overflow-hidden transform-gpu"
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Glass effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl" />

        {/* Floating orb animation */}
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full
                    opacity-20 blur-2xl"
          animate={{
            x: isHovered ? [0, 50, -50, 0] : 0,
            y: isHovered ? [0, -50, 50, 0] : 0,
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>

        {/* Interactive button */}
        <motion.button
          className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full
                    text-white font-medium"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          View in Figma
        </motion.button>
      </motion.div>

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-50"
          initial={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
          animate={{
            y: isHovered ? [0, -100, 0] : 0,
            opacity: isHovered ? [0.5, 0, 0.5] : 0.5,
          }}
          transition={{ duration: 2 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </motion.div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const titleY = useTransform(scrollY, [0, 500], [100, 0]);
  const titleScale = useTransform(scrollY, [0, 500], [0.8, 1]);

  // Sample Figma projects data
  const projects = [
    {
      title: "E-commerce Redesign",
      description:
        "A modern e-commerce interface with seamless navigation and bold visuals.",
      image: "https://via.placeholder.com/400x300?text=Figma+Project+1",
    },
    {
      title: "Mobile Banking App",
      description:
        "Intuitive mobile banking experience with smooth animations.",
      image: "https://via.placeholder.com/400x300?text=Figma+Project+2",
    },
    {
      title: "Fitness Dashboard",
      description: "Interactive fitness tracking UI with vibrant gradients.",
      image: "https://via.placeholder.com/400x300?text=Figma+Project+3",
    },
    {
      title: "E-commerce Redesign",
      description:
        "A modern e-commerce interface with seamless navigation and bold visuals.",
      image: "https://via.placeholder.com/400x300?text=Figma+Project+1",
    },
    {
      title: "Mobile Banking App",
      description:
        "Intuitive mobile banking experience with smooth animations.",
      image: "https://via.placeholder.com/400x300?text=Figma+Project+2",
    },
    {
      title: "Fitness Dashboard",
      description: "Interactive fitness tracking UI with vibrant gradients.",
      image: "https://via.placeholder.com/400x300?text=Figma+Project+3",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#0A0A0A] overflow-hidden py-20"
    >
      {/* Animated Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[70vw] h-[70vw] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] bg-pink-600/10 rounded-full blur-[150px] mix-blend-screen" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating geometric shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white/20 rounded-sm"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Title */}
      <motion.div
        style={{ y: titleY, scale: titleScale }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Projects Grid */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/20 rounded-full relative">
          <motion.div
            className="absolute w-2 h-2 bg-white rounded-full left-1/2 -translate-x-1/2"
            animate={{ y: [4, 20, 4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
