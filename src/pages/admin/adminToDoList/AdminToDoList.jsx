import { useState } from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import { ListCard } from "../../../components/shared/ListCard";
import ListCartModal from "../../../components/shared/ListCartModal";
import { Input, message, Dropdown, Button, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";


const AdminToDoList = () => {
  const [todoGroups, setTodoGroups] = useState([
    {
      title: "Sky Diving",
      todos: [
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
      ],
    },
    {
      title: "Bug Hunt",
      todos: [
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
      ],
    },
    {
      title: "Sky Diving",
      todos: [
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
      ],
    },
    {
      title: "Bug Hunt",
      todos: [
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title: "Design login page UI",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title: "Fix cart functionality bug",
          completed: true,
          priority: "Medium",
        },
      ],
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="md:flex justify-between items-center mb-4">
        <SectionHeader
          title="Bucket List"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#131927] text-white px-7 py-2 text-base font-semibold rounded-md"
        >
          + Add more
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
            border: "",
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
              border: "none",
            }}
          >
            <Space className="text-18px font-medium">
              All type
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {todoGroups.map((group, idx) => (
            <ListCard
              key={idx}
              title={group.title}
              todos={group.todos}
              border="#FF6A35"
              border2="#FAC5C3"
              bg="#FFFFFF"
              titleText="#EE443F"
              text="#4D5461"
            />
          ))}
        </div>
      </div>

      <ListCartModal
        setTodoGroups={setTodoGroups}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AdminToDoList;
