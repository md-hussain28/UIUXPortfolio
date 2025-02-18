import { motion } from "framer-motion";

const CreativeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70" />

      {/* Design Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-[20%] w-4 h-4 border border-white/20 rounded-full" />
        <div className="absolute top-40 right-[30%] w-2 h-2 bg-purple-500/50 rounded-full" />
        <div className="absolute bottom-32 left-[40%] w-3 h-3 bg-pink-500/50 rounded-full" />
        {/* Add more design elements as needed */}
      </div>
    </div>
  );
};

export default CreativeBackground;
