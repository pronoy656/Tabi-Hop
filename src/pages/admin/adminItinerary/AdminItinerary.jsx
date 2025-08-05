import { Button, Dropdown, Input, message, Space } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";

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

        <button className="bg-[#131927] text-white px-6 py-2.5 rounded-md text-sm w-full sm:w-auto">
          + Add New Itinerary
        </button>
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
    </div>
  );
};

export default AdminItinerary;
