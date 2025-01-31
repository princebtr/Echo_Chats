import React, { useEffect, useState, useRef } from "react";
import Logo from "../assets/logoecho.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null); // Ref for the profile dropdown

  useEffect(() => {
    const storedUser = localStorage.getItem("chat-app-user");
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = (e) => {
    if (isLoggedIn) {
      e.preventDefault();
      localStorage.removeItem("chat-app-user");
      setIsLoggedIn(false);
      setUser(null);
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {" "}
          {/* Reduced height to h-16 */}
          {/* Left Section: Hamburger and Logo */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button (Left Most) */}
            <div className="md:hidden order-first">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-600 focus:outline-none hover:text-red-500 transition-colors duration-200"
              >
                {menuOpen ? (
                  <span className="text-3xl">🅇</span> // Close icon (X)
                ) : (
                  <span className="text-3xl">☰</span> // Hamburger icon
                )}
              </button>
            </div>

            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="w-10 h-10" />{" "}
              {/* Reduced logo size */}
              <span className="text-xl font-bold text-gray-800 hover:text-red-500 transition-colors duration-200">
                echo
              </span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              Home
            </a>
            {isLoggedIn && (
              <a
                href="/chat"
                className="text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                Chat
              </a>
            )}

            <a
              href="/about"
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              About
            </a>
          </div>
          {/* Login/Logout or User Profile */}
          <div className="md:mr-0 sm:mr-0 relative" ref={profileRef}>
            {isLoggedIn ? (
              <div
                className="flex items-center cursor-pointer space-x-2 p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              >
                {/* Avatar */}
                <img
                  src={`data:image/svg+xml;base64,${user?.avatarImage}`}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-red-500 hover:border-red-600 transition-colors duration-200"
                />
                {/* Username and Email */}
                <div className="text-gray-800">
                  <span className="text-sm font-semibold hover:text-red-500 transition-colors duration-200">
                    {user?.username}
                  </span>
                  <br />
                  <span className="text-xs text-gray-600 hover:text-red-500 transition-colors duration-200">
                    {user?.email}
                  </span>
                </div>
              </div>
            ) : (
              <a
                href="/login"
                className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-gray-500 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Login
              </a>
            )}
            {/* Profile Dropdown */}
            {profileMenuOpen && isLoggedIn && (
              <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-md w-48 overflow-hidden">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 py-3">
          {" "}
          {/* Adjusted top position */}
          <div className="flex flex-col space-y-3 px-6">
            <a
              href="/"
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/chat"
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Chat
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
