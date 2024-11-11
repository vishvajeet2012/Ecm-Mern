import { useEffect, useState } from "react";

function TaskForm() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    console.log(tasks)
  },[tasks])
  function formHandle(e) {
    e.preventDefault();

   // store all form data in array 
    const newTask = {
      task,
      date,
      assignee,
      category,
      description,
    };

   
    setTasks([...tasks, newTask]);


   
    setTask("");
    setDate("");
    setAssignee("");
    setCategory("");
    setDescription("");
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form onSubmit={formHandle} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            placeholder="Task description"
          />
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>

 
      {/* <div className="mt-5 text-gray-300">
        <h3 className="text-lg mb-2">Tasks List</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="mb-2 p-2 border border-gray-500 rounded">
              <strong>Task:</strong> {task.task} <br />
              <strong>Date:</strong> {task.date} <br />
              <strong>Assignee:</strong> {task.assignee} <br />
              <strong>Category:</strong> {task.category} <br />
              <strong>Description:</strong> {task.description}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default TaskForm;
