import React, { useContext, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import style from "../ScrollButton/ScrollButton.module.css";
import { Button } from "./Styles";
import { ThemeContext } from "../ContextAPIs/Theme/Theme";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className={darkMode === "dark" && style.lightScroll}
      />
    </Button>
  );
};

export default ScrollButton;
