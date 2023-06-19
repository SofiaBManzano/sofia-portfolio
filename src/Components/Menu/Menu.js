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
    </>
  );
};

export default Menu;
