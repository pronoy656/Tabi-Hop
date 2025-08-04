

import { useForm } from "react-hook-form";
import ModalLayout from "../ModalLayout";


const SaveMoodboardModal = ({ isOpen, onClose, }) => {
  const { register, handleSubmit, reset } = useForm();

const onSubmit = (data) => {
console.log(data)
  reset();
  onClose();
};

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>

      {/* header */}
      <h1 className="text-3xl text-[#1F4F53] text-center mb-6">Save your Moodboard in Folder</h1>

   <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
  <div className="">
  <label className="label-class">
     Folder Name
  </label>

  <div className="relative">
    <input
      {...register("Enter Folder Name")}
      type="text"
      required
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
    className=" w-fit px-6 lg:px-12 py-2 bg-[#6E67D5] rounded-xl text-white text-lg font-semibold transition hover:bg-indigo-600"
  >
   Save
  </button>
</div>
</form>

    </ModalLayout>
  );
};

export default SaveMoodboardModal;
