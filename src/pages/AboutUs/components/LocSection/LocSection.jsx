import React from "react";
import style from "../LocSection/LocSection.module.css";
import Marquee from "react-fast-marquee";
import LocationCard from "../LocationCard/LocationCard";

const LocSection = () => {
  const locations = [
    {
      description: "Harry Potter Store New York",
      imageSrc:
        "https://harrypottershop.co.uk/cdn/shop/files/location_hpny_large.jpg?v=1614325604",
      coordinates: [40.74100637192192, -73.98948051329965], // Replace with actual coordinates
    },
    {
      description: "The Harry Potter Shop On Platform 9",
      imageSrc:
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/harry-potter-platform-9-34.jpg?q=50&fit=crop&w=1500&dpr=1.5",
      coordinates: [51.53263823126037, -0.12391925805441821], // Replace with actual coordinates
    },
    {
      description: "The Biggest Harry Potter Shop",
      imageSrc:
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/harry-potter-ny.jpg?q=50&fit=crop&w=1500&dpr=1.5",
      coordinates: [40.73061, -73.935242], // Replace with actual coordinates
    },
    {
      description: "Filch's Emporium of Confiscated Goods",
      imageSrc:
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/harry-potter-filch-s-emporium.jpg?q=50&fit=crop&w=1500&dpr=1.5",
      coordinates: [34.14338182635141, -118.3524918079576], // Replace with actual coordinates
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Locations</h1>
      </div>
      <Marquee>
        {locations?.map((location, index) => (
          <LocationCard
            key={index}
            imageSrc={location.imageSrc}
            description={location.description}
            coordinates={location.coordinates}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default LocSection;
