import { Button, Input, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Success:", {
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
    navigate("/signin/log-in"); //direct Navigate to login page after change password
  };

  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen py-16"
        style={{ backgroundImage: "url('/reset-Password.jpg')" }}
      >
        <div className="flex items-center justify-center h-screen  px-4 sm:px-6 lg:px-6">
          <div className="w-full max-w-4xl border border-white bg-white/40 backdrop-blur-2xl rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="w-full max-w-xl mx-auto py-7 md:py-14">
              <div className="text-center mb-8">
                <p className="text-2xl sm:text-3xl md:text-5xl font-semibold">
                  Reset Password
                </p>
                <p className="text-sm sm:text-base  mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-6"
              >
                {/* Password */}
                <div>
                  <label className="font-bold block mb-1">Password</label>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    }}
                    render={({ field }) => (
                      <Input.Password
                        {...field}
                        placeholder="Enter password"
                        className="h-12 w-full"
                      />
                    )}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="font-bold block mb-1">
                    Confirm Password
                  </label>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    }}
                    render={({ field }) => (
                      <Input.Password
                        {...field}
                        placeholder="Confirm password"
                        className="h-12 w-full"
                      />
                    )}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    marginTop: "12px",
                    height: "56px",
                    backgroundColor: "#FFAA00",
                    borderColor: "#FFAA00",
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Next
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
