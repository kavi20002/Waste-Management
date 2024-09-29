import React from "react";
import { useState } from "react";
import { useDashbordContext } from "../pages/DashboardLayout";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogoutContainer = () => {
  const [showLogout, setshowLogout] = useState(false);

  const { user, logoutUser } = useDashbordContext();
  console.log(user);

  return (
    <>
      <div className="relative text-left flex mx-4">
        <Link to="/dashboard/profile">
          <button className="flex mr-4 items-center p-2 border-gray-600 text-lg space-x-4 font-mono font-bold text-black rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover mr-6 border-black shadow-lg"
              />
            ) : (
              <FaUserCircle className="text-lg mr-2" />
            )}
            {user?.name}
          </button>
        </Link>

        <button
          onClick={() => setshowLogout(!showLogout)}
          className="flex items-center p-2w-full md:w-auto bg-green-500  justify-center  p-2 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
        >
          Log Out
        </button>

        {showLogout && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                Are you sure you want to logout?
              </p>
              <div className="flex justify-between">
                <button
                  onClick={logoutUser}
                  className="px-4 py-2 bg-red text-white rounded hover:bg-red-600 transition-colors duration-200"
                >
                  Yes
                </button>
                <button
                  onClick={() => setshowLogout(!showLogout)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LogoutContainer;
