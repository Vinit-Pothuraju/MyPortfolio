import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

// Animation variants
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = ["Overview", "Stack", "Projects", "Certifications", "Contact"];

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[rgba(10,10,10,0.7)] backdrop-blur-xl border border-white/10 shadow-xl px-6 py-2 rounded-full"
    >
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <motion.a
          href="#home"
          className="font-mono text-base font-bold text-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          VK
        </motion.a>

        {/* Nav links */}
        {navItems.map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {item}
          </motion.a>
        ))}

        {/* Theme toggle placeholder */}
        <motion.button
          className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-yellow-400 hover:rotate-180 transition-transform"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: navItems.length * 0.1 + 0.5, duration: 0.5 }}
        >
          🌞
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Navbar;
