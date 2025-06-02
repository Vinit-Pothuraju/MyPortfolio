import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
  const FrontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "TypeScript",
    "GSAP",
    "zod",
    "Responsive Design",
    "React Router",
  ];
  const BackendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "REST APIs",
    "GraphQL",
    "Socket.io",
    "JWT (Authentication)",
    "Sequelize",
  ];

  return (
    <section
      id="About"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cypan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate full stack developer building sleek, responsive web
              apps. Driven by clean code, smart systems, and the joy of
              problem-solving.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {FrontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {BackendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science</strong> - Mohan Babu
                  University(2022-Present) <br />
                  <p className="mt-2">
                    Grade:
                    <span className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]">
                      9.43
                    </span>
                  </p>
                </li>
                <li>
                  <strong>Pre Unversity Course</strong> - Rajiv Gandhi
                  University of Knowledge and Technologies (2020-2022) <br />
                  <p className="mt-2">
                    Grade:
                    <span className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]">
                      9.21{" "}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl  border-white/10 border hover:-translate-y-1 transition-all flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png"
                alt="Man Technologist Light Skin Tone"
                width="225"
                height="225"
                className="mx-auto"
              />

              <div className="mt-4 flex gap-6">
                <a
                  href="https://www.linkedin.com/in/pothuraju-vinit-kumar/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/Vinit-Pothuraju"
                  target="_blank"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://www.instagram.com/vinit._.pothuraju/"
                  target="_blank"
                 
                  className="text-pink-500 hover:text-pink-400 transition-colors"
                >
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
