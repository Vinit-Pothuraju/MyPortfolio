import { useState } from "react";
// import LoadingScreen from "./Components/LoadingScreen";
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
import TechStack from "./Components/Sections/Techstack";
function App(){
  
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
  <>
         <Background />

     
    
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
         
        />
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home  className="overflow-x-hidden" />
        <About  className="overflow-x-hidden"/>
        <TechStack/>
        <Projects className="overflow-x-hidden" />
        <Contact  className="overflow-x-hidden"/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      
    </>)}
 
export default App;
