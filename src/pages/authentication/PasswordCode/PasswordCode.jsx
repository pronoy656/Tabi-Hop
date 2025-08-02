import { Button, Input } from "antd";
import { useForm, Controller } from "react-hook-form";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PasswordCode = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [secondsLeft, setSecondsLeft] = useState(180); // Initial 3 minute
  const [isCounting, setIsCounting] = useState(true);
  const navigate = useNavigate();

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

  const handleResend = () => {
    // Optional: You can trigger resend code API here
    setSecondsLeft(180); // Reset countdown
    setIsCounting(true);
  };

  const onSubmit = (data) => {
    console.log("Code submitted:", { code: data.code });
    navigate("/signin/reset-password"); // Navigate to next page on successful submission
  };

  return (
    <div>
      <div
        className=" bg-cover bg-center "
        style={{ backgroundImage: "url('/code-verification.jpg')" }}
      >
        <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
          <div className="w-full max-w-3xl border border-white rounded-2xl backdrop-blur-2xl bg-white/40 shadow-md">
            <div className="flex justify-center py-20 sm:py-30 px-4 sm:px-8">
              <div className="w-full max-w-xl">
                <div className="text-center mb-6">
                  <p className="text-3xl sm:text-4xl font-semibold">
                    Verification Process
                  </p>
                  <p className="text-sm sm:text-base font-medium mt-2">
                    Enter the confirmation code sent to mahbub****reem@gmail.com
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-4">
                    <label className="font-bold block mb-2">
                      Enter Code ({formatTime(secondsLeft)})
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
                          placeholder="Enter your code"
                          className="h-12"
                          type="number"
                          inputMode="numeric"
                        />
                      )}
                    />
                    {errors.code && (
                      <p className="text-red-500 text-sm font-medium mt-1">
                        {errors.code.message}
                      </p>
                    )}
                  </div>

                  <div className="text-center mt-4">
                    <p>
                      Didn’t get the code?{" "}
                      <span
                        onClick={handleResend}
                        className="text-sm font-semibold cursor-pointer text-black hover:underline"
                      >
                        Resend code again
                      </span>
                    </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordCode;
