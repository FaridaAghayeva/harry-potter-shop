import React, { useContext, useState } from "react";
import style from "../ContactUs/Contact.module.css";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrump/BreadCrump";
import { toast } from "react-toastify";
import supabase from "../../supabase";
import { useCookies } from "react-cookie";
import { ThemeContext } from "../../components/ContextAPIs/Theme/Theme";

export default function ContactUs() {
  const { darkMode } = useContext(ThemeContext);
  const paths = [
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact-us" },
  ];
  const [cookie] = useCookies(["cookie-user"]);

  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const submitInformation = async () => {
    const { error } = await supabase.from("contact").insert({
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      email: formdata.email,
      message: formdata.message,
    });
    if (error) {
      console.error("Error inserting information:", error);
    } else {
      if (cookie["cookie-user"] !== undefined) {
        toast.success("Your information is sent successfully!");
      } else if (cookie["cookie-user"] === undefined) {
        toast.warning("You have not logged in!");
      }
    }

    console.log(cookie);
  };

  return (
    <div className={style.container}>
      <div className={style.path}>
        <NavLink>
          <Breadcrumb paths={paths} />
        </NavLink>
      </div>

      <h1 className={darkMode === "light" ? style.title : style.titleLight}>
        Contact Us
      </h1>

      <div
        className={
          darkMode === "light" ? style.formContainer : style.formContainerLight
        }
      >
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
          <form
            className={style.form}
            onSubmit={(e) => {
              e.preventDefault();
              submitInformation();
            }}
          >
            <div
              className={darkMode === "light" ? style.name : style.nameLight}
            >
              <label for="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Hermione"
                value={formdata.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div
              className={
                darkMode === "light" ? style.surname : style.surnameLight
              }
            >
              <label for="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Granger"
                value={formdata.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div
              className={darkMode === "light" ? style.email : style.emailLight}
            >
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="hermione@hogwarts.com"
                value={formdata.email}
                onChange={handleChange}
                required
              />
            </div>
            <div
              className={
                darkMode === "light" ? style.message : style.messageLight
              }
            >
              <label for="message">Message</label>
              <textarea
                type="text"
                name="message"
                rows="10"
                value={formdata.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className={style.btnContainer}>
              <button className={style.btn} type="submit">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
