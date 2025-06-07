import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import Adventuro from "../../assets/Images/Adventuro.png";
import Nike from "../../assets/Images/Nike.png";
import SnapwriteImg from "../../assets/Images/Snapwrite.png";
import Ecom from "../../assets/Images/Ecom.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cypan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Adventuro Ai Travel Planner
              </h3>
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={Adventuro}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  alt=""
                />
              </div>
              <p className="text-gray-400 mb-4">
                Adventuro is an AI-powered travel planner that creates
                personalized vacation itineraries based on user preferences,
                budget, and time. It integrates live data to recommend flights,
                hotels, and attractions—making travel planning effortless and
                exciting.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Vinit-Pothuraju/Adventuro"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex justify-between items-center gap-2"
                  target="_blank"
                >
                  <FaGithub className="w-7 h-7"/> View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Nike Frontend Webpage</h3>
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={Nike}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  alt="Nike Frontend Webpage Screenshot"
                />
              </div>
              <p className="text-gray-400 mb-4">
                A sleek and responsive frontend website for Nike, built using
                React and React Router DOM for seamless navigation. Styled
                entirely with Tailwind CSS for a modern, fast-loading user
                experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React","Html","JavaScript", "React Router DOM", "Tailwind CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Vinit-Pothuraju/Nike-Web"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex justify-between items-center gap-2"
                  target="_blank"
                >
                  <FaGithub className="w-7 h-7"/> View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all relative">
              <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                <span>SnapWrite</span>
                <span className="bg-green-500/10 text-green-500 text-xs font-semibold px-2 py-1 rounded-full ml-2">
                  In Process
                </span>
              </h3>
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={SnapwriteImg}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  alt="SnapWrite Blog Application"
                />
              </div>
              <p className="text-gray-400 mb-4">
                SnapWrite is a modern blog application that allows users to
                write, edit, and share posts seamlessly. Built for fast,
                intuitive content creation and consumption.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "React-Router-Dom",
                  "Firebase",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Vinit-Pothuraju/SnapWrite"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex justify-between items-center gap-2"
                  target="_blank"
                >
                  <FaGithub className="w-7 h-7"/> View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all relative">
              <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                <span>E-commerce Project</span>
                <span className="bg-green-500/10 text-green-500 text-xs font-semibold px-2 py-1 rounded-full ml-2">
                  In Process
                </span>
              </h3>
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={Ecom}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  alt="E-commerce Project Screenshot"
                />
              </div>
              <p className="text-gray-400 mb-4">
                A sleek and responsive frontend e-commerce website built with
                React and React Router DOM for smooth navigation. Styled with
                Tailwind CSS to ensure a modern and fast-loading user
                experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React","Html","JavaScript", "React Router DOM", "Tailwind CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Vinit-Pothuraju/Ecom-Web"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex justify-between items-center gap-2"
                  target="_blank"
                >
                  <FaGithub className="w-7 h-7"/> View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
