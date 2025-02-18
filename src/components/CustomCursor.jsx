import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorPoints, setCursorPoints] = useState([]);
  const maxPoints = 20; // Number of trailing points

  useEffect(() => {
    document.body.style.cursor = "none";

    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Update trail points
      setCursorPoints((prev) => {
        const newPoints = [...prev, newPosition];
        if (newPoints.length > maxPoints) {
          return newPoints.slice(1);
        }
        return newPoints;
      });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      const isClickable =
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.closest("button") ||
        e.target.closest("a");
      setIsHovered(isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Geometric cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {/* Main cursor shape */}
        <motion.div
          className="relative"
          animate={{
            scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
          }}
        >
          {/* Rotating elements */}
          <motion.div
            className="absolute"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8"
                style={{
                  rotate: `${i * 120}deg`,
                  transformOrigin: "50% 50%",
                }}
              >
                <motion.div
                  className="w-1 h-1 bg-white rounded-full"
                  style={{
                    transformOrigin: "50% 50%",
                    translate: "0 -16px",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Center dot */}
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: isHovered ? 1.5 : 1,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Trail effect */}
      {cursorPoints.map((point, index) => {
        const scale = (index + 1) / cursorPoints.length;
        return (
          <motion.div
            key={index}
            className="fixed pointer-events-none z-40"
            style={{
              x: point.x,
              y: point.y,
              scale,
            }}
          >
            <motion.div
              className="w-1 h-1 bg-white/30 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 2 }}
              exit={{ scale: 0 }}
            />
          </motion.div>
        );
      })}

      {/* Hover ring */}
      {isHovered && (
        <motion.div
          className="fixed pointer-events-none z-40"
          animate={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: isClicked ? 0.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
        >
          <motion.div
            className="w-12 h-12 rounded-full border border-white/30"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}

      {/* Optional: Magnetic field effect */}
      <motion.div
        className="fixed pointer-events-none z-30 w-32 h-32 rounded-full"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          background: `radial-gradient(
            circle at center,
            rgba(255,255,255,0.1) 0%,
            transparent 70%
          )`,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      />
    </>
  );
};

export default CustomCursor;
