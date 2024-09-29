import React from "react";
import { DriverHeader, DriverSidebar } from "../Components/index";
import { Outlet } from "react-router-dom";

export default function DriverDashboardLayout() {
  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden bg-neutral-100">
      <DriverSidebar />

      <div className="flex-1">
        <DriverHeader />
        <div className="p-4">{<Outlet />}</div>
      </div>
    </div>
  );
}
