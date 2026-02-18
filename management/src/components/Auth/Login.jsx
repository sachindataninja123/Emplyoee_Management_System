import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="border-2 border-emerald-400 w-[35%] rounded-xl p-10">
        <h1 className="text-3xl font-semibold mb-10">Log In</h1>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            required
            type="email"
            placeholder="Enter Email"
            className="border-2 p-3  outline-none  text-xl rounded-4xl border-emerald-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Enter Password"
            className="border-2 p-3  text-xl rounded-4xl border-emerald-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="px-5 py-2 cursor-pointer text-lg bg-emerald-400 rounded-4xl active:scale-95">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
