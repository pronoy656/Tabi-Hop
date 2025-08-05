// AddBookingModal.jsx
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ModalHeader from "../ModalHeader";

const EditBookingModal = ({
  isOpen,
  onClose,
  onSubmit,
  defaultValues,
  setEditData,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      Object.entries(defaultValues).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [defaultValues, setValue]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const submitHandler = (data) => {
    setEditData(data);
    reset();
    onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-6"
    >
      <div className="bg-white rounded-2xl p-6 md:p-12 w-[90%] max-w-3xl shadow-xl">
        <ModalHeader
          title="Edit Bookings"
          subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <div>
            <label className="label-class">Name</label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Write here"
              className="form-input"
            />
          </div>

          <div>
            <label className="label-class">Locations</label>
            <input
              {...register("location", { required: true })}
              type="text"
              placeholder="Write here"
              className="form-input"
            />
          </div>

          <div>
            <label className="label-class">Scheduled Time</label>
            <input
              {...register("scheduledTime", { required: true })}
              type="text"
              placeholder="e.g. 12th January, 2025"
              className="form-input"
            />
          </div>

          <div>
            <label className="label-class">Event Type</label>
            <input
              {...register("eventType", { required: true })}
              type="text"
              placeholder="Write here"
              className="form-input"
            />
          </div>

          <div>
            <label className="label-class">Note</label>
            <textarea
              {...register("note", { required: true })}
              rows={4}
              placeholder="Write here"
              className="form-input"
            ></textarea>
          </div>

          <button
            type="submit"
            className="self-stretch h-14 px-6 py-4 bg-indigo-500 rounded-xl inline-flex justify-center items-center overflow-hidden w-full transition text-lg font-semibold text-white"
          >
            Update Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBookingModal;
