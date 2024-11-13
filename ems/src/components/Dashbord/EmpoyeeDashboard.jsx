import { useContext, useState, useEffect } from "react";
import Header from "../other/Header";
import TaskNumber from "../other/TaskNumber";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

function EmpoyeeDashboard({ data }) {
  const [userData, setUserData] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
   
    if (data && user && data.name === user.name) {
      setUserData(user);
    } else {
      console.log("Error: User data does not match.");
    }
  }, [data, user]);

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header data={data} />
  
      {userData && <TaskNumber data={userData} />}
      <TaskList data={data} />
    </div>


  );
}

export default EmpoyeeDashboard;
