// components/PageWrapper.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageWrapper = ({ children, route }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Simulate page loading
    setTimeout(() => setIsLoading(false), 800);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [route]);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.61, 1, 0.88, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        // Loading Screen
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
          />
        </motion.div>
      ) : (
        <motion.div
          key={route}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          className="relative min-h-screen"
        >
          {/* Animated Background */}
          <motion.div
            className="fixed inset-0 pointer-events-none"
            animate={{
              backgroundPosition: `${mousePosition.x * 30}px ${
                mousePosition.y * 30
              }px`,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 blur-3xl" />
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="fixed inset-0 pointer-events-none"
            style={{
              x: mousePosition.x * 20,
              y: mousePosition.y * 20,
            }}
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Wrapper */}
          <motion.div
            className="relative z-10"
            style={{
              x: mousePosition.x * -10,
              y: mousePosition.y * -10,
            }}
          >
            {children}
          </motion.div>

          {/* Page Transition Overlay */}
          <motion.div
            className="fixed inset-0 pointer-events-none bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Enhanced version with more features
const EnhancedPageWrapper = ({
  children,
  route,
  theme = "dark",
  transitionType = "fade",
  enableParallax = true,
  loadingDuration = 800,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Different transition types
  const transitions = {
    fade: {
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { x: 300, opacity: 0 },
      enter: { x: 0, opacity: 1 },
      exit: { x: -300, opacity: 0 },
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      enter: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 },
    },
  };

  useEffect(() => {
    if (enableParallax) {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [enableParallax]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), loadingDuration);
  }, [route, loadingDuration]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <CustomLoader theme={theme} />
      ) : (
        <motion.div
          key={route}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={transitions[transitionType]}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`relative min-h-screen ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          {enableParallax && (
            <ParallaxBackground mousePosition={mousePosition} theme={theme} />
          )}

          <motion.div
            className="relative z-10"
            style={
              enableParallax
                ? {
                    x: mousePosition.x * -10,
                    y: mousePosition.y * -10,
                  }
                : {}
            }
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Helper Components
const CustomLoader = ({ theme }) => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={`fixed inset-0 z-50 flex items-center justify-center ${
      theme === "dark" ? "bg-black" : "bg-white"
    }`}
  >
    {/* Add your custom loader here */}
  </motion.div>
);

const ParallaxBackground = ({ mousePosition, theme }) => (
  <>
    <motion.div
      className="fixed inset-0 pointer-events-none"
      animate={{
        backgroundPosition: `${mousePosition.x * 30}px ${
          mousePosition.y * 30
        }px`,
      }}
    >
      <div
        className={`absolute inset-0 blur-3xl ${
          theme === "dark"
            ? "bg-gradient-to-br from-purple-900/20 to-blue-900/20"
            : "bg-gradient-to-br from-purple-100/20 to-blue-100/20"
        }`}
      />
    </motion.div>
  </>
);

export { PageWrapper, EnhancedPageWrapper };
