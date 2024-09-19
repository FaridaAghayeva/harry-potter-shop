import React, { useEffect, useState } from "react";
import style from "../EditPage/EditPage.module.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../components/redux/productsSlicer";

export default function EditPage() {
  const { id } = useParams();
  const editId = parseInt(id, 10);
  const [formdata, setFormdata] = useState({
    title: "",
    images: [],
    price: "",
    categories: [],
    text: "",
  });
  const dispatch = useDispatch();

  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = data?.products?.data?.find((item) => item?.id === editId);

  console.log(product);

  const submitChanges = () => {};

  return (
    <div>
      <form onSubmit={submitChanges}>
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={product?.title}
          onChange={handleChange}
        />

        <label for="image">Images</label>
        <input
          type="text"
          name="image"
          id="image"
          value={product?.images}
          onChange={handleChange}
        />

        <label for="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          value={product?.price}
          onChange={handleChange}
        />

        <label for="category">Categories</label>
        <input
          type="text"
          name="category"
          id="category"
          value={product?.categories}
          onChange={handleChange}
        />

        <label for="text">Description</label>
        <input
          type="text"
          name="text"
          id="text"
          value={product?.text}
          onChange={handleChange}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
