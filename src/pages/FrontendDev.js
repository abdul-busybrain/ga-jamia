// src/pages/FrontendDev.jsx
import React from "react";

function FrontendDev() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Frontend Development Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your course cards here */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">React Fundamentals</h2>
          <p className="text-gray-600">
            Learn the basics of React development...
          </p>
        </div>
        {/* Add more course cards */}
      </div>
    </div>
  );
}

export default FrontendDev;
