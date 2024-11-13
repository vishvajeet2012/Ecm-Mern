import { useContext, useEffect, useState } from "react";

import "./App.css";
import Login from "./components/Auth/Login";
import EmpoyeeDashboard from "./components/Dashbord/EmpoyeeDashboard";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [users, setuser] = useState(null); // Keeps track of logged-in role (admin/employee)
  const [loggedInUserData, setLoggedInUserData] = useState(null); // Keeps specific employee data
  const { user, setUser } = useContext(AuthContext); // Access AuthContext data

  function handeLogin(email, password) {
    if (email === "vishu@admin.com" && password === "123") {
      // Admin login
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setuser("admin");
  // Update AuthContext with admin role

    } else if (user) {
      // Employee login
      const employeeFind = user?.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employeeFind) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", sup: "employee" })
        );
        setLoggedInUserData(employeeFind); // Set specific employee data
        setuser("employee");
        setUser(employeeFind); // Update AuthContext with employee data
        
      } else {
        alert("Invalid credentials");
      }
    }
  }

  useEffect(() => {
    setLocalStorage(); // Set up any required local storage
  }, []);

  return (
    <>
      {!users ? (
        <Login handeLogin={handeLogin} />
      ) : users === "admin" ? (
        <AdminDashbord/>
      ) : users === "employee" ? (
        <EmpoyeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
