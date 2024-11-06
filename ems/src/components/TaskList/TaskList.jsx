function TaskList() {
  return (
    <>
      <div
        id="tasklist"
        className="p-10 gap-5 overflow-x-auto flex items-center justify-start flex-nowrap py-5 w-full mt-10 h-[50%] hide-scrollbar"
      >
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-2 rounded">High</h3>
          <h4 className=" text-sm">11/6/2024</h4>
          </div>
          <h2 className="mt-5 text-xl font-semibold  ">Make Youtube video</h2>
          <p className="text-sm mt-2 ">this is vishu iam from indian iam 100 year old</p>

        </div>
      </div>
    </>
  );
}

export default TaskList;
