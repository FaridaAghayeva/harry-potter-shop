// Breadcrumb.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ContextAPIs/Theme/Theme";
import style from "../BreadCrump/BreadCrump.module.css";
const Breadcrumb = ({ paths }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <nav>
      <ul
        style={{ display: "flex", listStyle: "none", padding: 0 }}
        className={darkMode === "dark" && style.textLight}
      >
        {paths.map((path, index) => (
          <li key={index} style={{ marginRight: "8px" }}>
            {index < paths.length - 1 ? (
              <span className={darkMode === "dark" && style.textLight}>
                <Link to={path.url} style={{ textDecoration: "underline" }} className={darkMode === "dark" && style.textLight}>
                  {path.name}
                </Link>
                {" / "}
              </span>
            ) : (
              <span>{path.name}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
