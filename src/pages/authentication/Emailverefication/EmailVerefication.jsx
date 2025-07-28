import { Button, Input, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";

const EmailVerefication = () => {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Success:", { name: data.code });
  };

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/email-verefication.jpg')" }}
      >
        <div className="flex items-center justify-center p-48">
          <div className="border-1 border-white rounded-2xl w-[778px] backdrop-blur-2xl bg-white/40">
            <div className="flex justify-center mt-20">
              <div className="w-[560px] mb-[102.5px]  px-6 pt-6">
                <div className="text-center mb-6">
                  <p className="text-[44px] font-semibold">
                    Verification Process
                  </p>
                  <p className="text-base font-medium ">
                    Enter the confirmation code has sent to
                    mahbub****reem@gmail.com
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
                  <div className="mb-4">
                    <label className="font-bold block mb-2">
                      Confirmation Code
                    </label>
                    <Controller
                      name="code"
                      control={control}
                      rules={{
                        required: "Code is required",
                        pattern: {
                          value: /^[0-9]{4,6}$/, // Optional: 4-6 digit code
                          message: "Enter a valid code (4 to 6 digits)",
                        },
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="698 651 65"
                          className="h-12"
                          type="number"
                          inputMode="numeric"
                        />
                      )}
                    />
                    {errors.code && (
                      <p className="text-red-500 text-sm">
                        {errors.code.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      marginTop: "22px",
                      height: "56px",
                      backgroundColor: "#FFAA00",
                      borderColor: "#FFAA00",
                      color: "#000",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Continue
                  </Button>
                </form>
                <div className="flex justify-center mt-12">
                  <button className="bg-white w-[209px] h-10 rounded-lg">
                    <p className="text-lg font-semibold">Resend Code - 01:56</p>
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

export default EmailVerefication;
