import {
  Input,
  message,
  Table,
  Dropdown,
  Button,
  Space,
  Menu,
  Modal,
} from "antd";
import {
  DownOutlined,
  UserOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

import React, { useState } from "react";

const UserManagement = () => {
  // Table data
  const [userdata, setUserdata] = useState([
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
  ]);

  // Modal state
  const [viewModal, setViewModal] = useState({ open: false, user: null });
  const [deleteModal, setDeleteModal] = useState({ open: false, user: null });
  const [blockModal, setBlockModal] = useState({ open: false, user: null });

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
      render: (_, record) => {
        const menu = (
          <Menu>
            <Menu.Item
              key="view"
              onClick={() => setViewModal({ open: true, user: record })}
            >
              View
            </Menu.Item>
            <Menu.Item
              key="edit"
              onClick={() => setBlockModal({ open: true, user: record })}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              key="delete"
              onClick={() => setDeleteModal({ open: true, user: record })}
              danger
            >
              Delete
            </Menu.Item>
          </Menu>
        );
        return (
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <Button
              type="text"
              icon={<EllipsisOutlined style={{ fontSize: 22 }} />}
            />
          </Dropdown>
        );
      },
    },
  ];

  // Modal action handlers
  const handleDeleteUser = () => {
    if (deleteModal.user) {
      setUserdata((prev) => prev.filter((u) => u.key !== deleteModal.user.key));
      message.success(`Deleted user: ${deleteModal.user.name}`);
    }
    setDeleteModal({ open: false, user: null });
  };

  const handleBlockUser = () => {
    if (blockModal.user) {
      message.success(`Blocked user: ${blockModal.user.name}`);
    }
    setBlockModal({ open: false, user: null });
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
        />
      </div>

      {/* View Modal */}
      <Modal
        open={viewModal.open}
        title={
          <span style={{ fontWeight: 600, fontSize: 20 }}>User Details</span>
        }
        onCancel={() => setViewModal({ open: false, user: null })}
        footer={null}
        centered
      >
        {viewModal.user && (
          <div style={{ fontSize: 16, fontWeight: 500, textAlign: "left" }}>
            <p>
              <span style={{ fontWeight: 600 }}>Name:</span>{" "}
              {viewModal.user.name}
            </p>
            <p>
              <span style={{ fontWeight: 600 }}>Email:</span>{" "}
              {viewModal.user.email}
            </p>
            <p>
              <span style={{ fontWeight: 600 }}>Subscribed:</span>{" "}
              {viewModal.user.subscribed}
            </p>
            <p>
              <span style={{ fontWeight: 600 }}>Joined Date:</span>{" "}
              {viewModal.user.joinedData}
            </p>
            <p>
              <span style={{ fontWeight: 600 }}>Home Address:</span>{" "}
              {viewModal.user.HomeAddress}
            </p>
          </div>
        )}
      </Modal>

      {/* Delete Modal */}
      <Modal
        open={deleteModal.open}
        title={
          <span style={{ fontWeight: 600, fontSize: 20 }}>Delete User</span>
        }
        onCancel={() => setDeleteModal({ open: false, user: null })}
        footer={[
          <Button
            key="no"
            onClick={() => setDeleteModal({ open: false, user: null })}
          >
            No
          </Button>,
          <Button key="yes" type="primary" danger onClick={handleDeleteUser}>
            Yes
          </Button>,
        ]}
        centered
      >
        <p style={{ fontSize: 17, fontWeight: 500, textAlign: "left" }}>
          Are you sure you want delete this user?
        </p>
      </Modal>

      {/* Block Modal */}
      <Modal
        open={blockModal.open}
        title={
          <span style={{ fontWeight: 600, fontSize: 20 }}>Block User</span>
        }
        onCancel={() => setBlockModal({ open: false, user: null })}
        footer={[
          <Button
            key="no"
            onClick={() => setBlockModal({ open: false, user: null })}
          >
            No
          </Button>,
          <Button key="yes" type="primary" danger onClick={handleBlockUser}>
            Yes
          </Button>,
        ]}
        centered
      >
        <p style={{ fontSize: 17, fontWeight: 500, textAlign: "left" }}>
          Are you sure you want block this user?
        </p>
      </Modal>
    </div>
  );
};

export default UserManagement;
