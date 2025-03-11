// export default AnimatedBackground;
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useCallback, memo } from "react";

const AnimatedBackground = memo(() => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Reduced number of shapes and simplified properties
  const shapes = Array(0)
    .fill(null)
    .map((_, i) => ({
      id: i,
      size: 250 + i * 50,
      left: `${25 + i * 25}%`,
      top: `${20 + i * 20}%`,
      duration: 20,
      delay: i * 2,
    }));

  const handleMouseMove = useCallback(
    (event) => {
      // Throttle mouse movement updates
      requestAnimationFrame(() => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      });
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    // Only add mouse tracking on desktop
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 z-10 overflow-hidden bg-gradient-to-br from-black via-purple-900/30 to-black">
      <div
        className="absolute z-50 inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
        style={{ mixBlendMode: "overlay" }}
      />
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
