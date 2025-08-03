import ModalHeader from "../../../../components/modals/ModalHeader"
import { useForm } from "react-hook-form";

const ChangePassword = () => {
      const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
    
  };
  return (
    <div className="page flex justify-center items-center ">
        <div className="bg-white rounded-2xl p-6 md:p-12 lg:p-26 w-full max-w-3xl shadow-xl">

              {/* header */}
          <ModalHeader title={"Change Password"} subTitle={"  Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>


             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
    className="h-14 px-6 py-4 bg-[#4796B5] rounded-xl text-white text-lg font-semibold w-full transition "
  >
   Change Password
  </button>
</form>

        </div>
    </div>
  )
}

export default ChangePassword