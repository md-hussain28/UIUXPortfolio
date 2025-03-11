import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const BackgroundText = () => {
  const words = ["UI / UX ", "DESIGN", "DEVELOP"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scaled = () => {
    const l = 6.0 / words[currentWord].length;

    if (window.innerWidth < 560) {
      return 1.8 * l;
    } else {
      return 1.2 * l;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      <motion.h1
        key={words[currentWord]}
        initial={{ opacity: 0, scale: 0.5, y: -400 }}
        animate={{
          opacity: 1,
          scale: scaled(),
          y: -100,
        }}
        exit={{ opacity: 0, scale: 0.2, y: -400 }}
        transition={{ duration: 1.5 }}
        className="text-[15vw] md:text-[20vw] font-bold whitespace-nowrap tracking-tighter"
        style={{
          WebkitTextStroke: "4px rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.03)",
          textShadow: "0 0 40px rgba(255,255,255,0.1)",
          letterSpacing: "-0.05em",
          fontFamily: "sans-serif",
          position: "absolute",
          zIndex: 0,
          transform: "translateY(-50%)",
          width: "100%",
          textAlign: "center",
        }}
      >
        {words[currentWord]}
      </motion.h1>
    </motion.div>
  );
};
const HeroContent = () => {
  const containerRef = useRef(null);

  // Parallax scroll effects
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A]/0">
      {/* Background Elements */}
      <BackgroundText />

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-pink-600/20 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 160 }}
          >
            {/* Role Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span
                className="inline-block px-4 py-2 bg-white/10 rounded-full
                           text-white/90 text-sm md:text-base backdrop-blur-sm"
              >
                UI/UX Designer
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-bold text-white">
                Crafting
                <span
                  className="block pb-2 text-transparent bg-clip-text
                             bg-gradient-to-r from-purple-400 to-pink-400"
                >
                  Digital Experiences
                </span>
              </h1>

              <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto">
                Transforming ideas into seamless and engaging digital
                experiences through thoughtful design and creative innovation.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
              {[
                { value: "1+", label: "Years" },
                { value: "10+", label: "Projects" },
                { value: "100%", label: "Creativity" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
