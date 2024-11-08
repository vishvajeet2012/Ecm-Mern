import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Auth/Login";
import EmpoyeeDashboard from "./components/Dashbord/EmpoyeeDashboard";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { setLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setuser] = useState(null);

  function handeLogin(email, password) {
    if (email === "vishu@admin.com" && password === "123") {
      setuser('admin')
      
     }    else if (email==="user@me.com" && password==="123")  {
               setuser('employee')
     }
    
    
    else {
      alert("invalid ");
    }
  }
 

  useEffect(() => {
    setLocalStorage();
  });

  return (
    <>
      {!user ? <Login handeLogin={handeLogin} /> : ""}    {/*  using props */}
          {user === "admin" ? <AdminDashbord/> : ""}
      {/* <EmpoyeeDashboard /> */}
      {/* <AdminDashbord/> */}
    </>
  );
}

export default App;
