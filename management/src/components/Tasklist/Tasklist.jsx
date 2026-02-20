import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ data }) => {
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10 rounded-xl"
    >
      {data.tasks.map((item, idx) => {
        if (item.active) {
          return <AcceptTask key={idx} data={item} />;
        }
        if (item.newTask) {
          return <NewTask key={idx} data={item} />;
        }
        if (item.completed) {
          return <CompleteTask key={idx} data={item} />;
        }
        if (item.failed) {
          return <FailedTask key={idx} data={item} />;
        }
      })}
    </div>
  );
};

export default Tasklist;
