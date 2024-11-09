const employeeData = {
  "employees": [
    {
      "id": 1,
      "name": "Rajesh Kumar",
      "email": "employee1@example.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "completed": 1,
        "failed": 0
      },
      "totalTasks": 3,
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Update inventory list",
          "description": "Review and update the current inventory list to include new items.",
          "date": "2024-11-07",
          "category": "Inventory"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Complete sales report",
          "description": "Finalize and submit the sales report for the month.",
          "date": "2024-10-31",
          "category": "Reports"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Client follow-up",
          "description": "Reach out to clients regarding feedback on recent orders.",
          "date": "2024-11-05",
          "category": "Customer Service"
        }
      ]
    },
    {
      "id": 2,
      "name": "Anita Sharma",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "completed": 1,
        "failed": 0
      },
      "totalTasks": 2,
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Prepare presentation",
          "description": "Prepare slides for the upcoming project presentation.",
          "date": "2024-11-10",
          "category": "Meetings"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Onboard new employee",
          "description": "Complete the onboarding process for the new team member.",
          "date": "2024-11-01",
          "category": "HR"
        }
      ]
    },
    {
      "id": 3,
      "name": "Vikram Patel",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "completed": 1,
        "failed": 1
      },
      "totalTasks": 2,
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Update website content",
          "description": "Revise outdated information on the company's website.",
          "date": "2024-11-07",
          "category": "Web Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Research competitor analysis",
          "description": "Compile data on competitors' market positioning.",
          "date": "2024-10-28",
          "category": "Research"
        }
      ]
    },
    {
      "id": 4,
      "name": "Suresh Gupta",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "completed": 1,
        "failed": 0
      },
      "totalTasks": 2,
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Conduct customer survey",
          "description": "Gather feedback from customers on recent services.",
          "date": "2024-11-09",
          "category": "Customer Service"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Review financial report",
          "description": "Examine the quarterly financial performance report.",
          "date": "2024-10-29",
          "category": "Finance"
        }
      ]
    },
    {
      "id": 5,
      "name": "Pooja Reddy",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "completed": 1,
        "failed": 0
      },
      "totalTasks": 3,
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Develop social media strategy",
          "description": "Create a strategy for increasing social media engagement.",
          "date": "2024-11-11",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update project documentation",
          "description": "Ensure all project documents are current and accessible.",
          "date": "2024-11-01",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Assist in recruitment",
          "description": "Help interview and screen candidates for open positions.",
          "date": "2024-11-07",
          "category": "HR"
        }
      ]
    }
  ]
};


  const adminData = {
    "admin": {
      "id": 1,
      "email": "vishu@admin.com",
      "password": "123",
   
    }
  };


  export const setLocalStorage = ()=>{
    localStorage.setItem('employees' ,JSON.stringify(employeeData))
    localStorage.setItem('admin' , JSON.stringify(adminData))
  }

  export const getLocalStorageData =()=>{
         const employee =  JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
          return{employee,admin}
  } 