import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.2, duration: 0.4, ease: "easeOut" },
  }),
};

const MobileNavbar = ({ menuOpen, setMenuOpen }) => {
  const navItems = ["Home", "Overview", "Projects", "Contact"];

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 left-0 w-full h-screen z-50 
                     bg-[rgba(10,10,10,0.85)] backdrop-blur-md 
                     flex flex-col items-center justify-center"
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl hover:scale-125 transition-transform duration-200"
            aria-label="Close menu"
          >
            &times;
          </button>

          {/* Links with animation */}
          {navItems.map((section, index) => (
            <motion.a
              key={section}
              href={`#${section.toLowerCase()}`}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-3xl font-semibold text-white my-4 hover:text-purple-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {section}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
