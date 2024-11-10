import AdminHeader from "../other/AdminHeader";
import TaskFrom from "../other/TaskFrom";

function AdminDashbord() {
  return (
    <>
      <div className="h-screen w-full p-10 ">
        <AdminHeader/>
<TaskFrom></TaskFrom>
     
      </div>
    </>
  );
}

export default AdminDashbord;
