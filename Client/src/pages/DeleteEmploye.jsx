import React from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { confirmModel } from "../Components";

export const action = async ({ params }) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if (!confirmDelete) {
    toast.info("Delete action canceled");
    return redirect("/AdminDashboard/staf");
  }
  try {
    await customFetch.delete(`employees/${params.id}`);
    toast.success("Employee deleted successfully");
    return redirect("/AdminDashboard/staf");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }

  return redirect("/AdminDashboard/staf");
};

function DeleteEmploye() {
  return <div></div>;
}

export default DeleteEmploye;
