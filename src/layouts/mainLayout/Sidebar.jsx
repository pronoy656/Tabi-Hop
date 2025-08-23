import { Link, useLocation } from 'react-router-dom';

import OverviewSVG from '../../../public/ruhulo-images/overviewSVG';
import WorkplaceSVG from '../../../public/ruhulo-images/WorkplaceSVG';
import AccommodationSVG from '../../../public/ruhulo-images/AccommodationSVG';
import IterenearySVG from '../../../public/ruhulo-images/IterenearySVG';
import MoodBoardSVG from '../../../public/ruhulo-images/moodboardSVG';
import { TodoListSVG } from '../../../public/ruhulo-images/TodoListSVG';
import PackingListSVG from '../../../public/ruhulo-images/PackingListSVG';
import BookingSVG from '../../../public/ruhulo-images/BookingSVG';
import BucketListSVG from '../../../public/ruhulo-images/BucketListSVG';
import CalenderSVG from '../../../public/ruhulo-images/CalenderSVG';
import SettingSVG from '../../../public/ruhulo-images/SettingSVG';

const menuItems = [
  {
    label: "Overview tab",
    path: "/",
    renderIcon: (isActive) => (
      <OverviewSVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
    {
    label: "To-Do List",
    path: "/todolist",
    renderIcon: (isActive) => (
      <TodoListSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
   {
    label: " My Itinerary",
    path: "/itinerary",
    activePaths:[
      "/my-workplace/details/:id",
      "/itinerary/create-itinerary",
      "/itinerary/details-destination"
    ],
    renderIcon: (isActive) => (
      <IterenearySVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
    {
    label: "Accommodations",
    path: "/accommodations",
    renderIcon: (isActive) => (
      <AccommodationSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
    {
    label: "Bookings",
    path: "/bookings",
    renderIcon: (isActive) => (
      <BookingSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "Bucket List",
    path: "/bucket-list",
    renderIcon: (isActive) => (
      <BucketListSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "Calender",
    path: "/calender",
    renderIcon: (isActive) => (
      <CalenderSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
  {
    label: "Workplace",
    path: "/my-workplace",
    renderIcon: (isActive) => (
      <WorkplaceSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
    {
    label: "Packing List",
    path: "/packing-list",
    renderIcon: (isActive) => (
      <PackingListSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },
 
  {
    label: "Mood Board",
    path: "/moodboard",
    renderIcon: (isActive) => (
      <MoodBoardSVG strokeColor={isActive ? "#EDF8F9" : "#212936"} />
    ),
  },




  {
    label: "Account Setting",
    path: "/account-setting",
    activePaths: [
      '/my-workplace/details/:id',
      '/itinerary/create-itinerary',
      '/itinerary/details-destination',
    ],
    renderIcon: (isActive) => (
      <IterenearySVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
  {
    label: 'Mood Board',
    path: '/moodboard',
    renderIcon: (isActive) => (
      <MoodBoardSVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
  {
    label: 'To-Do List',
    path: '/todolist',
    renderIcon: (isActive) => (
      <TodoListSVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
  {
    label: 'Packing List',
    path: '/packing-list',
    renderIcon: (isActive) => (
      <PackingListSVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
  {
    label: 'Accommodations',
    path: '/accommodations',
    renderIcon: (isActive) => (
      <AccommodationSVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
  {
    label: 'Bookings',
    path: '/bookings',
    renderIcon: (isActive) => (
      <BookingSVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
  {
    label: 'Bucket List',
    path: '/bucket-list',
    renderIcon: (isActive) => (
      <BucketListSVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
  {
    label: 'Calender',
    path: '/calender',
    renderIcon: (isActive) => (
      <CalenderSVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
  {
    label: 'Account Setting',
    path: '/account-setting',
    activePaths: [
      '/account-setting',
      '/account-setting/edit-details',
      '/account-setting/change-password',
      '/account-setting/terms',
      '/account-setting/privacy',
      '/account-setting/faq',
      '/account-setting/support',
    ],
    renderIcon: (isActive) => (
      <SettingSVG strokeColor={isActive ? '#EDF8F9' : '#212936'} />
    ),
  },
];

const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="h-full px-3 pt-6 border-r border-r-[#ACE0E5]">
      {/* Menu Items */}
      <div style={{ backgroundColor: '#EDF8F9', color: '#0B3666' }}>
        {menuItems.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.activePaths && item.activePaths.includes(pathname));
          return (
            <div
              key={item.path}
              className={
                isActive
                  ? 'bg-[#6E67D6] text-[#EDF8F9] font-semibold text-xl rounded-sm transition-transform'
                  : 'text-[#212936] text-xl font-semibold'
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

export default Sidebar;
