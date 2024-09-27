import React from "react";
import style from "../MainSection/MainSection.module.css";
import { useTranslation } from "react-i18next";

export default function MainSection() {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.title}>
        <div>
          <h1>{t("about-us.headtext")}</h1>
        </div>
      </div>
    </div>
  );
}
