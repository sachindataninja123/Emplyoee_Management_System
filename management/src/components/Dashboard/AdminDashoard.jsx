import React from "react";
import Header from "../UI/Header";
import CreateTask from "../UI/CreateTask";
import AllTask from "../UI/AllTask";

const AdminDashoard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashoard;
