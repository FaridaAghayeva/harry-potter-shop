import React, { useContext } from "react";
import style from "../ToggleFilterMenu/ToggleFilterMenu.module.css";
import { ThemeContext } from "../../../../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";

export default function ToggleFilterMenu({
  searchItem,
  handleInputChange,
  handleSortChange,
  sortOption,
  uniqueCategories,
  handleCategoryChange,
  displayFilters,
}) {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div
      className={
        darkMode === "light"
          ? style.sortingAndFiltering
          : style.sortingAndFilteringLight
      }
    >
      <div onClick={displayFilters}>
        <span className={style.filters__close}>
          <i className={style.icon_close}></i>
        </span>
      </div>
      <div>
        <input
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Type to search"
          className={style.searctInput}
        />
      </div>
      <div className={style.sortContainer}>
        <h1>{t("products.sort")}</h1>
        <div className={style.sorts}>
          <div>
            <input
              type="radio"
              value="asc"
              onChange={handleSortChange}
              className={style.radioInput}
              checked={sortOption === "asc"}
            />
            <label>{t("products.price")}</label>
          </div>
          <div>
            <input
              type="radio"
              value="desc"
              onChange={handleSortChange}
              className={style.radioInput}
              checked={sortOption === "desc"}
            />
            <label>{t("products.price2")}</label>
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
        <h1>{t("products.filter-by")}</h1>
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
  );
}
