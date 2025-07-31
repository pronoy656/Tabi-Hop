import { Button, Input, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const EmailVerefication = () => {
  const [secondsLeft, setSecondsLeft] = useState(60); // Initial 1 minute
  const [isCounting, setIsCounting] = useState(true);

  // Timer logic
  useEffect(() => {
    let timer;
    if (isCounting && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCounting, secondsLeft]);

  // Time formatting (MM:SS)
  const formatTime = (sec) => {
    const min = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const secStr = (sec % 60).toString().padStart(2, "0");
    return `${min}:${secStr} sec`;
  };

  // Resend handler — now sets 2 minutes (120 seconds)
  const handleResend = () => {
    // Optional: You can trigger resend code API here
    setSecondsLeft(120); // Reset countdown to 2 minutes
    setIsCounting(true);
  };
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
        <div className="flex items-center justify-center px-4 py-32 sm:py-60 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <div className="border border-white rounded-2xl w-full max-w-[778px] backdrop-blur-2xl bg-white/40">
            <div className="flex justify-center mt-10 sm:mt-16">
              <div className="w-full max-w-[560px] mb-12 px-4 sm:px-6 pt-6">
                <div className="text-center mb-6">
                  <p className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold">
                    Verification Process
                  </p>
                  <p className="text-sm sm:text-base font-medium mt-2">
                    Enter the confirmation code sent to{" "}
                    <br className="sm:hidden" />
                    <span className="break-all">mahbub****reem@gmail.com</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                          value: /^[0-9]{4,6}$/,
                          message: "Enter a valid code (4 to 6 digits)",
                        },
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="698 651 65"
                          className="h-12 w-full"
                          type="number"
                          inputMode="numeric"
                        />
                      )}
                    />
                    {errors.code && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.code.message}
                      </p>
                    )}
                  </div>

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

                <div className="flex justify-center mt-10 sm:mt-12">
                  <button
                    onClick={handleResend}
                    className="bg-white w-full max-w-[250px] px-4 py-2 rounded-lg shadow-sm"
                  >
                    <p className="text-base sm:text-lg font-semibold text-center">
                      Resend Code - ({formatTime(secondsLeft)})
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

export default EmailVerefication;
