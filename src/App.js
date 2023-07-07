import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./Layouts/Home";
import About from "./Layouts/About";
import Past from "./Layouts/Past";
import Works from "./Layouts/Works";
import Menu from "./Components/Menu/Menu";

function App() {
  // const contactSectionRef = useRef(null);
  // const handleContactClick = () => {
  //   contactSectionRef.current.scrollIntoView({ behavior: "smooth" }); 
  // };
  return (
    <Router>
      
      <Menu 
      // contactSectionRef={contactSectionRef} onContactClick={handleContactClick} 
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/past" element={<Past />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );
}

export default App;
