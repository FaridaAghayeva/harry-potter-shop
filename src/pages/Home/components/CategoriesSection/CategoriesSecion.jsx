import React, { useContext } from "react";
import style from "../CategoriesSection/CategoriesSection.module.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";

export default function CategoriesSecion() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={darkMode === "light" ? style.wand : style.wandLight}>
        <NavLink to="/products">
          <p>{t("home.categories-section.1")}</p>
        </NavLink>
      </div>
      <div className={darkMode === "light" ? style.trunk : style.trunkLight}>
        <NavLink to="/products">
          <p>{t("home.categories-section.2")}</p>
        </NavLink>
      </div>
      <div
        className={darkMode === "light" ? style.clothing : style.clothingLight}
      >
        <NavLink to="/products">
          <p>{t("home.categories-section.3")}</p>
        </NavLink>
      </div>
      <div
        className={darkMode === "light" ? style.trolley : style.trolleyLight}
      >
        <NavLink to="/products">
          <p>{t("home.categories-section.4")}</p>
        </NavLink>
      </div>
    </div>
  );
}
