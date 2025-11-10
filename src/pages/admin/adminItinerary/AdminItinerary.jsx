import { Button, Dropdown, Input, message, Space } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowCircleDown,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminItinerary = () => {
  // Clickable Function
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  // Drop Down items
  const items = [
    {
      label: (
        <span className="text-black font-medium hover:bg-blue-100 block px-3 py-1 rounded">
          Free subscription User
        </span>
      ),
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: (
        <span className="text-black font-medium hover:bg-green-100 block px-3 py-1 rounded">
          Basic subscription User
        </span>
      ),
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: (
        <span className="text-black font-medium hover:bg-yellow-100 block px-3 py-1 rounded">
          Premium subscription User
        </span>
      ),
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: (
        <span className="text-black font-medium hover:bg-yellow-100 block px-3 py-1 rounded">
          Gold subscription User
        </span>
      ),
      key: "3",
      icon: <UserOutlined />,
    },
  ];

  // function for props/ variable
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  // data.js
  const places = [
    {
      id: 1,
      title: "The Great Osaka Tower - Suzuki Maruti",
      description:
        "Explore Paris’ most iconic landmark and enjoy panoramic views of the city.",
      location: "Tokyo, China",
      date: "23rd August",
      image: "https://i.ibb.co.com/Jj79RwyB/itenerary-Image.jpg", // Replace with correct URL
    },
    {
      id: 2,
      title: "The Great Osaka Tower - Suzuki Maruti",
      description:
        "Explore Paris’ most iconic landmark and enjoy panoramic views of the city.",
      location: "Tokyo, China",
      date: "23rd August",
      image: "https://i.ibb.co.com/Jj79RwyB/itenerary-Image.jpg",
    },
    {
      id: 3,
      title: "The Great Osaka Tower - Suzuki Maruti",
      description:
        "Explore Paris’ most iconic landmark and enjoy panoramic views of the city.",
      location: "Tokyo, China",
      date: "23rd August",
      image: "https://i.ibb.co.com/Jj79RwyB/itenerary-Image.jpg",
    },
    {
      id: 4,
      title: "The Great Osaka Tower - Suzuki Maruti",
      description:
        "Explore Paris’ most iconic landmark and enjoy panoramic views of the city.",
      location: "Tokyo, China",
      date: "23rd August",
      image: "https://i.ibb.co.com/Jj79RwyB/itenerary-Image.jpg",
    },
  ];

  return (
    <div className="admin-page">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-4">
        <div>
          <p className="text-xl sm:text-2xl font-semibold">User management</p>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <Link to={'/admin-dashboard/admin-itinerary/create-itinerary'} className="bg-[#131927] text-white px-6 py-2.5 rounded-md text-sm w-full sm:w-auto">
          + Add New Itinerary
        </Link>
      </div>
      <div className="flex items-center gap-[20px] mb-5">
        <Input
          placeholder="Search User"
          style={{
            height: "48px",
            backgroundColor: "#F5F5F5",
            fontSize: "18px",
            fontWeight: 500,
            paddingInline: "10px",
            paddingLeft: "24px",
            border: "", // Optional: remove border if needed
          }}
          className="h-12 bg-[#F5F5F5] placeholder:text-xl placeholder:font-medium px-[10px] pl-[24px]"
        />
        {/* //Dropdown for filter */}
        <Dropdown menu={menuProps}>
          <Button
            style={{
              height: "48px",
              backgroundColor: "#F5F5F5",
              fontSize: "18px",
              fontWeight: 500,
              paddingInline: "10px",
              paddingLeft: "24px",
              border: "none", // Optional: remove border if needed
            }}
          >
            <Space className="text-18px font-medium">
              All type
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="grid grid-cols-4 gap-x-4">
        {places.map((place) => (
          <div
            key={place.id}
            className="max-w-[340px] bg-white rounded-xl  p-3 border"
          >
            <img
              src={place.image}
              alt={place.title}
              className="rounded-md h-[180px] w-full object-cover"
            />
            <h3 className="text-lg font-semibold mt-2">{place.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{place.description}</p>

            <div className="flex items-center gap-1 text-gray-500 text-xs mt-2">
              <FaMapMarkerAlt />
              <span>{place.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                <FaCalendarAlt />
                <span>{place.date}</span>
              </div>

              <div className="flex gap-3 mt-2 text-[16px]">
                <FaEye className=" text-lg text-blue-500 cursor-pointer" />
                <FaCheckCircle className="text-green-500 cursor-pointer" />
                <FaTimesCircle className="text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminItinerary;
