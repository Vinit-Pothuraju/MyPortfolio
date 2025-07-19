import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
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
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = ["Overview", "Stack", "Projects", "Contact"];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        variants={navVariants}
        animate={showNavbar ? "visible" : "hidden"}
        initial="visible"
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 
                   bg-[rgba(10,10,10,0.7)] backdrop-blur-xl 
                   border border-white/10 shadow-xl 
                   px-6 py-2 rounded-full"
      >
        <div className="flex items-center space-x-6">
          <motion.a
            href="#home"
            className="font-mono text-base font-bold text-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            VK
          </motion.a>

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

      {/* Mobile Hamburger Button - Always Visible on Mobile */}
      <motion.button
        className="md:hidden fixed top-6 right-6 z-50 text-white bg-[rgba(10,10,10,0.7)] p-2 rounded-full shadow-lg"
        onClick={() => setMenuOpen((prev) => !prev)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <GiHamburgerMenu size={20} />
      </motion.button>
    </>
  );
};

export default Navbar;
