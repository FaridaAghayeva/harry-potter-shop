import React from "react";
import style from "../ContactUs/Contact.module.css";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrump/BreadCrump";

export default function ContactUs() {
  const paths = [
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact-us" },
  ];
  return (
    <div className={style.container}>
      <div className={style.path}>
        <NavLink>
          <Breadcrumb paths={paths} />
        </NavLink>
      </div>

      <h1 className={style.title}>Contact Us</h1>

      <div className={style.formContainer}>
        <div className={style.inside}>
          <p className={style.text1}>
            Orders made with standard shipping can take&nbsp;2-3 days to be
            processed and dispatched. Please then allow additional time for
            delivery.
          </p>
          <p className={style.text2}>
            <i>
              Please do check our
              <NavLink to="/faq"> FAQ section </NavLink>
              prior to contacting us to see if your question has been answered.
            </i>
          </p>
          <form className={style.form}>
            <div className={style.name}>
              <label for="firstname">First Name</label>
              <input type="text" name="firstname" placeholder="Hermione" />
            </div>
            <div className={style.surname}>
              <label for="lastname">Last Name</label>
              <input type="text" name="lastname" placeholder="Granger" />
            </div>
            <div className={style.email}>
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="hermione@hogwarts.com"
              />
            </div>
            <div className={style.message}>
              <label for="message">Message</label>
              <textarea type="text" name="message" rows="10" />
            </div>
            <div className={style.btnContainer}>
              <div className={style.btn}>SEND MESSAGE</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
