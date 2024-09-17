import React from "react";
import style from "../CreateTrunk/CreateTrunk.module.css";
import { NavLink } from "react-router-dom";

export default function CreateTrunk() {
  return (
    <div className={style.container}>
      <div className={style.detailsContainer}>
        <div className={style.details}>
          <div className={style.title}>
            <h1>Create Your Own Trunk</h1>
          </div>
          <div className={style.text}>
            <p>
              Beautifully presented for the perfect gift, you can now create
              your very own Hogwarts school trunk, and fill it to the brim with
              one-of-a-kind Harry Potter merchandise, handpicked by you.
            </p>
          </div>
          <NavLink to="/products">
            <div className={style.button}>SHOP NOW</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
