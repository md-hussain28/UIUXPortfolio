import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ThematicFooter = () => {
  const controls = useAnimation();
  const footerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Animate the footer on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  // Interactive hover effect for the rocket
  useEffect(() => {
    if (isHovered) {
      controls.start("hover");
    } else {
      controls.start("visible");
    }
  }, [isHovered, controls]);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#0A0A0A] border-t border-white/10 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-pink-600/20 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Thematic Storytelling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hover: { y: -20 },
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Launch
            </span>
            ?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Let’s take your ideas to the next level. Whether it’s a new project,
            a collaboration, or just a chat, I’m here to help you soar.
          </p>
        </motion.div>

        {/* Interactive Rocket */}
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex justify-center mb-12"
        >
          <motion.div
            animate={controls}
            variants={{
              visible: { y: 0 },
              hover: { y: -20 },
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="text-6xl cursor-pointer"
          >
            🚀
          </motion.div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { name: "Home", link: "#" },
            { name: "About", link: "#" },
            { name: "Projects", link: "#" },
            { name: "Contact", link: "#" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { name: "LinkedIn", link: "https://www.linkedin.com", icon: "👔" },
            { name: "GitHub", link: "https://www.github.com", icon: "🐙" },
            { name: "Figma", link: "https://www.figma.com", icon: "🎨" },
            { name: "Email", link: "mailto:example@example.com", icon: "✉️" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white/70 hover:text-white transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-white/50 text-sm"
        >
          © {new Date().getFullYear()} Zeba Afreen. All rights reserved.
        </motion.div>
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: Math.random() * 1000,
              y: Math.random() * 1000,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: [Math.random() * 1000, Math.random() * -1000],
              y: [Math.random() * 1000, Math.random() * -1000],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>
    </footer>
  );
};

export default ThematicFooter;
