
import { useForm } from "react-hook-form";

export const ChangePasswordTab = () => {
       const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
    
  };
  return (
   <section>
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full lg:max-w-3xl p-4 lg:p-8 rounded-lg">
  <div>
    <label className="label-class">
      Current Password
    </label>
    <input
      {...register("currentPassword")}
      type="password"
      required
      placeholder="Write Current Password"
      className="form-input"
    />
  </div>



  <div>
    <label className="label-class">
      Enter New Password
    </label>
    <input
      {...register("newPassword")}
      type="password"
      required
      placeholder="Enter New Password"
      className="form-input"
    />
  </div>

  <div>
    <label className="label-class">
      Confirm New Password
    </label>
    <input
      {...register("confirmNewPassword")}
      type="password"
      required
      placeholder="Confirm New Password"
      className="form-input  focus:border-[#4796B5]"
    />
  </div>

 
  <button
    type="submit"
    className="h-14 px-6 py-4 bg-[#000000] rounded-xl text-white text-lg font-semibold w-full transition "
  >
   Change Password
  </button>
</form>
      </section>
  )
}
