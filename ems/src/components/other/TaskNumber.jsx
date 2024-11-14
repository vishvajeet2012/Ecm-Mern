function TaskNumber({ data }) {
 

  return (
    <div className="flex mt-10 justify-between gap-5">
     
      {data?.tasks?.map((employee, index) => {
          console.log(employee)
      
        {/* const totalCompleted = employee.tasks.reduce((sum, task) => sum + task.completed, 0);
        const totalFailTask = employee.tasks.reduce((sum, task) => sum + task.failed, 0);
        const totalNewTask = employee.tasks.reduce((sum, task) => sum + task.newTask, 0); */}

        return (
          <div key={index} className="py-6 px-6 rounded-xl w-[45%] bg-blue-400">
            <h2 className="text-2xl font-semibold">{employee.
active
}</h2>
            <h3 className="text-xl font-medium">Active tasks</h3>
          </div>
        );
      })}
    </div>
  );
}

export default TaskNumber;
