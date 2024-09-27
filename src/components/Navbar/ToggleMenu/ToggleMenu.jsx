import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../ToggleMenu/ToggleMenu.module.css";
import { FaUser } from "react-icons/fa";
import { ThemeContext } from "../../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";
export default function ToggleMenu({ isVisible, setVisible }) {
  const nodeRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => setOpen(!isOpen);
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!nodeRef.current.contains(e.target)) {
        toggleNav();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
  function clickPage() {
    setVisible(!isVisible);
  }
  return (
    <div
      className={darkMode === "light" ? style.container : style.container2}
      ref={nodeRef}
    >
      <div className={style.liItems}>
        <NavLink to="/" onClick={clickPage}>
          <span>{t("header.home")}</span>
        </NavLink>
        <hr></hr>
        <NavLink to="/about-us" onClick={clickPage}>
          <span>{t("header.about")}</span>
        </NavLink>
        <hr></hr>

        <NavLink to="/products" onClick={clickPage}>
          <span>{t("header.shop")}</span>
        </NavLink>
        <hr></hr>
        <NavLink to="/contact-us" onClick={clickPage}>
          <span>{t("header.contact")}</span>
        </NavLink>
        <hr></hr>
        <NavLink to="/profile">
          <div className={style.userIcon} onClick={clickPage}>
            <FaUser /> {t("header.profile")}
          </div>
        </NavLink>
      </div>
    </div>
  );
}
