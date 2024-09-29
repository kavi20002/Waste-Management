import React from "react";
import facebook from "../assets/Social-media-icons/icon-facebook.svg";
import instagram from "../assets/Social-media-icons/icon-instagram.svg";
import twitter from "../assets/Social-media-icons/icon-twitter.svg";
import pinteresr from "../assets/Social-media-icons/icon-pinterest.svg";
import logo from "../assets/logo/ecoRecycle.svg";

function Footer() {
  return (
    <footer className="bg-veryDarkViolet text-white text-center p-5">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-center">
        {/* logo */}
        <img src={logo} alt="" className="h-28 w-64 object-center ml-4" />
        {/* menu container */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* menu 1 */}

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="md-5 font-bold text-white capitalize mb-4">
              Features
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                Recycle
              </a>
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                Waste
              </a>
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                App
              </a>
            </div>
          </div>

          {/* menu 2 */}

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="md-5 font-bold text-white capitalize mb-4">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                Blog
              </a>
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                Developers
              </a>
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                Supports
              </a>
            </div>
          </div>

          {/* menu 3 */}

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="md-5 font-bold text-white capitalize mb-4">
              Company
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                About
              </a>
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                Our Team
              </a>
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                Careers
              </a>
              <a className="captitalize text-grayishViolet hover:text-cyan cursor-pointer">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL CONTAINER */}

        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-cyan">
            <img src={facebook} alt="" />
          </a>
          <a href="#" className="text-white hover:text-cyan">
            <img src={instagram} alt="" />
          </a>
          <a href="#" className="text-white hover:text-cyan">
            <img src={twitter} alt="" />
          </a>
          <a href="#" className="text-white hover:text-cyan">
            <img src={pinteresr} alt="" />
          </a>
        </div>
      </div>

      <div className="text-center text-grayishViolet mt-10">
        &copy; 2024 TURN Waste Into Money. All rights reserved.
        <br />
        made with ❤️ by ..
      </div>
    </footer>
  );
}

export default Footer;
