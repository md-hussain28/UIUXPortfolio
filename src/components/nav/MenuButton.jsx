import { motion } from "framer-motion";

const MenuButton = ({ isOpen, toggleOpen }) => {
  return (
    <motion.button
      onClick={toggleOpen}
      className="fixed top-8 right-8 z-50 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative flex items-center justify-center rounded-full w-16 h-16 bg-white/10 backdrop-blur-sm transform transition-all ring-0 ring-white/20 hover:ring-4 duration-200">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300">
          <motion.div
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
              width: isOpen ? 28 : 24,
            }}
            className="bg-white h-[2px] transform transition-all duration-300 origin-left group-hover:w-8"
          />
          <motion.div
            animate={{
              opacity: isOpen ? 0 : 1,
              width: 12,
            }}
            className="bg-white h-[2px] rounded transform transition-all duration-300 group-hover:w-6"
          />
          <motion.div
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
              width: isOpen ? 28 : 24,
            }}
            className="bg-white h-[2px] transform transition-all duration-300 origin-left group-hover:w-8"
          />
        </div>
      </div>
    </motion.button>
  );
};

export default MenuButton;
