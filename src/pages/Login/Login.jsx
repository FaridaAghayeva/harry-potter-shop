import React, { useContext, useEffect, useState } from "react";
import style from "../Login/Login.module.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { UserContext } from "../../components/ContextAPIs/Users/UserContext";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { LanguageContext } from "../../components/ContextAPIs/Language/Language";
import { useTranslation } from "react-i18next";
export default function Login() {
  const { t, i18n } = useTranslation();
  const { lang: currentLang, toggleLang } = useContext(LanguageContext);
  const { users } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["cookie-user"]);
  // const [errorMessage, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = users.find(
        (item) =>
          item.email === formData.email && item.password === formData.password
      );
      const admin = users.find(
        (item) => item.email === "adminn@gmail.com" && item.password === "12345"
      );
      if (user || admin) {
        setCookies("cookie-user", user.token);
        navigate("/");
        toast.success("You signed in successfully!");
      }
    } catch (error) {
      // setError(!errorMessage);
      console.error("Login failed:", error);
    }
  };
  const handleLanguageToggle = () => {
    const newLang = currentLang === "en" ? "az" : "en";
    i18n.changeLanguage(newLang);
    toggleLang();
  };
  return (
    <div className={style.container}>
      <div className={style.register}>
        <div className={style.logo}>
          <NavLink to="/">
            <div className={style.back}></div>
          </NavLink>
          <div className={style.logoContainer}>
            <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/logo_hpshop.svg" />
          </div>
        </div>
        <div className={style.logInContainer}>
          <div className={style.hrs}>
            <div className={style.sign}>
              <div className={style.edges}></div>
              <h1 className={style.logIn}>{t("login.text")}</h1>
              <div className={style.edges}></div>
            </div>
          </div>
        </div>

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <label htmlFor="email">{t("login.email")}</label>
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              required
              className={style.email}
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="password">{t("login.password")}</label>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              required
              className={style.password}
            />
          </div>
          <button type="submit" className={style.logInBtn}>
            {t("login.loginbutton")}
          </button>
          {/* {error && <p>{error}</p>} */}
          <hr></hr>
          <div>
            <h2 className={style.anAccount}>{t("login.accounttext")}</h2>
          </div>
          <NavLink to="/register">
            <div className={style.signInBtn}>{t("login.signup")}</div>
          </NavLink>
          <div className={style.flags}>
            <span
              className={
                currentLang === "en"
                  ? `${style.flag1} fi fi-az`
                  : `${style.flag2} fi fi-gb`
              }
              onClick={handleLanguageToggle}
            ></span>
          </div>
          {/* <div>
            <p>{!errorMessage && t("login.sameemail")}</p>
          </div> */}
        </form>
      </div>
    </div>
  );
}
