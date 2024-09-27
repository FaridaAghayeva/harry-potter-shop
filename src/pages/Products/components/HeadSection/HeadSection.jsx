import React, { useContext } from "react";
import style from "../HeadSection/HeadSection.module.css";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../../components/ContextAPIs/Theme/Theme";
export default function HeadSection() {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={style.containerResp}>
      <div className={style.container}>
        <div className={style.border}>
          <div className={style.textContainer}>
            <h1 className={style.title}>{t("products.title")}</h1>
            <p className={style.text}>{t("products.text")}</p>
          </div>
        </div>
      </div>
      <div className={style.textContainerResp}>
        <h1
          className={
            darkMode === "light" ? style.titleResp : style.titleRespLight
          }
        >
          {t("products.title")}
        </h1>
        <p
          className={
            darkMode === "light" ? style.textResp : style.textRespLight
          }
        >
          {t("products.text")}
        </p>
      </div>
    </div>
  );
}
