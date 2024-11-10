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
          data.tasks.map((value,index) => (
 
            <div  className="flex  items-center gap-4">
              {value.active && <AcceptTask key={value.index} data={value} />}
              {value.newTask && <NewTask key={value.index}  data={value}/>}
              {value.completed && <CompleteTask  key={value.index} data={value}  />}
              {value.failed && <FailedTask  key={value.index} data={value} />}
            </div>
                    
       
          ))
        }
      </div>
    </>
  );
}

export default TaskList;
