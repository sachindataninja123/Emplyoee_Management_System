import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashoard from "./components/Dashboard/AdminDashoard";

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashoard />
    </div>
  );
};

export default App;
