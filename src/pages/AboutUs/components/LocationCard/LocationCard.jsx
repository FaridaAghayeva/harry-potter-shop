import React from "react";
import style from "../LocSection/LocSection.module.css";
import { useTranslation } from "react-i18next";

const LocationCard = ({ imageSrc, description, coordinates }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    const [latitude, longitude] = coordinates;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className={style.locationCard}
      onClick={handleClick}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={style.overlay}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LocationCard;
