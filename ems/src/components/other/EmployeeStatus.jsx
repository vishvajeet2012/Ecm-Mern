

import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function EmployeeStatus() {
  const data = useContext(AuthContext);
const employees = data?.user?.employees || [];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-5">Employee Status</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#1c1c1c] rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-gray-200">
              <th className="py-3 px-5 text-left">Name</th>
              <th className="py-3 px-5 text-left">Active Task</th>
              <th className="py-3 px-5 text-left">Completed Task</th>
              <th className="py-3 px-5 text-left">Failed Task</th>
              <th className="py-3 px-5 text-left">New Task</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => {
                const totalActive = employee.tasks.reduce((sum, task)=> sum + task.active,0)
              const totalComplted = employee.tasks.reduce((sum , task)=> sum + task.completed,0)
           const totalFailTask = employee.tasks.reduce((sum ,task) => sum + task.failed, 0)
        const totalNewTask  = employee.tasks.reduce((sum,task)=>sum + task.newTask,0)
             
              return (
                <tr
                  key={index}
                  className="border-b border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  <td className="py-3 font-bold px-5">{employee.name}</td>
                  <td className="py-3 px-5 text-blue-500 font-semibold">
              {totalActive}
                  </td>
                  <td className="py-3 px-5 text-green-400 font-semibold">
                 {totalComplted}
                  </td>
                  <td className="py-3 px-5 text-red-400 font-semibold">
                  {totalFailTask}
                  </td>
                  <td className="py-3 px-5 text-yellow-400 font-semibold">
                  {totalNewTask}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeStatus;
