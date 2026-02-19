import React from "react";
import Header from "../UI/Header";
import TaskListNumber from "../UI/TaskListNumber";
import Tasklist from "../Tasklist/Tasklist";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header data={data}/>
      <TaskListNumber data={data} />
      <Tasklist data={data} />
    </div>
  );
};

export default EmployeeDashboard;
