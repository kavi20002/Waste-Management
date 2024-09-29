import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../Components";
import hero from "../assets/Images/recycleBin2.svg";
import Footer from "../Components/Footer";
import banner from "../assets/Images/banner-bg-remove.svg";

const Landing = () => {
  return (
    <>
      <NavBar />
      <div className="bg-background">
        <div className="container flex  flex-col-reverse mx-auto p-1 lg:flex-row px-40 bg-background">
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-6xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              TURN Waste Into Money..
            </h1>
            <p className="text-xl text-center text-gray-400 lg:max-w-md lg:text-left">
              "TURN Waste Into Money" is a dynamic platform that helps you
              transform waste into profit. We provide innovative solutions and
              resources to manage, recycle, and monetize your waste efficiently.
              Join us to make waste work for you and contribute to a sustainable
              future.
            </p>
            <div className="mx-auto lg:mx-0">
              <a className="py-5 px-10 text-2xl font-bold text-white bg-green-500 rounded-full cursor-pointer lg:py-4 hover:bg-green-700 shadow-lg ">
                <Link to="/register"> Get Started </Link>
              </a>
            </div>
          </div>
          <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-3/4 ">
            <img src={hero} alt="recyle-image" />
          </div>
        </div>
      </div>

      <div className="bg-background">
        <img src={banner} alt="" className="w-screen h-auto" />
      </div>

      <Footer />

      {/* <Link to="/register">Register</Link>
      <Link to="/login"> Login / Demo User </Link> */}
    </>
  );
};

export default Landing;
