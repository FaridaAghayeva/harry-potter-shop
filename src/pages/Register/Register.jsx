import React from "react";
import style from "../Register/Register.module.css";

export default function Register() {
  return (
    <div className={style.container}>
      <div className={style.register}>
        <div className={style.logo}>
          <div className={style.back}></div>
          <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/logo_hpshop.svg" />
        </div>
        <div>
          <h1>Sign Up</h1>
        </div>
        <div>
          <p>Enjoy magical features.</p>
        </div>
        <div>
          <div>
            <label for="username">USERNAME</label>
            <input
              type="text"
              name="username"
              id="username"
              className={style.username}
            />
          </div>
          <div>
            <label for="email">EMAIL ADDRESS</label>
            <input
              type="text"
              name="email"
              id="email"
              className={style.email}
            />
          </div>
          <div>
            <label for="password">PASSWORD</label>
            <input
              type="text"
              name="password"
              id="password"
              className={style.password}
            />
          </div>
          <div>SIGN UP</div>
          <hr></hr>
          <div>
            <h1>Already have an account?</h1>
          </div>
          <div>LOG IN</div>
          <div>
            <img src="" />
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
}
