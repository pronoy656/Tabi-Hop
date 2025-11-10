import {
  Input,
  message,
  Table,
  Dropdown,
  Button,
  Space,
  ConfigProvider,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const AdminReports = () => {
  // Array declare for showing data in table row
  const data = [
    {
      key: "1",
      date: "12-02-25",
      name: "Talha Ahnaf",
      email: "example213@gmail.com",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      key: "2",
      date: "12-02-25",
      name: "Talha Ahnaf",
      email: "example213@gmail.com",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      key: "3",
      date: "12-02-25",
      name: "Talha Ahnaf",
      email: "example213@gmail.com",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      key: "4",
      date: "12-02-25",
      name: "Talha Ahnaf",
      email: "example213@gmail.com",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      key: "5",
      date: "12-02-25",
      name: "Talha Ahnaf",
      email: "example213@gmail.com",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      key: "6",
      date: "12-02-25",
      name: "Talha Ahnaf",
      email: "example213@gmail.com",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      key: "7",
      date: "12-02-25",
      name: "Talha Ahnaf",
      email: "example213@gmail.com",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];

  // Array declare for showing column label
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 100,
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "600" }}>{text}</span>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 120,
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "600" }}>{text}</span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "600" }}>{text}</span>
      ),
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      width: 600,
      render: (text) => (
        <span style={{ fontSize: "16px", fontWeight: "600" }}>{text}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: () => (
        <Space direction="horizontal">
          <Button type="link" style={{ color: "#28A745", padding: 0 }}>
            <span style={{ fontSize: "16px", fontWeight: "600" }}> Solve</span>
          </Button>
          <Button type="link" danger style={{ padding: 0 }}>
            <span style={{ fontSize: "16px", fontWeight: "600" }}>Delete</span>
          </Button>
        </Space>
      ),
    },
  ];

  // Drop Down  items
  const items = [
    {
      label: (
        <span className="text-black font-medium hover:bg-blue-100 block px-3 py-1 rounded">
          Change text
        </span>
      ),
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: (
        <span className="text-black font-medium hover:bg-green-100 block px-3 py-1 rounded">
          Change text
        </span>
      ),
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: (
        <span className="text-black font-medium hover:bg-yellow-100 block px-3 py-1 rounded">
          Change text
        </span>
      ),
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: (
        <span className="text-black font-medium hover:bg-yellow-100 block px-3 py-1 rounded">
          Change text
        </span>
      ),
      key: "3",
      icon: <UserOutlined />,
    },
  ];

  // State declare for pagination
  const [pagination, setPagination] = useState({
    current: 1, // Current page Number
    pageSize: 3, // For how many data show in one page 3=3 data, 4=4 data
    // total: 24, // if 3 data show in one page then number of pagination is 8. its meant 24/3 = 8
  });

  // Pagination action button
  const handleTableChange = (pag) => {
    setPagination(pag);
  };

  // Action function for dropdown
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

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
      <div className="border border-[#F3F4F6] rounded-xl p-11">
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemActiveBg: "#131927",
                itemActiveColor: "#131927",
                itemSize: 40,
                borderRadius: 40,
                colorPrimary: "#FEFEFE",
                colorText: "#0B3666",
                itemBg: "transparent",
                colorBgTextHover: "transparent",
                colorTextHover: "none",
              },
            },
          }}
        >
          <Table
            rowClassName={() =>
              "h-[155px] bg-[#FAFAFA] custom-row-gap custom-row-hover"
            } // applies Tailwind height to each row and custom css add for each row
            columns={columns}
            dataSource={data}
            pagination={{
              ...pagination,
              position: ["bottomCenter"],
              showSizeChanger: false,
            }}
            onChange={handleTableChange}
            bordered={false}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default AdminReports;
