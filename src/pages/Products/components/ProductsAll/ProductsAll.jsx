import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../components/redux/productsSlicer";
import Loader from "../../../../components/Loader/Loader";
import style from "../ProductsAll/ProductsAll.module.css";

export default function ProductsAll() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(data);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const seen = new Set();

  return (
    <div>
      {data.isLoading ? (
        <Loader />
      ) : (
        <div>
         
          <div className={style.all}>
            {data?.products?.data?.map((item) => {
              return (
                <div key={item.id} className={style.container}>
                  <div className={style.image}>
                    {item?.images.slice(0, 1).map((item, i) => {
                      return <img src={item} key={i} />;
                    })}
                  </div>
                  <div className={style.details}>
                    <h1 className={style.title}>{item.title}</h1>
                    <p className={style.price}>{`${item.price}.00 AZN`}</p>
                    <div className={style.btn}>ADD TO CART</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
