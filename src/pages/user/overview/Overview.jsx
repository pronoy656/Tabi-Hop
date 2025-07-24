import React from "react";
import CalendarCard from "../../../components/CalenderCard";
import ReminderCard from "../../../components/ReminderCard";

import SectionHeader from "../../../components/shared/SectionHeader";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import TodoCard from "../../../components/TodoCard";

const todoGroups = [
  {
    title: 'Sky Diving',
    todos: [
      { id: 1, title: 'Design login page UI', completed: false, priority: 'High' },
      { id: 2, title: 'Fix cart functionality bug', completed: true, priority: 'Medium' },
      { id: 1, title: 'Design login page UI', completed: false, priority: 'High' },
      { id: 2, title: 'Fix cart functionality bug', completed: true, priority: 'Medium' },
      { id: 1, title: 'Design login page UI', completed: false, priority: 'High' },
      { id: 2, title: 'Fix cart functionality bug', completed: true, priority: 'Medium' },
    ],
  },
  {
    title: 'Bug Hunt',
    todos: [
      { id: 3, title: 'Update dashboard layout', completed: false, priority: 'Low' },
      { id: 4, title: 'Deploy Firebase backend', completed: true, priority: 'High' },
      { id: 3, title: 'Update dashboard layout', completed: false, priority: 'Low' },
      { id: 4, title: 'Deploy Firebase backend', completed: true, priority: 'High' },
      { id: 3, title: 'Update dashboard layout', completed: false, priority: 'Low' },
      { id: 4, title: 'Deploy Firebase backend', completed: true, priority: 'High' },
    ],
  },
  {
    title: 'Sprint Goals',
    todos: [
      { id: 5, title: 'Test Stripe integration', completed: false, priority: 'High' },
      { id: 6, title: 'Write unit tests', completed: false, priority: 'Medium' },
      { id: 5, title: 'Test Stripe integration', completed: false, priority: 'High' },
      { id: 6, title: 'Write unit tests', completed: false, priority: 'Medium' },
      { id: 5, title: 'Test Stripe integration', completed: false, priority: 'High' },
      { id: 6, title: 'Write unit tests', completed: false, priority: 'Medium' },
    ],
  },
];



const Overview = () => {
  return (
    <div className="p-6 bg-[#e6f7fa] rounded-md border border-[#ACE0E5]">
      {/* Overview Section */}
      <section className="mb-8">
        <SectionHeader
        title="Overview"
        subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
      />
        <div className="grid md:grid-cols-6 gap-4">
          
          <CalendarCard />
          <ReminderCard />
        </div>
      </section>

      {/* To-do List Section */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <div>
                    <SectionHeader
        title="To-do List"
        subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
      />
          
          </div>
        
          <PrimaryButton text={"Add more"} bgColor={'#e65ceb'} />
        </div>
      <div className="grid md:grid-cols-3 gap-4">
  {todoGroups.map((group, idx) => (
    <TodoCard key={idx} title={group.title} todos={group.todos} />
  ))}
</div>

      </section>
    </div>
  );
};

export default Overview;
