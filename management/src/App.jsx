import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <EmployeeDashboard />
    </div>
  );
};

export default App;
