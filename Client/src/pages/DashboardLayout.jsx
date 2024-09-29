import React, { createContext, useContext, useState } from "react";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { BigSideBar, NavBar, SmallSideBar } from "../Components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import UserNavBar from "../Components/UserNavBar";
import Wrapper from "../assets/wrappers/DashboardFormPage";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");

    // Extract the role from the data
    const { user } = data;
    const { role } = user;
    console.log(role);

    // Check the user's role and redirect accordingly
    if (role === "admin") {
      return redirect("/AdminDashboard");
    }

    if (role === "Driver") {
      return redirect("/DriverDashboard");
    }
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

function DashboardLayout() {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  console.log(user);

  const [showSideBar, setshowSidebar] = useState(false);

  const toggleSideBar = () => {
    setshowSidebar(!showSideBar);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.post("/auth/logout");
    toast.success("Logged out successfully");
  };
  return (
    <DashboardContext.Provider
      value={{ user, showSideBar, toggleSideBar, logoutUser }}
    >
      {/* <div>
        <div className="block bg-slate-100">
          <div className="dashboard-page">
            <h1 className=" "> Dashboard</h1>
            <h2 style={{ color: "red", textAlign: "center" }}>
              Welcome {user?.name}
            </h2>

            <Outlet context={{ user }} />
            <BigSideBar />
          </div>
        </div>

      </div> */}

      <main className=" h-screen flex flex-col">
        <UserNavBar />

        <div className="flex flex-1">
          <BigSideBar />
          <div className="flex-1 p-6">
            <Outlet context={{ user }} />
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  );
}

export const useDashbordContext = () => useContext(DashboardContext);

export default DashboardLayout;
