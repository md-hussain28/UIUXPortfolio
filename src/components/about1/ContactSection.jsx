import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Let’s Connect</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 h-32 focus:outline-none focus:border-purple-500"
          ></textarea>
          <motion.button
            type="submit"
            className="w-full p-3 bg-purple-600 rounded-lg text-white font-semibold"
            whileHover={{ backgroundColor: "#9F7AEA", scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
