import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PageContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  // Progress bar
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left z-50"
      />

      {/* Navigation Indicators */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="space-y-4">
          {React.Children.map(children, (_, index) => (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{
                scale: activeSection === index ? 1 : 0.8,
                backgroundColor:
                  activeSection === index ? "#8B5CF6" : "#4B5563",
              }}
              className="w-3 h-3 rounded-full cursor-pointer"
              onClick={() => {
                const element = containerRef.current.children[index];
                element.scrollIntoView({ behavior: "smooth" });
              }}
            />
          ))}
        </div>
      </div>

      {/* Page Sections */}
      {React.Children.map(children, (child, index) => (
        <Section
          key={index}
          index={index}
          setActiveSection={setActiveSection}
          isMobile={isMobile}
        >
          {child}
        </Section>
      ))}
    </div>
  );
};

// Individual Section Component
const Section = ({ children, index, setActiveSection, isMobile }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      if (v > 0.3 && v < 0.7) {
        setActiveSection(index);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, index, setActiveSection]);

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 20 : 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={variants}
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
};
export default PageContainer;
