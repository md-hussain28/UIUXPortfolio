import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypewriterText = () => {
  const [text] = useTypewriter({
    words: [
      "UI/UX Designer",
      "Visual Artist",
      "Creative Thinker",
      "Digital Creator",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.h2
      className="text-2xl md:text-3xl font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <span className="text-white/70">{text}</span>
      <Cursor cursorColor="#9333EA" />
    </motion.h2>
  );
};

export default TypewriterText;
