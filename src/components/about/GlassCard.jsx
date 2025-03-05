// components/about/GlassCard.jsx
import { motion } from "framer-motion";

const GlassCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10
                 shadow-xl hover:border-white/20 transition-colors duration-300"
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
