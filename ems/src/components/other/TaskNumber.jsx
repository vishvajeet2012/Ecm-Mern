function TaskNumber({ data }) {
  // Calculate total active tasks across all tasks
  const totalActiveTasks = data.tasks.reduce((sum, task) => sum + task.active, 0);
  const totalComplted =data.tasks.reduce((sum,task)=> sum + task.completed,0)
  const NewTask = data.tasks.reduce((sum,task)=>sum+task.newTask,0)
  const totalFailTask = data.tasks.reduce((sum,task )=>sum+task.failed,0)
  return (
    <div className="flex mt-10 justify-between gap-5">
    
      <div className="py-6 px-6 rounded-xl w-full bg-blue-500">
        <h2 className="text-2xl font-semibold">{totalActiveTasks}</h2>
        <h3 className="text-xl font-medium">Total Active Tasks</h3>
      </div>

      <div className="py-6 px-6 rounded-xl w-full bg-lime-800	">
        <h2 className="text-2xl font-semibold">{NewTask}</h2>
        <h3 className="text-xl font-medium">Total New Tasks</h3>
      </div>

      <div className="py-6 px-6 rounded-xl w-full bg-violet-800	">
        <h2 className="text-2xl font-semibold">{totalComplted}</h2>
        <h3 className="text-xl font-medium">Total Complete Tasks</h3>
      </div>

      <div className="py-6 px-6 rounded-xl w-full bg-red-800	">
        <h2 className="text-2xl font-semibold">{totalFailTask}</h2>
        <h3 className="text-xl font-medium">Total Failed Tasks</h3>
      </div>
      
    </div>
  );
}

export default TaskNumber;
