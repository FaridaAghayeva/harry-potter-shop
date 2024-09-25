import React, { useContext, useState } from "react";
import style from "../../components/ReadMoreLessButton/ReadMore.module.css";
import { ThemeContext } from "../../components/ContextAPIs/Theme/Theme";
const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded
    ? text
    : text?.slice(0, maxLength) + (text?.length > maxLength ? "..." : "");

  return (
    <div>
      <p className={darkMode === "dark" ? style.text : style.textLight}>
        {displayText}
      </p>
      {text?.length > maxLength && (
        <button onClick={handleToggle} className={style.btn}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
