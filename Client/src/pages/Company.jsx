import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Form, Link } from "react-router-dom";
import { IoBuild, IoTrashSharp } from "react-icons/io5";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { IoBusinessSharp } from "react-icons/io5";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/Company");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to load Companies");
    return { data: { company: [] } };
  }
};

export default function Company() {
  const { data } = useLoaderData();
  const [companys, setCompanys] = useState(data.company || []);

  useEffect(() => {
    setCompanys(data.company || []);
  }, [data]);

  return (
    <>
      <Link to={"../add-company"}>
        <button className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 rounded shadow-md outline-none border-none select-none flex items-center">
          <IoBusinessSharp className="mr-2" />
          Add Company
        </button>
      </Link>
      <br />
      <div className="bg-white px-4 pb-4 rounded-sm border border-gray-200 w-full pt-3">
        <strong className="font-medium text-xl text-sky-600">
          All Companies
        </strong>
        <div className="mt-3">
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Company Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Company Type</th>
                <th>Stock Limit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {companys.map((company) => (
                <tr key={company._id}>
                  <td>{company.name}</td>
                  <td>{company.email}</td>
                  <td>{company.phone}</td>
                  <td>{company.address}</td>
                  <td>{company.companytype}</td> <td>{company.stocklimit}</td>{" "}
                  <td>
                    <div className="flex flex-row gap-1">
                      <Link to={`../edit-company/${company._id}`}>
                        <button className="bg-sky-500 text-white px-4 py-2 hover:bg-sky-600 rounded shadow-md outline-none border-none select-none">
                          <IoBuild />
                        </button>
                      </Link>

                      <Form
                        method="post"
                        action={`../delete-company/${company._id}`}
                      >
                        <button className="bg-red text-white px-4 py-2 hover:bg-red-600 rounded shadow-md outline-none border-none select-none">
                          <IoTrashSharp />
                        </button>
                      </Form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
