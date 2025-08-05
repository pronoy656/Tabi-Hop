// Accommodations.jsx (Updated)
import { useState } from "react";
import AccommondationCard from "../../../components/accommodation/AccommondationCard";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import SectionHeader from "../../../components/shared/SectionHeader";
import EditAccomodationModal from "../../../components/modals/accommodation/EditAccomodationModal";
import AccomodationDeleteModal from "../../../components/modals/accommodation/accomodationDeleteModal";
import AccommodationModal  from"../../../components/modals/accommodation/AccommodationModal"


const initialAccommodations = [
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
  const [accommodations, setAccommodations] = useState(initialAccommodations);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEdit = (acc) => {
    setEditData(acc);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    console.log("Deleted accommodation ID:", deleteId);
    setAccommodations((prev) => prev.filter((acc) => acc.id !== deleteId));
    setIsDeleteModalOpen(false);
  };

  const handleUpdate = (updatedData) => {
    setAccommodations((prev) =>
      prev.map((item) => (item.id === updatedData.id ? updatedData : item))
    );
  };

  return (
    <div className="page">
      <div className="md:flex justify-between items-center">
        <SectionHeader
          title="Accommodations"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
        <button onClick={() => setIsModalOpen(true)}>
          <PrimaryButton text="Add more" bgColor="#FCB0BA" textColor="black" />
        </button>
      </div>

      {accommodations.map((acc) => (
        <AccommondationCard
          key={acc.id}
          acc={acc}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}

      <AccommodationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <EditAccomodationModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        defaultValues={editData}
        setEditData={handleUpdate}
      />

      <AccomodationDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title={accommodations.find((acc) => acc.id === deleteId)?.title || ""}
      />
    </div>
  );
};

export default Accommodations;
