import React from "react";
import { FormRow, RecycleItemContainer, SearchContainer } from "../Components";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/RItems");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const allRecycleItemsContext = createContext();

const AllItems = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <allRecycleItemsContext.Provider value={{ data }}>
      <SearchContainer />
      <RecycleItemContainer />
    </allRecycleItemsContext.Provider>
  );
};

export const useAllRecycleItems = () => useContext(allRecycleItemsContext);

export default AllItems;
