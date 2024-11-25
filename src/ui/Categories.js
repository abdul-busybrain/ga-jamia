import React from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  // Custom style for active and non-active links
  const getLinkStyles = ({ isActive }) => {
    const baseStyles =
      "px-4 py-2 rounded-lg font-medium transition-colors duration-200 border-2 focus:ring-2 focus:ring-offset-2";

    return isActive
      ? `${baseStyles} bg-green-500 hover:bg-red-500 text-white border-transparent`
      : `${baseStyles} bg-transparent border-green-500 text-green-500 hover:border-red-500 hover:text-red-500`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <nav className="flex flex-wrap gap-4 justify-between">
        <NavLink to="/" className={getLinkStyles} end>
          All recommendations
        </NavLink>
        <NavLink to="/product-design" className={getLinkStyles}>
          Product Design
        </NavLink>
        <NavLink to="/frontend" className={getLinkStyles}>
          Frontend Development
        </NavLink>
        <NavLink to="/backend" className={getLinkStyles}>
          Backend Development
        </NavLink>
        <NavLink to="/mobile" className={getLinkStyles}>
          Mobile Development
        </NavLink>
        <NavLink to="/data-analytics" className={getLinkStyles}>
          Data Analytics
        </NavLink>
      </nav>
    </div>
  );
}

export default Categories;