import { useForm } from "react-hook-form";

const Profile = () => {
         const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
    
  };
  return (
    <div className="page"> 
     <section className="">
     <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-x-8 p-4">

           <div className="flex items-start gap-4">
        
            
              <img
                src="/user2.png"
                alt="User Avatar"
                className="w-32 h-32 rounded-full object-cover "
              />
             
         
          
          </div>

      <div className="gap-y-6 gap-x-11 grid grid-cols-1 lg:grid-cols-2  w-full lg:w-3xl">
  <div>
    <label className="label-class">
     Your Name
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
   Email
    </label>
    <input
      {...register("email")}
      type="email"
      required
      placeholder="Your Gender"
      className="form-input"
    />
  </div>
  <div>
    <label className="label-class">
   Password
    </label>
    <input
      {...register("password")}
      type="password"
      required
      placeholder="Your Country"
      className="form-input"
    />
  </div>
  <div>
    <label className="label-class">
    Permanent Address
    </label>
    <input
      {...register("permanent-address")}
      type="text"
      required
      placeholder="Your Language"
      className="form-input"
    />
  </div>
  <div>
    <label className="label-class">
    City
    </label>
    <input
      {...register("city")}
      type="text"
      required
      placeholder="Your Time Zone"
      className="form-input"
    />
  </div>
  <div>
    <label className="label-class">
 Postal Code
    </label>
    <input
      {...register("postal-code")}
      type="number"
      required
      placeholder="64432"
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
      placeholder="USA"
      className="form-input"
    />
  </div>


<button type="submit" className="bg-cyan-800 text-white px-7 mt-2 py-3.5 text-base font-semibold rounded-lg">Save & Change</button>



  


</div></form>
      </section></div>
  )
}

export default Profile