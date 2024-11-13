import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import EmployeeStatus from "./EmployeeStatus";

function TaskNumber({ data }) {
  // Verify `tasks` is an array to prevent errors
  const tasks = data && Array.isArray(data.tasks) ? data.tasks : [];
console.log(tasks)
  // Calculate the total active tasks
  const totalActiveTasks = tasks.reduce((sum, task) => sum + (task.active || 0), 0);
  const totalNewTasks = tasks.reduce((sum, task) => sum + (task.newTask || 0), 0);
  const  completed = tasks.reduce((sum,task)=> sum + (task.completed || 0),0)
    const failedTask =tasks.reduce((sum, task) =>sum + (task.failed || 0),0)

  return (
    <>
      <div className="flex mt-10 justify-between gap-5">
        {/* Total Active Tasks Box */}
        <div className="py-6 px-6 rounded-xl w-[45%] bg-red-400">
          <h2 className="text-2xl font-semibold">{totalActiveTasks}</h2>
          <h3 className="text-xl font-medium">Active Tasks</h3>
        </div>

        <div className="py-6 px-6 rounded-xl w-[45%] bg-green-400">
          <h2 className="text-2xl font-semibold">{totalNewTasks}</h2>
          <h3 className="text-xl font-medium">New Tasks</h3>  
          </div>

          <div className="py-6 px-6 rounded-xl w-[45%] bg-blue-400">
          <h2 className="text-2xl font-semibold">{completed}</h2>
          <h3 className="text-xl font-medium">Completed Tasks</h3>  
          </div>

<div className="py-6 px-6 rounded-xl w-[45%] bg-red-800">
          <h2 className="text-2xl font-semibold">{failedTask}</h2>
          <h3 className="text-xl font-medium">failed Tasks</h3>  
          </div>
      
      </div>
      <EmployeeStatus/>
    </>
  );
}

export default TaskNumber;
