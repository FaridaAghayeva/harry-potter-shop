import React from "react";
import style from "../Login/Login.module.css";
import { NavLink } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Login() {
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

        <form className={style.form}>
          <div className={style.inputContainer}>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              type="text"
              name="email"
              id="email"
              className={style.email}
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="password">PASSWORD</label>
            <input
              type="text"
              name="password"
              id="password"
              className={style.password}
            />
          </div>
          <di className={style.logInBtn}>Log In</di>
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
