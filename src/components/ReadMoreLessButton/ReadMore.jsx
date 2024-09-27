import React, { useContext, useState } from "react";
import style from "../../components/ReadMoreLessButton/ReadMore.module.css";
import { ThemeContext } from "../../components/ContextAPIs/Theme/Theme";
import { useTranslation } from "react-i18next";
const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
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
          {isExpanded ? t("products.readless") : t("products.readmore")}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
