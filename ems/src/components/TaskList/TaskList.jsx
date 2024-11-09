import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

function TaskList({data}) {
  return (
    <>
      <div
        id="tasklist"
        className="p-10 gap-5 overflow-x-auto flex items-center justify-start flex-nowrap py-5 w-full mt-10 h-[50%] hide-scrollbar"
      >
     { 
          data.tasks.map((value,index)=>{
            if(value.active){
              return  <AcceptTask/>
    
            }
            if(value.newTask){
              return   <NewTask/>
      
            }
           
          })

     }

      
      </div>
    </>
  );
}

export default TaskList;
