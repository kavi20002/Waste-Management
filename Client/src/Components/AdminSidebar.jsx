import React from "react";
import classNames from "classnames";
import logo from "../assets/logo/ecoRecycle.svg";
import {
  ADMIN_DASHBOARD_SIDEBAR_UPPER_LINKS,
  ADMIN_DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../utils/AdminNavigation";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const linkClasses =
  "flex item-center cursor-pointer gap-2 font-light px-3 py-3 hover:bg-neutral-500 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate("/");
    await customFetch.post("/auth/logout");
    toast.success("Logged out successfully");
  };

  return (
    <div className="flex flex-col bg-neutral-300 w-60 p-3">
      <div className="flex items-center gap-2 px-1 py-3">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {ADMIN_DASHBOARD_SIDEBAR_UPPER_LINKS.map((item) => (
          <AdminSidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {ADMIN_DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <AdminSidebarLink key={item.key} item={item} />
        ))}
        <div className={classNames("text-red-600", linkClasses)}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          <button onClick={logoutUser}>logout</button>
        </div>
      </div>
    </div>
  );
}

function AdminSidebarLink({ item }) {
  return (
    <Link to={item.path} className={classNames(linkClasses, "text-black")}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
