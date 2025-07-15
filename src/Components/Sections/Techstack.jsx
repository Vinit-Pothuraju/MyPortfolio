import React, { useState } from "react";
import { techData, categories } from "../Techdata";
import { motion, AnimatePresence } from "framer-motion";
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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
  exit: { opacity: 0, x, y },
});
const TechStack = () => {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All"
    ? techData
    : techData.filter((tech) => tech.category === selected);

  return (
    <section id="stack" className="min-h-screen flex  items-center justify-center py-10 overflow-x-hidden">
      <motion.div
        className="w-auto flex flex-col justify-between align-middle"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
         <motion.div
                  className="text-center py-16 px-4 flex flex-col items-center justify-center"
                  variants={fadeInFrom(0, 40)}
                >
                  <motion.span
                    className="relative mb-4 px-4 py-1 rounded-full text-sm font-medium text-white bg-purple-400/10 border border-purple-400/30 backdrop-blur-md flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Pulsing Bubble */}
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
          animate={{ scaleX: [0.5, 0.8, 0.5] }}
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

        {/* <h2 className="text-3xl font-bold mb-6 text-center"></h2> */}

      {/* Tabs */}
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {filtered.map(({ name, icon: Icon, level }, idx) => (
         <AnimatePresence>
          <motion.div
            key={idx}
            initial={{opacity:0,y:20}}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
            duration: 0.8,
            delay: idx * 0.2, // <-- stagger based on index
          }}
            className="bg-white/5 border border-white/10 rounded-xl p-5 text-center border-t-blue-500/10 backdrop-blur-md hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 mx-auto mb-3">
              <Icon className="w-full h-full" />
            </div>
            <h4 className="font-semibold">{name}</h4>
            <div
              className={`mt-2 inline-block px-3 py-1 text-xs rounded-full font-medium ${
                level === "Expert"
                  ? "bg-green-600/10 border border-green-400 text-green-300"
                  : "bg-blue-500/10 border border-blue-400 text-blue-300"
              }`}
            >
              {level}
            </div>
           
          </motion.div>
          </AnimatePresence> 
        ))}
      </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
