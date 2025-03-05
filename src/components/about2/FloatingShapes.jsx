import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [-100, 150, -150],
          y: [-100, 130, -100],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
          delay: 3,
        }}
      />
    </div>
  );
};

export default FloatingShapes;
