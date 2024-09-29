import React from "react";
import { useLoaderData } from "react-router-dom";

import Wrapper from "../assets/wrappers/Navbar";
import LogoutContainer from "./LogoutContainer";
import logo from "../assets/logo/ecoRecycle.svg";

function UserNavBar() {
  return (
    <div className="shadow-2xl border-black flex-none  bg-sidebar">
      <div className="flex justify-around">
        <div className="flex justify-center items-center  ">
          <img src={logo} alt="logo" className="h-28 w-64" />
        </div>
        <div className="flex justify-center items-center mx-80 ">
          <h2 className="font-mono text-4xl capitalize">Dashboard</h2>
        </div>
        <div className="flex justify-end items-center ml-4 ">
          <LogoutContainer />
        </div>
      </div>
    </div>
  );
}

export default UserNavBar;
