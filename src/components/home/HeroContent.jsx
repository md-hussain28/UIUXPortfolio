import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroContent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse movement effect
  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />

        {/* Interactive gradient following mouse */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.07), transparent 40%)`,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Text */}
            <div className="space-y-8">
              {/* Designer Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
              >
                <span
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                               backdrop-blur-sm rounded-full text-purple-300 text-sm border border-purple-500/20"
                >
                  UI/UX Designer
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Crafting Digital
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Experiences
                  </span>
                </h1>
                <p className="text-lg text-gray-300 max-w-md">
                  Transforming ideas into intuitive and engaging user interfaces
                  that leave a lasting impression.
                </p>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-6"
              >
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "50+", label: "Projects Completed" },
                  { number: "30+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-2xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                           rounded-lg text-white font-medium shadow-lg shadow-purple-500/25"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border border-purple-500/20 rounded-lg text-white 
                           font-medium hover:bg-purple-500/10 transition-colors"
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            >
              {/* Design Elements Grid */}
              <div className="grid grid-cols-2 gap-4 h-full p-4">
                {[...Array(4)].map((_, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(${
                        index * 45
                      }deg, rgba(168,85,247,0.1), rgba(236,72,153,0.1))`,
                    }}
                  >
                    <div className="absolute inset-0 backdrop-blur-sm border border-white/10" />
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -left-4 w-8 h-8 border border-purple-500/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -right-4 w-12 h-12 border border-pink-500/20 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
