import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie"; // For cookie management
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import style from "../Profile/Profile.module.css";
import { UserContext } from "../../components/ContextAPIs/Users/UserContext";
import supabase from "../../supabase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";
export default function Profile() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [cookie, , removeCookie] = useCookies(["cookie-user"]);
  const { emptyCart } = useCart();
  const { emptyWishlist } = useWishlist();
  const { users } = useContext(UserContext);
  const user = users?.find((item) => {
    return item.token === cookie["cookie-user"];
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user) {
      setFormData({
        username: user?.username,
        email: user?.email,
        password: user?.password,
      });
    }
  }, [user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("users")
      .update({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .eq("id", user?.id)
      .select();
    window.location.reload();
  };
  console.log(formData);
  const handleLogout = () => {
    const userID = cookie["cookie-user"]?.id;
    removeCookie("cookie-user");
    emptyCart();
    emptyWishlist();
    toast.success("Logged out successfully!");
    navigate("/");
  };

  return (
    <div
      className={darkMode === "dark" ? style.container : style.containerLight}
    >
      <div className={style.formContainer}>
        <div className={style.userDetails}>
          <div className={darkMode === "dark" ? style.text : style.textLight}>
            {t("profile.title")}
          </div>
          <div className={style.usernameText}>
            <p>{t("profile.username")}:</p> <span>{user?.username}</span>
          </div>
          <div className={style.emailText}>
            <p>{t("profile.email")}:</p> <span>{user?.email}</span>
          </div>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.name}>
            <label for="username">{t("profile.username")}</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className={darkMode === "dark" ? style.input : ""}
            />
          </div>

          <div className={style.email}>
            <label for="email">{t("profile.email")}</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className={darkMode === "dark" ? style.input : ""}
            />
          </div>
          <div className={style.message}>
            <label for="password">{t("profile.password")}</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className={darkMode === "dark" ? style.input : ""}
            />
          </div>
          <div className={style.btnContainer}>
            <button type="submit" className={style.btn}>
              {t("profile.update")}
            </button>
          </div>
          <div className={style.btnContainer}>
            <div onClick={handleLogout} className={style.btn}>
              {t("profile.logout")}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
