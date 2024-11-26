import { HiClock, HiStar, HiUsers } from "react-icons/hi";

import rate1 from "../img/rate1.png";
import rate2 from "../img/rate2.png";
import rate3 from "../img/rate3.png";
import rate4 from "../img/rate4.png";
import trend1 from "../img/trend1.png";
import trend2 from "../img/trend2.png";
import trend3 from "../img/trend3.png";
import trend4 from "../img/trend4.png";
import trend5 from "../img/trend5.png";
import trend6 from "../img/trend6.png";
import trend7 from "../img/trend7.png";
import trend8 from "../img/trend8.png";

function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${course.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold">{course.title}</h3>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-yellow-500">
            <HiStar className="w-4 h-4 mr-1" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <HiUsers className="w-4 h-4 mr-1" />
            <span>{course.students} Students</span>
          </div>
        </div>

        <p className="text-gray-700 mb-2">{course.description}</p>

        <div className="flex items-center text-gray-500">
          <HiClock className="w-4 h-4 mr-2" />
          <span>{course.duration}</span>
        </div>

        <div className="mt-4 flex items-center">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="text-gray-800 font-semibold">
            {course.instructor.name}
          </span>
        </div>
      </div>
    </div>
  );
}

function AllCourses() {
  const courses = {
    rate: [
      {
        title: "Mobile Development Masterclass",
        bannerImage: rate1,
        rating: 4.7,
        students: 25000,
        description:
          "Complete guide to modern web development with React Native",
        duration: "36 hours",
        instructor: {
          name: "John Doe",
          avatar: rate1,
        },
      },
      {
        title: "UI / UX Design Fundamentals",
        bannerImage: rate2,
        rating: 4.6,
        students: 15000,
        description:
          "Learn modern design principles and create stunning user interfaces",
        duration: "24 hours",
        instructor: {
          name: "Alex Johnson",
          avatar: rate2,
        },
      },
      {
        title: "Web Development Zero to Hero",
        bannerImage: rate3,
        rating: 4.9,
        students: 18000,
        description:
          "Advanced data science techniques using Python and machine learning",
        duration: "42 hours",
        instructor: {
          name: "Jane Smith",
          avatar: rate3,
        },
      },
      {
        title: "Digital Marketing Strategies",
        bannerImage: rate4,
        rating: 4.8,
        students: 20000,
        description: "Web Development Bootcamp",
        duration: "30 hours",
        instructor: {
          name: "Emily Brown",
          avatar: rate4,
        },
      },
    ],

    trending: [
      {
        title: "Advanced Python Programming",
        bannerImage: trend1,
        rating: 4.5,
        students: 12000,
        description:
          "Deep dive into advanced Python concepts and best practices",
        duration: "40 hours",
        instructor: {
          name: "Michael Chen",
          avatar: trend1,
        },
      },
      {
        title: "Cloud Computing Essentials",
        bannerImage: trend2,
        rating: 4.6,
        students: 9500,
        description: "Comprehensive guide to AWS, Azure, and Google Cloud",
        duration: "32 hours",
        instructor: {
          name: "Sarah Williams",
          avatar: trend2,
        },
      },
      {
        title: "Blockchain and Cryptocurrency",
        bannerImage: trend3,
        rating: 4.7,
        students: 8000,
        description:
          "Understanding blockchain technology and cryptocurrency markets",
        duration: "28 hours",
        instructor: {
          name: "David Rodriguez",
          avatar: trend3,
        },
      },
      {
        title: "Machine Learning Fundamentals",
        bannerImage: trend4,
        rating: 4.8,
        students: 11000,
        description:
          "Introduction to machine learning algorithms and techniques",
        duration: "45 hours",
        instructor: {
          name: "Emma Thompson",
          avatar: trend4,
        },
      },
      {
        title: "Cybersecurity Masterclass",
        bannerImage: trend5,
        rating: 4.6,
        students: 7500,
        description: "Comprehensive cybersecurity training for professionals",
        duration: "38 hours",
        instructor: {
          name: "Robert Kim",
          avatar: trend5,
        },
      },
      {
        title: "Data Visualization with D3.js",
        bannerImage: trend6,
        rating: 4.5,
        students: 6000,
        description: "Create interactive and compelling data visualizations",
        duration: "26 hours",
        instructor: {
          name: "Laura Garcia",
          avatar: trend6,
        },
      },
      {
        title: "Product Management Essentials",
        bannerImage: trend7,
        rating: 4.7,
        students: 9000,
        description: "Learn key skills for successful product management",
        duration: "33 hours",
        instructor: {
          name: "Mark Stevens",
          avatar: trend7,
        },
      },
      {
        title: "Advanced JavaScript Techniques",
        bannerImage: trend8,
        rating: 4.9,
        students: 14000,
        description: "Master advanced JavaScript programming concepts",
        duration: "50 hours",
        instructor: {
          name: "Alex Martinez",
          avatar: trend8,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Highest Rated Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our top-rated courses designed to help you grow your
              skills and achieve your professional goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.rate.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Trending Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our top-rated courses designed to help you grow your
              skills and achieve your professional goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.trending.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllCourses;
