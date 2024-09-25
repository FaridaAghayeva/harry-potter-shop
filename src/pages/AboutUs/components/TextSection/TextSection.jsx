import React, { useContext, useEffect } from "react";
import style from "../TextSection/TextSection.module.css";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../../../components/BreadCrump/BreadCrump";
import { ThemeContext } from "../../../../components/ContextAPIs/Theme/Theme";

const TextSection = () => {
  const { darkMode } = useContext(ThemeContext);

  const paths = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
  ];

  return (
    <div className={style.container}>
      <div>
        <NavLink>
          <Breadcrumb paths={paths} />
        </NavLink>
      </div>
      <div className={ darkMode==='light'?style.text : style.textLight}>
        <p>
          The Harry Potter Shop is the official online shop for all your
          wizarding needs, housing ranges from Warner Bros. Studio Tour London,
          the Harry Potter shop at Platform 9 ¾ and Harry Potter New York
          providing a spellbinding shopping experience.
        </p>
        <p>
          Discover everything from fan-favourites and brand collaborations to
          exclusive designs and one-of-a-kind personalisation in the largest
          collection of Harry Potter and Fantastic Beasts products in the world.
          With over 1000 items, every fan will find something magical to add to
          their collection.
        </p>
        <p>
          Stay up to date on all the latest Harry Potter Shop news as well as
          new and exclusive product launches by signing up to our newsletter!
        </p>
      </div>
    </div>
  );
};

export default TextSection;
