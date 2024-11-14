function AdminHeader(props) {
    function logoutadmin(){
      localStorage.setItem('loggedInUser' ,"")
      props.changeUser('')
    }

    return (
      <>
        <div className="flex  items-end justify-between">
          <h1 className="text-2xl font-medium">Hello<br/><span className="text-3xl font-semibold"> Vishu👋</span> </h1>
          <button onClick={logoutadmin} className="bg-red-600 text-lg font-medium px-2 rounded-md" >Logout</button>
        </div>
      </>
    );
  }
  
  export default AdminHeader;
  