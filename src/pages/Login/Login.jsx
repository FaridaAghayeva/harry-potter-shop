import React, { useContext, useEffect, useState } from "react";
import style from "../Login/Login.module.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { UserContext } from "../../components/ContextAPIs/Users/UserContext";

export default function Login() {
  const { users } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("items"));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);
  // console.log(users.)

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
      if (user) {
        localStorage.setItem("data", JSON.stringify(user));
        navigate("/");
       
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
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
              <h1 className={style.logIn}>Log In</h1>
              <div className={style.edges}></div>
            </div>
          </div>
        </div>

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <label htmlFor="email">EMAIL ADDRESS</label>
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
            <label htmlFor="password">PASSWORD</label>
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
            Log In
          </button>
          {/* {error && <p>{error}</p>} */}
          <hr></hr>
          <div>
            <h2 className={style.anAccount}>Don't have an account?</h2>
          </div>
          <NavLink to="/register">
            <div className={style.logInBtn}>SIGN UP</div>
          </NavLink>
          <div className={style.flags}>
            <span className={`${style.flag1} fi fi-az`}></span>
            <span className={`${style.flag2} fi fi-gb`}></span>
          </div>
        </form>
      </div>
    </div>
  );
}
