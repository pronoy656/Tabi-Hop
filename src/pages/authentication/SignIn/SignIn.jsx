import { Button, Input, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Success:", { email: data.email, password: data.password });
  };

  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/log-in.jpg')" }}
      >
        <div className="flex items-center justify-center min-h-screen py-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl border border-white rounded-2xl backdrop-blur-2xl bg-white/40 shadow-lg mt-24">
            <div className="flex justify-center mt-10 sm:mt-16">
              <div className="w-full max-w-lg px-4 sm:px-6 pt-6 pb-10">
                <div className="text-center mb-6">
                  <p className="text-3xl sm:text-4xl font-semibold">
                    Welcome Back
                  </p>
                  <p className="text-sm sm:text-base font-medium mt-1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Email */}
                  <div className="mb-4">
                    <label className="font-bold block">Email</label>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="Enter your email"
                          className="h-12"
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label className="font-bold block">Password</label>
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
                          className="h-12"
                        />
                      )}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
                    <Controller
                      name="terms"
                      control={control}
                      rules={{
                        validate: (value) =>
                          value === true || "You must accept the terms",
                      }}
                      render={({ field }) => (
                        <Checkbox {...field} checked={field.value}>
                          <span className="text-base font-medium">
                            Remember me
                          </span>
                        </Checkbox>
                      )}
                    />
                    <Link to="/signin/forget-password">
                      <p className="font-semibold text-sm sm:text-base text-black">
                        Forgot Password?
                      </p>
                    </Link>
                  </div>
                  {errors.terms && (
                    <p className="text-red-500 text-sm mb-2">
                      {errors.terms.message}
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      marginTop: "16px",
                      height: "56px",
                      backgroundColor: "#FFAA00",
                      borderColor: "#FFAA00",
                      color: "#000",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Log in
                  </Button>
                </form>

                <p className="mt-6 text-center text-sm sm:text-base">
                  Don't have an account?{" "}
                  <Link to="/signin">
                    <span className="font-bold text-black">Create Account</span>
                  </Link>
                </p>

                {/* Social Logins */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <button className="w-full sm:w-[260px] h-14 bg-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow">
                    <img
                      className="w-6 h-6"
                      src="/public/Social-media-logo-gogle.png"
                      alt="Google"
                    />
                    <p className="font-medium text-sm sm:text-base">
                      Continue with Google
                    </p>
                  </button>
                  <button className="w-full sm:w-[260px] h-14 bg-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow">
                    <img
                      className="w-6 h-6"
                      src="/public/Social-media-logo-apple.png"
                      alt="Apple"
                    />
                    <p className="font-medium text-sm sm:text-base">
                      Continue with Apple
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
