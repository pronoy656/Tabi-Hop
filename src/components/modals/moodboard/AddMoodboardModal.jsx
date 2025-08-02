

import { useForm } from "react-hook-form";
import ModalHeader from "../ModalHeader";
import { useEffect } from "react";
const AddMoodboardModal = ({ isOpen, onClose ,setMoodBoards}) => {
  const { register, handleSubmit, reset } = useForm();

const onSubmit = (data) => {
 console.log(data)
 
  reset();
  onClose();
};

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

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
      <div   className="bg-white rounded-2xl p-12 w-[90%] max-w-3xl shadow-xl  max-h-[90vh]  noscrollbar overflow-y-auto">

      {/* header */}


      <ModalHeader title={'Create Moodboard'}
      subTitle={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}></ModalHeader>

   <form onSubmit={handleSubmit(onSubmit)} className="space-y-1 ">


<div className="">
  <label className="block label-class">
    Hero Image
  </label>

  <div className="relative w-full">
    {/* Fake input */}
    <div className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-[13px] pr-[90px]  text-[#9EA2AE]">
      upload JPG format
    </div>

    {/* Styled Upload Button */}
    <button
      className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-gray-200 text-[#212936]  font-semibold rounded-md  transition"
      onClick={() => document.getElementById("hero-upload").click()}
    >
      Upload
    </button>

    {/* Hidden File Input */}
    <input
       {...register("hero")}
      type="file"
      id="hero-upload"
      accept=".jpg,.jpeg"
      className="hidden form-input"
      onChange={(e) => {
        const file = e.target.files[0];
        if (file) {
          console.log("Uploaded file:", file);
        }
      }}
    />
  </div>
</div>


  <div className="">
  <label className="label-class">
    Title
  </label>

  <div className="">
    <input
      {...register("title")}
      type="text"
      required
      placeholder="Write here"
      className="form-input pr-10" 
    />
  
  </div>
</div>

  <div className="">
  <label className="label-class">
   Location
  </label>

  <div className="relative">
    <input
      {...register("location")}
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
  <div className="">
  <label className="label-class">
  Add Media
  </label>

  <div className="relative">
    <input
      {...register("media")}
      type="file"
      required
      placeholder="Head southwest on 5th Ave toward E 41st St"
      className="form-input pr-10 cursor-pointer" 
    />
    <img
      src="/media1.png"
      alt=""
      className="absolute right-3 top-1/2  cursor-pointer transform -translate-y-1/2 h-5 w-5"
    />
  </div>
</div>


 <div>
    <label className="label-class">Summary</label>
    <textarea
        {...register("summary")}
        rows={4}
        placeholder="Write here"
        required
        className="form-input"
    ></textarea>
   </div>

 <div className="">
  <label className="label-class">
    Social Link 01
  </label>

  <div className="">
    <input
      {...register("socialLink-1")}
      type="text"
      required
      placeholder="Write here"
      className="form-input pr-10" 
    />
  
  </div>
</div>
 <div className="">
  <label className="label-class">
    Social Link 02
  </label>

  <div className="">
    <input
      {...register("socialLink-2")}
      type="text"
      required
      placeholder="Write here"
      className="form-input pr-10" 
    />
  
  </div>
</div>
 <div className="">
  <label className="label-class">
    Social Link 03
  </label>

  <div className="">
    <input
      {...register("socialLink-3")}
      type="text"
      required
      placeholder="Write here"
      className="form-input pr-10" 
    />
  
  </div>
</div>
<div className="flex justify-center pt-4 ">
    
  <button
    type="submit"
    className="h-14 w-fit px-6 lg:px-28 py-2 bg-[#4ABBC6] rounded-xl text-black text-lg font-semibold transition hover:bg-[#86d0d6]"
  >
   Create MoodBoard
  </button>
</div>
</form>

    </div>
    </div>
  );
};

export default AddMoodboardModal ;
