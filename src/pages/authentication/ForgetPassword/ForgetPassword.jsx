import { Button, Input, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // use useNavigate hook for navigation for /signin/password-code-verification page
  const onSubmit = (data) => {
    console.log("Success:", { email: data.email });
    navigate("/signin/password-code-verification"); // Navigate to PasswordCode page on successful submission
  };

  return (
    <div>
      <div
        className="bg-cover bg-center "
        style={{ backgroundImage: "url('/forget-password (2).jpg')" }}
      >
        <div className="flex items-center justify-center px-4 sm:px-8 md:px-16 min-h-screen">
          <div className="w-full max-w-3xl rounded-2xl border-1 border-white backdrop-blur-2xl bg-white/40 shadow-lg">
            <div className="flex justify-center mt-16 lg:mt-20">
              <div className="w-full max-w-xl px-4 sm:px-6 pt-2 sm:pt-11 mb-24 sm:mb-32">
                <div className="text-center mb-6">
                  <p className="text-4xl sm:text-5xl font-semibold mb-1.5">
                    Forgot Password
                  </p>
                  <p className="text-base font-medium text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Email Address */}
                  <div className="mb-4">
                    <label className="font-bold block mb-2">
                      Email Address
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="Enter your email"
                          className="h-12"
                          type="email"
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      marginTop: "20px",
                      height: "56px",
                      backgroundColor: "#FFAA00",
                      borderColor: "#FFAA00",
                      color: "#000",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    next
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
