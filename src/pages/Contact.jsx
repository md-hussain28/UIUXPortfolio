// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const ContactSection = () => {
//   const containerRef = useRef(null);

//   // Parallax scroll effects
//   const { scrollY } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const y1 = useTransform(scrollY, [0, 500], [0, 100]);
//   const y2 = useTransform(scrollY, [0, 500], [0, -100]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] py-20 flex items-center justify-center"
//     >
//       {/* Background Elements */}
//       <motion.div
//         style={{ y: y1 }}
//         className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply"
//       />
//       <motion.div
//         style={{ y: y2 }}
//         className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-pink-600/20 rounded-full blur-[120px] mix-blend-multiply"
//       />

//       {/* Section Content */}
//       <div className="relative z-10 container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold text-white text-center mb-12"
//         >
//           Let's{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
//             Connect
//           </span>
//         </motion.h2>

//         {/* Contact Form */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="max-w-2xl mx-auto bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-8 md:p-12"
//         >
//           <form className="space-y-6">
//             {/* Name Input */}
//             <div className="space-y-2">
//               <label className="text-sm text-white/70">Your Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             {/* Email Input */}
//             <div className="space-y-2">
//               <label className="text-sm text-white/70">Your Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               />
//             </div>

//             {/* Message Input */}
//             <div className="space-y-2">
//               <label className="text-sm text-white/70">Your Message</label>
//               <textarea
//                 placeholder="Enter your message"
//                 rows="5"
//                 className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             {/* Submit Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
//             >
//               Send Message
//             </motion.button>
//           </form>
//         </motion.div>

//         {/* Social Links */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mt-12 flex justify-center space-x-6"
//         >
//           {[
//             { name: "LinkedIn", link: "https://www.linkedin.com", icon: "👔" },
//             { name: "GitHub", link: "https://www.github.com", icon: "🐙" },
//             { name: "Figma", link: "https://www.figma.com", icon: "🎨" },
//             { name: "Email", link: "mailto:example@example.com", icon: "✉️" },
//           ].map((social, index) => (
//             <a
//               key={index}
//               href={social.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl text-white/70 hover:text-white transition-colors duration-300"
//             >
//               {social.icon}
//             </a>
//           ))}
//         </motion.div>
//       </div>

//       {/* Floating Animation */}
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: [0, -20, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm"
//       >
//         Let's build something amazing together!
//       </motion.div>
//     </section>
//   );
// };

// export default ContactSection;

//--------------------------------------------------------
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useRef, useState } from "react";

// const UIElementGenerator = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const generatorRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: generatorRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
//   const springY = useSpring(y, { stiffness: 100, damping: 20 });

//   return (
//     <motion.div
//       ref={generatorRef}
//       style={{ y: springY }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="absolute top-20 right-20 z-20 perspective-1000"
//     >
//       <motion.div
//         className="relative w-48 h-48 bg-white/5 backdrop-blur-xl rounded-xl border border-white/20
//                   shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden transform-gpu"
//         animate={{
//           rotateX: isHovered ? 20 : 0,
//           rotateY: isHovered ? -20 : 0,
//           scale: isHovered ? 1.1 : 1,
//         }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         {/* Glass effect */}
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl" />

//         {/* Dynamic UI element */}
//         <motion.div
//           className="absolute inset-4 rounded-lg border-2 border-purple-400/50"
//           animate={{
//             width: isHovered ? "80%" : "60%",
//             height: isHovered ? "60%" : "80%",
//             borderRadius: isHovered ? "20px" : "8px",
//             borderColor: isHovered ? "#EC4899" : "#9333EA",
//           }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//         >
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
//             animate={{ opacity: isHovered ? 0.8 : 0.4 }}
//             transition={{ duration: 0.4 }}
//           />
//           <motion.div
//             className="absolute w-8 h-2 bg-white/50 rounded-full top-2 left-2"
//             animate={{ x: isHovered ? 20 : 0 }}
//             transition={{ duration: 0.3 }}
//           />
//         </motion.div>

//         {/* Floating label */}
//         <motion.span
//           className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm"
//           animate={{ y: isHovered ? -10 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           UI Playground
//         </motion.span>

//         {/* Particles on hover */}
//         {isHovered &&
//           [...Array(5)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-pink-400 rounded-full"
//               initial={{
//                 x: Math.random() * 100 - 50,
//                 y: Math.random() * 100 - 50,
//               }}
//               animate={{ y: -100, opacity: [1, 0] }}
//               transition={{ duration: 1 + i * 0.2, ease: "easeOut" }}
//             />
//           ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const formRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: formRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [200, 0]);
//   const springY = useSpring(y, { stiffness: 120, damping: 25 });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Contact submitted:", formData);
//   };

//   return (
//     <motion.div
//       ref={formRef}
//       style={{ y: springY }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="relative w-full max-w-md mx-auto z-10"
//     >
//       <motion.div
//         className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20
//                   shadow-[0_0_40px_rgba(255,255,255,0.1)]"
//         animate={{ scale: isHovered ? 1.03 : 1 }}
//         transition={{ duration: 0.4 }}
//       >
//         {/* Glass effect */}
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl" />

//         <h3 className="text-2xl font-bold text-white mb-6 text-center font-mono relative z-10">
//           Hit Me Up
//         </h3>
//         <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
//           <motion.input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="w-full p-3 bg-white/10 rounded-lg text-white placeholder-white/50
//                       border border-white/20 focus:outline-none focus:border-purple-400 font-mono"
//             whileFocus={{ scale: 1.02, borderColor: "#9333EA" }}
//           />
//           <motion.input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className="w-full p-3 bg-white/10 rounded-lg text-white placeholder-white/50
//                       border border-white/20 focus:outline-none focus:border-purple-400 font-mono"
//             whileFocus={{ scale: 1.02, borderColor: "#9333EA" }}
//           />
//           <motion.textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your UI/UX collab idea..."
//             rows="4"
//             className="w-full p-3 bg-white/10 rounded-lg text-white placeholder-white/50
//                       border border-white/20 focus:outline-none focus:border-purple-400 font-mono"
//             whileFocus={{ scale: 1.02, borderColor: "#9333EA" }}
//           />
//           <motion.button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg
//                       text-white font-mono font-bold relative overflow-hidden"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 30px rgba(236,72,153,0.5)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50"
//               animate={{ x: ["-100%", "100%"] }}
//               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
//             />
//             <span className="relative z-10">Send Signal</span>
//           </motion.button>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// const ContactSection = () => {
//   const containerRef = useRef(null);
//   const { scrollY } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
//   const titleY = useTransform(scrollY, [0, 500], [250, 0]);
//   const titleScale = useTransform(scrollY, [0, 500], [0.7, 1]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative min-h-screen w-full bg-[#0A0A0A] overflow-hidden py-20"
//     >
//       {/* Themed Background Animation */}
//       <motion.div style={{ y: backgroundY }} className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply" />
//         <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-pink-600/20 rounded-full blur-[120px] mix-blend-multiply" />
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"
//           animate={{ opacity: [0.8, 1, 0.8] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//         {/* Subtle glass-like overlay */}
//         <motion.div
//           className="absolute inset-0 bg-white/5 backdrop-blur-sm"
//           animate={{ opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//       </motion.div>

//       {/* Floating particles */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-purple-400/50 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.3)]"
//           initial={{
//             x: Math.random() * 100 + "%",
//             y: Math.random() * 100 + "%",
//           }}
//           animate={{
//             y: [0, -50, 0],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
//         />
//       ))}

//       {/* Title */}
//       <motion.div
//         style={{ y: titleY, scale: titleScale }}
//         className="relative z-10 text-center mb-16"
//       >
//         <h2 className="text-5xl md:text-8xl font-bold text-white font-mono">
//           <motion.span
//             className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
//             animate={{ skewX: [0, 5, -5, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           >
//             Contact Me
//           </motion.span>
//         </h2>
//         <motion.p
//           className="text-white/70 mt-4 text-lg font-mono max-w-md mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           Let’s craft some pixel magic together, bro!
//         </motion.p>
//         <motion.div
//           className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
//           initial={{ width: 0 }}
//           animate={{ width: 128 }}
//           transition={{ duration: 1, delay: 0.8 }}
//         />
//       </motion.div>

//       {/* Contact Form & UI Element Generator */}
//       <div className="relative z-10 container mx-auto px-4">
//         <ContactForm />
//         <UIElementGenerator />
//       </div>

//       {/* Subtle bottom glow */}
//       <motion.div
//         className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purple-500/20 to-transparent"
//         animate={{ opacity: [0.5, 1, 0.5] }}
//         transition={{ duration: 3, repeat: Infinity }}
//       />
//     </div>
//   );
// };

// export default ContactSection;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ContactSection = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax scroll effects
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Floating 3D effect for the form
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const form = document.querySelector(".contact-form");
      if (form) {
        const rect = form.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (clientY - centerY) / 20;
        const rotateY = (clientX - centerX) / 20;
        form.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] py-20 flex items-center justify-center"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-pink-600/20 rounded-full blur-[120px] mix-blend-multiply"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -100, x: Math.random() * 1000 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, Math.random() * 800],
              x: [Math.random() * 1000, Math.random() * 1000],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
          />
        ))}
      </div>

      {/* Section Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-12"
        >
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Create Magic
          </span>
        </motion.h2>

        {/* 3D Floating Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="contact-form max-w-2xl mx-auto bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-8 md:p-12 transform transition-transform duration-500"
        >
          <form className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-sm text-white/70">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm text-white/70">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-sm text-white/70">Your Message</label>
              <textarea
                placeholder="Enter your message"
                rows="5"
                className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center space-x-6"
        >
          {[
            { name: "LinkedIn", link: "https://www.linkedin.com", icon: "👔" },
            { name: "GitHub", link: "https://www.github.com", icon: "🐙" },
            { name: "Figma", link: "https://www.figma.com", icon: "🎨" },
            { name: "Email", link: "mailto:example@example.com", icon: "✉️" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white/70 hover:text-white transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Floating Text */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm"
      >
        Let's build something extraordinary!
      </motion.div>
    </section>
  );
};

export default ContactSection;
