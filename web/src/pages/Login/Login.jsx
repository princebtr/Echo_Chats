import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logoecho.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../../utils/APIRoutes";

function Login() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    // theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, username } = values;

    if (password === "") {
      toast.error("Username and Password is required", toastOptions);
      return false;
    }
    if (username.length === "") {
      toast.error("Username and Password is required", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      toast.success("Form submitted successfully!");
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/chat");
      }
    }
  };

  return (
    <div className="overflow-y-hidden flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-green-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <img
              src={Logo}
              alt="Logo"
              className="mx-auto h-20 w-20 mb-4 transform hover:scale-110 transition-transform duration-300"
            />
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
            <p className="text-sm text-gray-500 mt-2">
              Log in to access your account
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              min="3"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-gray-500 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-red-500 hover:text-red-600 font-semibold hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
