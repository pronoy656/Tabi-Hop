import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ModalHeader from "../ModalHeader";

const AddBookingModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset(); 
    onClose(); 
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-6"
    >
      
      <div className="bg-white rounded-2xl p-12 w-[90%] max-w-3xl shadow-xl">
        {/* Header */}
     
        <ModalHeader title={"Bookings"} subTitle={"  Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label >Name</label>
            <input
              {...register("name")}
              type="text"
              required
              placeholder="Write here"
              className="form-input"
            />
          </div>

          <div>
            <label >Locations</label>
            <input
              {...register("location")}
              type="location"
              required
              placeholder="Write here"
              className="form-input"
            />
          </div>

          <div>
            <label >Scheduled Time</label>
            <input
              {...register("scheduledTime")}
              type="time"
              required
              placeholder="Write here"
              className="form-input"
            />
          </div>

          <div>
            <label >Event Type</label>
            <input
              {...register("eventType")}
              type="text"
              required
              placeholder="Write here"
              className="form-input"
            />
          </div>

          <div>
            <label >Note</label>
            <textarea
              {...register("note")}
              rows={4}
              placeholder="Write here"
              required
              className="form-input"
            ></textarea>
          </div>

          <button
            type="submit"
            className="self-stretch h-14 px-6 py-4 bg-indigo-500 rounded-xl inline-flex justify-center items-center overflow-hidden w-full transition text-lg font-semibold text-white"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookingModal;
