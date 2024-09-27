import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Assuming you're using i18next

export const HeadContext = createContext();

export const HeadProvider = ({ children }) => {
  const [details, setDetails] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const headerDetails = t("home.header", { returnObjects: true });

    if (headerDetails) {
      const moreDetails = Object.keys(headerDetails).map((key) => ({
        id: key,
        title: headerDetails[key].title,
        text: headerDetails[key].text,
        image: headerDetails[key].image,
      }));

      setDetails(moreDetails);
    }
  }, [t]);

  return (
    <HeadContext.Provider value={{ details, setDetails }}>
      {children}
    </HeadContext.Provider>
  );
};
