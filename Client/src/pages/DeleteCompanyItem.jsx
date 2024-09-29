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
    return redirect("/AdminDashboard/item");
  }
  try {
    await customFetch.delete(`CItems/${params.id}`);
    toast.success("Item deleted successfully");
    return redirect("/AdminDashboard/item");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }

  return redirect("/AdminDashboard/item");
};

function DeleteCompanyItem() {
  return <div></div>;
}

export default DeleteCompanyItem;
