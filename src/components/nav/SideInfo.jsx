import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiArrowRight, FiRefreshCw } from "react-icons/fi";

const quotes = [
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    tag: "User Experience",
    color: "from-purple-500 to-pink-500",
  },
  {
    text: "The best interfaces are those that get out of the way and let users achieve their goals.",
    author: "Dieter Rams",
    tag: "Interface Design",
    color: "from-blue-500 to-cyan-500",
  },
  {
    text: "Design is the silent ambassador of your brand.",
    author: "Paul Rand",
    tag: "Brand Design",
    color: "from-emerald-500 to-teal-500",
  },
  {
    text: "UX is not about designing pretty interfaces – it's about designing effective ones.",
    author: "Don Norman",
    tag: "UX Philosophy",
    color: "from-orange-500 to-red-500",
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames",
    tag: "Design Details",
    color: "from-rose-500 to-purple-500",
  },
  {
    text: "White space is like air: it is necessary for design to breathe.",
    author: "Wojciech Zieliński",
    tag: "Visual Space",
    color: "from-indigo-500 to-blue-500",
  },
  {
    text: "A user interface is like a joke. If you have to explain it, it's not that good.",
    author: "Martin LeBlanc",
    tag: "UI Design",
    color: "from-violet-500 to-purple-500",
  },
  {
    text: "Design is not just about making things beautiful; it's about making things work beautifully.",
    author: "Roger Martin",
    tag: "Design Thinking",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    text: "The best design is the one you don't notice.",
    author: "Steve Jobs",
    tag: "Invisible Design",
    color: "from-amber-500 to-orange-500",
  },
  {
    text: "Design is thinking made visual.",
    author: "Saul Bass",
    tag: "Visual Design",
    color: "from-lime-500 to-green-500",
  },
  {
    text: "Good design is obvious. Great design is transparent.",
    author: "Joe Sparano",
    tag: "Design Quality",
    color: "from-cyan-500 to-blue-500",
  },
  {
    text: "Every pixel, every interaction, every animation should have purpose.",
    author: "Josh Puckett",
    tag: "Design Purpose",
    color: "from-sky-500 to-indigo-500",
  },
  {
    text: "Design creates culture. Culture shapes values. Values determine the future.",
    author: "Robert L. Peters",
    tag: "Design Impact",
    color: "from-teal-500 to-emerald-500",
  },
  {
    text: "The simpler the interface, the more complex the implementation.",
    author: "Alan Kay",
    tag: "Simplicity",
    color: "from-red-500 to-orange-500",
  },
  {
    text: "Design is not a single object or dimension. Design is messy and complex.",
    author: "Natasha Jen",
    tag: "Design Process",
    color: "from-pink-500 to-rose-500",
  },
];

// Updated component with responsive design
const SideInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextQuote = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance quotes
  useEffect(() => {
    const timer = setInterval(nextQuote, 10000); // Change quote every 10 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        className="w-1/3 h-screen border-l border-white/10 hidden md:flex flex-col"
      >
        {/* Desktop content remains the same as before */}
        {/* ... Previous desktop layout ... */}
        <div className="flex-1 p-8 flex flex-col justify-center relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-50">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl"
              animate={{
                background: `linear-gradient(${quotes[currentIndex].color})`,
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-3xl"
              animate={{
                background: `linear-gradient(${quotes[currentIndex].color})`,
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative">
            {/* Tag */}
            <motion.div layout className="mb-8 flex items-center gap-2">
              <motion.div
                className="h-[1px] w-12 bg-white/20"
                animate={{
                  background: `linear-gradient(${quotes[currentIndex].color})`,
                }}
              />
              <motion.span className="text-sm text-white/50 uppercase tracking-wider">
                {quotes[currentIndex].tag}
              </motion.span>
            </motion.div>

            {/* Quote */}
            <div className="min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <motion.blockquote className="text-2xl font-light leading-relaxed text-white/90">
                    "{quotes[currentIndex].text}"
                  </motion.blockquote>

                  <motion.div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-[1px]"
                      animate={{
                        background: `linear-gradient(${quotes[currentIndex].color})`,
                      }}
                    />
                    <motion.span className="text-white/50">
                      {quotes[currentIndex].author}
                    </motion.span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 right-8 flex items-center gap-4">
            <motion.span className="text-sm text-white/30">
              {currentIndex + 1}/{quotes.length}
            </motion.span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextQuote}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm
                     flex items-center justify-center group
                     hover:bg-white/10 transition-colors"
            >
              <FiRefreshCw
                className="text-white/50 group-hover:text-white transition-colors"
                size={20}
              />
            </motion.button>
          </div>

          {/* Progress Bar */}
          <motion.div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10">
            <motion.div
              className="h-full"
              animate={{
                width: "100%",
                background: `linear-gradient(${quotes[currentIndex].color})`,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Version - Floating Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 left-4 right-4 md:hidden"
      >
        <motion.div
          className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          layoutId="quoteCard"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {/* Tag */}
              <motion.div
                className="flex items-center gap-2"
                animate={{
                  color: `linear-gradient(${quotes[currentIndex].color})`,
                }}
              >
                <motion.div
                  className="h-[1px] w-8"
                  animate={{
                    background: `linear-gradient(${quotes[currentIndex].color})`,
                  }}
                />
                <span className="text-xs text-white/50 uppercase tracking-wider">
                  {quotes[currentIndex].tag}
                </span>
              </motion.div>

              {/* Quote */}
              <p className="text-sm text-white/90 leading-relaxed">
                "{quotes[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/50">
                  {quotes[currentIndex].author}
                </span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={nextQuote}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                >
                  <FiRefreshCw size={14} />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
};
export default SideInfo;
