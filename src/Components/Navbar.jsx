import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen, showEmojis, setShowEmojis }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.1)] backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Vinit<span className="text-blue-500">.dev</span>
          </a>

          
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center space-x-4"
            style={{ userSelect: "none" }}
          >
            <div onClick={() => setMenuOpen((prev) => !prev)}>&#9776;</div>

            
            <button
              onClick={() => setShowEmojis((prev) => !prev)}
              className="text-white bg-blue-600 px-2 py-1 rounded-md text-sm"
            >
              {showEmojis ? "Hide Emojis" : "Show Emojis"}
            </button>
          </div>

          
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#Home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#Projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>

           
            <button
              onClick={() => setShowEmojis((prev) => !prev)}
              className="text-white bg-blue-600 px-3 py-1 rounded-md text-sm"
            >
              {showEmojis ? "Hide Emojis" : "Show Emojis"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
