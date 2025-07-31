import { Button, Input, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Success:", {
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      terms: data.terms,
    });
  };

  return (
    <div
      className=" bg-cover bg-center h-[150vh] md:h-[120vh]"
      style={{ backgroundImage: "url('public/pronoy/signupbackground.png')" }}
    >
      <div className="flex items-center justify-center h-full px-4">
        <div className="border border-white rounded-2xl max-w-3xl w-full backdrop-blur-2xl bg-white/40">
          <div className="flex justify-center mt-10 md:mt-20">
            <div className="w-full max-w-xl px-4 sm:px-6 md:px-10 mb-12">
              <div className="text-center mb-6">
                <p className="text-3xl md:text-[44px] font-semibold">
                  Creating Account
                </p>
                <p className="text-sm md:text-base font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Name */}
                <div className="mb-4">
                  <label className="font-bold block">Name</label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter your name"
                        className="h-12"
                      />
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Username */}
                <div className="mb-4">
                  <label className="font-bold block">Username</label>
                  <Controller
                    name="username"
                    control={control}
                    rules={{ required: "Username is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter your username"
                        className="h-12"
                      />
                    )}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm">
                      {errors.username.message}
                    </p>
                  )}
                </div>

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
                    <p className="text-red-500 text-sm">
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
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label className="font-bold block">Confirm Password</label>
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
                        className="h-12"
                      />
                    )}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Terms Checkbox */}
                <div className="mb-4">
                  <Controller
                    name="terms"
                    control={control}
                    rules={{
                      validate: (value) =>
                        value === true || "You must accept the terms",
                    }}
                    render={({ field }) => (
                      <Checkbox {...field} checked={field.value}>
                        <span className="text-sm md:text-base font-medium">
                          By signing up, you agree to TabiHop’s Terms and
                          Conditions
                        </span>
                      </Checkbox>
                    )}
                  />
                  {errors.terms && (
                    <p className="text-red-500 text-sm">
                      {errors.terms.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="h-14 mt-4 px-4"
                  style={{
                    height: "64px",
                    backgroundColor: "#FFAA00",
                    borderColor: "#FFAA00",
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  Create Account
                </Button>
              </form>

              {/* Redirect to Login */}
              <p className="mt-6 text-center text-sm md:text-base">
                Already have an account?{" "}
                <Link to="/signin/log-in">
                  <span className="font-bold">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
