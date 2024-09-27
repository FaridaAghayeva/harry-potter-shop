import React from "react";
import style from "../CreateTrunk/CreateTrunk.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CreateTrunk() {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.detailsContainer}>
        <div className={style.details}>
          <div className={style.title}>
            <h1>{t("home.trunk-section.title")}</h1>
          </div>
          <div className={style.text}>
            <p>{t("home.trunk-section.text")}</p>
          </div>
          <NavLink to="/products">
            <div className={style.button}>{t("home.shop-now")}</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
