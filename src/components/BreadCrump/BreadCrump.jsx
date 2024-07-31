// Breadcrumb.js
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
        {paths.map((path, index) => (
          <li key={index} style={{ marginRight: "8px" }}>
            {index < paths.length - 1 ? (
              <span>
                <Link to={path.url} style={{ textDecoration: "underline" }}>
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
