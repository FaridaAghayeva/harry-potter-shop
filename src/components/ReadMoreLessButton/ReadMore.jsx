import React, { useState } from "react";
import style from "../../components/ReadMoreLessButton/ReadMore.module.css";
const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded
    ? text
    : text?.slice(0, maxLength) + (text?.length > maxLength ? "..." : "");

  return (
    <div>
      <p className={style.text}>{displayText}</p>
      {text?.length > maxLength && (
        <button onClick={handleToggle} className={style.btn}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
