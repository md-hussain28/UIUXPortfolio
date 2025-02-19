// // src/components/AnimatedBackground/AnimatedBackground.jsx
// import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
// import { useEffect, useCallback, memo, useState } from "react";

// const AnimatedBackground = memo(() => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   // Smoother spring configuration
//   const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
//   const smoothX = useSpring(mouseX, springConfig);
//   const smoothY = useSpring(mouseY, springConfig);

//   // Transform for gradient and particle movement
//   const gradientX = useTransform(smoothX, [0, dimensions.width], [0, 100]);
//   const gradientY = useTransform(smoothY, [0, dimensions.height], [0, 100]);

//   // Dynamic shapes with more properties
//   const shapes = Array(8)
//     .fill(null)
//     .map((_, i) => ({
//       id: i,
//       baseSize: Math.random() * 300 + 200,
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       duration: 15 + Math.random() * 15,
//       delay: i * 0.5,
//       opacity: 0.05 + Math.random() * 0.1,
//       hue: Math.random() * 60 + 250, // Purple-ish hues
//     }));

//   const handleMouseMove = useCallback(
//     (event) => {
//       mouseX.set(event.clientX);
//       mouseY.set(event.clientY);
//     },
//     [mouseX, mouseY]
//   );

//   const handleResize = useCallback(() => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   }, []);

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [handleMouseMove, handleResize]);

//   return (
//     <div className="fixed inset-0 z-10 overflow-hidden">
//       {/* Base gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black transition-colors duration-1000" />

//       {/* Animated shapes */}
//       <div className="absolute inset-0">
//         {shapes.map(
//           ({ id, baseSize, left, top, duration, delay, opacity, hue }) => (
//             <motion.div
//               key={id}
//               className="absolute rounded-full"
//               style={{
//                 background: `radial-gradient(circle at center,
//                 hsla(${hue}, 70%, 70%, ${opacity}) 0%,
//                 hsla(${hue}, 70%, 50%, ${opacity * 0.5}) 50%,
//                 transparent 100%
//               )`,
//                 width: baseSize,
//                 height: baseSize,
//                 left,
//                 top,
//                 filter: "blur(40px)",
//               }}
//               animate={{
//                 x: [0, 50, -50, 0],
//                 y: [0, -30, 30, 0],
//                 scale: [1, 1.2, 0.8, 1],
//                 rotate: [0, 180, -180, 0],
//               }}
//               transition={{
//                 duration,
//                 delay,
//                 repeat: Infinity,
//                 ease: "linear",
//                 times: [0, 0.33, 0.66, 1],
//               }}
//             />
//           )
//         )}
//       </div>

//       {/* Interactive gradient follow */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(
//               1000px circle at ${gradientX}% ${gradientY}%,
//               rgba(147,51,234,0.15),
//               rgba(79,70,229,0.1) 20%,
//               transparent 40%
//             )
//           `,
//         }}
//       />

//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {Array(20)
//           .fill(null)
//           .map((_, i) => (
//             <motion.div
//               key={`particle-${i}`}
//               className="absolute w-1 h-1 bg-white/20 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -100, 0],
//                 x: [0, Math.random() * 50 - 25, 0],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 5 + Math.random() * 5,
//                 delay: i * 0.2,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           ))}
//       </div>

//       {/* Pulsing glow effect */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{
//           background: [
//             "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.05) 0%, transparent 50%)",
//             "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.1) 0%, transparent 70%)",
//             "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.05) 0%, transparent 50%)",
//           ],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </div>
//   );
// });

// AnimatedBackground.displayName = "AnimatedBackground";

// export default AnimatedBackground;
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useCallback, memo } from "react";

const AnimatedBackground = memo(() => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Reduced number of shapes and simplified properties
  const shapes = Array(4)
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
    <div className="fixed inset-0 z-10 overflow-hidden bg-gradient-to-br from-black via-purple-900/10 to-black">
      {/* Animated shapes with reduced complexity */}
      <div className="absolute inset-0">
        {shapes.map(({ id, size, left, top, duration, delay }) => (
          <motion.div
            key={id}
            className="absolute rounded-full opacity-[0.07]"
            style={{
              width: size,
              height: size,
              left,
              top,
              background:
                "radial-gradient(circle at center, purple, transparent)",
              filter: "blur(40px)",
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Simplified gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
        style={{ mixBlendMode: "overlay" }}
      />
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
