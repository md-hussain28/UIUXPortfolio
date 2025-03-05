// import { useCallback, memo } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const particlesOptions = {
//   fullScreen: {
//     enable: false,
//     zIndex: -1,
//   },
//   background: {
//     color: {
//       value: "transparent",
//     },
//   },
//   fpsLimit: 60, // Reduced from 120 for better performance
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//     color: {
//       value: ["#FF1E1E", "#FF6B6B", "#4D4DFF", "#6B6BFF"],
//       animation: {
//         enable: true,
//         speed: 20,
//         sync: true,
//       },
//     },
//     shape: {
//       type: ["circle", "triangle"],
//     },
//     opacity: {
//       value: 0.5,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 1,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: { min: 1, max: 30 },
//       random: true,
//       animation: {
//         enable: true,
//         speed: 2,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     links: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 2,
//       direction: "none",
//       random: true,
//       straight: false,
//       outModes: {
//         default: "bounce",
//       },
//       attract: {
//         enable: true,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detectsOn: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "grab",
//       },
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 140,
//         links: {
//           opacity: 1,
//         },
//       },
//       push: {
//         quantity: 4,
//       },
//     },
//   },
//   detectRetina: true,
//   smooth: true, // Added for smoother animations
// };

// const ParticlesBackground = memo(() => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       className="absolute inset-0 z-10"
//       id="tsparticles"
//       init={particlesInit}
//       options={particlesOptions}
//     />
//   );
// });

// ParticlesBackground.displayName = "ParticlesBackground";

// export default ParticlesBackground;
