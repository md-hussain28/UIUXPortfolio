import { motion } from "framer-motion";

const MenuDescription = ({ item, isHovered }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        x: isHovered ? 0 : 20,
        y: "-50%",
      }}
      className="absolute left-full top-1/2 ml-8 pointer-events-none"
    >
      <div className="relative">
        <motion.p
          className="text-white/60 text-lg whitespace-nowrap"
          animate={{ y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          {item.description}
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="absolute -left-4 top-1/2 w-2 h-2 bg-purple-500 rounded-full"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, repeat: isHovered ? Infinity : null }}
        />
      </div>
    </motion.div>
  );
};

export default MenuDescription;
