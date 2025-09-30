import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext(); // ✅ Export context properly

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setLocalStorage(); // ensure localStorage has initial data
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  useEffect(() => {
    if (userData.length > 0) {
      localStorage.setItem('employees', JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
