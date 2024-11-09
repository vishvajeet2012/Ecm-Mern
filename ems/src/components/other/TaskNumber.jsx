function TaskNumber({data}) {
  console.error(data.tasks.
    newTask)
  return (
    <>
      <div className="flex mt-10 justify-between gap-5">
        <div className="py-6 px-6 rounded-xl w-[45%]  bg-blue-400">
          <h2 className="text-2xl font-semibold">{data.tasks.newTask}</h2>
          <h3 className="text-xl font-medium">New task</h3>
        </div>
        <div className="py-6 px-6 rounded-xl w-[45%]  bg-red-400">
          <h2 className="text-2xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">New task</h3>
        </div>
        <div className="py-6 px-6 rounded-xl w-[45%] bg-green-400 ">
          <h2 className="text-2xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">New task</h3>
        </div>
        <div className="py-6 px-6 rounded-xl w-[45%]  bg-yellow-400">
          <h2 className="text-2xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">New task</h3>
        </div>


      

      </div>
    </>
  );
}

export default TaskNumber;
