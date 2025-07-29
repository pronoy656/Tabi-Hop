import { useState } from "react";
import AccommondationCard from "../../../components/accommodation/AccommondationCard";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import SectionHeader from "../../../components/shared/SectionHeader";
import AccommodationModal from "../../../components/modals/accommodation/AccommodationModal";

const accommodations = [
  {
    id: 1,
    image: "/accommodation.png",
    title: "Mercure Tokyo Haneda Airport",
    location: "Ota Ward, Tokyo",
    stars: 3,
    checkIn: "20th May, 2025 – 10:23 AM",
    checkOut: "25th May, 2025 – 10:23 AM",
    contact: "+652 552 5855",
    note: `Lorem Ipsum is that it has a more-or-less normal distribution of
    letters, as opposed to using 'Content here, content here', making it
    look like readable English.`,
  },
  {
    id: 2,
    image: "/accommodation.png",
    title: "Grand Plaza Shibuya",
    location: "Shibuya, Tokyo",
    stars: 4,
    checkIn: "18th June, 2025 – 11:00 AM",
    checkOut: "22nd June, 2025 – 9:00 AM",
    contact: "+123 456 7890",
    note: `A great place to stay near shopping centers and train stations. 
    Comfortable rooms with friendly staff.`,
  },
];

const Accommodations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="page">
      <div className="flex justify-between items-center">
        <SectionHeader
          title="Accommodations"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
        <button  onClick={() => setIsModalOpen(true)}>
        <PrimaryButton
       
          text={"Add more"}
          bgColor={"#FCB0BA"}
          textColor="white"
        /></button>
      </div>

      {accommodations.map((acc) => {
        return <AccommondationCard key={acc.id} acc={acc} />;
      })}


      <AccommodationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Accommodations;
