import React, { useContext } from "react";
import style from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../ContextAPIs/Theme/Theme";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={darkMode === "light" ? style.container : style.containerLight}
    >
      <div className={style.liItems}>
        <div className={style.icon}>
          <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/ww-logo.svg" />
        </div>
        <div className={style.about}>
          <h2>About</h2>
          <NavLink to="/about-us">
            <span>About Us</span>
          </NavLink>
        </div>
        <div className={style.customer}>
          <h2>Customer Service</h2>
          <NavLink to="/contact-us">
            <span>Contact Us</span>
          </NavLink>
          <NavLink to="/faq">
            <span>FAQs</span>
          </NavLink>
        </div>
      </div>
      <div className={style.signUpContainer}>
        <div className={style.text}>
          <span>Sign up for news, events & offers</span>
        </div>
        <div className={style.button}>
          <NavLink to="/register">
            <span>SIGN UP NOW</span>
          </NavLink>
        </div>
      </div>
      <hr></hr>
      <div className={style.cardsText}>
        <p>
          HARRY POTTER, WIZARDING WORLD and related trademarks, characters,
          names and indicia are TM and © Warner Bros. Entertainment Inc. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}
