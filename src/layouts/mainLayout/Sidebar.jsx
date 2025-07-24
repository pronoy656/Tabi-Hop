import { Link, useLocation } from "react-router-dom";

import OverviewSVG from "../../../public/ruhulo-images/overviewSVG";
import WorkplaceSVG from "../../../public/ruhulo-images/WorkplaceSVG";


const menuItems = [
  {
    label: "Overview",
    path: "/",
    renderIcon: (isActive) => (
      <OverviewSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "My Workplace",
    path: "/my-workplace",
    renderIcon: (isActive) => (
      <WorkplaceSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
];


const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="h-full px-3 pt-10 border-r border-r-[#ACE0E5]" >
   


      {/* Menu Items */}
      <div style={{ backgroundColor: "#EDF8F9", color: "#0B3666" }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <div
              key={item.path}
              className={
                isActive
                    ? "bg-[#4796B5] text-[#EDF8F9] font-semibold text-xl rounded-sm transition-transform"
  : "text-[#212936] text-xl"
              }
            >
              <Link
                to={item.path}
                onClick={closeSidebar}
                className="flex items-center gap-4 px-4 py-3"
              >
                <span>{item.renderIcon(isActive)}</span>
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
