import logo from "../assets/logo/ecoRecycle.svg";
import { DRIVER_DASHBOARD_SIDEBAR_UPPER_LINKS } from "../utils/DriverNavigation";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

const linkClasses =
  "flex item-center cursor-pointer gap-2 font-light px-3 py-3 hover:bg-neutral-500 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function DriverSidebar() {
  return (
    <div className="flex flex-col p-3 bg-neutral-300 w-60">
      <div className="flex items-center gap-2 px-1 py-3">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DRIVER_DASHBOARD_SIDEBAR_UPPER_LINKS.map((item) => (
          <DriverSidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

function DriverSidebarLink({ item }) {
  return (
    <Link to={item.path} className={classNames(linkClasses, "text-black")}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

DriverSidebarLink.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
