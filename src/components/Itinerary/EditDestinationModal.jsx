
import { useForm } from "react-hook-form";
import ModalLayout from "../modals/ModalLayout";
import { useEffect } from "react";

const EditDestinationModal = ({ isOpen, onClose,data}) => {
  const { register, handleSubmit, reset } = useForm();
 

const onSubmit = (data) => {
console.log('edited data' ,data)
  reset();
  onClose();
};
useEffect(() => {
  if (data) {
    reset({ destination: data });
  }
}, [data, reset]);

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>

      {/* header */}
      <h1 className="text-3xl text-[#1F4F53] text-center mb-6">Edit your location anchor points</h1>

   <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
  <div className="bg-[#F1F0FB] p-2 md:p-4 rounded-lg">
  <label className="label-class">
    Enter Address
  </label>

  <div className="relative">
    <input
      {...register("destination")}
      type="text"
      required
      defaultValue={data && data}
      placeholder="Head southwest on 5th Ave toward E 41st St"
      className="form-input pr-10" 
    />
    <img
      src="/input.png"
      alt=""
      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
    />
  </div>
</div>


<div className="flex justify-center pt-4 ">
    
  <button
    type="submit"
    className="h-14 w-fit px-6 lg:px-28 py-2 bg-[#6E67D5] rounded-xl text-white text-lg font-semibold transition hover:bg-indigo-600"
  >
   Enter Location
  </button>
</div>
</form>

    </ModalLayout>
  );
};

export default EditDestinationModal;
