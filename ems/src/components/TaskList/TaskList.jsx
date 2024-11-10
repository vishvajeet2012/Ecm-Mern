import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

function TaskList({ data }) {
  return (
    <>
      <div
        id="tasklist"
        className="p-10 gap-5 overflow-x-auto flex items-center justify-start flex-nowrap py-5 w-full mt-10 h-[50%] hide-scrollbar"
      >
        { 
          data.tasks.map((value) => (
            <div  className="flex  items-center gap-4">
              {value.active && <AcceptTask key={value.id} />}
              {value.newTask && <NewTask key={value.id} />}
              {value.completed && <CompleteTask  key={value.id}  />}
              {value.failed && <FailedTask  key={value.id} />}
            </div>
          ))
        }
      </div>
    </>
  );
}

export default TaskList;
