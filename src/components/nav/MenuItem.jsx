import { motion } from "framer-motion";

const MenuItem = ({ item, index, isHovered, onHover, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      className="relative group"
    >
      <a
        href={`#${item.name.toLowerCase()}`}
        onClick={onClick}
        className="relative flex items-center gap-4 group"
      >
        {/* Number indicator */}
        <motion.span
          className="text-base font-light text-white/40 group-hover:text-white/80"
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          0{index + 1}
        </motion.span>

        {/* Menu text */}
        <motion.span
          className="text-6xl md:text-8xl font-bold text-white/40 group-hover:text-white"
          animate={{ x: isHovered ? 20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {item.name}
        </motion.span>

        {/* Hover line effect */}
        <motion.div
          className="absolute left-20 right-0 h-[1px] bg-white/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />
      </a>
    </motion.div>
  );
};

export default MenuItem;
