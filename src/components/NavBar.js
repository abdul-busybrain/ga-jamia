import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          Udemy Clone
        </Link>
        <div className="space-x-4">
          <Link to="/courses" className="text-gray-600 hover:text-purple-600">
            Courses
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-purple-600">
            Login
          </Link>
          <Link
            to="/free-trial"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Free Trial
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
