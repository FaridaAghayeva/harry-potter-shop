import React from "react";
import style from "../LocSection/LocSection.module.css";

const LocSection = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Locations</h1>
      </div>
      <div className={style.locs}>
        <div className={style.ny}>
          <div className={style.nyBorder}>
            <p>Harry Potter Store New York</p>
          </div>
        </div>
        {/* <div className={style.platform}></div>
        <div className={style.making}></div> */}
      </div>
    </div>
  );
};

export default LocSection;
