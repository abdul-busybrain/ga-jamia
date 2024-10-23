import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ga JAMI'A </h3>
            <p className="text-sm">
              Learn on your schedule, anywhere, anytime.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-purple-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/free-trial"
                  className="text-sm hover:text-purple-400"
                >
                  Free Trial
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm hover:text-purple-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-purple-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-purple-400">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-purple-400">
                Facebook
              </a>
              <a href="#" className="text-sm hover:text-purple-400">
                Twitter
              </a>
              <a href="#" className="text-sm hover:text-purple-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 Ga JAMI'A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
