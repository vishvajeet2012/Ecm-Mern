import { useContext, useState } from "react";
import EmployeeStatus from "./EmployeeStatus";
import { AuthContext } from '../../context/AuthProvider';

function TaskFrom() {
  const user = useContext(AuthContext);
  const [title, setTask] = useState("");
  const [date, setDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [taskss, setTasks] = useState([]);
  const [active, setActive] = useState(1);
  const [failed, setFail] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [newTask, setNewTask] = useState(1);

  function formHandle(e) {
    e.preventDefault();

    const newTaskData = {
      title,
      date,
      assignee,
      category,
      description,
      active,
      failed,
      completed,
      newTask,
    };
console.log(user)
    // Check if assignee exists in the employees list
    let employeeFound = false;
    const updatedEmployees = user.user.employees.map(employee => {
      if (employee.name === assignee) {
        employeeFound = true;
        if (!employee.tasks) {
          employee.tasks = [];
        }
        employee.tasks.push(newTaskData);
        return { ...employee };
      }
      return employee;
    });

    if (employeeFound) {
      // Update the context with new data
      user.setUser({ ...user.user, employees: updatedEmployees });

      // Reset form fields
      setTasks([...taskss, newTaskData]);
      setTask("");
      setDate("");
      setAssignee("");
      setCategory("");
      setDescription("");
      setActive(1);
      setFail(0);
      setCompleted(0);
      setNewTask(1);
    } else {
      console.error("Assignee not found. Please enter a valid employee name.");
    }
  }

  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form onSubmit={formHandle} className="flex flex-wrap items-start justify-between w-full gap-5">
          <div className="w-full md:w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={title}
                onChange={(e) => setTask(e.target.value)}
                className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="text"
                placeholder="Design, Dev, etc"
              />
            </div>
          </div>

          <div className="w-full md:w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
              placeholder="Task description"
            />
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
      <EmployeeStatus />
    </>
  );
}

export default TaskFrom;
