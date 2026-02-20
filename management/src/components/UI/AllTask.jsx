import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData , setUserData] = useContext(AuthContext);
  // console.log(authData.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded-md  ">
      <div className="bg-emerald-700 py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="w-1/5 font-semibold text-lg">Employee Name</h2>
        <h3 className="w-1/5 font-semibold text-lg">New Task</h3>
        <h5 className="w-1/5 font-semibold text-lg">Active Task</h5>
        <h5 className="w-1/5 font-semibold text-lg">Completed</h5>
        <h5 className="w-1/5 font-semibold text-lg">Failed</h5>
      </div>

      <div>
        {userData.map((elem ,idx) => {
          return (
            <div key={idx} className="border-emerald-400 border py-2 px-4 flex justify-between rounded mb-2">
              <h2 className="font-medium text-lg w-1/5">{elem.firstName}</h2>
              <h3 className="w-1/5 font-medium ">{elem.taskCounts.newTask}</h3>
              <h5 className="w-1/5 font-medium ">{elem.taskCounts.active}</h5>
              <h5 className="w-1/5 font-medium ">{elem.taskCounts.completed}</h5>
              <h5 className="w-1/5 font-medium ">{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
