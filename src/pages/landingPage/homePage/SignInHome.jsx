import { Button, Input, Checkbox } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignInHome = () => {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Success:', { email: data.email, password: data.password });
  };
  return (
    <div className="min-h-screen md:flex max-w-[1320px] mx-auto">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl px-4 sm:px-8 pt-14 pb-14 bg-[#6E67D6] rounded-4xl space-y-6">
          {/* Logo */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-[140px]  h-[109px]">
              <div className="text-2xl">
                <img
                  className="w-[140px]  h-[109px]"
                  src="/login-logo.png"
                  alt=""
                />
                <img
                  className="w-[140px] h-9 mt-2"
                  src="/logo_name.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white mb-6 sm:mb-8 lg:mb-10">
              Welcome to TabiHop
            </h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email */}
            <div className="mb-4">
              <label className="font-bold block text-white mb-2">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
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
              <label className="font-bold block text-white mb-2">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
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
                    value === true || 'You must accept the terms',
                }}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value}>
                    <span className="text-base font-medium text-white">
                      Remember me
                    </span>
                  </Checkbox>
                )}
              />
              <Link to="/signin/forget-password">
                <p className="font-semibold text-sm sm:text-base text-white">
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
                marginTop: '16px',
                height: '56px',
                backgroundColor: '#FFAA00',
                borderColor: '#FFAA00',
                color: '#000',
                fontSize: '18px',
                fontWeight: 600,
              }}
            >
              Log in
            </Button>
          </form>

          {/* link text to create account */}
          <p className="mt-6 text-center text-sm sm:text-base text-white">
            Don't have an account?{' '}
            <Link to="/signin">
              <span className="font-bold text-white">Create Account</span>
            </Link>
          </p>

          {/* Social Logins */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="w-full sm:w-[260px] h-14 bg-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow">
              <img
                className="w-6 h-6"
                src="/Social-media-logo-gogle.png"
                alt="Google"
              />
              <p className="font-medium text-sm sm:text-base">
                Continue with Google
              </p>
            </button>
            <button className="w-full sm:w-[260px] h-14 bg-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow">
              <img
                className="w-6 h-6"
                src="/Social-media-logo-apple.png"
                alt="Apple"
              />
              <p className="font-medium text-sm sm:text-base">
                Continue with Apple
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - App Preview */}
      {/* Right Side - App Preview */}
      <div className="flex-1 hidden lg:flex items-center justify-center p-8">
        <img
          src="/Laptop Mockup copy 1.png"
          alt="TabiHop App Interface"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default SignInHome;
