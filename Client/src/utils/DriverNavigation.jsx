import { FaChartBar, FaPortrait, FaTable, FaViadeo } from "react-icons/fa";

export const DRIVER_DASHBOARD_SIDEBAR_UPPER_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: ".",
    icon: <FaTable />,
  },
  {
    key: "driver-profile",
    label: "Profile",
    path: "driver-profile",
    icon: <FaPortrait />,
  },
  {
    key: "daily-waste",
    label: "Approved Request",
    path: "daily-waste",
    icon: <FaChartBar />,
  },
  {
    key: "collected-waste",
    label: "Collected Waste",
    path: "collected-waste",
    icon:<FaViadeo />,
  },
];
