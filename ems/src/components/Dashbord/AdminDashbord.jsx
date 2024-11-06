import Header from "../other/Header";

function AdminDashbord() {
  return (
    <>
      <div className="h-screen w-full p-10 ">
        <Header />

        <div>
          <from className="flex items-start justify-between " >
            <div>
              <h3>Task Title</h3>
              <input type="text" placeholder="Make aUi " />{" "}
            </div>
            <div>
              <h3>Description</h3>

              <textarea name="" id="" rows=""></textarea>
            </div>
<div>
            <h3>Date</h3>
            <input type="date" />
            </div>
            <div>
            <h3>Assign to</h3>
            <input type="text" placeholder="employe" />
            <h3>Category</h3> </div>
            <div>
            <input type="text" placeholder="desgin, dev etc" />
            <button>Create Task</button> </div>
          </from>
        </div>
      </div>
    </>
  );
}

export default AdminDashbord;
