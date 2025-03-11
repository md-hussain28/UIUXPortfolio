import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxWrapper = ({ children }) => {
  // Track the scroll position of the entire page
  const { scrollY } = useScroll();

  // Transform scroll position into y-movement for parallax layers
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]); // Slower movement for the gradient
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]); // Faster movement for the shape

  return (
    <div className="relative min-h-screen">
      {/* Parallax Layer 1: Gradient Background */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30"
        style={{ y: y1 }}
      />
      {/* Parallax Layer 2: Blurred Shape */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center"
        style={{ y: y2 }}
      >
        <div className="w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </motion.div>
      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;
