import React from "react";

const CreateTask = () => {
  return (
    <div className="bg-[#1c1c1c] p-8 rounded-xl mt-6">
      <form className="flex items-start flex-wrap justify-between ">
        <div className="w-[45%]">
          <div className="w-full">
            <h3 className="text-lg mb-1 text-gray-300">Task Title</h3>
            <input
              className="border border-gray-400 w-full py-1.5 px-2 text-lg outline-none rounded-sm "
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-lg mb-1 mt-2 text-gray-300">Date</h3>
            <input
              className="border border-gray-400 w-full py-1.5 px-2  text-lg outline-none rounded-sm "
              type="date"
            />
          </div>
          <div>
            <h3 className="text-lg mb-1 mt-2 text-gray-300">Assign to :</h3>
            <input
              className="border border-gray-400 w-full py-1.5 px-2  text-lg outline-none rounded-sm "
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-lg mb-1 mt-2 text-gray-300">Category</h3>
            <input
              className="border border-gray-400 w-full py-1.5 px-2  text-lg outline-none rounded-sm "
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-[45%] flex flex-col items-start">
          <h3 className="text-xl mb-2 text-gray-300">Description</h3>
          <textarea
            className="w-full h-47 text-lg py-2 px-4 outline-none bg-transparent border border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
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
