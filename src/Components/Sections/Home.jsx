import React from "react";
import { motion } from "framer-motion";
import { RiScrollToBottomLine } from "react-icons/ri"; // <-- Import the icon
import RevealOnScroll from "../RevealOnScroll";
import EmojiFloat from "../EmojiFloat";

const Home = ({ showEmojis }) => {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      {showEmojis && <EmojiFloat />}
      <RevealOnScroll>
        <div className="text-center z-10 relative px-4">
<<<<<<< HEAD
          <h1 className="text-5xl md:text-7xl font-bold mb-6  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi,I"m Vinit Kumar
=======
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Vinit Kumar
>>>>>>> 3a4c7d5 (upadted home section)
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
            Growing as a full stack developer by building, breaking, and learning — every single day
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="#Projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#Contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      
      <a
        href="#About"
        aria-label="Scroll Down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <RiScrollToBottomLine className="w-10 h-10 text-blue-500" />
        </motion.div>
      </a> 
    </section>
  );
};

export default Home;
