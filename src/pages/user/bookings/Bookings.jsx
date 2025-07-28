import { useState } from "react";
import BookingCard from "../../../components/bookings/BookingCard";
import AddBookingModal from "../../../components/modals/bookings/AddBookingModal";
import PrimaryButton from "../../../components/shared/PrimaryButton"
import SectionHeader from "../../../components/shared/SectionHeader"


const Bookings = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
    const bookings = [
  {
    id: 1,
    image: "/accommodation.png",
    title: "Mercure Tokyo Haneda Airport",
    location: "Ota Ward, Tokyo",
    note: `Note : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
  },
  {
    id: 2,
    image: "/accommodation.png",
    title: "Mercure Tokyo Haneda Airport",
    location: "Ota Ward, Tokyo",
    note: `Note : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
  },
  {
    id: 3,
    image: "/accommodation.png",
    title: "Mercure Tokyo Haneda Airport",
    location: "Ota Ward, Tokyo",
    note: `Note : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
  },

];
  return (
    <div className="page">

        <div className="flex justify-between items-center mb-2">
          <div>
            <SectionHeader
              title="Bookings"
              subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
            />
          </div>

    <button onClick={() => setIsModalOpen(true)}>
              <PrimaryButton text={"Add more"} bgColor={"#6E67D5"} textColor="white" />
    </button>
        </div>

           {bookings.map((acc) => {
        return <BookingCard key={acc.id} acc={acc} />;
      })}

        <AddBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Bookings