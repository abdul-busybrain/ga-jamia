import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Learn on your schedule</h1>
        <p className="text-xl text-gray-600 mb-8">
          Study any topic, anytime. Explore thousands of courses for the lowest
          price ever!
        </p>
        <Link
          to="/courses"
          className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700"
        >
          Explore Courses
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            100,000+ online courses
          </h2>
          <p className="text-gray-600">Enjoy a variety of fresh topics</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Expert instruction</h2>
          <p className="text-gray-600">Find the right instructor for you</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Lifetime access</h2>
          <p className="text-gray-600">Learn on your schedule</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
