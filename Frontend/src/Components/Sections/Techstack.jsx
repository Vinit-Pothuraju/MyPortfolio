import React, { useState } from "react";
import { techData, categories } from "../Techdata";
import { motion, AnimatePresence } from "framer-motion";

// Container animation
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Card animation
const cardVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "twin",
      duration:0.3,
      ease: "easeInOut"
    },
  },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

// Fade in utility
const fadeInFrom = (x = 0, y = 0) => ({
  hidden: { opacity: 0, x, y },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
    },
  },
});

const TechStack = () => {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All"
    ? techData
    : techData.filter((tech) => tech.category === selected);

  return (
    <section
      id="stack"
      className="min-h-screen flex items-center justify-center py-10 overflow-x-hidden"
    >
      <motion.div
        className="w-auto flex flex-col justify-between align-middle"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className="text-center py-16 px-4 flex flex-col items-center justify-center"
          variants={fadeInFrom(0, 40)}
        >
          <motion.span
            className="relative mb-4 px-4 py-1 rounded-full text-sm font-medium text-white bg-purple-400/10 border border-purple-400/30 backdrop-blur-md flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-purple-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            ⚙️ Tech Stack
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-blue-800 relative inline-block"
            variants={fadeInFrom(0, 20)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            Technology Stack
            <motion.span
              className="block h-[4px] bg-gradient-to-r from-green-500 to-blue-500 mt-2 mx-auto origin-center rounded-2xl"
              animate={{ scaleX: [0.5, 0.7, 0.5] }}
              transition={{
               duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-gray-300 text-base sm:text-lg"
            variants={fadeInFrom(0, 20)}
          >
            Technologies I used to bring ideas to life.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                selected === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.2 }}
            layout
          >
            {filtered.map(({ name, icon: Icon, level }) => (
         <motion.div
  key={name}
  className="relative group rounded-xl p-5 text-center border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.04]"
  variants={cardVariant}
>
  {/* Radial glow behind the card */}
  <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl z-0 pointer-events-none"
       style={{
         background: level === "Expert"
           ? "radial-gradient(circle at center, rgba(34,197,94,0.4), transparent 70%)"
           : "radial-gradient(circle at center, rgba(59,130,246,0.4), transparent 70%)"
       }}
  />

  {/* Card content */}
  <div className="relative z-10 flex flex-col items-center space-y-3">
    <div className="w-14 h-14 p-2 rounded-xl">
      <Icon className="w-full h-full" />
    </div>
    <h4 className="font-semibold text-white">{name}</h4>

    <div
      className={`px-3 py-[2px] text-xs rounded-full font-semibold border ${
        level === "Expert"
          ? "text-green-300 border-green-500 bg-green-600/10"
          : "text-blue-300 border-blue-500 bg-blue-600/10"
      }`}
    >
      • {level}
    </div>
  </div>
</motion.div>


            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default TechStack;
