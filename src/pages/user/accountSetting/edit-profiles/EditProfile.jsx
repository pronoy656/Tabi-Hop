

import { useForm } from "react-hook-form";
const EditProfile = () => {
      const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
    
  };
  return (
    <form  onSubmit={handleSubmit(onSubmit)} className="page">


           <div className="flex items-center justify-between p-4 rounded-md">
          <div className="flex items-center gap-4">
            <div className="">
            
              <img
                src="/user2.png"
                alt="User Avatar"
                className="w-25 h-25 rounded-full object-cover "
              />
             
            </div>
            <div>
              <p className=" text-black text-2xl font-medium ">Your name</p>
              <p className="text-gray-500 text-lg font-medium">
               alexarawles@gmail.com
              </p>
            </div>
          </div>

          <div>

          
          <button   type="submit" className="bg-[#4796B5] hover:bg-[#4796B5] text-white px-5 py-3 text-base font-semibold rounded-md">
            Save & Change
          </button></div>
        </div>

         <div className="gap-y-6 gap-x-11 grid grid-cols-1 lg:grid-cols-2 p-4">
  <div>
    <label className="label-class">
     Full Name
    </label>
    <input
      {...register("name")}
      type="text"
      required
      placeholder="Your First Name"
      className="form-input"
    />
  </div>
  <div>
    <label className="label-class">
     User Name
    </label>
    <input
      {...register("user-name")}
      type="text"
      required
      placeholder="Your First Name"
      className="form-input"
    />
  </div>
  <div>
    <label className="label-class">
   Gender
    </label>
    <input
      {...register("gender")}
      type="text"
      required
      placeholder="Your Gender"
      className="form-input"
    />
  </div>
  <div>
    <label className="label-class">
   Country
    </label>
    <input
      {...register("country")}
      type="text"
      required
      placeholder="Your Country"
      className="form-input"
    />
  </div>
  <div>
    <label className="label-class">
    Language
    </label>
    <input
      {...register("language")}
      type="text"
      required
      placeholder="Your Language"
      className="form-input"
    />
  </div>
  <div>
    <label className="label-class">
    Time Zone
    </label>
    <input
      {...register("time-zone")}
      type="text"
      required
      placeholder="Your Time Zone"
      className="form-input"
    />
  </div>




  


</div>
    </form>
  )
}

export default EditProfile