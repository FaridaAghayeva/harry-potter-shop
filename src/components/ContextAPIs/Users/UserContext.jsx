import { createContext, useEffect, useState } from "react";
import supabase from "../../../supabase.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let { data: users, error } = await supabase.from("users").select("*");

    if (error) {
      console.log(error);
    }
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
