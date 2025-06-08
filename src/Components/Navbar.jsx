import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ menuOpen, setMenuOpen, }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.1)] backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Vinit<span className="text-blue-500">.dev</span>
          </a>

          {/* Mobile View Controls */}
          <div className="md:hidden flex items-center space-x-4">
            <GiHamburgerMenu
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-white text-3xl cursor-pointer"
              aria-label="Menu"
            />
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {section}
              </a>
            ))}
            
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
