import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashoard from "./components/Dashboard/AdminDashoard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
  }, [authData]);

  function handleLogin(email, password) {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employees.find(
        (e) => email === e.email && e.password === password,
      )
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" }),
      );
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashoard />}
      {user === "employee" && <EmployeeDashboard />}
    </div>
  );
};

export default App;
