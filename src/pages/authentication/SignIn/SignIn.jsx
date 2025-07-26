import { Button, Input, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    handleSubmit,
    control,
    // watch,
    formState: { errors },
  } = useForm();

  //   const password = watch("password");

  const onSubmit = (data) => {
    console.log("Success:", data);
  };

  return (
    <div>
      <div
        className="h-[130vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/log-in.jpg')" }}
      >
        <div className="flex items-center justify-center p-48">
          <div className="border-1 border-white rounded-2xl w-[778px] backdrop-blur-2xl bg-white/40">
            <div className="flex justify-center mt-20">
              <div className="w-[540px] mb-[102.5px]  px-6 pt-6">
                <div className="text-center mb-6">
                  <p className="text-[44px] font-semibold">Welcome Back</p>
                  <p className="text-base font-medium">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Name */}
                  {/* <div className="mb-4">
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
                  </div> */}

                  {/* Username */}
                  {/* <div className="mb-4">
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
                  </div> */}

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
                  {/* <div className="mb-4">
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
                  </div> */}

                  {/* Terms Checkbox */}
                  <div className="flex justify-between">
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
                            <span className="text-base font-medium">
                              Remember me
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
                    <div>
                      <p className="font-semibold">Forgot Password?</p>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      marginTop: "26px",
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
                <p className="mt-6 text-center">
                  Don't have an account?{" "}
                  <Link to="/signin">
                    <span className="font-bold">Create Account </span>
                  </Link>
                  {/* <span className="font-bold">Create Account </span> */}
                </p>
                <div className="flex items-center space-x-4 mt-8">
                  {/* login with google */}
                  <button className="w-[259px] h-14 bg-white rounded-xl py-4 px-6 flex items-center space-x-1">
                    <img
                      className="w-6 h-6"
                      src="/public/Social-media-logo-gogle.png"
                      alt=""
                    />
                    <p className="font-medium">Continue with Google</p>
                  </button>
                  {/* login with Apple */}
                  <button className="w-[259px] h-14 bg-white rounded-xl py-4 px-6 flex items-center space-x-2">
                    <img
                      className="w-5.5 h-6"
                      src="/public/Social-media-logo-apple.png"
                      alt=""
                    />
                    <p className="font-medium">Continue with Apple</p>
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
