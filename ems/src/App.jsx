import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Auth/Login";
import EmpoyeeDashboard from "./components/Dashbord/EmpoyeeDashboard";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {

  const [user, setuser] = useState(null);
  const [loggedInUserData , setLoggedInUserData] =useState(null)
  const data = useContext(AuthContext)
 
  
              // useEffect(()=>{
              //     const loggedInUser= localStorage.getItem("loggedInUser")
              //     if(loggedInUser){
              //         const userData = JSON.parse(loggedInUser)
              //         setuser(userData.role)
              //         // setLoggedInUserData(userData.sup)
              //       }
              // },[])

  function handeLogin(email, password) {
    
    if (email === "vishu@admin.com" && password === "123") {
          localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
      setuser("admin");
    } else if (data) {
      const employeeFind =  data?.user?.employee?.employees.find((e)=>e.email == email && e.password === password)
       
      if(employeeFind){
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', sup:"employee"}))
    setLoggedInUserData(employeeFind)
      setuser("employee");}
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
      {!user ? <Login handeLogin={handeLogin} /> : ""} {/*  using propss */}
      {user === "admin" ? <AdminDashbord /> :(user == "employee" ?  <EmpoyeeDashboard data={loggedInUserData}/> : null)}
      {/* <EmpoyeeDashboard /> */}
      {/* <AdminDashbord/> */}
    </>
  );
}

export default App;
