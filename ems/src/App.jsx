import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmpoyeeDashboard from "./components/Dashbord/EmpoyeeDashboard";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [users, setuser] = useState(null); 
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { user, setUser } = useContext(AuthContext); 

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setuser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);
    

  function handeLogin(email, password) {
    if (email === "vishu@admin.com" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setuser("admin");
    } else if (user) {
      const employeeFind = user?.employees.find(
        (e) => e.email === email && e.password === password
        
      );
      setLoggedInUserData(employeeFind);
      if (employeeFind) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employeeFind })
        );
     
        setuser("employee");
        setUser(employeeFind); 
      } else {
        alert("Invalid credentials");
      }
    }
  }

  useEffect(() => {
    setLocalStorage(); 
  }, []);

// 
//   function handeLogout() {
//    
//    localStorage.removeItem("loggedInUser");

//   // Reset the state to logged out
//       //setuser(null);
//       setLoggedInUserData(null);
//     // setUser(null); // Clear AuthContext state
//  }
  console.log(user)
  return (
    <>
      {!users ? (
        <Login handeLogin={handeLogin} />
      ) : users === "admin" ? (
        <AdminDashbord changeUser={setuser} />
      ) : users === "employee" ? (
        <EmpoyeeDashboard changeUser={setuser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
