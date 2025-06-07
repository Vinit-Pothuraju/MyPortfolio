import React, { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import "./index.css";
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import Background from "./Components/Background";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEmojis, setShowEmojis] = useState(true);

  return (
    <>
      {/* Animated Background Behind Everything */}
      <Background />

      {/* Loading screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main content with fade-in transition */}
      <div
        className={`relative z-10 min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        } text-gray-100`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          showEmojis={showEmojis}
          setShowEmojis={setShowEmojis}
        />
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home showEmojis={showEmojis} />
        <About />
        <Projects />
        <Contact />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      </div>
    </>
  );
}

export default App;
