import React, { useContext, useEffect, useState } from "react";
import style from "../EditPage/EditPage.module.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../components/redux/productsSlicer";
import { toast } from "react-toastify";
import supabase from "../../../supabase";
import { ThemeContext } from "../../../components/ContextAPIs/Theme/Theme";

export default function EditPage() {
  const { darkMode } = useContext(ThemeContext);

  const { id } = useParams();
  const editId = parseInt(id, 10);
  const [formdata, setFormdata] = useState({
    title: "",
    images: "",
    price: "",
    categories: "",
    text: "",
  });
  const dispatch = useDispatch();

  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = data?.products?.data?.find((item) => item?.id === editId);

  useEffect(() => {
    if (product) {
      setFormdata({
        title: product?.title || "",
        images: product?.images.join(",") || "",
        price: product?.price || "",
        categories: product?.categories.join(",") || "",
        text: product?.text || "",
      });
    }
  }, [product]);

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
      .update({
        title: updatedData.title,
        text: updatedData.text,
        price: updatedData.price,
        images: updatedData.images,
        categories: updatedData.categories,
      })
      .eq("id", product?.id);

    if (error) {
      console.log(error);
      toast.error("Error updating product.");
    } else {
      window.location.reload();
      toast.success("Changes saved successfully!");
    }
  };

  return (
    <div
      className={
        darkMode === "dark" ? style.wholeContainer : style.wholeContainerLight
      }
    >
      <div className={style.container1}>
        <div className={style.title}>
          <p>Title</p>
          <span>{product?.title}</span>
        </div>
        <hr />
        <div className={style.image}>
          <p>Images</p>
          {product?.images?.map((item, index) => (
            <img src={item} key={index} alt="product" />
          ))}
        </div>
        <hr />
        <div className={style.price}>
          <p>Price</p>
          <span>{product?.price}.00 AZN</span>
        </div>
        <hr />
        <div className={style.categories}>
          <p>Categories</p>
          <span>{product?.categories.join(",")}</span>
        </div>
        <hr />
        <div className={style.text}>
          <p>Description</p>
          <span>{product?.text}</span>
        </div>
      </div>

      <form onSubmit={submitChanges} className={style.container2}>
        <div className={style.item}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formdata.title}
            onChange={handleChange}
          />
        </div>

        <div className={style.item}>
          <label htmlFor="images">Images' URLs</label>
          <textarea
            name="images"
            id="images"
            value={formdata.images}
            onChange={handleChange}
          />
        </div>

        <div className={style.item}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={formdata.price}
            onChange={handleChange}
          />
        </div>

        <div className={style.item}>
          <label htmlFor="categories">Categories</label>
          <textarea
            name="categories"
            id="categories"
            value={formdata.categories}
            onChange={handleChange}
          />
        </div>

        <div className={style.item}>
          <label htmlFor="text">Description</label>
          <textarea
            name="text"
            id="text"
            value={formdata.text}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={style.btn}>
          Update
        </button>
      </form>
    </div>
  );
}
