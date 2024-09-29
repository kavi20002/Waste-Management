import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "MY DASHBOARD",
    path: ".",
    icon: <FaWpforms />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    text: "Add Items",
    path: "Add-Items",
    icon: <IoBarChartSharp />,
  },
  {
    text: "all Items",
    path: "all-Items",
    icon: <MdQueryStats />,
  },
  {
    text: "Payment Info",
    path: "payment-info",
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
