import React from "react";
import Header from "../UI/Header";
import TaskListNumber from "../UI/TaskListNumber";
import Tasklist from "../Tasklist/Tasklist";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskListNumber />
      <Tasklist />
    </div>
  );
};

export default EmployeeDashboard;
