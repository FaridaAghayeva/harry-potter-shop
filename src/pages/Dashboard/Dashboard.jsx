import { fetchProducts } from "../../components/redux/productsSlicer";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import style from "../Dashboard/Dashboard.module.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import supabase from "../../supabase";
import { ThemeContext } from "../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async (productId) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", productId);
    if (error) {
      toast.error("Error removing product!");
    } else {
      toast.success("Product is removed successfully!");
    }
  };

  return (
    <div
      className={
        darkMode === "dark" ? style.wholeContainer : style.wholeContainerLight
      }
    >
      <div className={style.addbtn}>
        <NavLink to="/add-product">
          {t("dashboard.addproduct.addproduct")}
        </NavLink>
      </div>
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
                  <div className={style.editBtn}>
                    <span>
                      <CiEdit />
                    </span>
                  </div>
                </NavLink>
                <div onClick={() => handleDelete(item.id)}>
                  <span>
                    <RiDeleteBin6Line />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
