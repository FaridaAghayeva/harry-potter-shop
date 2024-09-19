import { fetchProducts } from "../../components/redux/productsSlicer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import style from "../Dashboard/Dashboard.module.css";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      {data?.products?.data?.map((item, index) => {
        return (
          <div key={item.id} className={style.itemContainer}>
            <div className={style.image}>
              <img
                src={item.images?.slice(0, 1).map((item) => {
                  return item;
                })}
              />
            </div>
            <div className={style.title}>
              <p>{item.title}</p>
            </div>
            <div className={style.buttons}>
              <NavLink to={`/edit-product/${item.id}`}>
                <div>
                  <CiEdit />
                </div>
              </NavLink>
              <div>
                <RiDeleteBin6Line />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
