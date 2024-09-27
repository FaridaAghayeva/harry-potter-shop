import React from "react";
import { NavLink } from "react-router-dom";
import style from "../NotFound/NotFound.module.css";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div>
        <img src="https://images.ctfassets.net/usf1vwtuqyxm/51Jg5dWTTQ3tyyDrGnckOY/3cbf3d47e6f9da25f390a8d1ee56d93e/floo-powder_1_1800x1248.png?h=416&w=600&fit=pad&fm=webp" />
        <h1 className={style.text}> {t("404.text1")}</h1>
        <p className={style.text}>{t("404.text2")}</p>
        <div className={style.backToHomeBtn}>
          <NavLink to="/">{t("404.button")}</NavLink>
        </div>
      </div>
    </div>
  );
}
