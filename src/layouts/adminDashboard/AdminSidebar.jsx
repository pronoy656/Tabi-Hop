import { Link, useLocation } from "react-router-dom";
import OverviewSVG from "../../../public/ruhulo-images/overviewSVG";
import IterenearySVG from "../../../public/ruhulo-images/IterenearySVG";
import MoodBoardSVG from "../../../public/ruhulo-images/moodboardSVG";
import { TodoListSVG } from "../../../public/ruhulo-images/TodoListSVG";
import CalenderSVG from "../../../public/ruhulo-images/CalenderSVG";
import SettingSVG from "../../../public/ruhulo-images/SettingSVG";

const menuItems = [
  {
    label: "Overview",
    path: "/admin-dashboard",
    renderIcon: (isActive) => (
      <OverviewSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "User Management",
    path: "/admin-dashboard/user-management",
    renderIcon: (isActive) => (
      <OverviewSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "Itinerary",
    path: "/admin-dashboard/admin-itinerary",
    renderIcon: (isActive) => (
      <IterenearySVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "Mood-board",
    path: "/admin-dashboard/admin-mood-board",
    renderIcon: (isActive) => (
      <MoodBoardSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "To-Do List",
    path: "/admin-dashboard/admin-todo-list",
    renderIcon: (isActive) => (
      <TodoListSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "Calender",
    path: "/admin-dashboard/admin-calender",
    renderIcon: (isActive) => (
      <CalenderSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "Subscriptions Plan",
    path: "/admin-dashboard/admin-subscription-plan",
    renderIcon: (isActive) => (
      <CalenderSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "Reports",
    path: "/admin-dashboard/admin-reports",
    renderIcon: (isActive) => (
      <CalenderSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "Privacy Policy",
    path: "/admin-dashboard/admin-privacy-policy",
    renderIcon: (isActive) => (
      <CalenderSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "Terms and Conditions",
    path: "/admin-dashboard/admin-terms-conditions",
    renderIcon: (isActive) => (
      <CalenderSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
  {
    label: "Account Setting",
    path: "/admin-dashboard/admin-account-setting",
    renderIcon: (isActive) => (
      <SettingSVG strokeColor={isActive ? "#EDF8F9" : "#ffffff"} />
    ),
  },
];

const AdminSidebar = ({ closeSidebar }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="h-full px-3 pt-24 md:pt-10 ">

      
            <Link  to={'/admin-dashboard'} className=" hidden md:flex  items-center justify-center gap-1 ">
            <img
              src="/logo_image.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <img
              src="/logo_name.png"
              alt="Logo Name"
              className="h-6 sm:h-7 object-contain"
            />
          </Link>
      {/* Menu Items */}


      <div
        className="space-y-5 md:mt-5"
        style={{ backgroundColor: "#131927", color: "#0B3666" }}
      >
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <div
              key={item.path}
              className={
                isActive
                  ? "bg-[#6E67D5] text-white font-medium text-xl rounded-sm transition-transform"
                  : "text-white text-xl"
              }
            >
              <Link
                to={item.path}
                onClick={closeSidebar}
                className="flex items-center gap-3 px-4 py-3"
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

export default AdminSidebar;
