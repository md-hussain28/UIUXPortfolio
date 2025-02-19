import { motion } from "framer-motion";
import { useState } from "react";
import ZALogo from "../../assets/ZALogo.svg";
const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Letter animation variants
  const letterVariants = {
    initial: { y: 0 },
    hover: { y: -5 },
  };

  // Glow animation variants
  const glowVariants = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    hover: {
      opacity: 1,
      scale: 1.2,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-8 left-8 z-50"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          variants={glowVariants}
        />

        {/* Logo Container */}
        <motion.div
          className="relative bg-black/50 backdrop-blur-sm rounded-full p-3 border border-white/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* If using SVG logo */}
          <motion.div className="relative w-10 h-10 flex items-center justify-center">
            <img
              src={ZALogo}
              alt="Logo"
              className="w-full h-full object-contain"
            />

            {/* Optional: Animated outline */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Optional: Animated text that appears on hover */}
        <motion.div
          className="absolute left-full ml-4 top-1/2 -translate-y-1/2 flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
        >
          <div className="flex space-x-1">
            {["Z", "E", "B", "A", " ", "A", "F", "R", "E", "E", "N"].map(
              (letter, index) => (
                <motion.span
                  key={index}
                  className="text-white text-sm font-sans"
                  variants={letterVariants}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                  transition={{ delay: index * 0.05 }}
                >
                  {letter}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Logo;
