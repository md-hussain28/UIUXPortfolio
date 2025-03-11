import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const CosmicLink = ({ label, url, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: linkRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [50 * (index % 2 === 0 ? 1 : -1), 0]
  );
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={linkRef}
      style={{ y: springY }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <motion.a
        href={url}
        className="text-white/70 font-mono text-sm relative z-10 px-4 py-2 bg-white/5
                  backdrop-blur-md rounded-full border border-white/20"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        whileHover={{ color: "#EC4899" }}
        transition={{ duration: 0.3 }}
      >
        {label}
        {/* Orbiting ring */}
        <motion.div
          className="absolute inset-0 border-2 border-purple-400/50 rounded-full"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.8 : 0.3,
          }}
          transition={{
            duration: 1,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
        />
      </motion.a>
      {/* Cosmic burst */}
      {isHovered &&
        [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400 rounded-full"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: Math.cos(i * 2) * 30,
              y: Math.sin(i * 2) * 30,
              opacity: 0,
            }}
            transition={{ duration: 0.5 + i * 0.1, ease: "easeOut" }}
          />
        ))}
    </motion.div>
  );
};

const HolographicPortal = () => {
  const [isHovered, setIsHovered] = useState(false);
  const portalRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: portalRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  const springScale = useSpring(scale, { stiffness: 120, damping: 25 });

  return (
    <motion.div
      ref={portalRef}
      style={{ scale: springScale, rotate }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-64 h-64 mx-auto perspective-1000 z-20"
    >
      {/* Portal base */}
      <motion.div
        className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-full border-2 border-white/20
                  shadow-[0_0_50px_rgba(236,72,153,0.2)] transform-gpu overflow-hidden"
        animate={{
          scale: isHovered ? 1.15 : 1,
          rotate: 360,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Holographic ripple */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.4,
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating UI elements */}
      <motion.div
        className="absolute top-4 left-4 w-12 h-12 bg-purple-400/30 rounded-lg"
        animate={{
          y: isHovered ? -20 : 0,
          rotate: isHovered ? 45 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-1 bg-white/20 rounded-md"
          animate={{ opacity: isHovered ? 0.8 : 0.4 }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-4 w-16 h-8 bg-pink-400/30 rounded-full"
        animate={{
          y: isHovered ? 20 : 0,
          x: isHovered ? -10 : 0,
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-1 bg-white/20 rounded-full"
          animate={{ opacity: isHovered ? 0.8 : 0.4 }}
        />
      </motion.div>

      {/* Portal text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        animate={{ y: isHovered ? -20 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-white font-mono text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          UI/UX Portal
        </span>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"
          animate={{ width: isHovered ? 32 : 96 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Holographic beams */}
      {isHovered &&
        [...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 w-1 h-full bg-gradient-to-b from-purple-400/50 to-pink-400/50"
            initial={{ x: "50%", y: "50%", rotate: i * 90 }}
            animate={{
              scaleY: [0, 1.5, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            style={{ transformOrigin: "center" }}
          />
        ))}
    </motion.div>
  );
};

const FooterSection = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const contentY = useTransform(scrollY, [0, 500], [100, 0]);

  const links = [
    { label: "LinkedIn", url: "#" },
    { label: "Dribbble", url: "#" },
    { label: "Behance", url: "#" },
    { label: "GitHub", url: "#" },
  ];

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-[#0A0A0A] overflow-hidden py-16"
    >
      {/* Themed Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-purple-600/15 rounded-full blur-[150px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-pink-600/15 rounded-full blur-[150px] mix-blend-multiply" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/90"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 bg-white/5 backdrop-blur-sm"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/50 rounded-full shadow-[0_0_5px_rgba(147,51,234,0.3)]"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Footer Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 container mx-auto px-4"
      >
        <div className="flex flex-col items-center gap-12">
          {/* Holographic Portal */}
          <HolographicPortal />

          {/* Cosmic Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <CosmicLink
                key={index}
                label={link.label}
                url={link.url}
                index={index}
              />
            ))}
          </div>

          {/* Signature */}
          <motion.p
            className="text-white/50 font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Designed by a UI/UX Trailblazer • 2025
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-500/20 to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
};

export default FooterSection;
