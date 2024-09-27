import React, { useContext } from "react";
import style from "../ThankYou/ThankYou.module.css";
import { NavLink } from "react-router-dom";
import RecommendedProducts from "../ThankYou/RecommendedProducts/RecommendedProducts";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../components/ContextAPIs/Theme/Theme";

export default function ThankYou() {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={darkMode === "light" ? style.container : style.containerLight}
    >
      <div className={style.paddingDiv}>
        <div className={style.textContainer}>
          <h1 className={style.text}>{t("thankyou.title")}</h1>
          <NavLink to="/products">
            <h2>{t("thankyou.continue")}</h2>
          </NavLink>
        </div>
      </div>
      <RecommendedProducts />
    </div>
  );
}
