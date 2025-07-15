import React from "react";
import { motion, scale } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import AutoDomainSwitcher from "../AutoDomainSwitcher";
import SocialLinks from "../SocialLinks"
// Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      {/* Motion wrapper for the entire text content */}
     <motion.div
  className="flex flex-col top-16 justify-center items-center z-10 relative px-4"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.h1
    className="text-5xl mb-4 md:text-7xl font-bold text-center text-white tracking-wide"
    variants={fadeUpVariant}
  >
    Vinit Kumar
  </motion.h1>

  <motion.div variants={fadeUpVariant}>
    <AutoDomainSwitcher />
  </motion.div>

  <motion.p
    className="text-white text-center text-lg mb-8 max-w-lg mx-auto tracking-wide"
    variants={fadeUpVariant}
  >
    Growing as a full stack developer by building, breaking, and learning — every single day
  </motion.p>

  <motion.div variants={fadeUpVariant}>
    <SocialLinks fadeUpVariant={fadeUpVariant} />
  </motion.div>
</motion.div>


      {/* Scroll Down Arrow with motion */}
      <a
        href="#overview"
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
          <FiChevronDown className="w-10 h-10 text-blue-500" />
        </motion.div>
      </a>
    </section>
  );
};

export default Home;
