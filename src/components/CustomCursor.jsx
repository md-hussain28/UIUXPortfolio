import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SpaceCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const hover = (e) =>
      setActive(
        e.target.tagName.toLowerCase() === "button" ||
          e.target.tagName.toLowerCase() === "a"
      );

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hover);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{ x: pos.x - 4, y: pos.y - 4 }}
      transition={{ duration: 0.1 }}
    >
      {/* Core star */}
      <div className="relative">
        <div
          className="w-2 h-2 bg-white rounded-full"
          style={{ boxShadow: "0 0 10px #fff, 0 0 20px #fff" }}
        />

        {/* Orbital ring - only shows on interactive elements */}
        {active && (
          <div
            className="absolute -top-3 -left-3 w-8 h-8 border border-white/20 rounded-full"
            style={{
              animation: "orbit 2s linear infinite",
              background:
                "radial-gradient(circle, transparent 50%, rgba(255,255,255,0.05) 100%)",
            }}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default SpaceCursor;
