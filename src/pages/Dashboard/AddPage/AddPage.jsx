import React, { useContext, useState } from "react";
import style from "../AddPage/AddPage.module.css";
import supabase from "../../../supabase";
import { toast } from "react-toastify";
import { ThemeContext } from "../../../components/ContextAPIs/Theme/Theme";

export default function AddPage() {
  const { darkMode } = useContext(ThemeContext);

  const [formdata, setFormdata] = useState({
    title: "",
    images: "",
    price: "",
    categories: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const submitChanges = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...formdata,
      images: formdata.images.split(",").map((item) => item.trim()),
      categories: formdata.categories.split(",").map((item) => item.trim()),
    };

    const { data, error } = await supabase
      .from("products")
      .insert({
        title: updatedData?.title,
        text: updatedData?.text,
        price: updatedData?.price,
        images: updatedData?.images,
        categories: updatedData?.categories,
      })
      .select();

    if (error) {
      console.log(error);
      toast.error("Error adding product!");
    } else {
      toast.success("Product is added successfully!");
    }
  };

  return (
    <form onSubmit={submitChanges} className={style.container2}>
      <div className={style.item}>
        <label
          htmlFor="title"
          className={darkMode === "dark" ? style.input : style.inputLight}
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formdata.title}
          onChange={handleChange}
          required
          className={darkMode === "dark" ? style.input : style.inputLight}
        />
      </div>

      <div className={style.item}>
        <label
          htmlFor="images"
          className={darkMode === "dark" ? style.input : style.inputLight}
        >
          Images' URLs
        </label>
        <textarea
          name="images"
          id="images"
          value={formdata.images}
          onChange={handleChange}
          className={darkMode === "dark" ? style.input : style.inputLight}
          required
        />
      </div>

      <div className={style.item}>
        <label
          htmlFor="price"
          className={darkMode === "dark" ? style.input : style.inputLight}
        >
          Price
        </label>
        <input
          type="text"
          name="price"
          id="price"
          value={formdata.price}
          onChange={handleChange}
          className={darkMode === "dark" ? style.input : style.inputLight}
          required
        />
      </div>

      <div className={style.item}>
        <label
          htmlFor="categories"
          className={darkMode === "dark" ? style.input : style.inputLight}
        >
          Categories
        </label>
        <textarea
          name="categories"
          id="categories"
          value={formdata.categories}
          onChange={handleChange}
          className={darkMode === "dark" ? style.input : style.inputLight}
          required
        />
      </div>

      <div className={style.item}>
        <label
          htmlFor="text"
          className={darkMode === "dark" ? style.input : style.inputLight}
        >
          Description
        </label>
        <textarea
          name="text"
          id="text"
          value={formdata.text}
          onChange={handleChange}
          className={darkMode === "dark" ? style.input : style.inputLight}
          required
        />
      </div>

      <button type="submit" className={style.btn}>
        Add Product
      </button>
    </form>
  );
}
