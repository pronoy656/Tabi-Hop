import { useState } from "react";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import SectionHeader from "../../../components/shared/SectionHeader";
import TodoCard from "../../../components/TodoCard";

const TodoListSection = () => {
  const [todoGroups, setTodoGroups] = useState([
    {
      title: "Sky Diving",
      todos: [
        { id: 1, title: "Design login page UI", completed: false, priority: "High" },
        { id: 2, title: "Fix cart functionality bug", completed: true, priority: "Medium" },
        { id: 3, title: "Design login page UI", completed: false, priority: "High" },
        { id: 4, title: "Fix cart functionality bug", completed: true, priority: "Medium" },
        { id: 5, title: "Fix cart functionality bug", completed: true, priority: "Medium" },
      ],
    },
    {
      title: "Bug Hunt",
      todos: [
            { id: 1, title: "Design login page UI", completed: false, priority: "High" },
        { id: 2, title: "Fix cart functionality bug", completed: true, priority: "Medium" },
        { id: 3, title: "Design login page UI", completed: false, priority: "High" },
        { id: 4, title: "Fix cart functionality bug", completed: true, priority: "Medium" },
        { id: 5, title: "Fix cart functionality bug", completed: true, priority: "Medium" },
      ],
    },
    {
      title: "Sprint Goals",
      todos: [
            { id: 1, title: "Design login page UI ruhul", completed: false, priority: "High" },
        { id: 2, title: "Fix cart functionality bug", completed: true, priority: "Medium" },
        { id: 3, title: "Design login page UI", completed: false, priority: "High" },
        { id: 4, title: "Fix cart functionality bug", completed: true, priority: "Medium" },
        { id: 5, title: "Fix cart functionality bug", completed: true, priority: "Medium" },
      ],
    },
  ]);

  const handleAddMore = () => {
    const newGroup = {
      title: `New Group ${todoGroups.length + 1}`,
      todos: [
        {
          id: Date.now(), 
          title: "New todo item",
          completed: false,
          priority: "Low",
        },
      ],
    };
    setTodoGroups([...todoGroups, newGroup]);
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <div>
          <SectionHeader
            title="To-do List"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
          />
        </div>

        <button onClick={handleAddMore}>
          <PrimaryButton text={"Add more"} bgColor={"#e65ceb"} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {todoGroups.map((group, idx) => (
          <TodoCard
            key={idx}
            title={group.title}
            todos={group.todos}
            border="#E66CE5"
            border2="#FDF0FC"
            bg="#FFFFFF"
            titleText="#612D60"
            text="#394050"
            line="#E66CE5"
          />
        ))}
      </div>
    </section>
  );
};

export default TodoListSection;
 