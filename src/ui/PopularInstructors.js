import { LinkedinIcon, TwitterIcon, InstagramIcon } from "lucide-react";

import instructor1 from "../img/instructor1.png";
import instructor2 from "../img/instructor2.png";
import instructor3 from "../img/instructor3.png";
import instructor4 from "../img/instructor4.png";

const instructors = [
  {
    name: "John Smith",
    image: instructor1,
    expertise: "Web Development",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    image: instructor2,
    expertise: "UI/UX Design",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Michael Chen",
    image: instructor3,
    expertise: "Data Science",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Sarah Johnson",
    image: instructor4,
    expertise: "Digital Marketing",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const InstructorCard = ({ instructor }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
          <h3 className="text-xl font-bold">{instructor.name}</h3>
          <p className="text-sm">{instructor.expertise}</p>
        </div>
      </div>

      <div className="p-4 flex justify-center space-x-4">
        <a
          href={instructor.socials.linkedin}
          className="text-blue-600 hover:text-blue-800"
        >
          <LinkedinIcon />
        </a>
        <a
          href={instructor.socials.twitter}
          className="text-blue-400 hover:text-blue-600"
        >
          <TwitterIcon />
        </a>
        <a
          href={instructor.socials.instagram}
          className="text-pink-600 hover:text-pink-800"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

const PopularInstructors = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Popular Instructors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our expert instructors who bring real-world experience and
            passion to their teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
