// AnimatedPageWrapper.jsx
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/nav/Navbar";

const AnimatedPageWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  // Parallax effects
  const parallaxY = useTransform(smoothScrollProgress, [0, 1], [0, -0.2], {
    clamp: false,
  });
  const scaleProgress = useTransform(smoothScrollProgress, [0, 1], [1, 1.05]);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Cursor state management
  const [cursorState, setCursorState] = useState("default");

  return (
    <div className="fixed inset-0 overflow-hidden">
      <CustomCursor state={cursorState} />

      {/* Animated background elements */}
      <motion.div
        style={{ y: parallaxY }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Main content container */}
      <motion.div
        ref={containerRef}
        style={{
          scale: scaleProgress,
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, 0.25]),
        }}
        className="h-screen overflow-y-auto overflow-x-hidden relative"
      >
        {/* Dynamic navbar effects */}
        <motion.div
          style={{
            opacity: useTransform(smoothScrollProgress, [0, 0.1], [1, 0.9]),
            y: useTransform(smoothScrollProgress, [0, 1], [0, -50]),
          }}
          className="fixed top-0 w-full z-50"
        >
          <Navbar />
        </motion.div>

        {/* Children with scroll animations */}
        <div className="relative z-10">
          {children.map((Child, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: isMobile ? 50 : 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              viewport={{ once: true, margin: "0px 0px -25% 0px" }}
              className="min-h-screen w-full flex items-center justify-center snap-start"
            >
              <div className="container mx-auto px-4 py-24">{Child}</div>
            </motion.section>
          ))}
        </div>

        {/* Scroll progress indicator */}
        <motion.div
          style={{ scaleX: smoothScrollProgress }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 origin-left z-50"
        />
      </motion.div>
    </div>
  );
};
export default AnimatedPageWrapper;
