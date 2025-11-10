import { useState } from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import ListCartModal from "../../../components/shared/ListCartModal";
import BookingListCard from "../../../components/shared/BookingListCard";
import { Link } from "react-router-dom";

const BookingListSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // ✅ Static group data
  const [todoGroups, setTodoGroups] = useState([
    {
      title: "The Thailand Hostile Land",
      todos: [
        {
          id: 1,
          category: "Family Events",
          date: "12th January, 2025",
          location: "The Great Place of Offshore",
          description:
            "Note : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ....",
        },
      ],
    },
    {
      title: "The Thailand Hostile Land",
      todos: [
        {
          id: 2,
          category: "Adventure Camp",
          date: "5th February, 2025",
          location: "Jungle Safari, Thailand",
          description:
            "Note : This is a custom outdoor event with adventures and team-building activities planned over 3 days in the heart of nature.",
        },
      ],
    },
    {
      title: "The Thailand Hostile Land",
      todos: [
        {
          id: 3,
          category: "Corporate Meetup",
          date: "20th March, 2025",
          location: "Tech Convention Center",
          description:
            "Note : An annual corporate event focusing on innovation, product demos, networking, and keynote sessions.",
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
          title="Booking List"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
        <Link to={"/bookings"} className="hidden sm:flex">
          <PrimaryButton bgColor="#FFAA00" text="Add more" textColor="black" />
        </Link>
      </div>

      {/* Mobile Layout */}
      <div className="block sm:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayedGroups.map((group, idx) => (
            <BookingListCard
              key={idx}
              title={group.title}
              todos={group.todos}
            />
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-4 text-center flex items-center justify-center gap-x-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-white border border-[#FFC654] text-[#FFC654] rounded-lg font-semibold transition-colors hover:bg-[#FFC654] hover:text-white"
          >
            {showAll ? "See Less" : "See All"}
          </button>
          <Link to={"/bookings"} className="sm:hidden">
            <PrimaryButton
              round
              bgColor="#FFAA00"
              text="Add more"
              textColor="black"
            />
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block">
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
          {todoGroups.map((group, idx) => (
            <BookingListCard
              key={idx}
              title={group.title}
              todos={group.todos}
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

export default BookingListSection;
