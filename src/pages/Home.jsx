// // src/components/HomePage.jsx
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

// const HomePage = () => {
//   const constraintsRef = useRef(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="container mx-auto px-4 pt-20 lg:pt-32"
//       >
//         {/* Navigation */}
//         <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 to-transparent">
//           <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
//             >
//               Portfolio
//             </motion.div>
//             <div className="hidden md:flex space-x-8">
//               {["Work", "About", "Contact"].map((item) => (
//                 <motion.a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   whileHover={{ y: -2 }}
//                   className="hover:text-purple-400 transition-colors"
//                 >
//                   {item}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </nav>

//         {/* Main Hero Content */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="lg:w-1/2"
//           >
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               <span className="block">Creative</span>
//               <span className="block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//                 UI/UX Designer
//               </span>
//             </h1>
//             <p className="text-gray-400 text-lg mb-8">
//               Crafting beautiful digital experiences that merge aesthetics with
//               functionality.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold"
//               >
//                 View Projects
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 border border-purple-500 rounded-full font-semibold"
//               >
//                 Contact Me
//               </motion.button>
//             </div>

//             {/* Social Links */}
//             <div className="mt-12 flex gap-6">
//               {[FiGithub, FiLinkedin, FiTwitter].map((Icon, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   whileHover={{ y: -4, color: "#A855F7" }}
//                   className="text-2xl text-gray-400 hover:text-purple-500 transition-colors"
//                 >
//                   <Icon />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Interactive Design Element */}
//           <motion.div
//             ref={constraintsRef}
//             className="lg:w-1/2 h-[400px] relative"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl" />
//             <motion.div
//               drag
//               dragConstraints={constraintsRef}
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//             >
//               <div className="w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-xl font-bold">Drag Me!</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="flex justify-center mt-20"
//         >
//           <FiArrowDown className="text-2xl text-gray-400" />
//         </motion.div>

//         {/* Featured Skills */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
//         >
//           {["UI Design", "UX Research", "Prototyping", "Animation"].map(
//             (skill, index) => (
//               <motion.div
//                 key={skill}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl text-center"
//               >
//                 <h3 className="text-lg font-semibold">{skill}</h3>
//               </motion.div>
//             )
//           )}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default HomePage;
// src/components/HomePage.jsx

// import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
// import ParticlesBackground from "../components/animations/ParticlesBackground";
// import GradientText from "../components/animations/GradientText";
// import { useSpotlight } from "../hooks/useSpotlight";
// // src/components/HomePage.jsx
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// const backgroundWords = [
//   { text: "DESIGN", x: "10%", y: "20%" },
//   { text: "CREATIVE", x: "60%", y: "30%" },
//   { text: "UI/UX", x: "20%", y: "50%" },
//   { text: "MINIMAL", x: "70%", y: "65%" },
//   { text: "AESTHETIC", x: "15%", y: "80%" },
//   { text: "VISUAL", x: "80%", y: "40%" },
// ];
// const BackgroundText = () => {
//   const { mousePosition, isMoving } = useSpotlight();

//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none">
//       {/* Enhanced Spotlight Effect */}
//       <motion.div
//         animate={{
//           x: mousePosition.x - 200,
//           y: mousePosition.y - 200,
//           scale: isMoving ? 1.2 : 1,
//         }}
//         transition={{
//           type: "spring",
//           mass: 0.1,
//           stiffness: 800,
//           damping: 30,
//         }}
//         className="absolute pointer-events-none"
//         style={{
//           width: "400px",
//           height: "400px",
//           background: `
//               radial-gradient(
//                 circle at center,
//                 transparent 0%,
//                 rgba(0,0,0,0.95) 70%
//               )
//             `,
//           borderRadius: "50%",
//         }}
//       />

//       {backgroundWords.map((word, index) => (
//         <motion.div
//           key={index}
//           className="absolute"
//           style={{
//             left: word.x,
//             top: word.y,
//           }}
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{
//             opacity: 0.08,
//             scale: 1,
//             y: [0, -20, 0],
//           }}
//           transition={{
//             y: {
//               duration: 6,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: index * 0.5,
//             },
//             opacity: { duration: 1, delay: index * 0.2 },
//             scale: { duration: 1, delay: index * 0.2 },
//           }}
//         >
//           <div className="relative">
//             <span
//               className="text-[8vw] font-bold text-white/10 transition-all duration-300"
//               style={{
//                 filter: `blur(${Math.min(
//                   Math.max(
//                     Math.hypot(
//                       mousePosition.x - parseInt(word.x),
//                       mousePosition.y - parseInt(word.y)
//                     ) / 15,
//                     1
//                   ),
//                   8
//                 )}px)`,
//                 textShadow: "0 0 20px rgba(255,255,255,0.1)",
//               }}
//             >
//               {word.text}
//             </span>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// const HomePage = () => {
//   const containerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

//   // Animated background shapes
//   const shapes = Array(5)
//     .fill(null)
//     .map((_, i) => ({
//       id: i,
//       variants: {
//         hidden: {
//           opacity: 0,
//           scale: 0,
//           x: Math.random() * 800 - 400,
//           y: Math.random() * 800 - 400,
//           rotate: Math.random() * 360,
//         },
//         visible: {
//           opacity: 0.3,
//           scale: 1,
//           x: 0,
//           y: 0,
//           rotate: 0,
//           transition: {
//             duration: 1.5,
//             delay: i * 0.2,
//             type: "spring",
//             stiffness: 100,
//           },
//         },
//       },
//     }));

//   // Text animation variants
//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         delay: i * 0.2,
//         type: "spring",
//         stiffness: 100,
//       },
//     }),
//   };

//   return (
//     <AnimatePresence>
//       <div
//         ref={containerRef}
//         className="relative min-h-screen overflow-hidden bg-[#0a0a1f]"
//       >
//         {/* <ParticlesBackground /> */}
//         <BackgroundText />
//         {/* Animated Background Shapes
//         <div className="fixed inset-0 overflow-hidden">
//           {shapes.map(({ id, variants }) => (
//             <motion.div
//               key={id}
//               initial="hidden"
//               animate="visible"
//               variants={variants}
//               className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
//             >
//               <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
//             </motion.div>
//           ))}
//         </div> */}

//         {/* Mouse Follow Effect */}
//         <motion.div
//           className="fixed w-96 h-96 pointer-events-none"
//           animate={{
//             x: mousePosition.x - 192,
//             y: mousePosition.y - 192,
//           }}
//           transition={{ type: "spring", damping: 30, stiffness: 200 }}
//         >
//           <div className="w-full h-full rounded-full bg-purple-500/10 blur-3xl" />
//         </motion.div>

//         {/* Main Content */}
//         <div className="relative min-h-screen flex items-center justify-center px-4">
//           <motion.div className="max-w-6xl mx-auto text-center" style={{ y }}>
//             {/* Animated Entry */}
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 duration: 1,
//                 type: "spring",
//                 stiffness: 200,
//                 damping: 20,
//               }}
//               className="relative"
//             >
//               {/* Profile Image with Animated Border */}
//               <motion.div
//                 className="relative w-48 h-48 mx-auto mb-12"
//                 whileHover={{ scale: 1.1 }}
//                 animate={{
//                   rotate: [0, 360],
//                 }}
//                 transition={{
//                   rotate: {
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "linear",
//                   },
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500"
//                   style={{ padding: "3px" }}
//                 >
//                   <motion.div
//                     className="w-full h-full rounded-full overflow-hidden bg-[#0f1729]"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <img
//                       src="/your-photo.jpg"
//                       alt="Designer"
//                       className="w-full h-full object-cover"
//                     />
//                   </motion.div>
//                 </div>

//                 {/* Orbiting Elements */}
//                 {[0, 1, 2].map((index) => (
//                   <motion.div
//                     key={index}
//                     className="absolute w-4 h-4"
//                     animate={{
//                       rotate: 360,
//                     }}
//                     transition={{
//                       duration: 3,
//                       delay: index,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     style={{
//                       originX: "100px",
//                       originY: "100px",
//                     }}
//                   >
//                     <div className="w-full h-full rounded-full bg-purple-500/50 blur-sm" />
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Name with Split Text Animation */}
//               <motion.div
//                 custom={1}
//                 initial="hidden"
//                 animate="visible"
//                 variants={textVariants}
//                 className="mb-8"
//               >
//                 <GradientText className="text-6xl md:text-8xl font-bold mb-4">
//                   John Doe
//                 </GradientText>
//                 <motion.div
//                   custom={2}
//                   variants={textVariants}
//                   className="text-gray-400 text-xl md:text-2xl"
//                 >
//                   UI/UX Designer & Creative Developer
//                 </motion.div>
//               </motion.div>

//               {/* Description with Stagger Animation */}
//               <motion.p
//                 custom={3}
//                 variants={textVariants}
//                 className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12"
//               >
//                 Crafting digital experiences that blend aesthetics with
//                 functionality. Passionate about creating intuitive and engaging
//                 user interfaces.
//               </motion.p>

//               {/* Animated CTA Button */}
//               <motion.button
//                 whileHover={{
//                   scale: 1.1,
//                   boxShadow: "0 0 30px rgba(167, 139, 250, 0.5)",
//                 }}
//                 whileTap={{ scale: 0.9 }}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 15,
//                 }}
//                 className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 rounded-full text-white font-semibold text-lg relative overflow-hidden group"
//               >
//                 <span className="relative z-10">Let's Connect</span>
//                 <motion.div
//                   className="absolute inset-0 bg-white"
//                   initial={{ x: "-100%" }}
//                   whileHover={{ x: "100%" }}
//                   transition={{ duration: 0.5 }}
//                   style={{ opacity: 0.2 }}
//                 />
//               </motion.button>
//             </motion.div>

//             {/* Social Links with Stagger */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1 }}
//               className="fixed left-4 bottom-4 flex flex-col space-y-4"
//             >
//               {[FiGithub, FiLinkedin, FiTwitter].map((Icon, index) => (
//                 <motion.a
//                   key={index}
//                   whileHover={{
//                     scale: 1.2,
//                     x: 10,
//                     color: "#a78bfa",
//                     rotate: [0, 10, -10, 0],
//                   }}
//                   className="text-white/60 hover:text-white text-2xl"
//                 >
//                   <Icon />
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* Animated Scroll Indicator */}
//             <motion.div
//               animate={{
//                 y: [0, 10, 0],
//                 opacity: [0.3, 1, 0.3],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//             >
//               <FiArrowDown className="text-white/60 text-2xl" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default HomePage;

//------------------------------------------------------------------------

import HeroSection from "../components/home/HeroSection";
import ScrollIndicator from "../components/home/ScrollIndicator";

import AnimatedBackground from "../components/home/AnimatedBackground";
import HeroContent from "../components/home/HeroContent";
import HeroContent1 from "../components/home/Home1";

const Home = () => {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <AnimatedBackground />

      {/* <HeroSection />
      <ScrollIndicator />
      <HeroContent /> */}
      <HeroContent1 />
    </main>
  );
};

export default Home;
