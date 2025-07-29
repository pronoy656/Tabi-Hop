import ModalHeader from "../ModalHeader";
import ModalLayout from "../ModalLayout";
import { useForm } from "react-hook-form";

const AccommodationModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
    onClose();
  };

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>

      {/* header */}
          <ModalHeader title={"Accommodations"} subTitle={"  Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>

   <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  <div>
    <label >
      Enter Location
    </label>
    <input
      {...register("location")}
      type="text"
      required
      placeholder="Write here"
      className="form-input"
    />
  </div>



  <div>
    <label >
      Check-In Time
    </label>
    <input
      {...register("checkInTime")}
      type="text"
      required
      placeholder="20th May, 2025 – 10:23 AM"
      className="form-input"
    />
  </div>

  <div>
    <label >
      Check-Out Time
    </label>
    <input
      {...register("checkOutTime")}
      type="text"
      required
      placeholder="25th May, 2025 – 10:23 AM"
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
    className="h-14 px-6 py-4 bg-indigo-500 rounded-xl text-white text-lg font-semibold w-full transition hover:bg-indigo-600"
  >
    Create Event
  </button>
</form>

    </ModalLayout>
  );
};

export default AccommodationModal;
