import React from "react";
import { motion, scale } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCode,
  FaGraduationCap,
  FaBookOpen,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import gfg from "../../assets/Logos/GeeksforGeeks.png";
import lc from "../../assets/Logos/leetcode.png";
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

const About = () => {
  return (
    <section
      id="overview"
      className="min-h-screen flex items-center justify-center py-10 overflow-x-hidden"
    >
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
            className="relative mb-4 px-4 py-1 rounded-full text-sm font-medium text-white bg-green-400/10 border border-green-400/30 backdrop-blur-md flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulsing Bubble */}
            <motion.span
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            Get to know me
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative inline-block"
            variants={fadeInFrom(0, 20)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          <motion.span
  className="block h-[3px] bg-gradient-to-r from-blue-500 to-pink-500 mt-2 mx-auto origin-center rounded-2xl"
  animate={{ scaleX: [0, 1, 0] }}
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
            Crafting digital experiences with passion, precision, and purpose
          </motion.p>
        </motion.div>

        <div className="min-h-screen text-white px-6 py-10 font-sans">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <motion.div
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
                variants={fadeInFrom(-50, 0)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <h1 className="text-2xl font-bold mb-2">
                  👋 Hello, I’m{" "}
                  <span className="text-purple-400">Pothuraju Vinit Kumar</span>
                </h1>
                <p className="text-base text-gray-300">
                  A passionate{" "}
                  <span className="text-blue-400 font-semibold">
                    Full Stack Developer
                  </span>{" "}
                  and
                  <span className="text-pink-400 font-semibold">
                    {" "}
                    AI enthusiast
                  </span>{" "}
                  crafting UIs by day, wrangling APIs by night, and occasionally
                  googling my own errors.
                </p>
                <hr className="my-4 border-gray-700" />
                <p className="text-m text-gray-400">
                 Hi! I'm Vinit Kumar Pothuraju, a passionate full-stack developer, AI enthusiast, and a dedicated problem solver, currently in my final year of Bachelor's degree at <span className="text-red-300 font-medium">Mohan Babu University</span> <div className="br"></div>

I specialize in frontend development using React.js, and I’m skilled in building robust backend APIs with Node.js and Express. I’m also exploring the field of AI and integrating smart solutions into real-world applications.

In addition to development, I actively practice Data Structures and Algorithms (DSA) to sharpen my problem-solving skills and improve my coding efficiency. 
<br />I enjoy tackling complex challenges on coding platforms and continuously strive to write clean, optimized code.

Over time, I’ve worked on a variety of projects—from personal websites and blog generators to AI-based tools that automate content creation. I’m always eager to learn, build, and contribute to meaningful projects.

Whether I’m designing intuitive interfaces, solving algorithmic problems, or experimenting with new technologies, I aim to deliver innovative and impactful solutions.
                </p>
                <div className="mt-4">
                  <h3 className="font-semibold text-sm mb-2 text-white flex items-center gap-2">
                    🔧 Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI Integration",
                      "React",
                      "Node.js",
                      "Java",
                      "JavaScript",
                      "Data Structures",
                      "MongoDB",
                      "Algorithms",
                    ].map((tech, index) => (
                      <span
                        key={index}
                        className="text-sm bg-gradient-to-br from-blue-800/20  to-purple-700/20 backdrop-blur-xl border border-white/10 rounded-xl py-1.5 px-2 shadow-xl "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
              

                <motion.div
                  className="bg-gradient-to-br from-green-800/20 to-emerald-600/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl"
                  variants={fadeInFrom(60, 0)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <h3 className="font-semibold text-lg mb-4 text-white ">
                    👨‍💻 Coding Profiles
                  </h3>
                  <ul className="text-sm flex flex-wrap justify-around items-center gap-4 text-white/90">
                    {/* LeetCode */}
                    <li className="flex flex-col items-center gap-2 px-3 py-2 rounded-md border border-green-400 bg-white/5 backdrop-blur-md text-white text-sm w-28 hover:scale-105 transition-transform duration-200">
                      <img
                        src={lc}
                        alt="LeetCode Logo"
                        className="w-10 h-10 object-contain"
                      />
                      <a
                        href="https://leetcode.com/u/VKPothuraju_95/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-center"
                      >
                        LeetCode
                      </a>
                    </li>

                    {/* GeeksforGeeks */}
                    <li className="flex flex-col items-center gap-2 px-3 py-2 rounded-md border border-green-400 bg-white/5 backdrop-blur-md text-white text-sm w-28 hover:scale-105 transition-transform duration-200">
                      <img
                        src={gfg}
                        alt="GFG Logo"
                        className="w-10 h-10 object-contain"
                      />
                      <a
                        href="https://www.geeksforgeeks.org/user/vinitkumarimjx/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-center"
                      >
                        GeeksforGeeks
                      </a>
                    </li>
                  </ul>
                  <p className="text-green-300 text-center px-4 py-2 rounded-xl border border-green-300 text-sm bg-white/10 backdrop-blur-md font-medium mt-4 hover:scale-105 transition-transform duration-200">
                    Consistency &gt; Motivation
                  </p>
                </motion.div>

                  <motion.div
                  className="bg-gradient-to-br from-blue-800/20 to-indigo-700/20 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl"
                  variants={fadeInFrom(-60, 0)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <h2 className="text-lg font-semibold mb-2 text-white">
                  ✅ Available for Hire
                  </h2>
                  <ul className="space-y-2">
                    {[
                      "🟢 Open to Opportunities",
                      " 🌍 Open to Remote & On-site",

                      "🚚 Willing to Relocate",
                    ].map((habit, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 bg-gradient-to-br from-sky-900/30 to-cyan-800/10 border border-cyan-500 rounded-lg hover:scale-[1.02] transition transform hover:shadow-lg text-white text-sm"
                      >
                        {habit}
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                className="bg-gradient-to-br from-purple-800/20 to-pink-700/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl"
                variants={fadeInFrom(60, 0)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <h3 className="font-semibold text-lg mb-3 text-white">
                  📬 Let’s Connect
                </h3>
                <div className="text-sm space-y-2 text-white/90">
                  <p className="flex items-center gap-2 px-3 py-2 rounded-md border border-pink-400 bg-white/5 backdrop-blur-md text-white text-white text-sm hover:scale-[1.02] transition transform hover:shadow-lg">
                    <HiOutlineMail className="text-lg text-white" />{" "}
                    vinitkumarpothuraju@gmail.com
                  </p>
                  <p className="flex items-center gap-2 px-3 py-2 rounded-md border border-pink-400 bg-white/5 backdrop-blur-md text-white text-sm hover:scale-[1.02] transition transform hover:shadow-lg">
                    <motion.a
                      href="https://github.com/Vinit-Pothuraju"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-sm text-white" />
                      GitHub
                    </motion.a>
                  </p>
                  <p className="flex items-center gap-2 px-3 py-2 rounded-md border  border-pink-400 bg-white/5 backdrop-blur-md text-white text-sm hover:scale-[1.02] transition transform hover:shadow-lg">
                    📍 India
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-pink-600/20 to-orange-300/20 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl"
                variants={fadeInFrom(-60, 0)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <h3 className="font-semibold text-lg mb-3 text-white">
                  🏆 Achievements
                </h3>
                <ul className="text-sm space-y-2 text-white/90">
                  <li className="flex items-center gap-2 px-3 py-2 rounded-md border border--300 backdrop-blur-xl border border-white/10 text-white text-sm hover:scale-[1.02] transition transform hover:shadow-lg">
                    <FaGraduationCap className="text-orange-300" /> Consistent
                    Academic Performer
                  </li>
                  <li className="flex items-center gap-2 px-3 py-2 rounded-md border border-orange-300 backdrop-blur-xl border border-white/10 text-white text-sm hover:scale-[1.02] transition transform hover:shadow-lg">
                    <FaBookOpen className="text-orange-300" /> 9.5 CGPA in
                    Academics
                  </li>
                  <li className="flex items-center gap-2 px-3 py-2 rounded-md border border-orange-300 backdrop-blur-xl border border-white/10 text-white text-sm hover:scale-[1.02] transition transform hover:shadow-lg">
                    <FaCode className="text-orange-300" /> Solved 200+ LeetCode
                    Problems
                  </li>
                </ul>
              </motion.div>

         <motion.div
  className="bg-gradient-to-br from-sky-800/20 to-cyan-700/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl"
  variants={fadeInFrom(60, 0)}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
>
  <h3 className="font-semibold text-lg mb-3 text-white">
    🎓 Education
  </h3>
  <ul className="text-sm space-y-2 text-white/90">

    <li className="flex flex-col gap-1 px-3 py-2 rounded-md border border-blue-400 backdrop-blur-xl border border-white/10 text-white text-sm hover:scale-[1.02] transition transform hover:shadow-lg">
      <span className="font-semibold">🎓 B.Tech in Computer Science</span>
      <span>Mohan Babu University, Tirupati</span>
      <span className="text-white/70">Final Year (2022 – 2026)</span>
    </li>

    <li className="flex flex-col gap-1 px-3 py-2 rounded-md border border-blue-400 backdrop-blur-xl border border-white/10 text-white text-sm hover:scale-[1.02] transition transform hover:shadow-lg">
      <span className="font-semibold">🏛️ Pre-University Course (PUC)</span>
      <span>Rajiv Gandhi University of Knowledge and Technology, Srikakulam</span>
      <span className="text-white/70">2020 – 2022</span>
    </li>

    <li className="flex flex-col gap-1 px-3 py-2 rounded-md border border-blue-400 backdrop-blur-xl border border-white/10 text-white text-sm hover:scale-[1.02] transition transform hover:shadow-lg">
      <span className="font-semibold">📘 Secondary School Education</span>
      <span>Sri Vyshnavi EM High School, Porumamilla</span>
      <span className="text-white/70">2017 – 2020</span>
    </li>

  </ul>
</motion.div>


            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
