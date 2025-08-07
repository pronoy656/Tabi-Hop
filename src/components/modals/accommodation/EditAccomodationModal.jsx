// EditAccomodationModal.jsx (Updated)
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ModalHeader from "../ModalHeader";
import {  X } from "lucide-react";
const EditAccomodationModal = ({
  isOpen,
  onClose,
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
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-6  "
    >
      <div className= "relative bg-white  max-h-[90vh] noscrollbar overflow-y-auto  rounded-2xl p-6 md:p-12 w-[90%] max-w-3xl shadow-xl">

           <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-black text-2xl font-bold focus:outline-none"
        >
         <X></X>
        </button>
        <ModalHeader
          title="Edit Accommodation"
          subTitle="Update the accommodation details below."
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
            <label className="label-class">Location</label>
            <input
              {...register("location", { required: true })}
              type="text"
              placeholder="Write here"
              className="form-input"
            />
          </div>

          <div>
            <label className="label-class">Check-In Time</label>
            <input
              {...register("checkIn", { required: true })}
              type="text"
              placeholder="20th May, 2025 – 10:23 AM"
              className="form-input"
            />
          </div>

          <div>
            <label className="label-class">Check-Out Time</label>
            <input
              {...register("checkOut", { required: true })}
              type="text"
              placeholder="25th May, 2025 – 10:23 AM"
              className="form-input"
            />
          </div>

          <div>
            <label className="label-class">Contact</label>
            <input
              {...register("contact", { required: true })}
              type="text"
              placeholder="e.g. +123 456 7890"
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
            Update Accommodation
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAccomodationModal;
