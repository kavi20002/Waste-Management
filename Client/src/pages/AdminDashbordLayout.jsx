import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../Components/AdminSidebar";
import AdminHeader from "../Components/AdminHeader";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");

    return data;
  } catch (error) {
    return redirect("/");
  }
};

export default function AdminDashbordLayout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />
        <div className="p-4">{<Outlet />}</div>
      </div>
    </div>
  );
}
