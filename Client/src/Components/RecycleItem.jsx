import React, { useState } from "react";
import { useAllRecycleItems } from "../pages/AllItems";
import image from "../assets/Images/signup.svg";
import { Form, Link } from "react-router-dom";
import { useNavigation } from "react-router-dom";

function RecycleItem({
  _id,
  name,
  description,
  Location,
  category,
  status,
  itemPhoto,
}) {
  console.log(name);
  console.log(Location);
  const navigation = useNavigation();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleting(true);
  };

  return (
    <div className=" w-[47%] m-2 ">
      <div className="bg-gray-200 p-2 mx-6 rounded-2xl shadow-lg border-black">
        {/* <!--Flex container--> */}
        <div className="flex ">
          {/* <!--Image--> */}
          <img
            src={itemPhoto}
            alt="image"
            class="object-fill rounded-xl h-52 w-62  rounded-l-xl rounded-r-none
                        transform hover:scale-105 hover:rounded-xl duration-200"
          />

          <div className="flex flex-col p-4 ">
            <h2 className="text-2xl font-bold text-black font-mono">{name}</h2>

            <div>
              <p
                className={`text-lg text-white mt-2 border w-[85%]  text-center rounded-lg inline-block font-semibold ${
                  category === "plastic"
                    ? "bg-green-600"
                    : category === "metal"
                    ? "bg-gray-500"
                    : category === "paper"
                    ? "bg-yellow-600"
                    : category === "glass"
                    ? "bg-blue-600"
                    : category === "wood"
                    ? "bg-red-700"
                    : "bg-gray-600"
                }`}
              >
                {category}
              </p>
              <p className="text-sm text-white flex-1 inline-block bg-gray-500 p-2 mt-2 rounded-lg shadow-lg ">
                {status}
              </p>
            </div>
            <p className="text-sm text-gray-600 text-pretty text-left mt-2  ">
              {description}
            </p>
            <div className=" flex justify-between border ">
              <p className=" text-black ml-5 text-lg">{Location}</p>
            </div>
            <div className="border-black  flex ">
              <Link to={`../edit-items/${_id}`}>
                <button className="bg-red-600 text-white bg-green-500 p-2 rounded-lg mt-2 ml-2 shadow-lg hover:opacity-80 transition hover:translate-y-0.5 duration-150   ">
                  Edit items
                </button>
              </Link>
              <Form
                method="post"
                action={`../delete-item/${_id}`}
                onSubmit={handleDeleteClick}
              >
                <button
                  disabled={isDeleting}
                  className="bg-red-600 text-white bg-red p-2 rounded-lg mt-2 ml-2 shadow-lg hover:opacity-80 transition hover:translate-y-0.5 duration-150 "
                >
                  <span className="text-black">
                    {isDeleting ? "Deleting.." : "Delete"}
                  </span>
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecycleItem;
