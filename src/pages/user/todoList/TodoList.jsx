import { Link } from "react-router-dom";
import { ListCard } from "../../../components/shared/ListCard";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import SectionHeader from "../../../components/shared/SectionHeader";

const TodoList = () => {
  const todoGroups = [
    {
      title: "Sky Diving",
      todos: [
        {
          id: 1,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: true,
          priority: "Medium",
        },
        {
          id: 1,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: false,
          priority: "High",
        },
        {
          id: 2,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: true,
          priority: "Medium",
        },
      ],
    },
    {
      title: "Bug Hunt",
      todos: [
        {
          id: 3,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: false,
          priority: "Low",
        },
        {
          id: 4,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: true,
          priority: "High",
        },
        {
          id: 3,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: false,
          priority: "Low",
        },
        {
          id: 4,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: true,
          priority: "High",
        },
        {
          id: 3,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: false,
          priority: "Low",
        },
        {
          id: 4,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          completed: true,
          priority: "High",
        },
      ],
    },
  ];
  return (
    <div className="page">
      <div className="md:flex justify-between items-center">
        <SectionHeader
          title="To-Do List"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
        <Link to={"/itinerary/create-itinerary"}>
          <PrimaryButton
            bgColor={"#EE443F"}
            text={"Create Itinerary"}
            textColor={"white"}
          />
        </Link>
      </div>
      <div>
        <div className="grid md:grid-cols-1 gap-4">
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
    </div>
  );
};

export default TodoList;
