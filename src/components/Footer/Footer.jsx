import React, { useContext } from "react";
import style from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div
      className={darkMode === "light" ? style.container : style.containerLight}
    >
      <div className={style.liItems}>
        <div className={style.icon}>
          <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/ww-logo.svg" />
        </div>
        <div className={style.about}>
          <h2>{t("footer.pages-names.about")}</h2>
          <NavLink to="/about-us">
            <span>{t("footer.pages-names.about")}</span>
          </NavLink>
        </div>
        <div className={style.customer}>
          <h2>{t("footer.pages-names.customer-service")}</h2>
          <NavLink to="/contact-us">
            <span>{t("footer.pages-names.contact-us")}</span>
          </NavLink>
          <NavLink to="/faq">
            <span>{t("footer.pages-names.FAQs")}</span>
          </NavLink>
        </div>
      </div>
      <div className={style.signUpContainer}>
        <div className={style.text}>
          <span>{t("footer.text.text1")}</span>
        </div>
        <div className={style.button}>
          <NavLink to="/register">
            <span>{t("footer.signupnow")}</span>
          </NavLink>
        </div>
      </div>
      <hr></hr>
      <div className={style.cardsText}>
        <p>{t("footer.text.text2")}</p>
      </div>
    </div>
  );
}
