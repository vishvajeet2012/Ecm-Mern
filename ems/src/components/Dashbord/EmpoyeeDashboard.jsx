import { useEffect } from "react";
import Header from "../other/Header";
import TaskNumber from "../other/TaskNumber"
import TaskList from "../TaskList/TaskList"
function EmployeeDashboard({ data, changeUser }) {
  useEffect(() => {
  
  }, [data]); 

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header data={data} changeUser={changeUser} />
      <TaskNumber data={data}/>
            
            <TaskList data={data}/>
    </div>
  );
}

export default EmployeeDashboard;
