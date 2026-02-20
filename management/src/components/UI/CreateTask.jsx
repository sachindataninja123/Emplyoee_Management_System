import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const initialState = {
    taskTitle: "",
    assignto: "",
    category: "",
    description: "",
    date: "",
  };

  const [createTaskData, setCreateTaskData] = useState(initialState);

  const [newTask, setNewTask] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateTaskData({
      ...createTaskData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      ...createTaskData,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach((elem) => {
      if (createTaskData.assignto === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);

    // console.log(data);

    setCreateTaskData(initialState);
  };

  return (
    <div className="bg-[#1c1c1c] p-8 rounded-xl mt-6">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex items-start flex-wrap justify-between "
      >
        <div className="w-[45%]">
          <div className="w-full">
            <h3 className="text-lg mb-1 text-gray-300">Task Title</h3>
            <input
              className="border border-gray-400 w-full py-1.5 px-2 text-lg outline-none rounded-sm"
              type="text"
              name="taskTitle"
              value={createTaskData.taskTitle}
              placeholder="Task Title..."
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="text-lg mb-1 mt-2 text-gray-300">Date</h3>
            <input
              onChange={handleChange}
              name="date"
              value={createTaskData.date}
              className="border border-gray-400 w-full py-1.5 px-2  text-lg outline-none rounded-sm "
              type="date"
            />
          </div>
          <div>
            <h3 className="text-lg mb-1 mt-2 text-gray-300">Assign to :</h3>
            <input
              className="border border-gray-400 w-full py-1.5 px-2  text-lg outline-none rounded-sm "
              type="text"
              name="assignto"
              value={createTaskData.assignto}
              onChange={handleChange}
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-lg mb-1 mt-2 text-gray-300">Category</h3>
            <input
              className="border border-gray-400 w-full py-1.5 px-2  text-lg outline-none rounded-sm "
              type="text"
              name="category"
              value={createTaskData.category}
              onChange={handleChange}
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-[45%] flex flex-col items-start">
          <h3 className="text-xl mb-2 text-gray-300">Description</h3>
          <textarea
            className="w-full h-47 text-lg py-2 px-4 outline-none bg-transparent border border-gray-400"
            cols="30"
            rows="10"
            name="description"
            onChange={handleChange}
            value={createTaskData.description}
            placeholder="Drop Your Idea..."
          ></textarea>

          <button className="bg-emerald-500 py-2 hover:bg-emerald-600 text-lg rounded-md mt-4 font-semibold cursor-pointer active:scale-95 w-full transition-all">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
