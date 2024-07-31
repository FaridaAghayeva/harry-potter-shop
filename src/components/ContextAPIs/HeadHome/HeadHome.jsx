import { createContext, useEffect, useState } from "react";

export const HeadContext = createContext();

export const HeadProvider = ({ children }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const moreDetails = [
      {
        id: 1,
        title: "White Chocolate Frog",
        text: "Milk, Dark, and now White! Introducing a brand new spellbinding treat that brings the Wizarding World to life. This White Chocolate Frog comes packaged in its authentic Honeydukes box!",
        image:
          "https://harrypottershop.co.uk/cdn/shop/files/WhiteChocFrog_Banner_2048x.jpg?v=1720019583",
      },
      {
        id: 2,
        title: "Harry Potter Travel",
        text: "Take a little magic with you wherever you go with this exclusive Harry Potter Travel collection, inspired by the enchanted transportation of the Wizarding World!",
        image:
          "https://harrypottershop.co.uk/cdn/shop/files/Travel_Banner_2048x.jpg?v=1714574626",
      },
      {
        id: 3,
        title: "20% Off Sitewide",
        text: "Happee Birthdae Harry! Harry Potter Fan Club members can now save 20% on everything sitewide by entering the code BIRTHDAE20 at checkout! Not a member? Join today!",
        image:
          "https://harrypottershop.co.uk/cdn/shop/files/Harry-20-Banner2_2048x.jpg?v=1689758003",
      },
    ];
    setDetails(moreDetails);
  }, []);

  return (
    <HeadContext.Provider value={{ details, setDetails }}>
      {children}
    </HeadContext.Provider>
  );
};
