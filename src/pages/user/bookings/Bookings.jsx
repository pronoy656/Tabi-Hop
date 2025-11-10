// Bookings.jsx
import { useState } from "react";
import BookingCard from "../../../components/bookings/BookingCard";
import AddBookingModal from "../../../components/modals/bookings/AddBookingModal";
import ConfirmDeleteModal from "../../../components/modals/bookings/ConfirmDeleteModal";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import SectionHeader from "../../../components/shared/SectionHeader";
import EditBookingModal from "../../../components/modals/bookings/EditBookingModal";

const Bookings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  const [bookings, setBookings] = useState([
    {
      id: 1,
      image: "/accommodation.png",
      title: "Mercure Tokyo Haneda Airport",
      location: "Ota Ward, Tokyo",
      name: "Akira",
      scheduledTime: "12:00",
      eventType: "Business Meeting",
      note: "Ensure projector setup.",
    },
    {
      id: 2,
      image: "/accommodation.png",
      title: "Imperial Palace Conference",
      location: "Chiyoda, Tokyo",
      name: "Sakura",
      scheduledTime: "15:00",
      eventType: "Wedding",
      note: "Flower decoration required.",
    },
    {
      id: 3,
      image: "/accommodation.png",
      title: "Tokyo Dome Event Hall",
      location: "Bunkyo, Tokyo",
      name: "Hiroshi",
      scheduledTime: "10:30",
      eventType: "Concert",
      note: "Sound check 2 hours early.",
    },
  ]);

  console.log(editData)

  const handleEdit = (booking) => {
    setEditData(booking);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setConfirmDeleteOpen(true);
  };

  const confirmDelete = () => {
    console.log("Deleted booking ID:", deleteId);
    setConfirmDeleteOpen(false);
  };

  return (
    <div className="page">
      <div className="md:flex justify-between items-center mb-2">
        <SectionHeader
          title="Bookings"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
        <button
          onClick={() => {
            setEditData(null);
            setIsModalOpen(true);
          }}
        >
          <PrimaryButton text={"Add more"} bgColor={"#6E67D5"} textColor="white" />
        </button>
      </div>

      {bookings.map((acc) => (
        <BookingCard
          key={acc.id}
          acc={acc}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}

      <AddBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        
      />
      <EditBookingModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        defaultValues={editData}
        setEditData={setEditData}
      />

      <ConfirmDeleteModal
        isOpen={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
        onConfirm={confirmDelete}
        title={bookings.find((b) => b.id === deleteId)?.title || "this booking"}
      />
    </div>
  );
};

export default Bookings;
