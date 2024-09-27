import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from "./components/local/en.json";
import azJSON from "./components/local/az.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    az: { ...azJSON },
  },
  lng: "en",
});
