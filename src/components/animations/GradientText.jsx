import { motion } from "framer-motion";

const GradientText = ({ children, className }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
