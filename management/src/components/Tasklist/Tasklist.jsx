import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = () => {
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10 rounded-xl"
    >
     <AcceptTask />
     <NewTask />
     <CompleteTask/>
     <FailedTask/>
    </div>
  );
};

export default Tasklist;
