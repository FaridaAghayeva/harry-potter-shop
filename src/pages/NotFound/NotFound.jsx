import React from "react";
import { NavLink } from "react-router-dom";
import style from "../NotFound/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={style.container}>
      <div>
        <img src="https://images.ctfassets.net/usf1vwtuqyxm/51Jg5dWTTQ3tyyDrGnckOY/3cbf3d47e6f9da25f390a8d1ee56d93e/floo-powder_1_1800x1248.png?h=416&w=600&fit=pad&fm=webp" />
        <h1 className={style.text}> Oh dear. Are you lost?</h1>
        <p className={style.text}>
          Come back in a little or return to the homepage.
        </p>
        <div className={style.backToHomeBtn}>
          <NavLink to="/">BACK TO WIZARDING WORLD</NavLink>
        </div>
      </div>
    </div>
  );
}
