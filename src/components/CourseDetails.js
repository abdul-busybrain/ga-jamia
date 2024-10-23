import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  // Placeholder course data
  const course = {
    id,
    title: "React for Beginners",
    instructor: "John Doe",
    description: "Learn React from scratch and build modern web applications.",
    price: 19.99,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="bg-gray-200 h-64 mb-6 rounded"></div>
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-xl text-gray-600 mb-4">
          Instructor: {course.instructor}
        </p>
        <p className="text-gray-700 mb-6">{course.description}</p>
        <p className="text-2xl text-purple-600 font-bold mb-6">
          ${course.price}
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
