import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./Layouts/Home";
import About from "./Layouts/About";
import Past from "./Layouts/Past";
import Works from "./Layouts/Works";
import Menu from "./Components/Menu/Menu";
import NotFound from "./Components/NotFound";
function App() {

  return (
    <Router>
      
      <Menu 
      />

      <Routes>
        <Route path="/sofia-portfolio/" element={<Home />} />
        <Route path="/sofia-portfolio/about" element={<About />} />
        <Route path="/sofia-portfolio/past" element={<Past />} />
        <Route path="/sofia-portfolio/works" element={<Works />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
