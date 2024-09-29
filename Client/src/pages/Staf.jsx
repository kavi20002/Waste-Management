import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Form, Link } from "react-router-dom";
import { IoBuild, IoTrashSharp } from "react-icons/io5";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { IoPersonAddSharp } from "react-icons/io5";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/employees");
    console.log(data);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to load employees");
    return { employee: [] };
  }
};

export default function Staf() {
  const { data } = useLoaderData(); // Load data using useLoaderData from React Router
  const [employees, setEmployees] = useState(data.employee || []);

  useEffect(() => {
    setEmployees(data.employee || []);
  }, [data]);

  return (
    <>
      <Link to={"../add-employee"}>
        <button className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 rounded shadow-md outline-none border-none select-none flex items-center">
          <IoPersonAddSharp className="mr-2" />
          Add Employee
        </button>
      </Link>
      <br />
      <div className="bg-white px-4 pb-4 rounded-sm border border-gray-200 w-full pt-3">
        <strong className="font-medium text-xl text-sky-600">
          All Employees
        </strong>
        <div className="mt-3">
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Email</th>
                <th>Name</th>
                <th>Join Date</th>
                <th>Street</th>
                <th>City</th>
                <th>Postal Code</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.EmployeeId}>
                  <td>{employee.EmployeeId}</td>
                  <td>{employee.Email}</td>
                  <td>{employee.Name}</td>
                  <td>
                    {new Date(employee.JoinDate).toLocaleDateString()}
                  </td>{" "}
                  {/* Format date */}
                  <td>{employee.Street}</td>
                  <td>{employee.City}</td>
                  <td>{employee.PostalCode}</td>
                  <td>{employee.Type}</td>
                  <td>
                    <div className="flex flex-row gap-1">
                      <Link to={`../edit-employee/${employee._id}`}>
                        <button className="bg-sky-500 text-white px-4 py-2 hover:bg-sky-600 rounded shadow-md outline-none border-none select-none">
                          <IoBuild />
                        </button>
                      </Link>
                      <Form
                        method="post"
                        action={`../delete-employee/${employee._id}`}
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
