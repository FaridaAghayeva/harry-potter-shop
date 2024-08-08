import { createContext, useEffect, useState } from "react";
import supabase from "../../../supabase.js";

export const FAQContext = createContext();

export const FAQProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    let { data: faqs, error } = await supabase.from("faqs").select("*");
    if (error) {
      console.log(error);
    }
    setQuestions(faqs);
  };
  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <FAQContext.Provider value={{ questions, setQuestions }}>
      {children}
    </FAQContext.Provider>
  );
};
