import { FAQContext } from "../../components/ContextAPIs/FAQs/FAQ.jsx";
import React, { useContext } from "react";
import Faq from "react-faq-component";
import style from "../FAQ/FAQ.module.css";
import Breadcrumb from "../../components/BreadCrump/BreadCrump";
import { NavLink } from "react-router-dom";

export default function FAQ() {
  const { questions } = useContext(FAQContext);

  const data = {
    title: "",
    rows: questions.map((item) => {
      const details = {
        title: item.question,
        content: item.answer,
      };
      return details;
    }),
  };

  const styles = {
    bgColor: "black",
    color: "white",

    rowContentColor: "#fcf5e7",
    arrowColor: "#fcf5e7",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  const paths = [
    { name: "Home", url: "/" },
    { name: "FAQs", url: "/faq" },
  ];
  return (
    <div className={style.container}>
      <div className={style.path}>
        <NavLink>
          <Breadcrumb paths={paths} />
        </NavLink>
      </div>
      <h1 className={style.title}>FAQs</h1>
      <div className={style.questionsContainer}>
        <div className={style.inside}></div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}
