import React from "react";
import { useDashbordContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLiks = () => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className={({ isActive }) =>
              `mt-5 text-2xl flex items-center p-2 mb-2 font-mono rounded-lg border transition-colors duration-200 ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-1000 hover:bg-gray-800 hover:text-white"
              }`
            }
            end
          >
            <span className="mr-4">{icon}</span>
            <h2 className="inline-block">{text}</h2>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLiks;
