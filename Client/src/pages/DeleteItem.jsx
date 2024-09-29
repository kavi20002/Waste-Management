import React from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`RItems/${params.id}`);
    toast.success("Item deleted successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }

  return redirect("/dashboard/all-items");
};

const DeleteItem = () => {
  return <div></div>;
};

export default DeleteItem;
