import React, { useState, useEffect } from "react";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

const Menu = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? <MenuDesktop /> : <MenuMobile />}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/past" element={<Past />} />
        <Route path="/works" element={<Works />} />
      </Routes> */}
    </>
  );
};

export default Menu;
