import React, { createContext, useCallback, useContext, useState } from "react";
import DriverRequest from '../Components/DriverRequest';
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/routePath/retriveRoutePath");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return { data: [] }; // Return an empty array if an error occurs
  }
};

const allDriverRequestContext = createContext({ data: [], refetch: () => {} });

const AllDriverRequest = () => {
  const { data: initialData = [] } = useLoaderData() || {}; // Handle undefined data
  const [data, setData] = useState(initialData);

  const refetch = useCallback(async () => {
    try {
      const { data: refreshedData } = await customFetch.get("/routePath/retriveRoutePath");
      setData(refreshedData);
    } catch (error) {
      toast.error('Error refreshing data');
    }
  }, []);

  return (
    <allDriverRequestContext.Provider value={{ data, refetch }}>
      <div className="w-full h-screen overflow-x-auto">
        <DriverRequest />  {/* DriverRequest gets the same data */}
      </div>
    </allDriverRequestContext.Provider>
  );
};

export const useAllDriverRequest = () => useContext(allDriverRequestContext);

export default AllDriverRequest;
