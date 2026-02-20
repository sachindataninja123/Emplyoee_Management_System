import React from "react";
import Header from "../UI/Header";
import TaskListNumber from "../UI/TaskListNumber";
import Tasklist from "../Tasklist/Tasklist";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <Tasklist data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
