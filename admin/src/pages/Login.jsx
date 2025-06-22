import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { api, setIsAuthorized, navigate } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("api/token/", { email, password });
      if (response.status === 200) {
        localStorage.setItem("ACCESS_TOKEN", response.data.access);
        localStorage.setItem("REFRESH_TOKEN", response.data.refresh);
        setIsAuthorized(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  return (
    <div className="p-2">
      <div className="">
        <h1 className="text-3xl text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username or Email"
            className="border border-gray-600  rounded py-2 pl-2 "
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-600  rounded py-2 pl-2 "
          />
          <button
            className="bg-blue-600 text-white w-full  rounded py-2  "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
