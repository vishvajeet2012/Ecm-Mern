import Header from "../other/Header"
import TaskNumber from "../other/TaskNumber"
import TaskList from "../TaskList/TaskList"

function EmpoyeeDashboard({data}){
    console.log({data})
    return (

        <>

    
        <div className="p-10 bg-[#1c1c1c] h-screen">
       
        <Header  data={data}/>
            <TaskNumber data={data}/>

            <TaskList data={data}/>
                    </div>
        

        </>
    )
}

export default EmpoyeeDashboard