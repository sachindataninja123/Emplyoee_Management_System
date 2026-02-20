import React from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload()
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-3xl font-medium">
        Hello <br />
        <span className="text-4xl font-semibold">firstName👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white px-5 py-2 font-medium text-lg rounded-sm  active:scale-95 cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
