import React, { useContext } from "react";
import style from "../ToggleFilterMenu/ToggleFilterMenu.module.css";
import { ThemeContext } from "../../../../../components/ContextAPIs/Theme/Theme";

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

  return (
    <div className={style.sortingAndFiltering}>
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
      <div
        className={
          darkMode === "light" ? style.sortContainer : style.sortContainerLight
        }
      >
        <h1 className={style.sortContainerLight}>Sort By</h1>
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
  );
}
