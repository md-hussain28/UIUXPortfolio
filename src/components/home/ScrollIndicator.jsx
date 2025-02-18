import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-sm text-white/50">Scroll to explore</span>
        <FiArrowDown className="text-white/50" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
