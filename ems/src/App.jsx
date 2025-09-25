import React, { use, useContext, useEffect, useState } from "react";
import Login from "../components/Auth/Login";
import AdminDashboard from "../components/DashBoard/AdminDashboard";
import EmployeeDashboard from "../components/DashBoard/EmployeeDashboard";
import { setLocalStorage } from "../utils/localStorage";
import AuthProvider, { AuthContext } from "../context/AuthProvider";




function App() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setLoggedInUserData(userData)
      setUser(userData.role)
    }


  }, [])


  const validHandler = (email, password) => {
    if (userData && userData.admin.find(user => user.email === email && user.password === password)) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (userData) {
      const employee = userData.employees.find(user => user.email === email && user.password === password)
      if (employee) {
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))

      }
    }
    else {
      alert("Invalid Credentials")

    }


  }



  return (
    <> {!user ? <Login handleLogin={validHandler} /> : ""}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee') ? <EmployeeDashboard changeUser={setUser} /> : null} </>

  );
}

export default App;