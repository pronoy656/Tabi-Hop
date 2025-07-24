// import { Button, Checkbox, Form, Input } from "antd";

// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

// const SignUp = () => {
//   return (
//     <div
//       className="h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('public/pronoy/signupbackground.png')" }}
//     >
//       <div className="p-40">
//         <div className="border-1 border-white rounded-2xl w-[778px] h-[771px] backdrop-blur-2xl bg-white/40">
//           <div className="flex justify-center mt-20">
//             <div className="border border-red-600 w-[540px] h-[596px]">
//               <div className="text-center">
//                 <p className="text-[44px] font-semibold">Creating Accounting</p>
//                 <p className="text-base font-medium">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting
//                 </p>
//               </div>

//               {/* Form validation */}
//               <Form
//                 name="basic"
//                 labelCol={{ span: 24 }} // Ensures label takes full width
//                 wrapperCol={{ span: 24 }} // Ensures input takes full width
//                 style={{ maxWidth: 540 }}
//                 initialValues={{ remember: true }}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 {/* Email */}
//                 <Form.Item
//                   layout="vertical"
//                   label={<span className="font-bold mb-1.5">Email</span>}
//                   name="email"
//                   style={{ marginTop: "16px", marginBottom: "24px" }}
//                   rules={[
//                     { required: true, message: "Please input your email!" },
//                     {
//                       type: "email",
//                       message: "Please enter a valid email address!",
//                     },
//                   ]}
//                 >
//                   <Input
//                     placeholder="Enter your email"
//                     style={{ width: "100%", height: 48, marginBottom: 6 }} // Ensures full width
//                   />
//                 </Form.Item>

//                 {/* Password */}
//                 <Form.Item
//                   layout="vertical"
//                   label={<span className="font-bold mb-1.5">Password</span>}
//                   name="password"
//                   style={{ marginTop: "16px", marginBottom: "24px" }}
//                   rules={[
//                     { required: true, message: "Please input your password!" },
//                     {
//                       min: 6,
//                       message: "Password must be at least 6 characters",
//                     },
//                   ]}
//                 >
//                   <Input.Password
//                     placeholder="Enter Password"
//                     style={{ width: "100%", height: 48, marginBottom: 6 }} // Ensures full width
//                   />
//                 </Form.Item>

//                 {/* Confirm Password */}
//                 <Form.Item
//                   layout="vertical"
//                   label={
//                     <span className="font-bold mb-1.5">Confirm Password</span>
//                   }
//                   name="confirmPassword"
//                   style={{ marginTop: "16px", marginBottom: "24px" }}
//                   dependencies={["password"]}
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please confirm your password!",
//                     },
//                     ({ getFieldValue }) => ({
//                       validator(_, value) {
//                         if (!value || getFieldValue("password") === value) {
//                           return Promise.resolve();
//                         }
//                         return Promise.reject("Passwords do not match!");
//                       },
//                     }),
//                   ]}
//                 >
//                   <Input.Password
//                     placeholder="Confirm Password"
//                     style={{ width: "100%", height: 48, marginBottom: 6 }} // Ensures full width
//                   />
//                 </Form.Item>

//                 {/* Checkbox */}
//                 <Form.Item
//                   name="remember"
//                   valuePropName="checked"
//                   style={{ marginTop: "24px", marginBottom: 0 }}
//                   wrapperCol={{ span: 24 }} // full width alignment
//                 >
//                   <Checkbox
//                     style={{ marginTop: "24px" }}
//                     className="text-base font-medium"
//                   >
//                     By signing up, you agree to TabiHop’s Terms and Conditions
//                   </Checkbox>
//                 </Form.Item>

//                 {/* Submit Button */}
//                 <Form.Item label={null} style={{ width: "100%" }}>
//                   <Button
//                     type="primary"
//                     htmlType="submit"
//                     block
//                     style={{
//                       marginTop: "26px",
//                       height: "64px",
//                       width: "100%",
//                       backgroundColor: "#FFAA00",
//                       borderColor: "#FFAA00",
//                       color: "#000",
//                       fontSize: "18px",
//                       fontWeight: 600,
//                     }}
//                   >
//                     Create Account
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { Button, Input, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Success:", data);
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('public/pronoy/signupbackground.png')" }}
    >
      <div className="p-40">
        <div className="border-1 border-white rounded-2xl w-[778px] backdrop-blur-2xl bg-white/40">
          <div className="flex justify-center mt-20">
            <div className="border border-red-600 w-[540px] mb-[102.5px]  px-6 pt-6">
              <div className="text-center mb-6">
                <p className="text-[44px] font-semibold">Creating Account</p>
                <p className="text-base font-medium">
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
                        <span className="text-base font-medium">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
