import React from "react";
import style from "../HeadSection/HeadSection.module.css";
export default function HeadSection() {
  return (
    <div className={style.containerResp}>
      <div className={style.container}>
        <div className={style.border}>
          <div className={style.textContainer}>
            <h1 className={style.title}>All Products</h1>
            <p className={style.text}>
              Explore a selection of best-loved Harry Potter products, including
              bespoke collectables, unique wands, souvenirs, delicious
              confectionery, fan-favourites and more, perfect for gifting any
              witch or wizard to add to their collection.
            </p>
          </div>
        </div>
      </div>
      <div className={style.textContainerResp}>
        <h1 className={style.titleResp}>All Products</h1>
        <p className={style.textResp}>
          Explore a selection of best-loved Harry Potter products, including
          bespoke collectables, unique wands, souvenirs, delicious
          confectionery, fan-favourites and more, perfect for gifting any witch
          or wizard to add to their collection.
        </p>
      </div>
    </div>
  );
}
