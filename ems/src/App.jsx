import React, { useContext, useEffect, useState } from "react";
import Login from "../components/Auth/Login";
import AdminDashboard from "../components/DashBoard/AdminDashboard";
import EmployeeDashboard from "../components/DashBoard/EmployeeDashboard";
// import { setLocalStorage } from "../utils/localStorage"; // ❌ remove if unused
import { AuthContext } from "../context/AuthProvider.jsx"; // ✅ relative path

function App() {
  const [user, setUser] = useState(null);
  const [userData] = useContext(AuthContext); // ✅ context value
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const storedUser = JSON.parse(loggedInUser);
      setLoggedInUserData(storedUser);
      setUser(storedUser.role);
    }
  }, []);

  const validHandler = (email, password) => {
    if (email === "a@a.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ ...employee, role: "employee" }) // ✅ store full data
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={validHandler} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} />}
      {user === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
}

export default App;
