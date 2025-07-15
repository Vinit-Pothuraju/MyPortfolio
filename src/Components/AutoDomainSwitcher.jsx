import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const AutoDomainSwitcher = () => {
  return (
    <motion.div
      className="mx-auto mb-6 px-6 md:px-10 py-3 md:py-2 rounded-xl shadow-md w-fit max-w-full text-white font-bold text-base sm:text-md md:text-lg lg:text-xl"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      animate={{
        background: [
          "linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)",
          "linear-gradient(to right, #ec4899, #f43f5e, #f97316)",
          "linear-gradient(to right, #10b981, #06b6d4, #3b82f6)",
          "linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)",
        ],
      }}
      transition={{
        background: {
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    >
      <Typewriter
        words={[
          "Full Stack Developer",
          "Frontend Developer",
          "Backend Developer",
          "Software Engineer",
          "AI Enthusiast",
          "Web Developer",
          "Open Source Contributor",
          
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </motion.div>
  );
};

export default AutoDomainSwitcher;
