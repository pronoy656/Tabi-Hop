import { Button, Input, Checkbox } from "antd";
// import { useForm, Controller } from "react-hook-form";

import { DatePicker, Space } from "antd";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const BirthdaySelection = () => {
  //   const {
  //     handleSubmit,
  //     control,

  //     formState: { errors },
  //   } = useForm();

  //   const onSubmit = (data) => {
  //     console.log("Success:", data);
  //   };
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/birthday-selection.jpg')" }}
      >
        <div className="flex items-center justify-center p-48">
          <div className="border-1 border-white rounded-2xl w-[778px] backdrop-blur-2xl bg-white/40">
            <div className="flex justify-center mt-20">
              <div className="w-[560px] mb-[102.5px]  px-6 pt-6">
                <div className="text-center mb-6">
                  <p className="text-[44px] font-semibold">Add your Birthday</p>
                  <p className="text-base font-medium ">
                    Providing your birthday improves the features and ads you
                    see while keeping the TabiHop community safe. You can find
                    your birthday in your personal information account settings.
                  </p>
                  <div className="flex space-x-4 mt-6">
                    <div>
                      <label className="text-left font-bold block mb-1">
                        Month
                      </label>
                      <DatePicker onChange={onChange} picker="month" />
                    </div>
                    <div>
                      <label className="text-left font-bold block mb-1">
                        {" "}
                        Date
                      </label>
                      <DatePicker onChange={onChange} picker="date" />
                    </div>
                    <div>
                      <label className="text-left font-bold block mb-1">
                        year
                      </label>
                      <DatePicker onChange={onChange} picker="year" />
                    </div>
                  </div>
                </div>

                <form noValidate>
                  {/* <div className="mb-4">
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
                  </div> */}

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
                <div className="flex justify-center mt-9">
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

export default BirthdaySelection;
