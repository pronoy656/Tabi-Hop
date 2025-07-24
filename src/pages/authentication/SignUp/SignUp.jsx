import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignUp = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('public/pronoy/signupbackground.png')" }}
    >
      <div className="p-40">
        <div className="border-1 border-white rounded-2xl w-[778px] h-[771px] backdrop-blur-2xl bg-white/40">
          <div className="flex justify-center mt-20">
            <div className="border border-red-600 w-[540px] h-[596px]">
              <div className="text-center">
                <p className="text-[44px] font-semibold">Creating Accounting</p>
                <p className="text-base font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>

              {/* Form validation */}
              <Form
                name="basic"
                labelCol={{ span: 24 }} // Ensures label takes full width
                wrapperCol={{ span: 24 }} // Ensures input takes full width
                style={{ maxWidth: 540 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                {/* Email */}
                <Form.Item
                  layout="vertical"
                  label={<span className="font-bold mb-1.5">Email</span>}
                  name="email"
                  style={{ marginTop: "16px", marginBottom: "24px" }}
                  rules={[
                    { required: true, message: "Please input your email!" },
                    {
                      type: "email",
                      message: "Please enter a valid email address!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    style={{ width: "100%", height: 48, marginBottom: 6 }} // Ensures full width
                  />
                </Form.Item>

                {/* Password */}
                <Form.Item
                  layout="vertical"
                  label={<span className="font-bold mb-1.5">Password</span>}
                  name="password"
                  style={{ marginTop: "16px", marginBottom: "24px" }}
                  rules={[
                    { required: true, message: "Please input your password!" },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter Password"
                    style={{ width: "100%", height: 48, marginBottom: 6 }} // Ensures full width
                  />
                </Form.Item>

                {/* Confirm Password */}
                <Form.Item
                  layout="vertical"
                  label={
                    <span className="font-bold mb-1.5">Confirm Password</span>
                  }
                  name="confirmPassword"
                  style={{ marginTop: "16px", marginBottom: "24px" }}
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Passwords do not match!");
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="Confirm Password"
                    style={{ width: "100%", height: 48, marginBottom: 6 }} // Ensures full width
                  />
                </Form.Item>

                {/* Checkbox */}
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  style={{ marginTop: "24px", marginBottom: 0 }}
                  wrapperCol={{ span: 24 }} // full width alignment
                >
                  <Checkbox
                    style={{ marginTop: "24px" }}
                    className="text-base font-medium"
                  >
                    By signing up, you agree to TabiHop’s Terms and Conditions
                  </Checkbox>
                </Form.Item>

                {/* Submit Button */}
                <Form.Item label={null} style={{ width: "100%" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      marginTop: "26px",
                      height: "64px",
                      width: "100%",
                      backgroundColor: "#FFAA00",
                      borderColor: "#FFAA00",
                      color: "#000",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Create Account
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
