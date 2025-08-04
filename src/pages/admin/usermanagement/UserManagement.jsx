import { Input, message, Table, Dropdown, Button, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const UserManagement = () => {
  // Table data
  const userdata = [
    {
      key: "1",
      name: "John Doe",
      subscribed: "Basic",
      email: "mahbubulqareem@gmail.com",
      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
    },
    {
      key: "2",
      name: "John Doe",
      subscribed: "Basic",
      email: "mahbubulqareem@gmail.com",
      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
    },
    {
      key: "3",
      name: "John Doe",
      subscribed: "Basic",
      email: "mahbubulqareem@gmail.com",
      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
    },
    {
      key: "4",
      name: "John Doe",
      subscribed: "Basic",
      email: "mahbubulqareem@gmail.com",
      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
    },
    {
      key: "5",
      name: "John Doe",
      subscribed: "Basic",
      email: "mahbubulqareem@gmail.com",
      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
    },
    {
      key: "6",
      name: "John Doe",
      subscribed: "Basic",
      email: "mahbubulqareem@gmail.com",
      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
    },
    {
      key: "7",
      name: "John Doe",
      subscribed: "Basic",
      email: "mahbubulqareem@gmail.com",
      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
    },
    {
      key: "8",
      name: "John Doe",
      subscribed: "Basic",
      email: "mahbubulqareem@gmail.com",
      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
    },
    {
      key: "9",
      name: "John Doe",
      subscribed: "Basic",
      email: "mahbubulqareem@gmail.com",
      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
    },
    {
      key: "10",
      name: "John Doe",
      subscribed: "Basic",

      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
      email: "mahbubulqareem@gmail.com",
    },
    {
      key: "11",
      name: "John Doe",
      subscribed: "Basic",

      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
      email: "mahbubulqareem@gmail.com",
    },
    {
      key: "12",
      name: "John Doe",
      subscribed: "Basic",

      joinedData: "2023-10-01",
      HomeAddress: "123 Main St, City, Country",
      email: "mahbubulqareem@gmail.com",
    },
  ];

  // column label
  const columns = [
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 500 }}>User Name</span>
      ),
      dataIndex: "name",
      key: "name",
      //text size bold for table data
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "500" }}>{text}</span>
      ),
    },
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 500 }}>Subscribed</span>
      ),

      dataIndex: "subscribed",
      key: "subscribed",
      // Conditional render for Subscribed
      render: (value) => {
        const upperValue = value.toUpperCase();
        const isBasic = upperValue === "BASIC";
        const isPremium = upperValue === "Premium";

        const backgroundColor = isBasic
          ? "#E0FFD5"
          : isPremium
          ? "gold"
          : "#eee";

        const textColor = isBasic
          ? "#008B1F"
          : isPremium
          ? "#8B4513" // dark golden
          : "#333";

        return (
          <span
            style={{
              backgroundColor,
              color: textColor,
              fontWeight: 500,
              fontSize: "16px",
              padding: "8px 29px",
              borderRadius: "999px",
              display: "inline-block",
              textAlign: "center",
              minWidth: "70px",
            }}
          >
            {value}
          </span>
        );
      },
    },

    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 500 }}>Joined Date</span>
      ),

      dataIndex: "joinedData",
      key: "joinedData",
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "500" }}>{text}</span>
      ),
    },
    {
      title: (
        <span style={{ fontSize: "18px", fontWeight: 500 }}>Home Address</span>
      ),
      dataIndex: "HomeAddress",
      key: "HomeAddress",
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "500" }}>{text}</span>
      ),
    },
    {
      title: <span style={{ fontSize: "18px", fontWeight: 500 }}>Email</span>,
      dataIndex: "email",
      key: "email",
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "500" }}>{text}</span>
      ),
    },
    {
      title: <span style={{ fontSize: "18px", fontWeight: 500 }}>Action</span>,
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size="small">
          <Button
            type="text"
            icon={
              <EyeOutlined
                style={{ fontSize: "18px" }}
                className="bg-[#F5F5F5] border border-[#DADADA]  rounded-sm p-1"
              />
            }
            onClick={() => handleView(record)}
          />
          <Button
            type="text"
            icon={
              <EditOutlined
                style={{ color: "blue", fontSize: "18px" }}
                className="bg-[#F5F5F5] border border-[#DADADA]  rounded-sm p-1"
              />
            }
            onClick={() => handleEdit(record)}
          />
          <Button
            type="text"
            icon={
              <DeleteOutlined
                style={{ fontSize: "18px" }}
                className="bg-[#F5F5F5] border border-[#DADADA]  rounded-sm p-1"
              />
            }
            danger
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  // Action button functionality
  const handleView = (record) => {
    console.log("View user:", record);
    message.info(`Viewing user: ${record.name}`);
  };

  const handleEdit = (record) => {
    console.log("Edit user:", record);
    message.info(`Editing user: ${record.name}`);
  };

  const handleDelete = (record) => {
    console.log("Delete user:", record);
    message.warning(`Deleted user: ${record.name}`);
  };

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

        {/* <button className="bg-[#131927] text-white px-6 py-2.5 rounded-md text-sm w-full sm:w-auto">
          + Add New User
        </button> */}
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
      <div className="scrollbar-hide">
        <Table
          className="border border-[#F0F0F0] overflow-y-auto"
          dataSource={userdata}
          columns={columns}
          scroll={{ x: "max-content" }}
        ></Table>
      </div>
    </div>
  );
};

export default UserManagement;
