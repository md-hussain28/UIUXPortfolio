// import { motion } from "framer-motion";
// import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

// const HeroContent = () => {
//   return (
//     <div className="relative z-10 max-w-7xl mx-auto px-4 h-screen flex flex-col justify-center items-center">
//       {/* Profile section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center space-y-6"
//       >
//         {/* Name */}
//         <motion.h1
//           className="text-6xl md:text-8xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//             John Doe
//           </span>
//         </motion.h1>

//         {/* Title */}
//         <motion.h2
//           className="text-2xl md:text-3xl text-gray-400"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           Full Stack Developer & Designer
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           className="max-w-2xl mx-auto text-gray-400 text-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           Crafting digital experiences with modern technologies and creative
//           design
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           className="flex gap-4 justify-center mt-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-3 bg-purple-600 rounded-full text-white font-medium hover:bg-purple-700 transition-colors"
//           >
//             View Projects
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-3 border border-purple-600 rounded-full text-white font-medium hover:bg-purple-600/10 transition-colors"
//           >
//             Contact Me
//           </motion.button>
//         </motion.div>

//         {/* Social Links */}
//         <motion.div
//           className="flex gap-6 justify-center mt-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 1 }}
//         >
//           {[FiGithub, FiTwitter, FiLinkedin].map((Icon, index) => (
//             <motion.a
//               key={index}
//               href="#"
//               whileHover={{ y: -4, scale: 1.1 }}
//               className="text-2xl text-gray-400 hover:text-purple-500 transition-colors"
//             >
//               <Icon />
//             </motion.a>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroContent;

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMousePointer,
} from "react-icons/fi";

const HeroContent = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Interactive elements
  const skills = [
    "UI/UX",
    "React",
    "Motion",
    "Figma",
    "Design Systems",
    "Prototyping",
    "Interaction",
    "Animation",
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.1,
              x: mousePosition.x * (index * 0.02),
              y: mousePosition.y * (index * 0.02),
            }}
            style={{
              left: `${(index * 15) % 100}%`,
              top: `${(index * 20) % 100}%`,
            }}
          >
            <span className="text-4xl font-bold text-white/10">{skill}</span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Role Tag */}
              <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
                <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 backdrop-blur-sm">
                  UI/UX Developer
                </span>
              </motion.div>

              {/* Name & Title */}
              <div className="space-y-4">
                <motion.h1
                  className="text-6xl md:text-7xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Crafting
                  <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Digital Experiences
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg text-white/60 max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Blending creativity with functionality to build immersive and
                  intuitive user interfaces.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { label: "Projects", value: "50+" },
                  { label: "Experience", value: "5 Years" },
                  { label: "Satisfaction", value: "100%" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/40">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium group relative overflow-hidden"
                >
                  <span className="relative z-10">View Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.2 }}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5"
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Interactive Preview */}
            <motion.div
              className="relative aspect-square max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
              <motion.div
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                {/* Interactive Preview Content */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-sm text-white/40">Preview</div>
                  </div>

                  {/* Mock Content */}
                  <div className="space-y-4">
                    <div className="h-4 bg-white/10 rounded-full w-3/4" />
                    <div className="h-4 bg-white/10 rounded-full w-1/2" />
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="h-20 bg-white/5 rounded-lg" />
                      <div className="h-20 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
