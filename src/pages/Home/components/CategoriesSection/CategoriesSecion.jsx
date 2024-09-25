import React, { useContext } from "react";
import style from "../CategoriesSection/CategoriesSection.module.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../../components/ContextAPIs/Theme/Theme";

export default function CategoriesSecion() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={style.container}>
      <div className={darkMode === "light" ? style.wand : style.wandLight}>
        <NavLink to="/products">
          <p>Wand Shop</p>
        </NavLink>
      </div>
      <div className={darkMode === "light" ? style.trunk : style.trunkLight}>
        <NavLink to="/products">
          <p>Trunk Station</p>
        </NavLink>
      </div>
      <div className={darkMode === "light" ? style.clothing : style.clothingLight}>
        <NavLink to="/products">
          <p>Clothing Station</p>
        </NavLink>
      </div>
      <div className={darkMode === "light" ? style.trolley : style.trolleyLight}>
        <NavLink to="/products">
          <p>Sweet Trolley</p>
        </NavLink>
      </div>
    </div>
  );
}
