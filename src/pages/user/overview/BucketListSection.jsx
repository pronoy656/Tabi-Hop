import { useState } from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import { ListCard } from "../../../components/shared/ListCard";
import ListCartModal from "../../../components/shared/ListCartModal";


const BucketListSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const [todoGroups, setTodoGroups] = useState(
    [
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
      title: "QA Testing",
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

  const displayedGroups = showAll ? todoGroups : todoGroups.slice(0, 1);

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="md:flex justify-between items-center mb-4">
        <SectionHeader
          title="Bucket List"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
        <button className="hidden sm:flex" onClick={() => setIsModalOpen(true)}>
          <PrimaryButton bgColor="#6E67D5" text="Add more" textColor="white" />
        </button>
      </div>

      {/* Mobile layout (show 1 card + toggle) */}
      <div className="block sm:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayedGroups.map((group, idx) => (
            <ListCard
              key={idx}
              title={group.title}
              todos={group.todos}
              border="#6E67D6"
              border2="#6E67D5"
              bg="#FFFFFF"
              titleText="#612D60"
              text="#394050"
              line="#6E67D5"
            />
          ))}
        </div>

        {/* See All / See Less toggle */}
        <div className="mt-4 text-center flex justify-center gap-x-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-white border border-[#6E67D5] text-[#6E67D5] rounded-lg font-semibold transition-colors hover:bg-[#6E67D6] hover:text-white"
          >
            {showAll ? "See Less" : "See All"}
          </button>
          <button className="sm:hidden " onClick={() => setIsModalOpen(true)}>
            <PrimaryButton
              round
              bgColor="#6E67D5"
              text="Add more"
              textColor="white"
            />
          </button>
        </div>
      </div>

      {/* Desktop layout (show all by default) */}
      <div className="hidden sm:block">
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
          {todoGroups.map((group, idx) => (
            <ListCard
              key={idx}
              title={group.title}
              todos={group.todos}
              border="#6E67D6"
              border2="#6E67D5"
              bg="#FFFFFF"
              titleText="#612D60"
              text="#394050"
              line="#D2D0F2"
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ListCartModal
        setTodoGroups={setTodoGroups}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BucketListSection;
