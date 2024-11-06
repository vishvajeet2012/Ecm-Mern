import Header from "../other/Header"
import TaskNumber from "../other/TaskNumber"
import TaskList from "../TaskList/TaskList"

function EmpoyeeDashboard(){
    return (
        <>
        <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header/>
            <TaskNumber/>

            <TaskList/>
                    </div>
        

        </>
    )
}

export default EmpoyeeDashboard