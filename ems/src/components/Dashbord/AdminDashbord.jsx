import AdminHeader from "../other/AdminHeader";
import TaskFrom from "../other/TaskFrom"

function AdminDashbord(props) {
  console.log("this" + props.changeUser);
  return (
    <>
      <div className="h-screen w-full p-10 ">
      
        <AdminHeader changeUser={props.changeUser} />
     <TaskFrom/>
            </div>
    </>
  );
}

export default AdminDashbord;
