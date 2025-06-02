
import React, { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import "./index.css"
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";

function App() {
  const [isLoading,setIsLoading]=useState(true);
  const [menuOpen,setMenuOpen]=useState(false);
  const [showEmojis, setShowEmojis] = useState(true);
 
  return (
      <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        } bg-black text-gray-100`}
      >
         <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        showEmojis={showEmojis}
        setShowEmojis={setShowEmojis}
      />
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {/* Add more app content here */}
        <Home  showEmojis={showEmojis}/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
