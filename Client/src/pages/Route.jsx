import React, { createContext, useContext, useState, useCallback } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import RouteTable from '../Components/RouteTable';


export const loader = async () => {
  try {
    const { data } = await customFetch.get("/routePath/retriveRoutePath");
    console.log('Data fetched:', data);
    return { data };
  } catch (error) {
    console.error('Error fetching route data:', error); 
    toast.error(error?.response?.data?.msg);
    return { data: [] };
  }
};

const allRouteDetailsContext = createContext({ data: [], refetch: () => {} });

//kavidu
const AllRoutes = () => {
  const { data: initialData } = useLoaderData();
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
    <allRouteDetailsContext.Provider value={{ data, refetch }}>
      <div className="w-full h-screen overflow-x-auto">
        <RouteTable /> {/* RouteTable now has access to refetch */}
        
      </div>
    </allRouteDetailsContext.Provider>
  );
};

export const useAllRoutes = () => useContext(allRouteDetailsContext);

export default AllRoutes;
