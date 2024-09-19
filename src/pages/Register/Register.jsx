import React, { useState } from "react";
import style from "../Register/Register.module.css";
import { NavLink } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import supabase from "../../supabase";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

export default function Register() {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [cookies, setCookies] = useCookies(["auth-token"]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const registerUser = async () => {
    try {
      const token = crypto.randomUUID();
      const { error } = await supabase.from("users").insert({
        username: formdata.username,
        email: formdata.email,
        password: formdata.password,
        token: token,
      });
      if (error) {
        console.error("Error inserting user:", error);
      } else {
        setCookies("auth-token", token, { path: "/" });
        toast.success("You registered successfully!");
      }
      console.log(cookies);
    } catch (err) {
      console.error("Error hashing password:", err);
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
            <img
              src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/logo_hpshop.svg"
              alt="Logo"
            />
          </div>
        </div>
        <div className={style.signUpContainer}>
          <div className={style.hrs}>
            <div className={style.sign}>
              <div className={style.edges}></div>
              <h1 className={style.signUp}>Sign Up</h1>
              <div className={style.edges}></div>
            </div>
          </div>
        </div>
        <div className={style.enjoyText}>
          <p>Enjoy magical features.</p>
        </div>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
            registerUser();
          }}
        >
          <div className={style.inputContainer}>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              id="username"
              className={style.username}
              value={formdata.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              id="email"
              className={style.email}
              value={formdata.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div>{error ? "error" : ""}</div> */}
          <div className={style.inputContainer}>
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              id="password"
              className={style.password}
              value={formdata.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={style.signUpBtn}>
            SIGN UP
          </button>
          <hr></hr>
          <div>
            <h2 className={style.anAccount}>Already have an account?</h2>
          </div>
          <NavLink to="/login">
            <div className={style.logInBtn}>LOG IN</div>
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
