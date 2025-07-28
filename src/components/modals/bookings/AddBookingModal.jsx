import { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddBookingModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset(); // optional: reset form after submit
    onClose(); // optional: close modal after submit
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
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30"
    >
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-xl shadow-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#111]">Bookings</h2>
          <p className="text-gray-500 text-sm mt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#111] mb-1">Name</label>
            <input
              {...register("name")}
              type="text"
              required
              placeholder="Write here"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E67D5] bg-gray-50 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111] mb-1">Locations</label>
            <input
              {...register("location")}
              type="location"
              required
              placeholder="Write here"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E67D5] bg-gray-50 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111] mb-1">Scheduled Time</label>
            <input
              {...register("scheduledTime")}
              type="time"
              required
              placeholder="Write here"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E67D5] bg-gray-50 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111] mb-1">Event Type</label>
            <input
              {...register("eventType")}
              type="text"
              required
              placeholder="Write here"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E67D5] bg-gray-50 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111] mb-1">Note</label>
            <textarea
              {...register("note")}
              rows={4}
              placeholder="Write here"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6E67D5] bg-gray-50 placeholder-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6E67D5] hover:bg-[#5a53c4] text-white font-semibold py-2 rounded-lg transition"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookingModal;
