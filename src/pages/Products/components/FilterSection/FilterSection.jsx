import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../components/redux/productsSlicer";
import Loader from "../../../../components/Loader/Loader";
import Product from "../Product/Product";
import style from "../ProductsAll/ProductsAll.module.css";

export default function FilterSection() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visible, setVisible] = useState(10);
  const [sortOption, setSortOption] = useState("asc");

  function showMoreItems() {
    setVisible((prevValue) => prevValue + 3);
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data.products?.data) {
      const categoriesSet = new Set();
      data?.products?.data?.map((product) => {
        product?.categories?.map((category) => {
          categoriesSet.add(category);
        });
      });
      setUniqueCategories(Array.from(categoriesSet));
    }
  }, [data.products]);

  useEffect(() => {
    let filtered = [...(data?.products?.data || [])];
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        product?.categories?.some((category) =>
          selectedCategories.includes(category)
        )
      );
    }
    if (sortOption) {
      filtered = filtered.slice().sort((a, b) => {
        switch (sortOption) {
          case "asc":
            return a.price - b.price;
          case "desc":
            return b.price - a.price;
          case "a-z":
            return a.title.localeCompare(b.title);
          case "z-a":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
    }
    setFilteredProducts(filtered);
  }, [selectedCategories, data.products, sortOption]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      {data.isLoading ? (
        <Loader />
      ) : (
        <div className={style.productsContainer}>
          <div className={style.sortingAndFiltering}>
            <div className={style.sortContainer}>
              <h1>Sort By</h1>
              <div className={style.sorts}>
                <div>
                  <input
                    type="radio"
                    value="asc"
                    onChange={handleSortChange}
                    className={style.radioInput}
                    checked={sortOption === "asc"}
                  />
                  <label>Price (Low To High)</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="desc"
                    onChange={handleSortChange}
                    className={style.radioInput}
                    checked={sortOption === "desc"}
                  />
                  <label>Price (High To Low)</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="a-z"
                    onChange={handleSortChange}
                    className={style.radioInput}
                    checked={sortOption === "a-z"}
                  />
                  <label>A-Z</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="z-a"
                    onChange={handleSortChange}
                    className={style.radioInput}
                    checked={sortOption === "z-a"}
                  />
                  <label>Z-A</label>
                </div>
              </div>
            </div>
            <hr />
            <div className={style.filterContainer}>
              <h1>Filter By</h1>
              {uniqueCategories.map((category, i) => (
                <div key={i} className={style.filters}>
                  <input
                    type="checkbox"
                    value={category}
                    onChange={handleCategoryChange}
                    className={style.input}
                  />
                  <label>{category}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={style.all}>
            {filteredProducts?.slice(0, visible).map((product, i) => (
              <Product
                key={i}
                product={product}
                price={product.price}
                title={product.title}
                image={product.images}
                id={product.id}
              />
            ))}
          </div>
        </div>
      )}
      <div className={style.loadContainer}>
        <div onClick={showMoreItems} className={style.loadBtn}>
          Load More
        </div>
      </div>
    </div>
  );
}
