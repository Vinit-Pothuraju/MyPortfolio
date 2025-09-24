import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = ({ fadeUpVariant }) => {

  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
  return (
      <motion.div
      className="flex justify-center flex-wrap gap-4 mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* GitHub */}
      <motion.a
        href="https://github.com/Vinit-Pothuraju"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border border-gray-400 text-gray-300 text-sm px-5 py-1 rounded-full flex items-center gap-2 hover:scale-105 hover:shadow-md transition"
        variants={fadeUpVariant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub className="text-sm text-white" />
        GitHub
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/pothuraju-vinit-kumar/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border border-gray-400 text-gray-300 text-sm px-5 py-1 rounded-full flex items-center gap-2 hover:scale-105 hover:shadow-md transition"
        variants={fadeUpVariant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaLinkedin className="text-sm text-[#0077b5]" />
        LinkedIn
      </motion.a>

      {/* Email */}
      <motion.a
        href="mailto:vinitkumarpothuraju@gmail.com"
        className="bg-transparent border border-gray-400 text-gray-300 text-sm px-5 py-1 rounded-full flex items-center gap-2 hover:scale-105 hover:shadow-md transition"
        variants={fadeUpVariant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <HiOutlineMail className="text-sm text-blue-400" />
        Email
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
