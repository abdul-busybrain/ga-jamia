import React from "react";
import { Link } from "react-router-dom";

const CourseListing = () => {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      price: 19.99,
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      price: 24.99,
    },
    {
      id: 3,
      title: "Python Masterclass",
      instructor: "Bob Johnson",
      price: 29.99,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-gray-200 h-40 mb-4 rounded"></div>
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-2">{course.instructor}</p>
            <p className="text-purple-600 font-bold mb-4">${course.price}</p>
            <Link
              to={`/course/${course.id}`}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
