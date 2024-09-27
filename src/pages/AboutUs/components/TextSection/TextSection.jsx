import React, { useContext, useEffect } from "react";
import style from "../TextSection/TextSection.module.css";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../../../components/BreadCrump/BreadCrump";
import { ThemeContext } from "../../../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";

const TextSection = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  // const paths = [
  //   { name: "Home", url: "/" },
  //   { name: "About Us", url: "/about-us" },
  // ];

  return (
    <div className={style.container}>
      {/* <div>
        <NavLink>
          <Breadcrumb paths={paths} />
        </NavLink>
      </div> */}
      <div className={darkMode === "light" ? style.text : style.textLight}>
        <p>{t("about-us.text1")}</p>
        <p>{t("about-us.text2")}</p>
        <p>{t("about-us.text3")}</p>
      </div>
    </div>
  );
};

export default TextSection;
